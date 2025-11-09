import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LinkPreview } from "./fasting-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Detects and extracts the first URL from a text string
 * @param text - The text to search for URLs
 * @returns The first URL found, or null if no URL is found
 */
export function detectUrl(text: string): string | null {
  // URL regex pattern that matches http(s) URLs
  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const match = text.match(urlRegex);
  return match ? match[0] : null;
}

/**
 * Fetches link preview metadata for a given URL
 * @param url - The URL to fetch preview data for
 * @returns LinkPreview object or null if fetch fails
 */
export async function fetchLinkPreview(url: string): Promise<LinkPreview | null> {
  try {
    const response = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);

    if (!response.ok) {
      console.error('Failed to fetch link preview:', response.statusText);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching link preview:', error);
    return null;
  }
}
