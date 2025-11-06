"use client";

import { useState, useEffect } from "react";

const images = [
  {
    url: "/images/church-exterior.jpg",
    alt: "Hopewell UMC building",
  },
  {
    url: "/images/children-ministry.jpg",
    alt: "Children's ministry",
  },
  {
    url: "/images/volunteers-packing.jpg",
    alt: "Volunteers serving",
  },
  {
    url: "/images/church-exterior.jpg",
    alt: "Hopewell UMC building",
  },
  {
    url: "/images/children-ministry.jpg",
    alt: "Children's ministry",
  },
  {
    url: "/images/volunteers-packing.jpg",
    alt: "Volunteers serving",
  },
];

export function ImageCarousel() {
  const [offset, setOffset] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const imageWidth = 420; // Width of each image + gap
        const maxOffset = (images.length / 2) * imageWidth;
        const newOffset = prev + 0.8;

        // Reset to beginning when halfway through (for infinite loop effect)
        return newOffset >= maxOffset ? 0 : newOffset;
      });
    }, 20); // Smooth 20ms interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white pt-4 pb-12 overflow-hidden">
      {/* Carousel Container with Smooth Parabolic Curves */}
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          height: '450px',
          clipPath: 'polygon(0% 10%, 10% 11%, 20% 12%, 30% 13%, 40% 14%, 45% 14.5%, 50% 15%, 55% 14.5%, 60% 14%, 70% 13%, 80% 12%, 90% 11%, 100% 10%, 100% 90%, 90% 89%, 80% 88%, 70% 87%, 60% 86%, 55% 85.5%, 50% 85%, 45% 85.5%, 40% 86%, 30% 87%, 20% 88%, 10% 89%, 0% 90%)',
          WebkitClipPath: 'polygon(0% 10%, 10% 11%, 20% 12%, 30% 13%, 40% 14%, 45% 14.5%, 50% 15%, 55% 14.5%, 60% 14%, 70% 13%, 80% 12%, 90% 11%, 100% 10%, 100% 90%, 90% 89%, 80% 88%, 70% 87%, 60% 86%, 55% 85.5%, 50% 85%, 45% 85.5%, 40% 86%, 30% 87%, 20% 88%, 10% 89%, 0% 90%)',
        }}
      >
        {/* Scrolling Images Container */}
        <div
          className="flex gap-8 absolute left-0 top-0 h-full items-center px-4"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="flex-shrink-0 overflow-hidden rounded-lg shadow-xl"
              style={{
                width: '400px',
                height: '400px',
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
