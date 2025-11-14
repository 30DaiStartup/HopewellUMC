"use client";

import { User as UserIcon } from 'lucide-react';
import Image from 'next/image';
import { useFasting } from '@/contexts/fasting-context';

export function ParticipantList() {
  const { participants } = useFasting();

  const formatJoinDate = (date: Date) => {
    const joinDate = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - joinDate.getTime();
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffDays === 0) return 'Joined today';
    if (diffDays === 1) return 'Joined yesterday';
    return `Joined ${diffDays} days ago`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <UserIcon className="h-5 w-5 text-[#0b5a7f]" />
        <h3 className="text-lg font-semibold text-gray-900">
          Participants ({participants.length})
        </h3>
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#0b5a7f]/20 flex items-center justify-center text-[#0b5a7f] font-semibold shrink-0 overflow-hidden">
              {participant.avatar ? (
                <Image
                  src={participant.avatar}
                  alt={participant.displayName}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{participant.displayName.charAt(0).toUpperCase()}</span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {participant.displayName}
                {participant.isAdmin && (
                  <span className="ml-2 text-xs bg-[#0b5a7f]/20 text-[#094e6d] px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-500">
                {formatJoinDate(participant.joinedAt)}
              </p>
            </div>

            {/* Status Badge */}
            {participant.isFasting && (
              <div className="w-3 h-3 bg-green-500 rounded-full shrink-0" title="Currently fasting" />
            )}
          </div>
        ))}

        {participants.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No participants yet</p>
            <p className="text-sm mt-1">Be the first to join!</p>
          </div>
        )}
      </div>
    </div>
  );
}
