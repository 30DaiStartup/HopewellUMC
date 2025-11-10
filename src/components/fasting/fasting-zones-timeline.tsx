"use client";

import { useEffect, useState } from 'react';
import { Activity, Flame, Zap, Sparkles, Stars, Heart } from 'lucide-react';

interface FastingZone {
  id: string;
  name: string;
  startHours: number;
  endHours: number | null; // null means no end
  color: string;
  bgColor: string;
  borderColor: string;
  icon: typeof Activity;
  description: string;
  benefits: string[];
}

const FASTING_ZONES: FastingZone[] = [
  {
    id: 'anabolic',
    name: 'Anabolic State',
    startHours: 0,
    endHours: 4,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    icon: Heart,
    description: 'Digestion and nutrient absorption',
    benefits: [
      'Body is processing your last meal',
      'Insulin levels are elevated',
      'Nutrients being absorbed and stored',
    ],
  },
  {
    id: 'catabolic',
    name: 'Catabolic State',
    startHours: 4,
    endHours: 12,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    icon: Activity,
    description: 'Glycogen breakdown begins',
    benefits: [
      'Insulin levels dropping',
      'Body starts using glycogen stores',
      'Beginning to shift from fed to fasted state',
    ],
  },
  {
    id: 'fat-burning',
    name: 'Fat Burning',
    startHours: 12,
    endHours: 18,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    icon: Flame,
    description: 'Transitioning to fat as primary fuel',
    benefits: [
      'Glycogen stores becoming depleted',
      'Body shifting to burn stored fat',
      'Increased fat oxidation',
      'Growth hormone levels rising',
    ],
  },
  {
    id: 'ketosis',
    name: 'Ketosis',
    startHours: 18,
    endHours: 24,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    icon: Zap,
    description: 'Ketone production activated',
    benefits: [
      'Liver producing ketones from fat',
      'Brain using ketones for energy',
      'Mental clarity may increase',
      'Significant fat burning',
    ],
  },
  {
    id: 'deep-ketosis',
    name: 'Deep Ketosis',
    startHours: 24,
    endHours: 48,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-300',
    icon: Sparkles,
    description: 'Heightened metabolic state',
    benefits: [
      'Deep ketone production',
      'Enhanced autophagy beginning',
      'Peak mental clarity',
      'Cellular repair processes active',
      'Reduced inflammation',
    ],
  },
  {
    id: 'autophagy',
    name: 'Autophagy Zone',
    startHours: 48,
    endHours: null,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-300',
    icon: Stars,
    description: 'Deep cellular regeneration',
    benefits: [
      'Peak autophagy - cellular cleanup',
      'Damaged cell recycling',
      'Immune system regeneration',
      'Anti-aging benefits maximized',
      'Stem cell production increased',
    ],
  },
];

interface FastingZonesTimelineProps {
  elapsedTimeMs: number;
  isActive: boolean;
}

