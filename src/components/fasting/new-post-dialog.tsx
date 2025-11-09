"use client";

import { useState, useEffect } from 'react';
import { Plus, Image as ImageIcon, X, Link as LinkIcon } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { detectUrl, fetchLinkPreview } from '@/lib/utils';
import type { LinkPreview } from '@/lib/fasting-types';

export function NewPostDialog() {
  const { currentUser, addPost } = useFasting();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [linkPreview, setLinkPreview] = useState<LinkPreview | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  // Detect URLs and fetch link previews
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const url = detectUrl(content);

      if (url && url !== linkPreview?.url) {
        setIsLoadingPreview(true);
        const preview = await fetchLinkPreview(url);
        setLinkPreview(preview);
        setIsLoadingPreview(false);
      } else if (!url && linkPreview) {
        setLinkPreview(null);
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timeoutId);
  }, [content]);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    // Validate file type
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      alert('Please upload an image or video file');
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result as string);
      setMediaType(isImage ? 'image' : 'video');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!content.trim() && !mediaPreview) {
      alert('Please add some content or media');
      return;
    }

    addPost(content, mediaPreview || undefined, mediaType || undefined, linkPreview || undefined);

    // Reset form
    setContent('');
    setMediaPreview(null);
    setMediaType(null);
    setLinkPreview(null);
    setOpen(false);
  };

  const handleRemoveMedia = () => {
    setMediaPreview(null);
    setMediaType(null);
  };

  const handleRemoveLinkPreview = () => {
    setLinkPreview(null);
  };

  if (!currentUser?.isFasting) {
    return (
      <Button
        disabled
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gray-300 cursor-not-allowed z-50"
        title="Join the fast to create posts"
      >
        <Plus className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 z-50"
          title="Create a new post"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Share Your Journey</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
              {currentUser.displayName.charAt(0).toUpperCase()}
            </div>
            <p className="font-semibold text-gray-900">{currentUser.displayName}</p>
          </div>

          {/* Content Input */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your heart? Share your reflections, struggles, or victories..."
            className="w-full min-h-[150px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Media Preview */}
          {mediaPreview && (
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <button
                onClick={handleRemoveMedia}
                className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
              >
                <X className="h-4 w-4" />
              </button>

              {mediaType === 'image' ? (
                <img
                  src={mediaPreview}
                  alt="Upload preview"
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              ) : (
                <video
                  src={mediaPreview}
                  controls
                  className="w-full h-auto max-h-[300px]"
                />
              )}
            </div>
          )}

          {/* Link Preview */}
          {isLoadingPreview && (
            <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center gap-2 text-gray-500">
                <LinkIcon className="h-4 w-4 animate-pulse" />
                <span className="text-sm">Loading link preview...</span>
              </div>
            </div>
          )}

          {linkPreview && !isLoadingPreview && (
            <div className="relative rounded-lg border border-gray-200 overflow-hidden bg-white hover:bg-gray-50 transition-colors">
              <button
                onClick={handleRemoveLinkPreview}
                className="absolute top-2 right-2 p-1 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors z-10"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>

              <a
                href={linkPreview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4"
              >
                {linkPreview.image && (
                  <img
                    src={linkPreview.image}
                    alt={linkPreview.title || 'Link preview'}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                )}

                <div className="space-y-1">
                  {linkPreview.siteName && (
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {linkPreview.siteName}
                    </p>
                  )}

                  {linkPreview.title && (
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {linkPreview.title}
                    </h3>
                  )}

                  {linkPreview.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {linkPreview.description}
                    </p>
                  )}

                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                    <LinkIcon className="h-3 w-3" />
                    <span className="truncate">{new URL(linkPreview.url).hostname}</span>
                  </div>
                </div>
              </a>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleMediaUpload}
                className="hidden"
              />
              <div className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <ImageIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Add Photo/Video</span>
              </div>
            </label>

            <Button
              onClick={handleSubmit}
              disabled={!content.trim() && !mediaPreview}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
