"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Post, Comment, JournalEntry, FastingSession } from '@/lib/fasting-types';
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  onAuthStateChange,
} from '@/lib/auth-service';
import {
  getAllPosts,
  subscribeToPosts,
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
} from '@/lib/firestore-service';

interface FastingContextType {
  // Authentication
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  signup: (email: string, password: string, displayName: string) => Promise<boolean>;
  logout: () => Promise<void>;
  joinFast: () => Promise<void>;

  // Posts & Social
  posts: Post[];
  addPost: (content: string, mediaUrl?: string, mediaType?: 'image' | 'video') => Promise<void>;
  likePost: (postId: string) => Promise<void>;
  addComment: (postId: string, content: string) => Promise<void>;
  likeComment: (postId: string, commentId: string) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;

  // Participants
  participants: User[];

  // Fasting Tracker
  fastingSessions: FastingSession[];
  currentSession: FastingSession | null;
  startFasting: () => Promise<void>;
  endFasting: () => Promise<void>;
  deleteFastingSession: (sessionId: string) => Promise<void>;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (content: string, mood?: JournalEntry['mood'], shareToFeed?: boolean) => Promise<void>;
}

const FastingContext = createContext<FastingContextType | undefined>(undefined);

export function FastingProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [participants, setParticipants] = useState<User[]>([]);
  const [fastingSessions, setFastingSessions] = useState<FastingSession[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to posts when user is authenticated
  useEffect(() => {
    // Only subscribe if user is authenticated and loading is complete
    if (!currentUser || loading) {
      setPosts([]);
      return;
    }

    const unsubscribe = subscribeToPosts((newPosts) => {
      setPosts(newPosts);
    });

    return () => unsubscribe();
  }, [currentUser, loading]);

  // Subscribe to participants when user is authenticated
  useEffect(() => {
    // Only subscribe if user is authenticated and loading is complete
    if (!currentUser || loading) {
      setParticipants([]);
      return;
    }

    const unsubscribe = subscribeToParticipants((newParticipants) => {
      setParticipants(newParticipants);
    });

    return () => unsubscribe();
  }, [currentUser, loading]);

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
  const addPost = async (content: string, mediaUrl?: string, mediaType?: 'image' | 'video'): Promise<void> => {
    if (!currentUser) return;

    try {
      await createPost({
        userId: currentUser.id,
        userName: currentUser.displayName,
        userAvatar: currentUser.avatar,
        content,
        mediaUrl,
        mediaType,
        likes: [],
        comments: [],
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

  const startFasting = async (): Promise<void> => {
    if (!currentUser) return;

    try {
      await createFastingSession({
        userId: currentUser.id,
        startTime: new Date(),
        isActive: true,
        duration: 0,
      });
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

  return (
    <FastingContext.Provider
      value={{
        currentUser,
        loading,
        login,
        loginWithGoogle,
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
