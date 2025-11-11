export function ScrollingText({ text }: { text: string }) {
  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="inline-block text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800/10 outline-text-lg mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
