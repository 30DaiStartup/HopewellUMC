"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-8">
          <div className="aspect-video relative">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <img
                  src="/images/children-ministry.jpg"
                  alt="Sermon thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group bg-[#0b717f] hover:bg-[#09646a] text-white rounded-full p-6 transition-all transform hover:scale-110 shadow-xl"
                  >
                    <Play className="h-12 w-12 fill-current" />
                  </button>
                  <span className="absolute bottom-8 left-8 text-white text-2xl md:text-3xl font-bold">
                    Watch the Latest Sermon
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <p className="text-white">Video player would load here</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-[#0b717f] text-[#0b717f] hover:bg-[#0b717f] hover:text-white px-8 py-6 text-base"
          >
            ALL SERMONS
          </Button>
        </div>
      </div>
    </section>
  );
}
