"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Home, Clock, BookOpen, User as UserIcon, LogOut } from 'lucide-react';
import { FastingProvider, useFasting } from '@/contexts/fasting-context';
import { CountdownTimer } from '@/components/fasting/countdown-timer';
import { PostCard } from '@/components/fasting/post-card';
import { NewPostDialog } from '@/components/fasting/new-post-dialog';
import { ParticipantList } from '@/components/fasting/participant-list';
import { FastingTracker } from '@/components/fasting/fasting-tracker';
import { ScripturesSection } from '@/components/fasting/scriptures-section';
import { AuthModal } from '@/components/fasting/auth-modal';
import { OnboardingModal } from '@/components/fasting/onboarding-modal';
import { Button } from '@/components/ui/button';

type Tab = 'feed' | 'tracker' | 'scriptures';

function FastingAppContent() {
  const { currentUser, logout, joinFast, posts } = useFasting();
  const [activeTab, setActiveTab] = useState<Tab>('feed');
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const tabs = [
    { id: 'feed' as Tab, label: 'Community', icon: Home },
    { id: 'tracker' as Tab, label: 'My Tracker', icon: Clock },
    { id: 'scriptures' as Tab, label: 'Resources', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Church Fasting</h1>
              <p className="text-sm text-gray-600">Strengthen in Spirit Together</p>
            </div>

            <div className="flex items-center gap-3">
              {currentUser ? (
                <>
                  {!currentUser.isFasting && (
                    <Button
                      onClick={joinFast}
                      className="bg-[#0b5a7f] hover:bg-[#094e6d]"
                      size="sm"
                    >
                      Join Fast
                    </Button>
                  )}

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0b5a7f]/20 flex items-center justify-center text-[#0b5a7f] font-semibold text-sm overflow-hidden">
                      {currentUser.avatar ? (
                        <Image
                          src={currentUser.avatar}
                          alt={currentUser.displayName}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{currentUser.displayName.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                      {currentUser.displayName}
                    </span>
                  </div>

                  <Button
                    onClick={logout}
                    variant="ghost"
                    size="sm"
                    className="text-gray-600"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-[#0b5a7f] hover:bg-[#094e6d]"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-[#0b5a7f] border-b-2 border-[#0b5a7f] bg-[#0b5a7f]/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                {posts.length > 0 ? (
                  posts.map((post) => <PostCard key={post.id} post={post} />)
                ) : (
                  <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No posts yet
                    </h3>
                    <p className="text-gray-600">
                      Be the first to share your journey with the community
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'tracker' && <FastingTracker />}

            {activeTab === 'scriptures' && <ScripturesSection />}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {activeTab === 'feed' && <ParticipantList />}

              {/* Info Card */}
              {!currentUser && (
                <div className="mt-6 bg-[#0b5a7f]/10 border border-[#0b5a7f]/30 rounded-lg p-6">
                  <h4 className="font-semibold text-[#074159] mb-2">Join the Community</h4>
                  <p className="text-sm text-[#094e6d] mb-4">
                    Sign in to participate in the fast, track your journey, and connect with others.
                  </p>
                  <Button
                    onClick={() => setAuthModalOpen(true)}
                    className="w-full bg-[#0b5a7f] hover:bg-[#094e6d]"
                  >
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for New Post */}
      <NewPostDialog />

      {/* Modals */}
      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <OnboardingModal />
    </div>
  );
}

export default function FastingPage() {
  return (
    <FastingProvider>
      <FastingAppContent />
    </FastingProvider>
  );
}
