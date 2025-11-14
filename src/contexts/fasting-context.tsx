"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Post, Comment, JournalEntry, FastingSession, LinkPreview, WeightEntry, WeightGoal } from '@/lib/fasting-types';
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  onAuthStateChange,
  sendPasswordlessSignInLink,
} from '@/lib/auth-service';
import {
  getAllPosts,
  subscribeToPosts,
  subscribeToTopPosts,
  createPost,
  likePost as firestoreLikePost,
  addComment as firestoreAddComment,
  likeComment as firestoreLikeComment,
  deletePost as firestoreDeletePost,
  getAllParticipants,
  subscribeToParticipants,
  updateUser,
  getUserFastingSessions,
  subscribeToUserSessions,
  createFastingSession,
  updateFastingSession,
  deleteFastingSession as firestoreDeleteFastingSession,
  getUserJournalEntries,
  subscribeToUserJournal,
  createJournalEntry,
  deleteJournalEntry as firestoreDeleteJournalEntry,
  createWeightEntry,
  getUserWeightEntries,
  subscribeToUserWeightEntries,
  deleteWeightEntry as firestoreDeleteWeightEntry,
  createWeightGoal,
  getUserWeightGoal,
  subscribeToUserWeightGoal,
  updateWeightGoal as firestoreUpdateWeightGoal,
  deleteWeightGoal as firestoreDeleteWeightGoal,
} from '@/lib/firestore-service';

interface FastingContextType {
  // Authentication
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  sendPasswordlessLink: (email: string) => Promise<boolean>;
  signup: (email: string, password: string, displayName: string) => Promise<boolean>;
  logout: () => Promise<void>;
  joinFast: () => Promise<void>;

  // Posts & Social
  posts: Post[];
  addPost: (content: string, mediaUrl?: string, mediaType?: 'image' | 'video' | 'gif', linkPreview?: LinkPreview) => Promise<void>;
  likePost: (postId: string) => Promise<void>;
  addComment: (postId: string, content: string) => Promise<void>;
  likeComment: (postId: string, commentId: string) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;

  // Participants
  participants: User[];

  // Fasting Tracker
  fastingSessions: FastingSession[];
  currentSession: FastingSession | null;
  startFasting: (shareWithCommunity?: boolean) => Promise<void>;
  endFasting: () => Promise<void>;
  deleteFastingSession: (sessionId: string) => Promise<void>;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (content: string, mood?: JournalEntry['mood'], shareToFeed?: boolean) => Promise<void>;
  deleteJournalEntry: (entryId: string) => Promise<void>;

  // Weight Tracking
  weightEntries: WeightEntry[];
  weightGoal: WeightGoal | null;
  addWeightEntry: (weight: number, unit: 'lbs' | 'kg', notes?: string) => Promise<void>;
  deleteWeightEntry: (entryId: string) => Promise<void>;
  setWeightGoal: (targetWeight: number, unit: 'lbs' | 'kg', targetDate?: Date) => Promise<void>;
  updateWeightGoal: (goalId: string, updates: Partial<WeightGoal>) => Promise<void>;
  deleteWeightGoal: (goalId: string) => Promise<void>;
}

const FastingContext = createContext<FastingContextType | undefined>(undefined);

