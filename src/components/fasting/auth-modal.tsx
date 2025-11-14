"use client";

import { useState } from 'react';
import { LogIn, UserPlus, Mail } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export function AuthModal({ open, onClose }: AuthModalProps) {
  const { login, loginWithGoogle, signup, sendPasswordlessLink } = useFasting();
  const [mode, setMode] = useState<'login' | 'signup' | 'passwordless'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (mode === 'passwordless') {
        const result = await sendPasswordlessLink(email);
        if (result) {
          setSuccess('Check your email! We sent you a magic sign-in link.');
          setEmail('');
        } else {
          setError('Failed to send sign-in link');
        }
      } else if (mode === 'login') {
        const success = await login(email, password);
        if (success) {
          onClose();
          resetForm();
        } else {
          setError('Invalid credentials');
        }
      } else {
        if (!displayName.trim()) {
          setError('Please enter your display name');
          return;
        }

        const success = await signup(email, password, displayName);
        if (success) {
          onClose();
          resetForm();
        } else {
          setError('Signup failed');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const success = await loginWithGoogle();
      if (success) {
        onClose();
        resetForm();
      } else {
        setError('Google login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setError('');
    setSuccess('');
  };

  const switchMode = (newMode: 'login' | 'signup' | 'passwordless') => {
    setMode(newMode);
    setError('');
    setSuccess('');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Join the Fast' : 'Sign In Without Password'}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {/* Google Login */}
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full gap-2"
            type="button"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <Input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="How should we call you?"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {mode !== 'passwordless' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                {success}
              </div>
            )}

            <Button type="submit" className="w-full gap-2 bg-[#0b5a7f] hover:bg-[#094e6d]">
              {mode === 'login' ? (
                <>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </>
              ) : mode === 'signup' ? (
                <>
                  <UserPlus className="h-4 w-4" />
                  Create Account
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Send Magic Link
                </>
              )}
            </Button>
          </form>

          {/* Switch Mode */}
          <div className="text-center text-sm space-y-2">
            <div>
              <span className="text-gray-600">
                {mode === 'login' ? "Don't have an account? " : mode === 'signup' ? 'Already have an account? ' : 'Have a password? '}
              </span>
              <button
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                className="text-[#0b5a7f] hover:text-[#094e6d] font-medium"
                type="button"
              >
                {mode === 'login' ? 'Sign up' : mode === 'signup' ? 'Sign in' : 'Sign in with password'}
              </button>
            </div>
            {mode !== 'passwordless' && (
              <div>
                <span className="text-gray-600">Prefer passwordless? </span>
                <button
                  onClick={() => switchMode('passwordless')}
                  className="text-[#0b5a7f] hover:text-[#094e6d] font-medium"
                  type="button"
                >
                  Use magic link
                </button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
