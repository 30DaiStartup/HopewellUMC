import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, isConfigured } from './firebase';
import type { User, Post, Comment, JournalEntry, FastingSession, WeightEntry, WeightGoal } from './fasting-types';

// Collection names
const USERS_COLLECTION = 'users';
const POSTS_COLLECTION = 'posts';
const JOURNAL_COLLECTION = 'journal_entries';
const SESSIONS_COLLECTION = 'fasting_sessions';
const WEIGHT_ENTRIES_COLLECTION = 'weight_entries';
const WEIGHT_GOALS_COLLECTION = 'weight_goals';

// Helper to ensure Firestore is configured
function ensureConfigured() {
  if (!isConfigured || !db) {
    throw new Error('Firestore is not configured. Please set up your environment variables.');
  }
}

// ============================================================================
// USER OPERATIONS
// ============================================================================

export async function createUser(userId: string, userData: Omit<User, 'id'>): Promise<void> {
  ensureConfigured();
  await setDoc(doc(db!, USERS_COLLECTION, userId), {
    ...userData,
    joinedAt: Timestamp.fromDate(userData.joinedAt),
  });
}

export async function getUser(userId: string): Promise<User | null> {
  ensureConfigured();
  const userDoc = await getDoc(doc(db!,USERS_COLLECTION, userId));
  if (!userDoc.exists()) return null;

  const data = userDoc.data();
  return {
    id: userDoc.id,
    email: data.email,
    displayName: data.displayName,
    avatar: data.avatar,
    isAdmin: data.isAdmin || false,
    joinedAt: data.joinedAt.toDate(),
    isFasting: data.isFasting || false,
  };
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<void> {
  ensureConfigured();
  const updateData: Record<string, unknown> = { ...updates };
  delete updateData.id; // Remove id from updates

  if (updates.joinedAt) {
    updateData.joinedAt = Timestamp.fromDate(updates.joinedAt);
  }

  await updateDoc(doc(db!,USERS_COLLECTION, userId), updateData);
}

export async function getAllParticipants(): Promise<User[]> {
  ensureConfigured();
  const q = query(
    collection(db!,USERS_COLLECTION),
    where('isFasting', '==', true),
    orderBy('joinedAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      email: data.email,
      displayName: data.displayName,
      avatar: data.avatar,
      isAdmin: data.isAdmin || false,
      joinedAt: data.joinedAt.toDate(),
      isFasting: data.isFasting || false,
    };
  });
}

// Real-time listener for participants
export function subscribeToParticipants(callback: (users: User[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,USERS_COLLECTION),
    where('isFasting', '==', true),
    orderBy('joinedAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const users = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        email: data.email,
        displayName: data.displayName,
        avatar: data.avatar,
        isAdmin: data.isAdmin || false,
        joinedAt: data.joinedAt.toDate(),
        isFasting: data.isFasting || false,
      };
    });
    callback(users);
  });
}

// ============================================================================
// POST OPERATIONS
// ============================================================================

export async function createPost(postData: Omit<Post, 'id' | 'createdAt'>): Promise<string> {
  ensureConfigured();

  // Build the post data, only including optional fields if they are defined
  const data: Record<string, unknown> = {
    userId: postData.userId,
    userName: postData.userName,
    userAvatar: postData.userAvatar,
    content: postData.content,
    createdAt: serverTimestamp(),
    likes: [],
    comments: [],
  };

  // Only add mediaUrl and mediaType if they are defined
  if (postData.mediaUrl !== undefined) {
    data.mediaUrl = postData.mediaUrl;
  }
  if (postData.mediaType !== undefined) {
    data.mediaType = postData.mediaType;
  }

  // Only add linkPreview if it is defined
  if (postData.linkPreview !== undefined) {
    data.linkPreview = postData.linkPreview;
  }

  // Only add fastingDurationMs if it is defined
  if (postData.fastingDurationMs !== undefined) {
    data.fastingDurationMs = postData.fastingDurationMs;
  }

  const docRef = await addDoc(collection(db!,POSTS_COLLECTION), data);
  return docRef.id;
}

export async function getAllPosts(): Promise<Post[]> {
  ensureConfigured();
  const q = query(
    collection(db!,POSTS_COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(50)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: data.userId,
      userName: data.userName,
      userAvatar: data.userAvatar,
      content: data.content,
      mediaUrl: data.mediaUrl,
      mediaType: data.mediaType,
      createdAt: data.createdAt?.toDate() || new Date(),
      likes: data.likes || [],
      comments: (data.comments || []).map((comment: { createdAt?: { toDate?: () => Date }; [key: string]: unknown }) => ({
        ...comment,
        createdAt: comment.createdAt?.toDate ? comment.createdAt.toDate() : new Date(comment.createdAt as string | number | Date),
      })),
    };
  });
}

