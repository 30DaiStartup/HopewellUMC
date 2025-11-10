"use client";

import { useState, useEffect, useRef } from "react";

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
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  // Calculate responsive image width
  useEffect(() => {
    const updateImageWidth = () => {
      if (imageRef.current) {
        const width = imageRef.current.offsetWidth;
        setImageWidth(width + 32); // width + gap (8 * 4 = 32px)
      }
    };

    updateImageWidth();
    window.addEventListener('resize', updateImageWidth);
    return () => window.removeEventListener('resize', updateImageWidth);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (imageWidth === 0) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = (images.length / 2) * imageWidth;
        const newOffset = prev + 0.8;

        // Reset to beginning when halfway through (for infinite loop effect)
        return newOffset >= maxOffset ? 0 : newOffset;
      });
    }, 20); // Smooth 20ms interval

    return () => clearInterval(interval);
  }, [imageWidth]);

  return (
    <section className="relative bg-white pt-4 pb-8 md:pb-12 overflow-hidden">
      {/* Carousel Container with Smooth Parabolic Curves */}
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          height: 'clamp(250px, 60vw, 450px)',
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
              ref={index === 0 ? imageRef : null}
              className="flex-shrink-0 overflow-hidden rounded-lg shadow-xl w-[70vw] max-w-[400px] aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