export function FastingZonesTimeline({ elapsedTimeMs, isActive }: FastingZonesTimelineProps) {
  const [currentZone, setCurrentZone] = useState<FastingZone | null>(null);
  const [hoursElapsed, setHoursElapsed] = useState(0);

  useEffect(() => {
    const hours = elapsedTimeMs / (1000 * 60 * 60);
    setHoursElapsed(hours);

    // Find current zone
    const zone = FASTING_ZONES.find(z => {
      if (z.endHours === null) {
        return hours >= z.startHours;
      }
      return hours >= z.startHours && hours < z.endHours;
    });

    setCurrentZone(zone || null);
  }, [elapsedTimeMs]);

  const getProgressInZone = (zone: FastingZone): number => {
    if (hoursElapsed < zone.startHours) return 0;
    if (zone.endHours === null) {
      // For the last zone (autophagy), show progress up to 72 hours
      const maxHours = 72;
      if (hoursElapsed >= maxHours) return 100;
      return ((hoursElapsed - zone.startHours) / (maxHours - zone.startHours)) * 100;
    }
    if (hoursElapsed >= zone.endHours) return 100;
    return ((hoursElapsed - zone.startHours) / (zone.endHours - zone.startHours)) * 100;
  };

  const getZoneStatus = (zone: FastingZone): 'completed' | 'current' | 'upcoming' => {
    if (zone.endHours === null) {
      return hoursElapsed >= zone.startHours ? 'current' : 'upcoming';
    }
    if (hoursElapsed >= zone.endHours) return 'completed';
    if (hoursElapsed >= zone.startHours) return 'current';
    return 'upcoming';
  };

  const formatHoursRemaining = (zone: FastingZone): string => {
    if (zone.endHours === null) return 'Ongoing';
    const remaining = zone.endHours - hoursElapsed;
    if (remaining <= 0) return 'Complete';
    if (remaining < 1) {
      const minutes = Math.floor(remaining * 60);
      return `${minutes}m remaining`;
    }
    const hours = Math.floor(remaining);
    const minutes = Math.floor((remaining - hours) * 60);
    return minutes > 0 ? `${hours}h ${minutes}m remaining` : `${hours}h remaining`;
  };

  if (!isActive) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center shadow-sm">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
          Fasting Zones Timeline
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          Start your fast to see your metabolic journey through the fasting zones
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 sm:p-6 text-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">Metabolic Journey</h3>
            <p className="text-indigo-100 text-xs sm:text-sm">Track your body&apos;s transformation</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl sm:text-3xl font-bold">{Math.floor(hoursElapsed)}h</div>
            <div className="text-indigo-100 text-xs sm:text-sm whitespace-nowrap">
              {Math.floor((hoursElapsed % 1) * 60)}m elapsed
            </div>
          </div>
        </div>
      </div>

      {/* Current Zone Highlight */}
      {currentZone && (
        <div className={`${currentZone.bgColor} border-b-2 ${currentZone.borderColor} p-4 sm:p-6`}>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={`${currentZone.color} bg-white rounded-full p-2 sm:p-3 shadow-md flex-shrink-0`}>
              <currentZone.icon className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start sm:items-center justify-between mb-2 gap-2 flex-wrap sm:flex-nowrap">
                <h4 className={`text-lg sm:text-xl font-bold ${currentZone.color}`}>
                  {currentZone.name}
                </h4>
                <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
                  {formatHoursRemaining(currentZone)}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3">{currentZone.description}</p>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h5 className="text-xs font-semibold text-gray-600 mb-2">
                  What&apos;s happening now:
                </h5>
                <ul className="space-y-1">
                  {currentZone.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className={`${currentZone.color} mt-1 flex-shrink-0`}>•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="p-4 sm:p-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Fasting Zones Timeline</h4>
        <div className="space-y-3 sm:space-y-4">
          {FASTING_ZONES.map((zone, index) => {
            const status = getZoneStatus(zone);
            const progress = getProgressInZone(zone);
            const Icon = zone.icon;

            return (
              <div key={zone.id} className="relative">
                {/* Connector line */}
                {index < FASTING_ZONES.length - 1 && (
                  <div
                    className={`absolute left-5 sm:left-6 top-10 sm:top-12 w-0.5 h-6 sm:h-8 ${
                      status === 'completed' ? 'bg-green-400' : 'bg-gray-200'
                    }`}
                  />
                )}

                <div
                  className={`border-2 rounded-lg p-3 sm:p-4 transition-all ${
                    status === 'current'
                      ? `${zone.borderColor} ${zone.bgColor} shadow-md`
                      : status === 'completed'
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    {/* Icon */}
                    <div
                      className={`rounded-full p-2 flex-shrink-0 ${
                        status === 'current'
                          ? `${zone.bgColor} ${zone.color}`
                          : status === 'completed'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center justify-between mb-1 gap-2 flex-wrap">
                        <h5
                          className={`font-semibold text-sm sm:text-base ${
                            status === 'current'
                              ? zone.color
                              : status === 'completed'
                              ? 'text-green-700'
                              : 'text-gray-500'
                          }`}
                        >
                          {zone.name}
                        </h5>
                        <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                          {zone.startHours}h - {zone.endHours ? `${zone.endHours}h` : '∞'}
                        </span>
                      </div>

                      <p
                        className={`text-xs sm:text-sm mb-2 ${
                          status === 'upcoming' ? 'text-gray-500' : 'text-gray-700'
                        }`}
                      >
                        {zone.description}
                      </p>

                      {/* Progress bar */}
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            status === 'completed'
                              ? 'bg-green-500'
                              : status === 'current'
                              ? zone.color.replace('text-', 'bg-')
                              : 'bg-gray-200'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Status indicator */}
                      {status === 'current' && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <div className={`w-2 h-2 rounded-full ${zone.color.replace('text-', 'bg-')} animate-pulse`} />
                            <span className={`text-xs font-medium ${zone.color}`}>
                              Active now - {Math.floor(progress)}% complete
                            </span>
                          </div>
                        </div>
                      )}

                      {status === 'completed' && (
                        <div className="mt-2">
                          <span className="text-xs font-medium text-green-600">
                            ✓ Completed
                          </span>
                        </div>
                      )}

                      {status === 'upcoming' && (
                        <div className="mt-2">
                          <span className="text-xs text-gray-500">
                            Starts in {Math.floor(zone.startHours - hoursElapsed)}h{' '}
                            {Math.floor(((zone.startHours - hoursElapsed) % 1) * 60)}m
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Educational Note */}
      <div className="bg-gray-50 border-t border-gray-200 p-3 sm:p-4">
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          <strong>Note:</strong> Fasting zones vary by individual based on metabolism, activity level, and previous meal composition.
          These timelines represent typical ranges for most people.
        </p>
      </div>
    </div>
  );
}
