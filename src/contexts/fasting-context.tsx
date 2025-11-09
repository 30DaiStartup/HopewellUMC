"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { User, Post, Comment, JournalEntry, FastingSession } from '@/lib/fasting-types';

interface FastingContextType {
  // Authentication
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  signup: (email: string, password: string, displayName: string) => Promise<boolean>;
  logout: () => void;
  joinFast: () => void;

  // Posts & Social
  posts: Post[];
  addPost: (content: string, mediaUrl?: string, mediaType?: 'image' | 'video') => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  likeComment: (postId: string, commentId: string) => void;
  deletePost: (postId: string) => void;

  // Participants
  participants: User[];

  // Fasting Tracker
  fastingSessions: FastingSession[];
  currentSession: FastingSession | null;
  startFasting: () => void;
  endFasting: () => void;

  // Journal
  journalEntries: JournalEntry[];
  addJournalEntry: (content: string, mood?: JournalEntry['mood'], shareToFeed?: boolean) => void;
}

const FastingContext = createContext<FastingContextType | undefined>(undefined);

// Mock data for initial state
const MOCK_USERS: User[] = [
  {
    id: 'admin',
    email: 'pastor@hopewellumc.org',
    displayName: 'Pastor Johnson',
    isAdmin: true,
    joinedAt: new Date('2025-11-08'),
    isFasting: true,
  },
];

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    userId: 'admin',
    userName: 'Pastor Johnson',
    content: 'Welcome to our church-wide fast! This is a sacred time for us to draw closer to God and support one another. Share your journey, your struggles, and your victories. We are in this together! 🙏',
    createdAt: new Date('2025-11-08T10:00:00'),
    likes: [],
    comments: [],
  },
];

