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
      <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Fast Completed! 🙏</h2>
        <p className="text-indigo-100 text-lg">
          Thank you for your dedication and participation
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-xl">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-100">
        Countdown to Sunday, November 16 at Noon EST
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold mb-1 bg-white/20 rounded-lg py-3 backdrop-blur-sm">
            {formatNumber(timeRemaining.days)}
          </div>
          <div className="text-sm md:text-base text-indigo-100 uppercase tracking-wide">
            Days
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold mb-1 bg-white/20 rounded-lg py-3 backdrop-blur-sm">
            {formatNumber(timeRemaining.hours)}
          </div>
          <div className="text-sm md:text-base text-indigo-100 uppercase tracking-wide">
            Hours
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold mb-1 bg-white/20 rounded-lg py-3 backdrop-blur-sm">
            {formatNumber(timeRemaining.minutes)}
          </div>
          <div className="text-sm md:text-base text-indigo-100 uppercase tracking-wide">
            Mins
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold mb-1 bg-white/20 rounded-lg py-3 backdrop-blur-sm">
            {formatNumber(timeRemaining.seconds)}
          </div>
          <div className="text-sm md:text-base text-indigo-100 uppercase tracking-wide">
            Secs
          </div>
        </div>
      </div>

      <p className="mt-6 text-indigo-50 text-sm md:text-base">
        {FASTING_EVENT.description}
      </p>
    </div>
  );
}
