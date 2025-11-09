import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

interface MentionListProps {
  items: Array<{ id: string; name: string; username: string }>;
  command: (item: { id: string; label: string }) => void;
}

export const MentionList = forwardRef((props: MentionListProps, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item.id, label: item.name });
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      if (event.key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-h-64 overflow-y-auto">
      {props.items.length ? (
        props.items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => selectItem(index)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
              index === selectedIndex ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-gray-500">@{item.username}</div>
          </button>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">No results</div>
      )}
    </div>
  );
});

MentionList.displayName = 'MentionList';
