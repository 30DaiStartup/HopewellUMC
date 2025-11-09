import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  User as FirebaseUser,
  ActionCodeSettings,
} from 'firebase/auth';
import { auth, isConfigured } from './firebase';
import { createUser, getUser } from './firestore-service';
import type { User } from './fasting-types';

const googleProvider = new GoogleAuthProvider();

// Helper to ensure Firebase is configured
function ensureConfigured() {
  if (!isConfigured || !auth) {
    throw new Error('Firebase is not configured. Please set up your environment variables.');
  }
}

// ============================================================================
// AUTHENTICATION OPERATIONS
// ============================================================================

/**
 * Sign up a new user with email and password
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
): Promise<User> {
  ensureConfigured();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
    const firebaseUser = userCredential.user;

    // Create user document in Firestore
    const userData: Omit<User, 'id'> = {
      email: firebaseUser.email || email,
      displayName,
      joinedAt: new Date(),
      isFasting: false,
      isAdmin: false,
    };

    await createUser(firebaseUser.uid, userData);

    return {
      id: firebaseUser.uid,
      ...userData,
    };
  } catch (error) {
    console.error('Sign up error:', error);
    const message = error instanceof Error ? error.message : 'Failed to sign up';
    throw new Error(message);
  }
}

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string): Promise<User> {
  ensureConfigured();
  try {
    const userCredential = await signInWithEmailAndPassword(auth!, email, password);
    const firebaseUser = userCredential.user;

    // Get user data from Firestore
    const user = await getUser(firebaseUser.uid);

    if (!user) {
      throw new Error('User data not found');
    }

    return user;
  } catch (error) {
    console.error('Sign in error:', error);
    const message = error instanceof Error ? error.message : 'Failed to sign in';
    throw new Error(message);
  }
}

/**
 * Sign in with Google
 */
export async function signInWithGoogle(): Promise<User> {
  ensureConfigured();
  try {
    const result = await signInWithPopup(auth!, googleProvider);
    const firebaseUser = result.user;

    // Check if user exists in Firestore
    let user = await getUser(firebaseUser.uid);

    if (!user) {
      // Create new user document
      const userData: Omit<User, 'id'> = {
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'Anonymous',
        avatar: firebaseUser.photoURL || undefined,
        joinedAt: new Date(),
        isFasting: false,
        isAdmin: false,
      };

      await createUser(firebaseUser.uid, userData);

      user = {
        id: firebaseUser.uid,
        ...userData,
      };
    }

    return user;
  } catch (error) {
    console.error('Google sign in error:', error);
    const message = error instanceof Error ? error.message : 'Failed to sign in with Google';
    throw new Error(message);
  }
}

/**
 * Sign out current user
 */
export async function signOutUser(): Promise<void> {
  ensureConfigured();
  try {
    await signOut(auth!);
  } catch (error) {
    console.error('Sign out error:', error);
    const message = error instanceof Error ? error.message : 'Failed to sign out';
    throw new Error(message);
  }
}

/**
 * Listen to authentication state changes
 */
export function onAuthStateChange(callback: (user: User | null) => void): () => void {
  if (!isConfigured || !auth) {
    // Return a no-op unsubscribe function if Firebase is not configured
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const user = await getUser(firebaseUser.uid);
      callback(user);
    } else {
      callback(null);
    }
  });
}

/**
 * Get current authenticated user
 */
export function getCurrentFirebaseUser(): FirebaseUser | null {
  if (!isConfigured || !auth) return null;
  return auth.currentUser;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (!isConfigured || !auth) return false;
  return auth.currentUser !== null;
}

// ============================================================================
// PASSWORDLESS AUTHENTICATION (EMAIL LINK)
// ============================================================================

/**
 * Send a passwordless sign-in link to the user's email
 */
export async function sendPasswordlessSignInLink(email: string): Promise<void> {
  ensureConfigured();

  const actionCodeSettings: ActionCodeSettings = {
    // URL to redirect to after email link is clicked
    url: `${window.location.origin}/auth/complete-signin`,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth!, email, actionCodeSettings);
    // Save the email locally so we can complete sign-in
    window.localStorage.setItem('emailForSignIn', email);
  } catch (error) {
    console.error('Error sending sign-in link:', error);
    const message = error instanceof Error ? error.message : 'Failed to send sign-in link';
    throw new Error(message);
  }
}

/**
 * Check if the current URL is a sign-in email link
 */
export function isPasswordlessSignInLink(emailLink?: string): boolean {
  if (!isConfigured || !auth) return false;
  const url = emailLink || window.location.href;
  return isSignInWithEmailLink(auth, url);
}

/**
 * Complete the passwordless sign-in process
 */
export async function completePasswordlessSignIn(
  email: string,
  emailLink?: string
): Promise<User> {
  ensureConfigured();

  const url = emailLink || window.location.href;

  if (!isSignInWithEmailLink(auth!, url)) {
    throw new Error('Invalid sign-in link');
  }

  try {
    const userCredential = await signInWithEmailLink(auth!, email, url);
    const firebaseUser = userCredential.user;

    // Check if user exists in Firestore
    let user = await getUser(firebaseUser.uid);

    if (!user) {
      // Create new user document for first-time users
      const userData: Omit<User, 'id'> = {
        email: firebaseUser.email || email,
        displayName: firebaseUser.email?.split('@')[0] || 'Anonymous',
        joinedAt: new Date(),
        isFasting: false,
        isAdmin: false,
      };

      await createUser(firebaseUser.uid, userData);

      user = {
        id: firebaseUser.uid,
        ...userData,
      };
    }

    // Clear the saved email from localStorage
    window.localStorage.removeItem('emailForSignIn');

    return user;
  } catch (error) {
    console.error('Error completing sign-in:', error);
    const message = error instanceof Error ? error.message : 'Failed to complete sign-in';
    throw new Error(message);
  }
}

/**
 * Get the saved email for sign-in (from localStorage)
 */
export function getSavedEmailForSignIn(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('emailForSignIn');
}
