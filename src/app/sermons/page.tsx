"use client";

import { useState } from "react";
import { Play, Search, Calendar, User, Tag, Youtube } from "lucide-react";

type SermonSeries = {
  id: number;
  title: string;
  description: string;
  image: string;
  sermonCount: number;
  startDate: string;
};

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterSpeaker, setFilterSpeaker] = useState("all");
  const [filterTopic, setFilterTopic] = useState("all");

  // Static sermon series data - can be replaced with dynamic data later
  const sermonSeries: SermonSeries[] = [
    {
      id: 1,
      title: "Enter In",
      description:
        "A series exploring what it means to fully enter into God's presence and purpose for our lives",
      image: "/placeholder-sermon.jpg",
      sermonCount: 6,
      startDate: "October 2024",
    },
    {
      id: 2,
      title: "Advent: The Light Has Come",
      description:
        "Journey through Advent as we prepare our hearts for the coming of Christ",
      image: "/placeholder-sermon.jpg",
      sermonCount: 4,
      startDate: "December 2024",
    },
    {
      id: 3,
      title: "Growing in Grace",
      description:
        "Discovering how God's grace transforms us and empowers us for ministry",
      image: "/placeholder-sermon.jpg",
      sermonCount: 8,
      startDate: "September 2024",
    },
    {
      id: 4,
      title: "The Gospel of John",
      description:
        "An in-depth study of the Gospel of John and its profound teachings",
      image: "/placeholder-sermon.jpg",
      sermonCount: 12,
      startDate: "June 2024",
    },
    {
      id: 5,
      title: "Living the Mission",
      description:
        "Practical ways to live out our calling to grow in the Lord and show Him to the world",
      image: "/placeholder-sermon.jpg",
      sermonCount: 5,
      startDate: "May 2024",
    },
    {
      id: 6,
      title: "Easter: Resurrection Life",
      description:
        "Celebrating the resurrection and its power to transform our daily lives",
      image: "/placeholder-sermon.jpg",
      sermonCount: 3,
      startDate: "March 2024",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sermons</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Grow in faith through Biblical teaching and worship
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Latest Sermon
              </h2>
              <p className="text-gray-600">Watch our most recent message</p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <Play className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    YouTube Video Embed Placeholder
                  </p>
                  <p className="text-sm text-gray-500">
                    Add your YouTube video embed code here
                  </p>
                </div>
                {/* Uncomment and add your YouTube embed:
                <iframe
                  src="YOUR_YOUTUBE_EMBED_URL"
                  className="w-full h-full"
                  title="Latest Sermon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">
                  Enter In: Finding God's Purpose
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Rev. Don Brown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>November 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>Enter In Series</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  In this powerful message, we explore what it means to fully
                  enter into God's presence and discover His unique purpose for
                  our lives. Join us as we learn to grow deeper in our
                  relationship with Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search sermons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <select
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                >
                  <option value="">All Dates</option>
                  <option value="2024-11">November 2024</option>
                  <option value="2024-10">October 2024</option>
                  <option value="2024-09">September 2024</option>
                </select>

                <select
                  value={filterSpeaker}
                  onChange={(e) => setFilterSpeaker(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                >
                  <option value="all">All Speakers</option>
                  <option value="don-brown">Rev. Don Brown</option>
                  <option value="guest">Guest Speakers</option>
                </select>

                <select
                  value={filterTopic}
                  onChange={(e) => setFilterTopic(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                >
                  <option value="all">All Topics</option>
                  <option value="faith">Faith</option>
                  <option value="grace">Grace</option>
                  <option value="worship">Worship</option>
                  <option value="service">Service</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Sermon Series
              </h2>
              <p className="text-gray-600">
                Explore our past and current sermon series
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermonSeries.map((series) => (
                <div
                  key={series.id}
                  className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0b5a7f] transition-all hover:shadow-lg group"
                >
                  {/* Series Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#0b5a7f] to-[#094e6d] flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Play className="h-12 w-12 mx-auto mb-2 opacity-80" />
                      <p className="text-sm font-medium">{series.sermonCount} Sermons</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-[#0b5a7f] uppercase tracking-wide">
                        {series.startDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#0b5a7f] transition-colors">
                      {series.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {series.description}
                    </p>
                    <button className="text-[#0b5a7f] font-semibold text-sm hover:underline flex items-center gap-1">
                      Watch Series
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <Youtube className="h-16 w-16 text-red-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Channel
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Don't miss any of our sermons! Subscribe to our YouTube channel
                to get notified when new messages are uploaded.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://youtube.com/@hopewellumc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe on YouTube
                </a>
                <button className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0b5a7f] text-[#0b5a7f] hover:bg-[#0b5a7f] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  <Play className="h-5 w-5" />
                  View All Sermons
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0b5a7f] to-[#094e6d] text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Listen on the Go
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Subscribe to our sermon podcast and listen anytime, anywhere.
                Available on all major podcast platforms.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-[#0b5a7f] hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Apple Podcasts
                </button>
                <button className="bg-white text-[#0b5a7f] hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Spotify
                </button>
                <button className="bg-white text-[#0b5a7f] hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Google Podcasts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
