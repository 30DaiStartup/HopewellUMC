"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Filter, Download, Bell } from "lucide-react";

type EventType = "all" | "worship" | "ministry" | "special";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: EventType;
  description: string;
}

export default function CalendarPage() {
  const [filterType, setFilterType] = useState<EventType>("all");

  // Static events for now - can be replaced with dynamic data later
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "2024-11-17",
      time: "10:30 AM",
      type: "worship",
      description: "Join us for worship, prayer, and fellowship",
    },
    {
      id: 2,
      title: "Wednesday Bible Study",
      date: "2024-11-20",
      time: "6:30 PM",
      type: "ministry",
      description: "Weekly Bible study and discussion",
    },
    {
      id: 3,
      title: "Youth Group",
      date: "2024-11-22",
      time: "6:00 PM",
      type: "ministry",
      description: "Youth fellowship and activities",
    },
    {
      id: 4,
      title: "Thanksgiving Service",
      date: "2024-11-24",
      time: "10:00 AM",
      type: "special",
      description: "Special Thanksgiving worship service",
    },
    {
      id: 5,
      title: "Sunday Worship Service",
      date: "2024-11-24",
      time: "10:30 AM",
      type: "worship",
      description: "Join us for worship, prayer, and fellowship",
    },
    {
      id: 6,
      title: "Advent Season Begins",
      date: "2024-12-01",
      time: "10:30 AM",
      type: "special",
      description: "First Sunday of Advent",
    },
  ];

  const filteredEvents = upcomingEvents.filter(
    (event) => filterType === "all" || event.type === filterType
  );

  const getEventTypeColor = (type: EventType) => {
    switch (type) {
      case "worship":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "ministry":
        return "bg-green-100 text-green-800 border-green-300";
      case "special":
        return "bg-purple-100 text-purple-800 border-purple-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Calendar</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Stay connected with upcoming events and services
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-[#0b5a7f]" />
                <span className="font-semibold">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterType === "all"
                      ? "bg-[#0b5a7f] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Events
                </button>
                <button
                  onClick={() => setFilterType("worship")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterType === "worship"
                      ? "bg-[#0b5a7f] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Worship
                </button>
                <button
                  onClick={() => setFilterType("ministry")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterType === "ministry"
                      ? "bg-[#0b5a7f] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Ministry Events
                </button>
                <button
                  onClick={() => setFilterType("special")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterType === "special"
                      ? "bg-[#0b5a7f] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Special Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Calendar Embed Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Church Calendar
                </h2>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>

              {/* Google Calendar iframe - placeholder */}
              <div className="w-full aspect-[16/10] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Google Calendar Embed Placeholder
                  </p>
                  <p className="text-sm text-gray-500">
                    Calendar URL can be configured in production
                  </p>
                </div>
                {/* Uncomment and add your Google Calendar embed URL:
                <iframe
                  src="YOUR_GOOGLE_CALENDAR_EMBED_URL"
                  className="w-full h-full border-0 rounded-lg"
                  title="Church Calendar"
                />
                */}
              </div>

              {/* Calendar subscription instructions */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-900">
                  Add to Your Personal Calendar
                </h3>
                <p className="text-sm text-blue-800 mb-3">
                  Stay up-to-date with all church events by subscribing to our
                  calendar:
                </p>
                <ul className="text-sm text-blue-800 space-y-1 ml-4">
                  <li>
                    • <strong>Google Calendar:</strong> Click "Subscribe" above
                  </li>
                  <li>
                    • <strong>Apple Calendar:</strong> Click "Export" and import
                    the ICS file
                  </li>
                  <li>
                    • <strong>Outlook:</strong> Click "Export" and import the ICS
                    file
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Upcoming Events
            </h2>

            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  No events found for this filter
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="flex-shrink-0 pt-1">
                            <CalendarIcon className="h-5 w-5 text-[#0b5a7f]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {event.description}
                            </p>
                            <div className="flex flex-wrap gap-2 items-center">
                              <span className="text-sm font-medium text-gray-700">
                                {formatDate(event.date)}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm font-medium text-gray-700">
                                {event.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getEventTypeColor(
                            event.type
                          )}`}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Weekly Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Sunday */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-[#0b5a7f]">
                  Sunday
                </h3>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Worship Service</p>
                      <p className="text-sm text-gray-600">
                        Traditional worship
                      </p>
                    </div>
                    <span className="text-gray-700 font-medium">10:30 AM</span>
                  </div>
                </div>
              </div>

              {/* Wednesday */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-[#0b5a7f]">
                  Wednesday
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Bible Study</p>
                      <p className="text-sm text-gray-600">Adult education</p>
                    </div>
                    <span className="text-gray-700 font-medium">6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Youth Group</p>
                      <p className="text-sm text-gray-600">Grades 6-12</p>
                    </div>
                    <span className="text-gray-700 font-medium">6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
