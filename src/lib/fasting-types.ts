// Types for the Church Fasting App

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  isAdmin?: boolean;
  joinedAt: Date;
  isFasting: boolean;
}

export interface FastingSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  isActive: boolean;
  duration: number; // in milliseconds
}

export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  mood?: 'joyful' | 'peaceful' | 'struggling' | 'hopeful';
  createdAt: Date;
  sharedToFeed: boolean;
}

export interface LinkPreview {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  linkPreview?: LinkPreview;
  createdAt: Date;
  likes: string[]; // array of user IDs
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: Date;
  likes: string[]; // array of user IDs
}

export interface Scripture {
  id: string;
  reference: string;
  text: string;
  theme: 'sacrifice' | 'discipline' | 'faith' | 'prayer';
}

export interface FastingTip {
  id: string;
  title: string;
  content: string;
  day?: number; // optional day number for daily tips
}

export interface FastingEvent {
  startDate: Date;
  endDate: Date;
  name: string;
  description: string;
}