// Real-time listener for posts
export function subscribeToPosts(callback: (posts: Post[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,POSTS_COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(50)
  );

  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        userName: data.userName,
        userAvatar: data.userAvatar,
        content: data.content,
        mediaUrl: data.mediaUrl,
        mediaType: data.mediaType,
        createdAt: data.createdAt?.toDate() || new Date(),
        likes: data.likes || [],
        comments: (data.comments || []).map((comment: { createdAt?: { toDate?: () => Date }; [key: string]: unknown }) => ({
          ...comment,
          createdAt: comment.createdAt?.toDate ? comment.createdAt.toDate() : new Date(comment.createdAt as string | number | Date),
        })),
      };
    });
    callback(posts);
  });
}

// Real-time listener for top 5 posts (for unauthenticated users)
export function subscribeToTopPosts(callback: (posts: Post[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,POSTS_COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(5)
  );

  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        userName: data.userName,
        userAvatar: data.userAvatar,
        content: data.content,
        mediaUrl: data.mediaUrl,
        mediaType: data.mediaType,
        createdAt: data.createdAt?.toDate() || new Date(),
        likes: data.likes || [],
        comments: (data.comments || []).map((comment: { createdAt?: { toDate?: () => Date }; [key: string]: unknown }) => ({
          ...comment,
          createdAt: comment.createdAt?.toDate ? comment.createdAt.toDate() : new Date(comment.createdAt as string | number | Date),
        })),
      };
    });
    callback(posts);
  });
}

export async function likePost(postId: string, userId: string): Promise<void> {
  ensureConfigured();
  const postRef = doc(db!,POSTS_COLLECTION, postId);
  const postDoc = await getDoc(postRef);

  if (!postDoc.exists()) return;

  const likes = postDoc.data().likes || [];
  const hasLiked = likes.includes(userId);

  if (hasLiked) {
    await updateDoc(postRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(userId),
    });
  }
}

export async function addComment(postId: string, comment: Omit<Comment, 'id' | 'createdAt'>): Promise<void> {
  ensureConfigured();
  const postRef = doc(db!,POSTS_COLLECTION, postId);

  const newComment = {
    id: Math.random().toString(36).substr(2, 9),
    ...comment,
    createdAt: Timestamp.now(),
    likes: [],
  };

  await updateDoc(postRef, {
    comments: arrayUnion(newComment),
  });
}

export async function likeComment(postId: string, commentId: string, userId: string): Promise<void> {
  ensureConfigured();
  const postRef = doc(db!,POSTS_COLLECTION, postId);
  const postDoc = await getDoc(postRef);

  if (!postDoc.exists()) return;

  const comments = postDoc.data().comments || [];
  const updatedComments = comments.map((comment: { id: string; likes?: string[]; [key: string]: unknown }) => {
    if (comment.id === commentId) {
      const likes = comment.likes || [];
      const hasLiked = likes.includes(userId);

      return {
        ...comment,
        likes: hasLiked
          ? likes.filter((id: string) => id !== userId)
          : [...likes, userId],
      };
    }
    return comment;
  });

  await updateDoc(postRef, { comments: updatedComments });
}

export async function deletePost(postId: string): Promise<void> {
  ensureConfigured();
  await deleteDoc(doc(db!,POSTS_COLLECTION, postId));
}

// ============================================================================
// FASTING SESSION OPERATIONS
// ============================================================================

export async function createFastingSession(sessionData: Omit<FastingSession, 'id'>): Promise<string> {
  ensureConfigured();
  const docRef = await addDoc(collection(db!,SESSIONS_COLLECTION), {
    ...sessionData,
    startTime: Timestamp.fromDate(sessionData.startTime),
    endTime: sessionData.endTime ? Timestamp.fromDate(sessionData.endTime) : null,
  });
  return docRef.id;
}

export async function getUserFastingSessions(userId: string): Promise<FastingSession[]> {
  ensureConfigured();
  const q = query(
    collection(db!,SESSIONS_COLLECTION),
    where('userId', '==', userId),
    orderBy('startTime', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: data.userId,
      startTime: data.startTime.toDate(),
      endTime: data.endTime?.toDate(),
      isActive: data.isActive,
      duration: data.duration,
    };
  });
}

export async function updateFastingSession(sessionId: string, updates: Partial<FastingSession>): Promise<void> {
  ensureConfigured();
  const updateData: Record<string, unknown> = { ...updates };
  delete updateData.id;

  if (updates.startTime) {
    updateData.startTime = Timestamp.fromDate(updates.startTime);
  }
  if (updates.endTime) {
    updateData.endTime = Timestamp.fromDate(updates.endTime);
  }

  await updateDoc(doc(db!,SESSIONS_COLLECTION, sessionId), updateData);
}

export async function deleteFastingSession(sessionId: string): Promise<void> {
  ensureConfigured();
  await deleteDoc(doc(db!,SESSIONS_COLLECTION, sessionId));
}

// Real-time listener for user's fasting sessions
export function subscribeToUserSessions(userId: string, callback: (sessions: FastingSession[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,SESSIONS_COLLECTION),
    where('userId', '==', userId),
    orderBy('startTime', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const sessions = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        startTime: data.startTime.toDate(),
        endTime: data.endTime?.toDate(),
        isActive: data.isActive,
        duration: data.duration,
      };
    });
    callback(sessions);
  });
}

