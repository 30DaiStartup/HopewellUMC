"use client";

import { useState } from 'react';
import { BookOpen, Copy, Check, Search } from 'lucide-react';
import { SCRIPTURES, FASTING_TIPS } from '@/lib/fasting-data';
import { Input } from '@/components/ui/input';

export function ScripturesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredScriptures = SCRIPTURES.filter(scripture =>
    scripture.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scripture.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (scripture: typeof SCRIPTURES[0]) => {
    const text = `${scripture.reference}\n\n"${scripture.text}"`;

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(scripture.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'sacrifice':
        return 'bg-amber-50 border-amber-200 text-amber-900';
      case 'discipline':
        return 'bg-[#0b5a7f]/10 border-[#0b5a7f]/30 text-[#074159]';
      case 'faith':
        return 'bg-green-50 border-green-200 text-green-900';
      case 'prayer':
        return 'bg-blue-50 border-blue-200 text-blue-900';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  return (
    <div className="space-y-6">
      {/* Scriptures Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-[#0b5a7f]" />
          <h3 className="text-xl font-semibold text-gray-900">
            Scripture for Fasting
          </h3>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search scriptures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Scripture Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredScriptures.map((scripture) => (
            <div
              key={scripture.id}
              className={`border rounded-lg p-4 transition-all hover:shadow-md ${getThemeColor(scripture.theme)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold mb-1">{scripture.reference}</h4>
                  <span className="text-xs uppercase tracking-wide opacity-75">
                    {scripture.theme}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(scripture)}
                  className="p-1.5 hover:bg-black/5 rounded transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedId === scripture.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <p className="text-sm leading-relaxed italic">
                "{scripture.text}"
              </p>
            </div>
          ))}
        </div>

        {filteredScriptures.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No scriptures found matching your search.</p>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Fasting Tips & Guidance
        </h3>

        <div className="space-y-3">
          {FASTING_TIPS.map((tip, index) => (
            <details
              key={tip.id}
              className="group border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0b5a7f]/20 text-[#0b5a7f] flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="px-4 pb-4 pt-2 bg-gray-50">
                <p className="text-gray-700">{tip.content}</p>
                {tip.day && (
                  <p className="text-sm text-[#0b5a7f] mt-2">
                    Recommended for Day {tip.day}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