export function FastingProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [participants, setParticipants] = useState<User[]>(MOCK_USERS);
  const [fastingSessions, setFastingSessions] = useState<FastingSession[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  // Sync NextAuth session with currentUser state
  useEffect(() => {
    if (session?.user) {
      const user: User = {
        id: (session.user as Record<string, unknown>).id as string || session.user.email || 'unknown',
        email: session.user.email || '',
        displayName: session.user.name || 'Unknown User',
        avatar: session.user.image || undefined,
        joinedAt: new Date(),
        isFasting: false,
      };

      // Load user data from localStorage if exists
      const storedUser = localStorage.getItem(`fasting_user_${user.id}`);
      if (storedUser) {
        const savedUser = JSON.parse(storedUser);
        setCurrentUser({ ...user, ...savedUser, avatar: user.avatar }); // Keep fresh avatar from session
      } else {
        setCurrentUser(user);
        // Add to participants on first login
        setParticipants(prev => {
          const exists = prev.find(p => p.id === user.id);
          if (!exists) {
            return [...prev, user];
          }
          return prev;
        });
      }
    } else if (status !== 'loading') {
      setCurrentUser(null);
    }
  }, [session, status]);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('fasting_posts');
    const storedParticipants = localStorage.getItem('fasting_participants');
    const storedSessions = localStorage.getItem('fasting_sessions');
    const storedJournal = localStorage.getItem('fasting_journal');

    if (storedPosts) setPosts(JSON.parse(storedPosts));
    if (storedParticipants) setParticipants(JSON.parse(storedParticipants));
    if (storedSessions) setFastingSessions(JSON.parse(storedSessions));
    if (storedJournal) setJournalEntries(JSON.parse(storedJournal));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`fasting_user_${currentUser.id}`, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('fasting_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('fasting_participants', JSON.stringify(participants));
  }, [participants]);

  useEffect(() => {
    localStorage.setItem('fasting_sessions', JSON.stringify(fastingSessions));
  }, [fastingSessions]);

  useEffect(() => {
    localStorage.setItem('fasting_journal', JSON.stringify(journalEntries));
  }, [journalEntries]);

  // Authentication functions
  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in production, this would call an API
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      displayName: email.split('@')[0],
      joinedAt: new Date(),
      isFasting: false,
    };
    setCurrentUser(user);
    return true;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      const result = await signIn('google', { redirect: false });
      return result?.ok ?? false;
    } catch (error) {
      console.error('Google login error:', error);
      return false;
    }
  };

  const signup = async (email: string, password: string, displayName: string): Promise<boolean> => {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      displayName,
      joinedAt: new Date(),
      isFasting: false,
    };
    setCurrentUser(user);

    // Add to participants
    setParticipants(prev => [...prev, user]);
    return true;
  };

  const logout = async () => {
    if (currentUser) {
      localStorage.removeItem(`fasting_user_${currentUser.id}`);
    }
    setCurrentUser(null);
    await signOut({ redirect: false });
  };

  const joinFast = () => {
    if (currentUser && !currentUser.isFasting) {
      const updatedUser = { ...currentUser, isFasting: true };
      setCurrentUser(updatedUser);

      // Add to participants if not already there
      setParticipants(prev => {
        const exists = prev.find(p => p.id === updatedUser.id);
        if (exists) {
          return prev.map(p => p.id === updatedUser.id ? updatedUser : p);
        }
        return [...prev, updatedUser];
      });
    }
  };

  // Post functions
  const addPost = (content: string, mediaUrl?: string, mediaType?: 'image' | 'video') => {
    if (!currentUser) return;

    const newPost: Post = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      userName: currentUser.displayName,
      userAvatar: currentUser.avatar,
      content,
      mediaUrl,
      mediaType,
      createdAt: new Date(),
      likes: [],
      comments: [],
    };

    setPosts(prev => [newPost, ...prev]);
  };

  const likePost = (postId: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const hasLiked = post.likes.includes(currentUser.id);
        return {
          ...post,
          likes: hasLiked
            ? post.likes.filter(id => id !== currentUser.id)
            : [...post.likes, currentUser.id],
        };
      }
      return post;
    }));
  };

  const addComment = (postId: string, content: string) => {
    if (!currentUser) return;

    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      userName: currentUser.displayName,
      userAvatar: currentUser.avatar,
      content,
      createdAt: new Date(),
      likes: [],
    };

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    }));
  };

  const likeComment = (postId: string, commentId: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => {
            if (comment.id === commentId) {
              const hasLiked = comment.likes.includes(currentUser.id);
              return {
                ...comment,
                likes: hasLiked
                  ? comment.likes.filter(id => id !== currentUser.id)
                  : [...comment.likes, currentUser.id],
              };
            }
            return comment;
          }),
        };
      }
      return post;
    }));
  };

  const deletePost = (postId: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.filter(post => {
      // Only allow deletion if user is admin or post owner
      if (post.id === postId && (currentUser.isAdmin || post.userId === currentUser.id)) {
        return false;
      }
      return true;
    }));
  };

  // Fasting tracker functions
  const currentSession = fastingSessions.find(s => s.isActive && s.userId === currentUser?.id) || null;

  const startFasting = () => {
    if (!currentUser) return;

    const newSession: FastingSession = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      startTime: new Date(),
      isActive: true,
      duration: 0,
    };

    setFastingSessions(prev => [...prev, newSession]);
  };

  const endFasting = () => {
    if (!currentUser || !currentSession) return;

    const endTime = new Date();
    const duration = endTime.getTime() - new Date(currentSession.startTime).getTime();

    setFastingSessions(prev => prev.map(session => {
      if (session.id === currentSession.id) {
        return {
          ...session,
          endTime,
          duration,
          isActive: false,
        };
      }
      return session;
    }));
  };

  // Journal functions
  const addJournalEntry = (content: string, mood?: JournalEntry['mood'], shareToFeed = false) => {
    if (!currentUser) return;

    const newEntry: JournalEntry = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      content,
      mood,
      createdAt: new Date(),
      sharedToFeed: shareToFeed,
    };

    setJournalEntries(prev => [...prev, newEntry]);

    // If sharing to feed, create a post
    if (shareToFeed) {
      const moodEmoji = mood === 'joyful' ? '😊' : mood === 'peaceful' ? '🕊️' : mood === 'struggling' ? '💪' : mood === 'hopeful' ? '🙏' : '';
      addPost(`${moodEmoji} ${content}`);
    }
  };

  return (
    <FastingContext.Provider
      value={{
        currentUser,
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
