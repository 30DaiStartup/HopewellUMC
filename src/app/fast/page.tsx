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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sacred-card sticky top-0 z-40 border-b-0 shadow-md">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-1">Church Fasting</h1>
              <p className="text-sm text-muted-foreground font-medium tracking-wide">Strengthen in Spirit Together</p>
            </div>

            <div className="flex items-center gap-3">
              {currentUser ? (
                <>
                  {!currentUser.isFasting && (
                    <Button
                      onClick={joinFast}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 divine-glow"
                      size="sm"
                    >
                      Join Fast
                    </Button>
                  )}

                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm overflow-hidden ring-2 ring-primary/10">
                      {currentUser.avatar ? (
                        <Image
                          src={currentUser.avatar}
                          alt={currentUser.displayName}
                          width={36}
                          height={36}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{currentUser.displayName.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-foreground hidden sm:inline">
                      {currentUser.displayName}
                    </span>
                  </div>

                  <Button
                    onClick={logout}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 divine-glow"
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
        <div className="sacred-card sacred-card-hover overflow-hidden mb-8">
          <div className="flex border-b border-border/50 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap relative group ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
                <tab.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-serif">{tab.label}</span>
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
                  <div className="sacred-card p-12 sm:p-16 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/5">
                      <Home className="h-10 w-10 text-primary/60" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                      No posts yet
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
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
                <div className="mt-6 sacred-card sacred-card-hover p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <h4 className="font-semibold text-primary mb-3 font-serif text-lg">Join the Community</h4>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Sign in to participate in the fast, track your journey, and connect with others.
                  </p>
                  <Button
                    onClick={() => setAuthModalOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 divine-glow"
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
