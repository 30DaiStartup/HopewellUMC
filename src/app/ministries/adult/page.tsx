"use client";

import Link from "next/link";
import { Users, Clock, BookOpen, Mail, Heart, Coffee, HandHeart, Calendar } from "lucide-react";

export default function AdultMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Adult Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Growing Together in Faith and Fellowship
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Place to Belong and Grow</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our adult ministries provide opportunities for spiritual growth, meaningful
                relationships, and service to others. Whether you're seeking deeper Bible study,
                looking to connect with others, or wanting to use your gifts to serve, there's
                a place for you in our adult ministry community.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Leader</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Jan Lathrop</p>
                  <p className="text-gray-600 mb-4">Adult Ministries Coordinator</p>
                  <p className="text-gray-700">
                    For questions about adult ministry opportunities, please contact Jan through
                    the church office or visit us on Sunday morning.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ministry Opportunities</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sunday School */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Sunday School Classes</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Join one of our adult Sunday School classes for in-depth Bible study, meaningful
                  discussions, and Christian fellowship. Our classes offer a welcoming environment
                  for all adults, from new believers to long-time Christians.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Age-specific and mixed-age classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Various teaching styles and formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Biblical teaching and life application</span>
                  </li>
                </ul>
              </div>

              {/* Bible Studies */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Bible Studies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dive deeper into God's Word through our various Bible study opportunities.
                  From topical studies to book-by-book exploration, our studies help you
                  understand Scripture and apply it to daily life.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Weekday and weekend options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Short-term and ongoing studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Online and in-person formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Studies for all levels of biblical knowledge</span>
                  </li>
                </ul>
              </div>

              {/* Small Groups */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Small Groups</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Small groups provide an intimate setting for spiritual growth, authentic
                  relationships, and mutual support. These groups meet regularly for Bible
                  study, prayer, fellowship, and encouragement.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Neighborhood and community-based groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Interest-based and life-stage groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Flexible meeting times and locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Caring community and accountability</span>
                  </li>
                </ul>
              </div>

              {/* Fellowship Events */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Fellowship Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Building relationships is at the heart of our adult ministry. Throughout
                  the year, we host various fellowship events that bring our church family
                  together for fun, food, and friendship.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Church-wide dinners and gatherings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal celebrations and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Social activities and outings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Ministry team gatherings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Ministries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialized Ministries</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Men's Ministry */}
              <Link
                href="/ministries/mens"
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 border-2 border-gray-200 hover:border-[#0b5a7f] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Men's Ministry</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Fellowship, Bible study, and service opportunities designed specifically
                  for men to grow in their faith and build strong Christian friendships.
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>

              {/* Women's Ministry */}
              <Link
                href="/ministries/womens"
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg p-8 border-2 border-gray-200 hover:border-[#0b5a7f] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Women's Ministries</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Bible studies, fellowship events, and service opportunities where women
                  can connect, grow spiritually, and support one another.
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>

              {/* Senior Adults */}
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Senior Adults</h3>
                </div>
                <p className="text-gray-700">
                  Special events, trips, and fellowship opportunities for our senior adult
                  members, celebrating life and faith together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Opportunities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ways to Serve</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Use Your Gifts to Make a Difference</h3>
              </div>
              <p className="text-gray-700 mb-6">
                God has given each of us unique gifts and talents to serve others. Our adult
                ministries provide numerous opportunities to use your gifts in meaningful ways:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Worship & Arts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Choir and music ministry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Praise team and instrumentalists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Drama and creative arts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Teaching & Leadership</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Sunday School teachers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Small group leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Ministry team leaders</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Hospitality & Care</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Greeters and ushers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Meal ministry teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Visitation and care teams</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Missions & Outreach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Local mission projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Global mission trips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Community outreach events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Search Tool Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bible Study Resources</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Online Bible Search</h3>
              <p className="text-white/90 mb-6">
                Access Bible Gateway for comprehensive Bible study tools, commentaries,
                and multiple translations to deepen your understanding of Scripture.
              </p>
              <a
                href="https://www.biblegateway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit Bible Gateway
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fellowship & Events</h2>
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
              Photos from our adult ministry events and gatherings will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Your Place to Grow
            </h2>
            <p className="text-xl text-white/90 mb-8">
              No matter where you are in your faith journey, you'll find a welcoming community
              in our adult ministries. Join us this Sunday or reach out to learn more about
              how you can get connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Connect With Us
              </Link>
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
