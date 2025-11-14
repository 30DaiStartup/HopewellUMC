"use client";

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Mention from '@tiptap/extension-mention';
import { useState, useCallback } from 'react';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Smile,
  Image as ImageIcon,
  Film
} from 'lucide-react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { Button } from '@/components/ui/button';
import suggestion from './mention-suggestion';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onEmojiSelect?: (emoji: string) => void;
  onImageSelect?: () => void;
  onGifSelect?: () => void;
  placeholder?: string;
}

export function RichTextEditor({
  content,
  onChange,
  onEmojiSelect,
  onImageSelect,
  onGifSelect,
  placeholder = "What's on your heart? Share your reflections, struggles, or victories..."
}: RichTextEditorProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[150px] p-3',
      },
    },
  });

  const handleEmojiClick = useCallback((emojiData: EmojiClickData) => {
    if (editor) {
      editor.chain().focus().insertContent(emojiData.emoji).run();
    }
    if (onEmojiSelect) {
      onEmojiSelect(emojiData.emoji);
    }
    setShowEmojiPicker(false);
  }, [editor, onEmojiSelect]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#0b5a7f]/100">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-200 flex-wrap">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          icon={Bold}
          title="Bold"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          icon={Italic}
          title="Italic"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          icon={List}
          title="Bullet List"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          icon={ListOrdered}
          title="Numbered List"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          icon={Quote}
          title="Quote"
        />

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Emoji Picker */}
        <div className="relative">
          <ToolbarButton
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            isActive={showEmojiPicker}
            icon={Smile}
            title="Add Emoji"
          />
          {showEmojiPicker && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        {/* Media Buttons */}
        {onImageSelect && (
          <ToolbarButton
            onClick={onImageSelect}
            icon={ImageIcon}
            title="Add Image/Video"
          />
        )}
        {onGifSelect && (
          <ToolbarButton
            onClick={onGifSelect}
            icon={Film}
            title="Add GIF"
          />
        )}
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  icon: React.ElementType;
  title: string;
}

function ToolbarButton({ onClick, isActive, icon: Icon, title }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-gray-100 transition-colors ${
        isActive ? 'bg-gray-200 text-[#0b5a7f]' : 'text-gray-600'
      }`}
      title={title}
      type="button"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
