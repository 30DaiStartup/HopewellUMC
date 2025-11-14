"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Trash2, Send, Link as LinkIcon } from 'lucide-react';
import { Post } from '@/lib/fasting-types';
import { useFasting } from '@/contexts/fasting-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { currentUser, likePost, addComment, likeComment, deletePost } = useFasting();
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const hasLiked = currentUser && post.likes.includes(currentUser.id);
  const canDelete = currentUser && (currentUser.isAdmin || post.userId === currentUser.id);

  const handleLike = () => {
    if (currentUser) {
      likePost(post.id);
    }
  };

  const handleComment = () => {
    if (currentUser && commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText('');
    }
  };

  const handleDelete = () => {
    if (canDelete && confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
    }
  };

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffMs = now.getTime() - postDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return postDate.toLocaleDateString();
  };

  const formatFastingDuration = (durationMs: number) => {
    const hours = Math.floor(durationMs / 3600000);
    const minutes = Math.floor((durationMs % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="sacred-card sacred-card-hover p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold overflow-hidden ring-2 ring-primary/10">
            {post.userAvatar ? (
              <Image
                src={post.userAvatar}
                alt={post.userName}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{post.userName.charAt(0).toUpperCase()}</span>
            )}
          </div>

          {/* User info */}
          <div>
            <p className="font-semibold text-foreground">{post.userName}</p>
            <p className="text-sm text-muted-foreground">{formatRelativeTime(post.createdAt)}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Fasting Duration Bubble */}
          {post.fastingDurationMs && (
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
              <span className="text-lg">🙏</span>
              <span className="text-sm font-semibold text-primary">
                {formatFastingDuration(post.fastingDurationMs)}
              </span>
            </div>
          )}

          {/* Delete button */}
          {canDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        {/* Render rich text HTML content */}
        <div
          className="prose prose-sm max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Media */}
        {post.mediaUrl && (
          <div className="mt-4 rounded-lg overflow-hidden">
            {post.mediaType === 'image' || post.mediaType === 'gif' ? (
              <img
                src={post.mediaUrl}
                alt="Post media"
                className="w-full h-auto"
              />
            ) : (
              <video
                src={post.mediaUrl}
                controls
                className="w-full h-auto"
              />
            )}
          </div>
        )}

        {/* Link Preview */}
        {post.linkPreview && (
          <a
            href={post.linkPreview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 rounded-lg border border-gray-200 overflow-hidden bg-white hover:bg-gray-50 transition-colors"
          >
            {post.linkPreview.image && (
              <img
                src={post.linkPreview.image}
                alt={post.linkPreview.title || 'Link preview'}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-4 space-y-1">
              {post.linkPreview.siteName && (
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {post.linkPreview.siteName}
                </p>
              )}

              {post.linkPreview.title && (
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {post.linkPreview.title}
                </h3>
              )}

              {post.linkPreview.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.linkPreview.description}
                </p>
              )}

              <div className="flex items-center gap-1 text-xs text-gray-400 pt-1">
                <LinkIcon className="h-3 w-3" />
                <span className="truncate">{new URL(post.linkPreview.url).hostname}</span>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-border/50">
        <button
          onClick={handleLike}
          disabled={!currentUser}
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 group ${
            hasLiked
              ? 'text-red-500'
              : 'text-muted-foreground hover:text-red-500'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Heart className={`h-5 w-5 transition-transform group-hover:scale-110 ${hasLiked ? 'fill-current' : ''}`} />
          <span className="tabular-nums">{post.likes.length}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
        >
          <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
          <span className="tabular-nums">{post.comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
          {/* Comment List */}
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              {/* Comment Avatar */}
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold text-sm shrink-0 overflow-hidden ring-2 ring-primary/5">
                {comment.userAvatar ? (
                  <Image
                    src={comment.userAvatar}
                    alt={comment.userName}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{comment.userName.charAt(0).toUpperCase()}</span>
                )}
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="bg-secondary/50 rounded-xl p-3 backdrop-blur-sm">
                  <p className="font-semibold text-sm text-foreground">{comment.userName}</p>
                  <p className="text-sm text-foreground/90 mt-1">{comment.content}</p>
                </div>

                {/* Comment Actions */}
                <div className="flex items-center gap-3 mt-2 ml-2">
                  <button
                    onClick={() => currentUser && likeComment(post.id, comment.id)}
                    disabled={!currentUser}
                    className={`text-xs font-medium transition-colors ${
                      currentUser && comment.likes.includes(currentUser.id)
                        ? 'text-red-500'
                        : 'text-muted-foreground hover:text-red-500'
                    } disabled:opacity-50`}
                  >
                    {comment.likes.length > 0 ? `${comment.likes.length} Like${comment.likes.length !== 1 ? 's' : ''}` : 'Like'}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {formatRelativeTime(comment.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Add Comment */}
          {currentUser && (
            <div className="flex gap-2 mt-4">
              <Input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleComment();
                  }
                }}
                className="flex-1"
              />
              <Button
                onClick={handleComment}
                disabled={!commentText.trim()}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
