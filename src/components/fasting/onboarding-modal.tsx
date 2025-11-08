"use client";

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FASTING_EVENT } from '@/lib/fasting-data';

export function OnboardingModal() {
  const { currentUser, joinFast } = useFasting();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show onboarding if user is logged in but hasn't joined the fast
    // and hasn't dismissed the modal in this session
    if (currentUser && !currentUser.isFasting) {
      const dismissed = sessionStorage.getItem('onboarding_dismissed');
      if (!dismissed) {
        setOpen(true);
      }
    }
  }, [currentUser]);

  const handleJoinFast = () => {
    joinFast();
    setOpen(false);
    sessionStorage.removeItem('onboarding_dismissed');
  };

  const handleBrowseFirst = () => {
    setOpen(false);
    sessionStorage.setItem('onboarding_dismissed', 'true');
  };

  if (!currentUser || currentUser.isFasting) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">
            Welcome to Our Shared Fast
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <p className="text-center text-gray-600">
            {FASTING_EVENT.description}
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-900 mb-2">When?</h4>
            <p className="text-sm text-indigo-700">
              <strong>Starts:</strong> {FASTING_EVENT.startDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-sm text-indigo-700 mt-1">
              <strong>Ends:</strong> {FASTING_EVENT.endDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} at 12:00 PM EST
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">What you'll get:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Personal fasting timer and tracker</li>
              <li>• Daily scriptures and spiritual guidance</li>
              <li>• Private journal for reflections</li>
              <li>• Community support and encouragement</li>
              <li>• Ability to share your journey</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleJoinFast}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 gap-2"
              size="lg"
            >
              <Sparkles className="h-4 w-4" />
              Yes, I'm Joining!
            </Button>
            <Button
              onClick={handleBrowseFirst}
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Browse First
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500">
            You can join the fast anytime from your profile
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
