"use client";

import { useState } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface GifPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (gifUrl: string) => void;
}

// Using a demo API key - in production, you should use your own API key
const GIPHY_API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY || 'sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh';
const gf = new GiphyFetch(GIPHY_API_KEY);

export function GifPicker({ open, onClose, onSelect }: GifPickerProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchGifs = (offset: number) => {
    if (searchTerm) {
      return gf.search(searchTerm, { offset, limit: 10 });
    }
    return gf.trending({ offset, limit: 10 });
  };

  const handleGifClick = (gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => {
    e.preventDefault();
    // Get the original GIF URL
    const gifUrl = gif.images.original.url;
    onSelect(gifUrl);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Choose a GIF</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for GIFs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* GIF Grid */}
          <div className="overflow-y-auto max-h-[50vh] -mx-6 px-6">
            <Grid
              key={searchTerm}
              width={620}
              columns={3}
              gutter={6}
              fetchGifs={fetchGifs}
              onGifClick={handleGifClick}
            />
          </div>

          <p className="text-xs text-gray-500 text-center">
            Powered by GIPHY
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