// ============================================================================
// JOURNAL ENTRY OPERATIONS
// ============================================================================

export async function createJournalEntry(entryData: Omit<JournalEntry, 'id' | 'createdAt'>): Promise<string> {
  ensureConfigured();
  const docRef = await addDoc(collection(db!,JOURNAL_COLLECTION), {
    ...entryData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getUserJournalEntries(userId: string): Promise<JournalEntry[]> {
  ensureConfigured();
  const q = query(
    collection(db!,JOURNAL_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: data.userId,
      content: data.content,
      mood: data.mood,
      createdAt: data.createdAt?.toDate() || new Date(),
      sharedToFeed: data.sharedToFeed || false,
    };
  });
}

// Real-time listener for user's journal entries
export function subscribeToUserJournal(userId: string, callback: (entries: JournalEntry[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,JOURNAL_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const entries = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        content: data.content,
        mood: data.mood,
        createdAt: data.createdAt?.toDate() || new Date(),
        sharedToFeed: data.sharedToFeed || false,
      };
    });
    callback(entries);
  });
}

export async function deleteJournalEntry(entryId: string): Promise<void> {
  ensureConfigured();
  await deleteDoc(doc(db!,JOURNAL_COLLECTION, entryId));
}

// ============================================================================
// WEIGHT ENTRY OPERATIONS
// ============================================================================

export async function createWeightEntry(entryData: Omit<WeightEntry, 'id' | 'createdAt'>): Promise<string> {
  ensureConfigured();
  const docRef = await addDoc(collection(db!,WEIGHT_ENTRIES_COLLECTION), {
    ...entryData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getUserWeightEntries(userId: string): Promise<WeightEntry[]> {
  ensureConfigured();
  const q = query(
    collection(db!,WEIGHT_ENTRIES_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: data.userId,
      weight: data.weight,
      unit: data.unit,
      notes: data.notes,
      createdAt: data.createdAt?.toDate() || new Date(),
    };
  });
}

// Real-time listener for user's weight entries
export function subscribeToUserWeightEntries(userId: string, callback: (entries: WeightEntry[]) => void) {
  if (!isConfigured || !db) {
    callback([]);
    return () => {};
  }

  const q = query(
    collection(db!,WEIGHT_ENTRIES_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const entries = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        weight: data.weight,
        unit: data.unit,
        notes: data.notes,
        createdAt: data.createdAt?.toDate() || new Date(),
      };
    });
    callback(entries);
  });
}

export async function deleteWeightEntry(entryId: string): Promise<void> {
  ensureConfigured();
  await deleteDoc(doc(db!,WEIGHT_ENTRIES_COLLECTION, entryId));
}

// ============================================================================
// WEIGHT GOAL OPERATIONS
// ============================================================================

export async function createWeightGoal(goalData: Omit<WeightGoal, 'id' | 'createdAt'>): Promise<string> {
  ensureConfigured();
  const data: Record<string, unknown> = {
    userId: goalData.userId,
    targetWeight: goalData.targetWeight,
    unit: goalData.unit,
    createdAt: serverTimestamp(),
  };

  if (goalData.targetDate) {
    data.targetDate = Timestamp.fromDate(goalData.targetDate);
  }

  const docRef = await addDoc(collection(db!,WEIGHT_GOALS_COLLECTION), data);
  return docRef.id;
}

export async function getUserWeightGoal(userId: string): Promise<WeightGoal | null> {
  ensureConfigured();
  const q = query(
    collection(db!,WEIGHT_GOALS_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(1)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  const data = doc.data();
  return {
    id: doc.id,
    userId: data.userId,
    targetWeight: data.targetWeight,
    unit: data.unit,
    targetDate: data.targetDate?.toDate(),
    createdAt: data.createdAt?.toDate() || new Date(),
  };
}

// Real-time listener for user's weight goal
export function subscribeToUserWeightGoal(userId: string, callback: (goal: WeightGoal | null) => void) {
  if (!isConfigured || !db) {
    callback(null);
    return () => {};
  }

  const q = query(
    collection(db!,WEIGHT_GOALS_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(1)
  );

  return onSnapshot(q, (snapshot) => {
    if (snapshot.empty) {
      callback(null);
      return;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();
    callback({
      id: doc.id,
      userId: data.userId,
      targetWeight: data.targetWeight,
      unit: data.unit,
      targetDate: data.targetDate?.toDate(),
      createdAt: data.createdAt?.toDate() || new Date(),
    });
  });
}

export async function updateWeightGoal(goalId: string, updates: Partial<WeightGoal>): Promise<void> {
  ensureConfigured();
  const updateData: Record<string, unknown> = { ...updates };
  delete updateData.id;
  delete updateData.createdAt;

  if (updates.targetDate) {
    updateData.targetDate = Timestamp.fromDate(updates.targetDate);
  }

  await updateDoc(doc(db!,WEIGHT_GOALS_COLLECTION, goalId), updateData);
}

export async function deleteWeightGoal(goalId: string): Promise<void> {
  ensureConfigured();
  await deleteDoc(doc(db!,WEIGHT_GOALS_COLLECTION, goalId));
}