export function FastingProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [participants, setParticipants] = useState<User[]>([]);
  const [fastingSessions, setFastingSessions] = useState<FastingSession[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([]);
  const [weightGoal, setWeightGoalState] = useState<WeightGoal | null>(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to posts - top 5 for unauthenticated users, all for authenticated users
  useEffect(() => {
    // Wait until loading is complete
    if (loading) {
      return;
    }

    // Subscribe to top 5 posts for unauthenticated users, all posts for authenticated users
    const unsubscribe = currentUser
      ? subscribeToPosts((newPosts) => {
          setPosts(newPosts);
        })
      : subscribeToTopPosts((newPosts) => {
          setPosts(newPosts);
        });

    return () => unsubscribe();
  }, [currentUser, loading]);

  // Subscribe to participants - available for all users (authenticated and unauthenticated)
  useEffect(() => {
    // Wait until loading is complete
    if (loading) {
      return;
    }

    const unsubscribe = subscribeToParticipants((newParticipants) => {
      setParticipants(newParticipants);
    });

    return () => unsubscribe();
  }, [loading]);

  // Subscribe to user's fasting sessions when user changes
  useEffect(() => {
    if (!currentUser) {
      setFastingSessions([]);
      return;
    }

    const unsubscribe = subscribeToUserSessions(currentUser.id, (sessions) => {
      setFastingSessions(sessions);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Subscribe to user's journal entries when user changes
  useEffect(() => {
    if (!currentUser) {
      setJournalEntries([]);
      return;
    }

    const unsubscribe = subscribeToUserJournal(currentUser.id, (entries) => {
      setJournalEntries(entries);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Subscribe to user's weight entries when user changes
  useEffect(() => {
    if (!currentUser) {
      setWeightEntries([]);
      return;
    }

    const unsubscribe = subscribeToUserWeightEntries(currentUser.id, (entries) => {
      setWeightEntries(entries);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Subscribe to user's weight goal when user changes
  useEffect(() => {
    if (!currentUser) {
      setWeightGoalState(null);
      return;
    }

    const unsubscribe = subscribeToUserWeightGoal(currentUser.id, (goal) => {
      setWeightGoalState(goal);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Authentication functions
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const user = await signInWithEmail(email, password);
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      const user = await signInWithGoogle();
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Google login error:', error);
      return false;
    }
  };

  const sendPasswordlessLink = async (email: string): Promise<boolean> => {
    try {
      await sendPasswordlessSignInLink(email);
      return true;
    } catch (error) {
      console.error('Send passwordless link error:', error);
      return false;
    }
  };

  const signup = async (email: string, password: string, displayName: string): Promise<boolean> => {
    try {
      const user = await signUpWithEmail(email, password, displayName);
      setCurrentUser(user);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOutUser();
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const joinFast = async (): Promise<void> => {
    if (!currentUser || currentUser.isFasting) return;

    try {
      await updateUser(currentUser.id, { isFasting: true });
      setCurrentUser({ ...currentUser, isFasting: true });
    } catch (error) {
      console.error('Join fast error:', error);
    }
  };

  // Post functions
  const addPost = async (content: string, mediaUrl?: string, mediaType?: 'image' | 'video' | 'gif', linkPreview?: LinkPreview): Promise<void> => {
    if (!currentUser) return;

    try {
      // Calculate fasting duration if user is actively fasting
      let fastingDurationMs: number | undefined;
      if (currentSession && currentSession.isActive) {
        const start = new Date(currentSession.startTime).getTime();
        const now = new Date().getTime();
        fastingDurationMs = now - start;
      }

      await createPost({
        userId: currentUser.id,
        userName: currentUser.displayName,
        userAvatar: currentUser.avatar,
        content,
        mediaUrl,
        mediaType,
        linkPreview,
        likes: [],
        comments: [],
        fastingDurationMs,
      });
    } catch (error) {
      console.error('Add post error:', error);
    }
  };

  const likePost = async (postId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreLikePost(postId, currentUser.id);
    } catch (error) {
      console.error('Like post error:', error);
    }
  };

  const addComment = async (postId: string, content: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreAddComment(postId, {
        userId: currentUser.id,
        userName: currentUser.displayName,
        userAvatar: currentUser.avatar,
        content,
        likes: [],
      });
    } catch (error) {
      console.error('Add comment error:', error);
    }
  };

  const likeComment = async (postId: string, commentId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreLikeComment(postId, commentId, currentUser.id);
    } catch (error) {
      console.error('Like comment error:', error);
    }
  };

  const deletePost = async (postId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      // Check if user is admin or post owner
      const post = posts.find(p => p.id === postId);
      if (post && (currentUser.isAdmin || post.userId === currentUser.id)) {
        await firestoreDeletePost(postId);
      }
    } catch (error) {
      console.error('Delete post error:', error);
    }
  };

  // Fasting tracker functions
  const currentSession = fastingSessions.find(s => s.isActive && s.userId === currentUser?.id) || null;

  const startFasting = async (shareWithCommunity = false): Promise<void> => {
    if (!currentUser) return;

    try {
      await createFastingSession({
        userId: currentUser.id,
        startTime: new Date(),
        isActive: true,
        duration: 0,
      });

      // If sharing to community, create a post
      if (shareWithCommunity) {
        await addPost('🙏 I\'ve just started my fast! Pray for me as I seek God during this time. #FastingJourney');
      }
    } catch (error) {
      console.error('Start fasting error:', error);
    }
  };

  const endFasting = async (): Promise<void> => {
    if (!currentUser || !currentSession) return;

    try {
      const endTime = new Date();
      const duration = endTime.getTime() - new Date(currentSession.startTime).getTime();

      await updateFastingSession(currentSession.id, {
        endTime,
        duration,
        isActive: false,
      });
    } catch (error) {
      console.error('End fasting error:', error);
    }
  };

  const deleteFastingSession = async (sessionId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreDeleteFastingSession(sessionId);
    } catch (error) {
      console.error('Delete fasting session error:', error);
    }
  };

  // Journal functions
  const addJournalEntry = async (content: string, mood?: JournalEntry['mood'], shareToFeed = false): Promise<void> => {
    if (!currentUser) return;

    try {
      await createJournalEntry({
        userId: currentUser.id,
        content,
        mood,
        sharedToFeed: shareToFeed,
      });

      // If sharing to feed, create a post
      if (shareToFeed) {
        const moodEmoji = mood === 'joyful' ? '😊' : mood === 'peaceful' ? '🕊️' : mood === 'struggling' ? '💪' : mood === 'hopeful' ? '🙏' : '';
        await addPost(`${moodEmoji} ${content}`);
      }
    } catch (error) {
      console.error('Add journal entry error:', error);
    }
  };

  const deleteJournalEntry = async (entryId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreDeleteJournalEntry(entryId);
    } catch (error) {
      console.error('Delete journal entry error:', error);
    }
  };

  // Weight tracking functions
  const addWeightEntry = async (weight: number, unit: 'lbs' | 'kg', notes?: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await createWeightEntry({
        userId: currentUser.id,
        weight,
        unit,
        notes,
      });
    } catch (error) {
      console.error('Add weight entry error:', error);
    }
  };

  const deleteWeightEntry = async (entryId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreDeleteWeightEntry(entryId);
    } catch (error) {
      console.error('Delete weight entry error:', error);
    }
  };

  const setWeightGoal = async (targetWeight: number, unit: 'lbs' | 'kg', targetDate?: Date): Promise<void> => {
    if (!currentUser) return;

    try {
      // Delete existing goal if any
      if (weightGoal) {
        await firestoreDeleteWeightGoal(weightGoal.id);
      }

      // Create new goal
      await createWeightGoal({
        userId: currentUser.id,
        targetWeight,
        unit,
        targetDate,
      });
    } catch (error) {
      console.error('Set weight goal error:', error);
    }
  };

  const updateWeightGoal = async (goalId: string, updates: Partial<WeightGoal>): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreUpdateWeightGoal(goalId, updates);
    } catch (error) {
      console.error('Update weight goal error:', error);
    }
  };

  const deleteWeightGoal = async (goalId: string): Promise<void> => {
    if (!currentUser) return;

    try {
      await firestoreDeleteWeightGoal(goalId);
    } catch (error) {
      console.error('Delete weight goal error:', error);
    }
  };

  return (
    <FastingContext.Provider
      value={{
        currentUser,
        loading,
        login,
        loginWithGoogle,
        sendPasswordlessLink,
        signup,
        logout,
        joinFast,
        posts,
        addPost,
        likePost,
        addComment,
        likeComment,
        deletePost,
        participants,
        fastingSessions,
        currentSession,
        startFasting,
        endFasting,
        deleteFastingSession,
        journalEntries,
        addJournalEntry,
        deleteJournalEntry,
        weightEntries,
        weightGoal,
        addWeightEntry,
        deleteWeightEntry,
        setWeightGoal,
        updateWeightGoal,
        deleteWeightGoal,
      }}
    >
      {children}
    </FastingContext.Provider>
  );
}

export function useFasting() {
  const context = useContext(FastingContext);
  if (context === undefined) {
    throw new Error('useFasting must be used within a FastingProvider');
  }
  return context;
}
