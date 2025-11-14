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
    <div className="sacred-card sacred-card-hover p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <UserIcon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground font-serif">
          Participants
        </h3>
        <span className="ml-auto text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          {participants.length}
        </span>
      </div>

      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-300 group relative"
          >
            {/* Avatar */}
            <div className="relative w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold shrink-0 overflow-hidden ring-2 ring-primary/10 group-hover:ring-primary/20 transition-all">
              {participant.avatar ? (
                <Image
                  src={participant.avatar}
                  alt={participant.displayName}
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{participant.displayName.charAt(0).toUpperCase()}</span>
              )}
              {/* Status Badge */}
              {participant.isFasting && (
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full shrink-0 ring-2 ring-card divine-pulse"
                  title="Currently fasting"
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate flex items-center gap-2">
                {participant.displayName}
                {participant.isAdmin && (
                  <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                    Admin
                  </span>
                )}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatJoinDate(participant.joinedAt)}
              </p>
            </div>
          </div>
        ))}

        {participants.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
              <UserIcon className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <p className="font-medium">No participants yet</p>
            <p className="text-sm mt-1">Be the first to join!</p>
          </div>
        )}
      </div>
    </div>
  );
}
