"use client";

import Link from "next/link";
import { Calendar, Users, Heart, Music, MapPin, Mail, Phone, Sparkles } from "lucide-react";

export default function CommunityEventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-purple-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Community Events</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Bringing Our Community Together in Faith and Fellowship
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Connecting Community Through Events</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Hopewell UMC, we believe in building relationships that extend beyond our
                church walls. Our community events create opportunities for neighbors to gather,
                families to connect, and friendships to flourish. From spring celebrations to
                fall festivals, we welcome everyone to join us in fellowship and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Events Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Annual Community Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Spring Fling */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Spring Fling</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Spring Season (April/May)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Where</p>
                      <p className="text-gray-700">Church Grounds</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Celebrate the season of renewal with games, food, music, and fellowship.
                  This family-friendly event welcomes the community with activities for all ages,
                  delicious food, and plenty of fun in the spring sunshine.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Children's games and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Live music and entertainment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Food vendors and refreshments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Free meal coupons for food-insecure children</span>
                  </li>
                </ul>
              </div>

              {/* Fall Festival */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Fall Festival</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Fall Season (September/October)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Where</p>
                      <p className="text-gray-700">Church Grounds</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for a harvest celebration filled with autumn fun, fellowship, and
                  community spirit. This beloved annual tradition brings neighbors together
                  for an afternoon of games, food, and seasonal activities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Harvest-themed games and crafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Face painting and activities for kids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal food and treats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Free meal coupons for food-insecure children</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gatherings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Regular Community Gatherings</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Church-Wide Dinners */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Church-Wide Dinners</h3>
                </div>
                <p className="text-gray-700">
                  Regular fellowship meals bringing our church family and community together
                  for food, conversation, and connection.
                </p>
              </div>

              {/* Seasonal Celebrations */}
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Seasonal Celebrations</h3>
                </div>
                <p className="text-gray-700">
                  Special events marking holidays and seasons throughout the year, creating
                  opportunities for joy and fellowship.
                </p>
              </div>

              {/* Music & Entertainment */}
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Music & Entertainment</h3>
                </div>
                <p className="text-gray-700">
                  Live performances, concerts, and entertainment events showcasing local
                  talent and bringing the community together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Events Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Outreach</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-12 w-12" />
                <h3 className="text-3xl font-bold">Serving Our Neighbors</h3>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Our community events aren't just about fun and fellowship - they're about
                serving those in need and making a real difference in our neighborhood.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="font-semibold text-white/90 mb-2">Food Security Support</p>
                  <p className="text-white/80">
                    Free meal coupons provided at Spring Fling and Fall Festival for
                    food-insecure children in our community.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="font-semibold text-white/90 mb-2">Mission Support</p>
                  <p className="text-white/80">
                    Many events support our broader mission work, with proceeds benefiting
                    local and global ministries.
                  </p>
                </div>
              </div>
              <p className="text-white/90 mb-2">
                <span className="font-semibold">Event Coordinator Contact:</span>
              </p>
              <div className="space-y-1 text-white/90">
                <p>Mary Donbach</p>
                <p>(321) 750-8332</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Involved</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Volunteer at Community Events</h3>
              <p className="text-gray-700 mb-6">
                Our community events rely on the generous service of volunteers. Whether you
                can help with setup, run activity stations, serve food, or greet guests,
                there's a perfect role for you. Join us in creating memorable experiences
                for our community!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Volunteer Roles</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Event setup and takedown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Game and activity coordinators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Food service and hospitality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Greeters and parking assistance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Other Ways to Help</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Donate supplies or food items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Sponsor event activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Help with event promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Share your talents and skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Calendar className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our community events will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us at Our Next Event
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Everyone is welcome at our community events! Whether you're a longtime member
              or visiting for the first time, we'd love to see you. Check our calendar for
              upcoming events and mark your calendar today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get Event Updates
              </Link>
              <a
                href="tel:3217508332"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Contact Mary Donbach
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
