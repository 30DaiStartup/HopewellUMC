"use client";

import { useState, useEffect, useRef } from 'react';
import { Plus, Image as ImageIcon, X, Link as LinkIcon, Film } from 'lucide-react';
import { useFasting } from '@/contexts/fasting-context';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { detectUrl, fetchLinkPreview } from '@/lib/utils';
import { compressImage, validateVideo, readFileAsDataURL } from '@/lib/media-utils';
import type { LinkPreview } from '@/lib/fasting-types';
import { RichTextEditor } from './rich-text-editor';
import { GifPicker } from './gif-picker';

export function NewPostDialog() {
  const { currentUser, addPost } = useFasting();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'gif' | null>(null);
  const [linkPreview, setLinkPreview] = useState<LinkPreview | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  }, [content, linkPreview]);

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await processFile(file);
  };

  const processFile = async (file: File) => {
    setIsProcessing(true);

    try {
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

      // Process image with compression
      if (isImage) {
        const compressedFile = await compressImage(file);
        const dataUrl = await readFileAsDataURL(compressedFile);
        setMediaPreview(dataUrl);
        setMediaType('image');
      }

      // Process video with validation
      if (isVideo) {
        const validation = await validateVideo(file, 15);

        if (!validation.valid) {
          alert(validation.error || 'Video validation failed');
          return;
        }

        const dataUrl = await readFileAsDataURL(file);
        setMediaPreview(dataUrl);
        setMediaType('video');
      }
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Failed to process file');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGifSelect = (gifUrl: string) => {
    setMediaPreview(gifUrl);
    setMediaType('gif');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const file = files[0];

    if (file) {
      await processFile(file);
    }
  };

  const handleSubmit = () => {
    // Strip HTML tags to check if there's actual content
    const textContent = content.replace(/<[^>]*>/g, '').trim();

    if (!textContent && !mediaPreview) {
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg bg-gray-300 cursor-not-allowed z-50"
        title="Join the fast to create posts"
      >
        <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg bg-[#0b5a7f] hover:bg-[#094e6d] z-50"
          title="Create a new post"
        >
          <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Share Your Journey</DialogTitle>
        </DialogHeader>

        <div
          className="space-y-4 mt-4"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0b5a7f]/20 flex items-center justify-center text-[#0b5a7f] font-semibold">
              {currentUser.displayName.charAt(0).toUpperCase()}
            </div>
            <p className="font-semibold text-gray-900">{currentUser.displayName}</p>
          </div>

          {/* Drag and Drop Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-[#0b5a7f]/10 bg-opacity-90 border-4 border-dashed border-indigo-400 rounded-lg flex items-center justify-center z-50">
              <div className="text-center">
                <ImageIcon className="h-12 w-12 text-[#0b5a7f] mx-auto mb-2" />
                <p className="text-lg font-semibold text-[#0b5a7f]">Drop your media here</p>
              </div>
            </div>
          )}

          {/* Rich Text Editor */}
          <RichTextEditor
            content={content}
            onChange={setContent}
            onImageSelect={() => fileInputRef.current?.click()}
            onGifSelect={() => setShowGifPicker(true)}
          />

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0b5a7f]"></div>
              <span className="ml-2 text-gray-600">Processing media...</span>
            </div>
          )}

          {/* Media Preview */}
          {mediaPreview && !isProcessing && (
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <button
                onClick={handleRemoveMedia}
                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10 min-w-[32px] min-h-[32px] flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>

              {mediaType === 'image' || mediaType === 'gif' ? (
                <img
                  src={mediaPreview}
                  alt="Upload preview"
                  className="w-full h-auto max-h-[200px] sm:max-h-[300px] object-contain"
                />
              ) : (
                <video
                  src={mediaPreview}
                  controls
                  className="w-full h-auto max-h-[200px] sm:max-h-[300px]"
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
                className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors z-10 min-w-[32px] min-h-[32px] flex items-center justify-center"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>

              <a
                href={linkPreview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 sm:p-4"
              >
                {linkPreview.image && (
                  <img
                    src={linkPreview.image}
                    alt={linkPreview.title || 'Link preview'}
                    className="w-full h-32 sm:h-48 object-cover rounded-md mb-3"
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 hidden sm:block">
              Drag and drop media, or use the toolbar buttons
            </p>

            <Button
              onClick={handleSubmit}
              disabled={(!content.replace(/<[^>]*>/g, '').trim() && !mediaPreview) || isProcessing}
              className="bg-[#0b5a7f] hover:bg-[#094e6d] w-full sm:w-auto"
            >
              Post
            </Button>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaUpload}
            className="hidden"
          />
        </div>
      </DialogContent>

      {/* GIF Picker Dialog */}
      <GifPicker
        open={showGifPicker}
        onClose={() => setShowGifPicker(false)}
        onSelect={handleGifSelect}
      />
    </Dialog>
  );
}
