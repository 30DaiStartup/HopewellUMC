"use client";

import { useState, useEffect } from 'react';
import { FASTING_EVENT } from '@/lib/fasting-data';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  const [status, setStatus] = useState<'before' | 'during' | 'after'>('before');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const startTime = FASTING_EVENT.startDate.getTime();
      const endTime = FASTING_EVENT.endDate.getTime();

      // Determine status
      if (now < startTime) {
        setStatus('before');
      } else if (now >= startTime && now < endTime) {
        setStatus('during');
      } else {
        setStatus('after');
        return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
      }

      // Always count down to the end time (unless after)
      const difference = endTime - now;
      return calculateTimeParts(difference);
    };

    const calculateTimeParts = (difference: number): TimeRemaining => {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, total: difference };
    };

    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());

    // Update every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (status === 'after') {
    return (
      <div className="sacred-gradient-bg rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-block mb-4 text-6xl">🙏</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 divine-shimmer">
            Fast Completed
          </h2>
          <p className="text-white/90 text-lg sm:text-xl max-w-md mx-auto leading-relaxed">
            Thank you for your dedication and participation in this sacred journey
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="sacred-gradient-bg rounded-3xl p-6 sm:p-8 md:p-10 text-center text-white shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-white/95 leading-tight font-serif">
          Countdown to Sunday, November 16 at Noon EST
        </h2>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
          {[
            { value: timeRemaining.days, label: 'Days' },
            { value: timeRemaining.hours, label: 'Hours' },
            { value: timeRemaining.minutes, label: 'Minutes' },
            { value: timeRemaining.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/20 backdrop-blur-md rounded-2xl py-4 sm:py-6 px-2 sm:px-4 border border-white/30 shadow-lg hover:bg-white/25 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 font-serif tabular-nums">
                    {formatNumber(item.value)}
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/90 uppercase tracking-widest mt-3 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 ornamental-divider">
          <span className="text-white/80">✦</span>
        </div>

        <p className="mt-4 text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {FASTING_EVENT.description}
        </p>
      </div>
    </div>
  );
}
