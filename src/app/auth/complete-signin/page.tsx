"use client";

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  isPasswordlessSignInLink,
  completePasswordlessSignIn,
  getSavedEmailForSignIn
} from '@/lib/auth-service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Mail, CheckCircle } from 'lucide-react';

export default function CompleteSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [needsEmail, setNeedsEmail] = useState(false);

  const handleCompleteSignIn = useCallback(async (emailToUse: string) => {
    setLoading(true);
    setError('');

    try {
      await completePasswordlessSignIn(emailToUse);
      setSuccess(true);

      // Redirect to the fast page after 2 seconds
      setTimeout(() => {
        router.push('/fast');
      }, 2000);
    } catch (err) {
      console.error('Sign-in error:', err);
      setError(err instanceof Error ? err.message : 'Failed to complete sign-in');
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    // Check if the current URL is a valid sign-in link
    if (!isPasswordlessSignInLink()) {
      setError('Invalid or expired sign-in link');
      setLoading(false);
      return;
    }

    // Try to get saved email from localStorage
    const savedEmail = getSavedEmailForSignIn();

    if (savedEmail) {
      // Automatically complete sign-in with saved email
      handleCompleteSignIn(savedEmail);
    } else {
      // Prompt user to enter email
      setNeedsEmail(true);
      setLoading(false);
    }
  }, [handleCompleteSignIn]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    handleCompleteSignIn(email);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Sign-In Successful!
          </h1>
          <p className="text-gray-600 mb-4">
            Redirecting you to the fast page...
          </p>
          <div className="flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-indigo-600" />
          </div>
        </div>
      </div>
    );
  }

  if (loading && !needsEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Loader2 className="h-16 w-16 animate-spin text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Completing Sign-In...
          </h1>
          <p className="text-gray-600">
            Please wait while we verify your email link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-4">
          <Mail className="h-16 w-16 text-indigo-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Confirm Your Email
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Please enter the email address you used to request the sign-in link.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              autoFocus
            />
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Completing Sign-In...
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                Complete Sign-In
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Having trouble?{' '}
            <a href="/fast" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Return to fast page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
