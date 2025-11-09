import { ReactRenderer } from '@tiptap/react';
import tippy, { Instance as TippyInstance } from 'tippy.js';
import { SuggestionOptions, SuggestionProps } from '@tiptap/suggestion';
import { MentionList } from './mention-list';

export default {
  items: async ({ query }: { query: string }) => {
    // In a real app, this would fetch from your user database
    // For now, we'll use a mock list of users
    const users = [
      { id: '1', name: 'John Smith', username: 'johnsmith' },
      { id: '2', name: 'Sarah Johnson', username: 'sarahj' },
      { id: '3', name: 'Michael Brown', username: 'mikeb' },
      { id: '4', name: 'Emily Davis', username: 'emilyd' },
      { id: '5', name: 'David Wilson', username: 'davidw' },
    ];

    return users
      .filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
  },

  render: () => {
    let component: ReactRenderer;
    let popup: TippyInstance[];

    return {
      onStart: (props: SuggestionProps) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect as () => DOMRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onUpdate(props: SuggestionProps) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect as () => DOMRect,
        });
      },

      onKeyDown(props: { event: KeyboardEvent }) {
        if (props.event.key === 'Escape') {
          popup[0].hide();
          return true;
        }

        const ref = component.ref as { onKeyDown?: (props: { event: KeyboardEvent }) => boolean };
        return ref?.onKeyDown?.(props) || false;
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
} as Omit<SuggestionOptions, 'editor'>;
