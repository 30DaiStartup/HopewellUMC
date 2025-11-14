"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Phone, Calendar, Heart, Music } from "lucide-react";

export default function ChildrensMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Children's Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Adventures in Faith for Ages 4-13
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nurturing Young Hearts</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our children's ministry provides a safe, loving environment where kids can learn about
                Jesus, make friends, and grow in their faith. Through engaging programs and dedicated
                teachers, we help children discover God's love and develop a strong foundation for their
                spiritual journey.
              </p>
            </div>

            {/* Director Contact */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Director</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Sarah Erskine</p>
                  <p className="text-gray-600 mb-4">Director of Christian Education</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="mailto:education@humc1799.com" className="hover:text-[#0b5a7f]">
                        education@humc1799.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="tel:6513573668" className="hover:text-[#0b5a7f]">
                        (651) 357-3668
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Activities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Programs & Activities</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sunday School */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Sunday School - Adventures in Faith</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Age Group</p>
                      <p className="text-gray-700">Ages 4-13 years old</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Every Sunday, 9:15 AM - 10:00 AM</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Join us for interactive Bible lessons, fun activities, and age-appropriate teaching
                  that helps children understand God's word and apply it to their lives.
                </p>
              </div>

              {/* Children's Church */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Children's Church</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">During Sunday worship service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-700">Children's Church Room (across from Pastor's Office)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  While parents worship, children enjoy their own age-appropriate worship experience
                  with singing, Bible stories, and activities.
                </p>
                <p className="text-sm text-[#0b5a7f] font-semibold">
                  Special Note: Children join the main service on the fifth Sunday of each month
                </p>
              </div>

              {/* Children's Choir */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">HUMC Children's Choir</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Age Group</p>
                      <p className="text-gray-700">Ages 4-11 years old</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Sundays at 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Contact</p>
                      <p className="text-gray-700">Beth Lowe - (704) 480-7262 (texts welcome)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Children learn to worship through music, develop their musical talents, and
                  participate in worship services throughout the year.
                </p>
              </div>

              {/* Nursery (Placeholder) */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Nursery Care</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">During Sunday worship service</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Safe, loving care for infants and toddlers during worship services, provided
                  by trained, caring volunteers in a clean, secure environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Events</h2>

            <div className="space-y-8">
              {/* Cookie and Ornament Decorating */}
              <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-lg p-8 border-2 border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Cookie and Ornament Decorating Event</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Date</p>
                    <p className="text-lg">December 3rd</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Time</p>
                    <p className="text-lg">5:30 PM - 7:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for a festive evening of cookie and ornament decorating! Meal included.
                  A wonderful opportunity for families to celebrate the season together.
                </p>
                <a
                  href="https://onrealm.org/hopewellumcsimpsonville/PublicRegistrations/Event?linkString=NGQ4OTM4NTEtOTMyNC00NDhlLThhMjUtYjM3ZjAwZDM2YWJm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Register Online
                </a>
              </div>

              {/* VBS */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 border-2 border-yellow-100">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Vacation Bible School (VBS)</h3>
                </div>
                <div className="mb-6">
                  <p className="font-semibold text-gray-700 mb-1">Dates</p>
                  <p className="text-lg mb-4">June 8-12, 2026</p>
                  <p className="text-gray-700">
                    Mark your calendars! More details about this year's VBS theme, registration,
                    and volunteer opportunities coming soon.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <p className="text-sm text-gray-600">
                    VBS is a week-long adventure where children experience exciting Bible stories,
                    engaging crafts, fun games, and memorable music. It's a highlight of our summer
                    children's ministry!
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Photo Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our children's ministry events and activities will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Children Involved
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'd love to welcome your children to our ministry! Whether it's Sunday School,
              Children's Church, or our special events, there's a place for every child to
              grow in faith and friendship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:education@humc1799.com"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Sarah Erskine
              </a>
              <Link
                href="/about/visit"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
