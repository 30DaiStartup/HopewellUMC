"use client";

import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrayerRequest {
  id: string;
  name: string;
  prayerRequest: string;
  category: string;
  createdAt: Date;
}

const categoryColors: Record<string, string> = {
  health: "bg-blue-100 text-blue-800",
  praise: "bg-green-100 text-green-800",
  grief: "bg-purple-100 text-purple-800",
  travel: "bg-yellow-100 text-yellow-800",
  salvation: "bg-pink-100 text-pink-800",
  missions: "bg-orange-100 text-orange-800",
  nursing: "bg-teal-100 text-teal-800",
  military: "bg-red-100 text-red-800",
  persecution: "bg-indigo-100 text-indigo-800",
  other: "bg-gray-100 text-gray-800",
};

const categoryLabels: Record<string, string> = {
  health: "Health/Hospital",
  praise: "Praise",
  grief: "Grief",
  travel: "Travel",
  salvation: "Salvation",
  missions: "Missions",
  nursing: "Nursing Care",
  military: "Military Personnel",
  persecution: "Persecution",
  other: "Other",
};

export function PrayerCarousel() {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerRequests = async () => {
      if (!db) {
        setError("Prayer requests are currently unavailable");
        setIsLoading(false);
        return;
      }

      try {
        // Calculate date from 7 days ago
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Query for public prayer requests from last 7 days
        const q = query(
          collection(db, "prayerRequests"),
          where("isPublic", "==", true),
          where("status", "==", "active"),
          where("createdAt", ">=", Timestamp.fromDate(sevenDaysAgo)),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);
        const requests: PrayerRequest[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          requests.push({
            id: doc.id,
            name: data.name || "Anonymous",
            prayerRequest: data.prayerRequest,
            category: data.category || "other",
            createdAt: data.createdAt?.toDate() || new Date(),
          });
        });

        setPrayerRequests(requests);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching prayer requests:", err);
        setError("Unable to load prayer requests");
        setIsLoading(false);
      }
    };

    fetchPrayerRequests();
  }, []);

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    if (prayerRequests.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % prayerRequests.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [prayerRequests.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? prayerRequests.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % prayerRequests.length);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="w-full bg-white/10 backdrop-blur rounded-lg p-8 text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-white/20 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
          <div className="h-4 bg-white/20 rounded w-5/6 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || prayerRequests.length === 0) {
    return (
      <div className="w-full bg-white/10 backdrop-blur rounded-lg p-8 text-center">
        <p className="text-white/80 text-lg">
          {error || "No public prayer requests from the last 7 days. Check back soon!"}
        </p>
      </div>
    );
  }

  const currentRequest = prayerRequests[currentIndex];

  return (
    <div className="w-full">
      <div className="bg-white/10 backdrop-blur rounded-lg p-6 md:p-8 relative">
        {/* Prayer Request Content */}
        <div className="min-h-[200px] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {currentRequest.name}
              </h3>
              <span
                className={`${
                  categoryColors[currentRequest.category] || categoryColors.other
                } text-xs font-semibold px-3 py-1 rounded-full`}
              >
                {categoryLabels[currentRequest.category] || categoryLabels.other}
              </span>
            </div>

            <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
              {currentRequest.prayerRequest}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-white/70">
              {formatDate(currentRequest.createdAt)}
            </p>

            {/* Pagination Dots */}
            {prayerRequests.length > 1 && (
              <div className="flex gap-2">
                {prayerRequests.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to prayer request ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {prayerRequests.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-10 w-10"
              aria-label="Previous prayer request"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full h-10 w-10"
              aria-label="Next prayer request"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Counter */}
      {prayerRequests.length > 1 && (
        <p className="text-center text-white/70 text-sm mt-4">
          {currentIndex + 1} of {prayerRequests.length} prayer requests
        </p>
      )}
    </div>
  );
}
