"use client";

import { useState, useEffect } from 'react';
import { Play, Square, BookOpen, Smile, Meh, Frown, Sparkles } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Button } from '@/components/ui/button';
import { getDailyTip, getDailyScripture, getCurrentFastDay } from '@/lib/fasting-data';

export function FastingTracker() {
  const { currentUser, currentSession, startFasting, endFasting, addJournalEntry, journalEntries } = useFasting();
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [journalContent, setJournalContent] = useState('');
  const [selectedMood, setSelectedMood] = useState<'joyful' | 'peaceful' | 'struggling' | 'hopeful' | undefined>();
  const [shareToFeed, setShareToFeed] = useState(false);

  const currentDay = getCurrentFastDay();
  const dailyTip = getDailyTip(currentDay);
  const dailyScripture = getDailyScripture(currentDay);

  // Calculate elapsed time
  useEffect(() => {
    if (!currentSession) {
      setElapsedTime(0);
      return;
    }

    const updateElapsed = () => {
      const start = new Date(currentSession.startTime).getTime();
      const now = new Date().getTime();
      setElapsedTime(now - start);
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, [currentSession]);

  const formatDuration = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const duration = formatDuration(elapsedTime);

  const handleAddJournalEntry = () => {
    if (!journalContent.trim()) {
      alert('Please write something in your journal');
      return;
    }

    addJournalEntry(journalContent, selectedMood, shareToFeed);

    // Reset form
    setJournalContent('');
    setSelectedMood(undefined);
    setShareToFeed(false);

    alert('Journal entry saved!');
  };

  const userEntries = journalEntries.filter(e => e.userId === currentUser?.id);

  const moods = [
    { value: 'joyful' as const, icon: Smile, label: 'Joyful', color: 'text-yellow-500' },
    { value: 'peaceful' as const, icon: Sparkles, label: 'Peaceful', color: 'text-blue-500' },
    { value: 'struggling' as const, icon: Frown, label: 'Struggling', color: 'text-orange-500' },
    { value: 'hopeful' as const, icon: Sparkles, label: 'Hopeful', color: 'text-green-500' },
  ];

  if (!currentUser?.isFasting) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Join the Fast
        </h3>
        <p className="text-gray-600">
          This tracker is available to those participating in the fast.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Timer Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Your Fasting Journey
        </h3>

        {/* Timer Display */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-8 mb-6">
          <div className="flex justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{duration.hours}</div>
              <div className="text-sm text-indigo-600 mt-1">Hours</div>
            </div>
            <div className="text-4xl font-bold text-indigo-600">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{duration.minutes}</div>
              <div className="text-sm text-indigo-600 mt-1">Minutes</div>
            </div>
            <div className="text-4xl font-bold text-indigo-600">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">{duration.seconds}</div>
              <div className="text-sm text-indigo-600 mt-1">Seconds</div>
            </div>
          </div>

          <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-1000"
              style={{ width: currentSession ? '100%' : '0%' }}
            />
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3 justify-center">
          {!currentSession ? (
            <Button
              onClick={startFasting}
              className="bg-green-600 hover:bg-green-700 gap-2"
              size="lg"
            >
              <Play className="h-5 w-5" />
              Start Fasting
            </Button>
          ) : (
            <Button
              onClick={endFasting}
              className="bg-red-600 hover:bg-red-700 gap-2"
              size="lg"
            >
              <Square className="h-5 w-5" />
              End Fast
            </Button>
          )}
        </div>
      </div>

      {/* Daily Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-4">Daily Scripture</h4>
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
          <p className="text-sm font-semibold text-indigo-900 mb-2">{dailyScripture.reference}</p>
          <p className="text-gray-700 italic">{dailyScripture.text}</p>
        </div>

        <h4 className="font-semibold text-gray-900 mt-6 mb-4">Daily Tip</h4>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
          <p className="text-sm font-semibold text-amber-900 mb-2">{dailyTip.title}</p>
          <p className="text-gray-700">{dailyTip.content}</p>
        </div>
      </div>

      {/* Journal Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-4">Personal Journal</h4>

        {/* Mood Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 mb-2 block">How are you feeling?</label>
          <div className="flex gap-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                  selectedMood === mood.value
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <mood.icon className={`h-6 w-6 ${mood.color}`} />
                <span className="text-xs mt-1 text-gray-600">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Journal Input */}
        <textarea
          value={journalContent}
          onChange={(e) => setJournalContent(e.target.value)}
          placeholder="What stirs in your spirit? Reflect on your journey..."
          className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
        />

        {/* Share Option */}
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={shareToFeed}
            onChange={(e) => setShareToFeed(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm text-gray-700">Share this entry with the community</span>
        </label>

        <Button
          onClick={handleAddJournalEntry}
          disabled={!journalContent.trim()}
          className="w-full"
        >
          Save Entry
        </Button>

        {/* Recent Entries */}
        {userEntries.length > 0 && (
          <div className="mt-6">
            <h5 className="text-sm font-semibold text-gray-700 mb-3">Recent Entries</h5>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {userEntries.slice().reverse().map((entry) => (
                <div key={entry.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {entry.mood && (
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {entry.mood}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{entry.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
