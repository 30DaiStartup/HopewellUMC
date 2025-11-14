"use client";

import { useState, useEffect, useMemo } from 'react';
import { Play, Square, BookOpen, Smile, Meh, Frown, Sparkles, TrendingUp, Clock, Award, Calendar, Target, Flame, Trash2 } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Button } from '@/components/ui/button';
import { getDailyTip, getDailyScripture, getDailyPrayerSuggestion, getCurrentFastDay } from '@/lib/fasting-data';
import { FastingSession } from '@/lib/fasting-types';
// import { WeightTracker } from './weight-tracker';
import { FastingZonesTimeline } from '@/components/fasting/fasting-zones-timeline';

// Feature flag for weight tracking - set to true to re-enable
const ENABLE_WEIGHT_TRACKING = false;

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
  const dailyPrayerSuggestion = getDailyPrayerSuggestion(currentDay);

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
      <div className="sacred-card p-12 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/5">
          <BookOpen className="h-10 w-10 text-primary/60" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3 font-serif">
          Join the Fast
        </h3>
        <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
          This tracker is available to those participating in the fast.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Timer Section */}
      <div className="sacred-card sacred-card-hover p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-serif">
          Your Fasting Journey
        </h3>

        {/* Timer Display */}
        <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 sm:p-10 mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
          <div className="relative flex justify-center gap-3 sm:gap-6 mb-6">
            {[
              { value: duration.hours, label: 'Hours' },
              { value: duration.minutes, label: 'Minutes' },
              { value: duration.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={item.label} className="flex items-center">
                {index > 0 && (
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary/40 mx-2 font-serif">:</div>
                )}
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-serif tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-primary/70 mt-2 uppercase tracking-wide font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-2 bg-primary/20 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000"
              style={{ width: currentSession ? '100%' : '0%' }}
            />
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-col items-center gap-4">
          {!currentSession ? (
            <>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                <input
                  type="checkbox"
                  checked={shareWithCommunity}
                  onChange={(e) => setShareWithCommunity(e.target.checked)}
                  className="rounded border-border text-primary focus:ring-primary focus:ring-offset-2"
                />
                <span>Share my progress with the community</span>
              </label>
              <Button
                onClick={() => startFasting(shareWithCommunity)}
                className="bg-green-600 hover:bg-green-700 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 divine-glow text-white"
                size="lg"
              >
                <Play className="h-5 w-5" />
                Start Fasting
              </Button>
            </>
          ) : (
            <Button
              onClick={endFasting}
              className="bg-red-600 hover:bg-red-700 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
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
      <div className="sacred-card sacred-card-hover p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-serif">
            Your Progress
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Total Fasting Time */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-blue-500/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-xs text-blue-700 font-semibold uppercase tracking-wide">Total Time</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-900 font-serif tabular-nums">
              {formatDurationText(statistics.totalTime)}
            </div>
          </div>

          {/* Completed Sessions */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-500/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-green-600" />
              <span className="text-xs text-green-700 font-semibold uppercase tracking-wide">Sessions</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-green-900 font-serif tabular-nums">
              {statistics.completedCount}
            </div>
          </div>

          {/* Longest Session */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 border border-purple-500/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-xs text-purple-700 font-semibold uppercase tracking-wide">Longest</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-900 font-serif tabular-nums">
              {formatDurationText(statistics.longestSession)}
            </div>
          </div>

          {/* Current Streak */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 border border-orange-500/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="h-5 w-5 text-orange-600" />
              <span className="text-xs text-orange-700 font-semibold uppercase tracking-wide">Streak</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-900 font-serif tabular-nums">
              {statistics.streak} {statistics.streak === 1 ? 'day' : 'days'}
            </div>
          </div>
        </div>

        {/* Average Session */}
        {statistics.completedCount > 0 && (
          <div className="mt-6 bg-secondary/50 rounded-xl p-5 border border-border/50">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-medium">Average Session Duration</span>
              <span className="text-xl font-semibold text-foreground font-serif tabular-nums">
                {formatDurationText(statistics.averageTime)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Milestones & Achievements */}
      <div className="sacred-card sacred-card-hover p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Award className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-foreground font-serif">
            Milestones
          </h3>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {/* First Fast */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.completedCount >= 1
              ? 'border-yellow-400 bg-yellow-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">🎯</div>
            <div className="text-xs font-medium text-gray-700">First Fast</div>
          </div>

          {/* 24 Hours Total */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.totalTime >= 24 * 60 * 60 * 1000
              ? 'border-green-400 bg-green-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">⏰</div>
            <div className="text-xs font-medium text-gray-700">24 Hours</div>
          </div>

          {/* 3 Day Streak */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.streak >= 3
              ? 'border-orange-400 bg-orange-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">🔥</div>
            <div className="text-xs font-medium text-gray-700">3 Day Streak</div>
          </div>

          {/* 5 Day Streak */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.streak >= 5
              ? 'border-red-400 bg-red-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">💪</div>
            <div className="text-xs font-medium text-gray-700">5 Day Streak</div>
          </div>

          {/* 3 Sessions */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.completedCount >= 3
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">⭐</div>
            <div className="text-xs font-medium text-gray-700">3 Sessions</div>
          </div>

          {/* 5 Sessions */}
          <div className={`border-2 rounded-lg p-3 sm:p-4 text-center transition-all ${
            statistics.completedCount >= 5
              ? 'border-purple-400 bg-purple-50'
              : 'border-gray-200 bg-gray-50 opacity-50'
          }`}>
            <div className="text-2xl sm:text-3xl mb-1">🏆</div>
            <div className="text-xs font-medium text-gray-700">5 Sessions</div>
          </div>
        </div>
      </div>

      {/* Fasting History */}
      {statistics.completedSessions.length > 0 && (
        <div className="sacred-card sacred-card-hover p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground font-serif">
                Fasting History
              </h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="text-muted-foreground hover:text-foreground"
            >
              {showHistory ? 'Hide' : 'Show'} History
            </Button>
          </div>

          {showHistory && (
            <div className="space-y-3 max-h-[60vh] sm:max-h-[400px] overflow-y-auto pr-2">
              {statistics.completedSessions.map((session, index) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between bg-secondary/40 p-4 rounded-xl hover:bg-secondary/60 transition-all duration-300 border border-border/30"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="bg-primary/15 text-primary rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-sm font-bold ring-2 ring-primary/10">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-foreground truncate">
                        {new Date(session.startTime).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
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
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary font-serif tabular-nums">
                        {formatDurationText(session.duration)}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this fasting session?')) {
                          deleteFastingSession(session.id);
                        }
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1 min-w-[32px] min-h-[32px] flex items-center justify-center"
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
            <div className="text-center text-sm text-muted-foreground py-6">
              Click &quot;Show History&quot; to view your past {statistics.completedCount} fasting {statistics.completedCount === 1 ? 'session' : 'sessions'}
            </div>
          )}
        </div>
      )}

      {/* Daily Content */}
      <div className="sacred-card sacred-card-hover p-6 space-y-8">
        <div>
          <h4 className="font-serif font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
            <span className="text-primary">✦</span>
            Daily Scripture
          </h4>
          <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-6xl text-primary/5 font-serif">"</div>
            <p className="text-sm font-semibold text-primary mb-3">{dailyScripture.reference}</p>
            <p className="text-foreground/90 italic leading-relaxed relative z-10">{dailyScripture.text}</p>
          </div>
        </div>

        <div className="ornamental-divider">
          <span>✦</span>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
            <span className="text-accent">✦</span>
            Daily Tip
          </h4>
          <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-xl">
            <p className="text-sm font-semibold text-accent-foreground mb-3">{dailyTip.title}</p>
            <p className="text-foreground/90 leading-relaxed">{dailyTip.content}</p>
          </div>
        </div>

        <div className="ornamental-divider">
          <span>✦</span>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
            <span className="text-green-600">✦</span>
            Prayer Suggestion
          </h4>
          <div className="bg-green-500/5 border-l-4 border-green-600 p-5 rounded-xl">
            <p className="text-sm font-semibold text-green-900 mb-3">Based on {dailyPrayerSuggestion.scriptureReference}</p>
            <p className="text-foreground/90 leading-relaxed">{dailyPrayerSuggestion.prayer}</p>
          </div>
        </div>
      </div>

      {/* Journal Section */}
      <div className="sacred-card sacred-card-hover p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h4 className="font-serif font-semibold text-foreground text-xl">Personal Journal</h4>
        </div>

        {/* Mood Selection */}
        <div className="mb-5">
          <label className="text-sm text-muted-foreground mb-3 block font-medium">How are you feeling?</label>
          <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 min-h-[90px] sm:min-h-0 hover:scale-105 ${
                  selectedMood === mood.value
                    ? 'border-primary bg-primary/10 shadow-md'
                    : 'border-border/50 hover:border-primary/30 bg-secondary/30'
                }`}
              >
                <mood.icon className={`h-7 w-7 ${mood.color}`} />
                <span className="text-xs sm:text-sm mt-2 text-foreground font-medium">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Journal Input */}
        <textarea
          value={journalContent}
          onChange={(e) => setJournalContent(e.target.value)}
          placeholder="What stirs in your spirit? Reflect on your journey..."
          className="w-full min-h-[140px] p-4 border border-border/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-card/50 text-foreground placeholder:text-muted-foreground mb-4 transition-all duration-300"
        />

        {/* Share Option */}
        <label className="flex items-center gap-2 mb-5 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
          <input
            type="checkbox"
            checked={shareToFeed}
            onChange={(e) => setShareToFeed(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary focus:ring-offset-2"
          />
          <span>Share this entry with the community</span>
        </label>

        <Button
          onClick={handleAddJournalEntry}
          disabled={!journalContent.trim()}
          className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 divine-glow"
        >
          Save Entry
        </Button>

        {/* Recent Entries */}
        {userEntries.length > 0 && (
          <div className="mt-8">
            <div className="ornamental-divider">
              <span>Recent Entries</span>
            </div>
            <div className="space-y-3 max-h-[50vh] sm:max-h-[300px] overflow-y-auto pr-2">
              {userEntries.slice().reverse().map((entry) => (
                <div key={entry.id} className="bg-secondary/40 p-4 rounded-xl border border-border/30 hover:border-border/50 transition-all">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2 flex-wrap min-w-0 flex-1">
                      {entry.mood && (
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap font-medium">
                          {entry.mood}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(entry.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this journal entry?')) {
                          deleteJournalEntry(entry.id);
                        }
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center flex-shrink-0"
                      title="Delete entry"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-foreground/90 break-words leading-relaxed">{entry.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Weight Tracking Section - Temporarily disabled, can be re-enabled by setting ENABLE_WEIGHT_TRACKING to true */}
      {/* {ENABLE_WEIGHT_TRACKING && <WeightTracker />} */}
    </div>
  );
}
