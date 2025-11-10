"use client";

import { useState, useEffect, useMemo } from 'react';
import { Play, Square, BookOpen, Smile, Meh, Frown, Sparkles, TrendingUp, Clock, Award, Calendar, Target, Flame, Trash2 } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Button } from '@/components/ui/button';
import { getDailyTip, getDailyScripture, getCurrentFastDay } from '@/lib/fasting-data';
import { FastingSession } from '@/lib/fasting-types';
import { WeightTracker } from './weight-tracker';
import { FastingZonesTimeline } from '@/components/fasting/fasting-zones-timeline';

export function FastingTracker() {
  const { currentUser, currentSession, fastingSessions, startFasting, endFasting, deleteFastingSession, addJournalEntry, journalEntries, deleteJournalEntry } = useFasting();
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [journalContent, setJournalContent] = useState('');
  const [selectedMood, setSelectedMood] = useState<'joyful' | 'peaceful' | 'struggling' | 'hopeful' | undefined>();
  const [shareToFeed, setShareToFeed] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [shareWithCommunity, setShareWithCommunity] = useState(true);

  const currentDay = getCurrentFastDay();
  const dailyTip = getDailyTip(currentDay);
  const dailyScripture = getDailyScripture(currentDay);

  // Calculate statistics from all sessions
  const statistics = useMemo(() => {
    const userSessions = fastingSessions.filter(s => s.userId === currentUser?.id);
    const completedSessions = userSessions.filter(s => !s.isActive && s.duration > 0);

    const totalTime = completedSessions.reduce((sum, session) => sum + session.duration, 0);
    const longestSession = completedSessions.reduce((max, session) =>
      session.duration > max ? session.duration : max, 0
    );
    const averageTime = completedSessions.length > 0 ? totalTime / completedSessions.length : 0;

    // Calculate current streak (consecutive days with at least one session)
    const sortedSessions = [...completedSessions].sort((a, b) =>
      new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
    );

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sortedSessions.length; i++) {
      const sessionDate = new Date(sortedSessions[i].startTime);
      sessionDate.setHours(0, 0, 0, 0);
      const daysDiff = Math.floor((today.getTime() - sessionDate.getTime()) / (1000 * 60 * 60 * 24));

      if (daysDiff === i) {
        streak++;
      } else {
        break;
      }
    }

    return {
      totalTime,
      completedCount: completedSessions.length,
      longestSession,
      averageTime,
      streak,
      completedSessions: sortedSessions,
    };
  }, [fastingSessions, currentUser]);

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

  const formatDurationText = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
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
        <div className="flex flex-col items-center gap-3">
          {!currentSession ? (
            <>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={shareWithCommunity}
                  onChange={(e) => setShareWithCommunity(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Share my progress with the community</span>
              </label>
              <Button
                onClick={() => startFasting(shareWithCommunity)}
                className="bg-green-600 hover:bg-green-700 gap-2"
                size="lg"
              >
                <Play className="h-5 w-5" />
                Start Fasting
              </Button>
            </>
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

      {/* Fasting Zones Timeline */}
      <FastingZonesTimeline
        elapsedTimeMs={elapsedTime}
        isActive={currentSession !== null}
      />

      {/* Statistics Dashboard */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            Your Progress
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Fasting Time */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-xs text-blue-600 font-medium">Total Time</span>
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {formatDurationText(statistics.totalTime)}
            </div>
          </div>

          {/* Completed Sessions */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Sessions</span>
            </div>
            <div className="text-2xl font-bold text-green-900">
              {statistics.completedCount}
            </div>
          </div>

          {/* Longest Session */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-purple-600" />
              <span className="text-xs text-purple-600 font-medium">Longest</span>
            </div>
            <div className="text-2xl font-bold text-purple-900">
              {formatDurationText(statistics.longestSession)}
            </div>
          </div>

          {/* Current Streak */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-4 w-4 text-orange-600" />
              <span className="text-xs text-orange-600 font-medium">Streak</span>
            </div>
            <div className="text-2xl font-bold text-orange-900">
              {statistics.streak} {statistics.streak === 1 ? 'day' : 'days'}
            </div>
          </div>
        </div>

        {/* Average Session */}
        {statistics.completedCount > 0 && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Session Duration</span>
              <span className="text-lg font-semibold text-gray-900">
                {formatDurationText(statistics.averageTime)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Milestones & Achievements */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-yellow-600" />
          Milestones
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* First Fast */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.completedCount >= 1
              ? 'border-yellow-400 bg-yellow-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xs font-medium text-gray-700">First Fast</div>
          </div>

          {/* 24 Hours Total */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.totalTime >= 24 * 60 * 60 * 1000
              ? 'border-green-400 bg-green-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">⏰</div>
            <div className="text-xs font-medium text-gray-700">24 Hours</div>
          </div>

          {/* 3 Day Streak */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.streak >= 3
              ? 'border-orange-400 bg-orange-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-xs font-medium text-gray-700">3 Day Streak</div>
          </div>

          {/* 5 Day Streak */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.streak >= 5
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">💪</div>
            <div className="text-xs font-medium text-gray-700">5 Day Streak</div>
          </div>

          {/* 3 Sessions */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.completedCount >= 3
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-xs font-medium text-gray-700">3 Sessions</div>
          </div>

          {/* 5 Sessions */}
          <div className={`border-2 rounded-lg p-3 text-center transition-all ${
            statistics.completedCount >= 5
              ? 'border-purple-400 bg-purple-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-xs font-medium text-gray-700">5 Sessions</div>
          </div>
        </div>
      </div>

      {/* Fasting History */}
      {statistics.completedSessions.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              Fasting History
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? 'Hide' : 'Show'} History
            </Button>
          </div>

          {showHistory && (
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {statistics.completedSessions.map((session, index) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {new Date(session.startTime).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(session.startTime).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                        {session.endTime && (
                          <> - {new Date(session.endTime).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                          })}</>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-indigo-600">
                        {formatDurationText(session.duration)}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this fasting session?')) {
                          deleteFastingSession(session.id);
                        }
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      title="Delete session"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showHistory && (
            <div className="text-center text-sm text-gray-500 py-4">
              Click &quot;Show History&quot; to view your past {statistics.completedCount} fasting {statistics.completedCount === 1 ? 'session' : 'sessions'}
            </div>
          )}
        </div>
      )}

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
                    <div className="flex items-center gap-2">
                      {entry.mood && (
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {entry.mood}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {new Date(entry.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this journal entry?')) {
                          deleteJournalEntry(entry.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">{entry.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Weight Tracking Section */}
      <WeightTracker />
    </div>
  );
}
