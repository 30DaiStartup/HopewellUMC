"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Heart, Coffee, Calendar, BookOpen } from "lucide-react";

export default function WomensMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-rose-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Women's Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Growing Together in Faith and Friendship
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Community of Sisters</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Women's Ministries provide a welcoming space where women of all ages and life
                stages can grow spiritually, build meaningful friendships, and discover their unique
                purpose in God's kingdom. Through Bible study, fellowship, service, and prayer, we
                journey together as sisters in Christ, encouraging and supporting one another in
                faith and life.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Get Connected</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    For information about women's ministry opportunities, upcoming events, and how
                    to get involved, please contact the church office or speak with any of our
                    ministry leaders on Sunday morning.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-5 w-5 text-[#0b5a7f]" />
                      <span>Contact us through the church office</span>
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
              {/* Bible Studies */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Bible Studies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dive deep into God's Word through our various Bible study offerings designed
                  specifically for women. From topical studies to book-by-book exploration, our
                  studies provide rich biblical teaching and meaningful discussion.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Morning and evening study options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>In-depth biblical teaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Small group discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Practical life application</span>
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
                  Building friendships is at the heart of our ministry. Throughout the year, we
                  host various fellowship events that bring women together for fun, laughter, and
                  meaningful connection.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Coffee and conversation gatherings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Special celebrations and dinners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal events and parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mother-daughter events</span>
                  </li>
                </ul>
              </div>

              {/* Service Projects */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Service Projects</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We believe faith is demonstrated through action. Our service projects provide
                  opportunities to put love into practice by serving our community and those in need.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community outreach initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mission support projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Care ministry to families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Hands-on service opportunities</span>
                  </li>
                </ul>
              </div>

              {/* Retreats */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Retreats & Special Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Step away from the busyness of life to focus on your relationship with God. Our
                  retreats provide time for rest, renewal, and spiritual refreshment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Annual women's retreat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Day-long conferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Prayer gatherings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Inspirational speakers and worship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Groups Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Small Groups</h2>

            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-lg p-8 md:p-12 border-2 border-rose-100">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Find Your Circle</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Small groups provide an intimate setting where authentic relationships can flourish.
                These groups meet regularly for Bible study, prayer, fellowship, and mutual support.
                It's where life-long friendships are formed and faith is deepened.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Welcoming, supportive environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Biblical teaching and discussion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Prayer and encouragement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Group Options</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Life-stage specific groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Flexible meeting times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Various locations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Life Stages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All Women, All Stages</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-xl text-gray-700 text-center mb-8">
                No matter your age or season of life, you have a place in our women's ministry.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Young Women</h4>
                  <p className="text-sm text-gray-700">
                    College students, young professionals, and newlyweds finding their way
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Women in the Middle</h4>
                  <p className="text-sm text-gray-700">
                    Mothers, caregivers, and career women balancing many responsibilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">Seasoned Women</h4>
                  <p className="text-sm text-gray-700">
                    Wisdom-keepers sharing life experiences and mentoring the next generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Women's Ministry in Action</h2>
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
              Photos from our women's ministry events and gatherings will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Sisterhood
            </h2>
            <p className="text-xl text-white/90 mb-8">
              You're invited to be part of a community where women encourage one another, grow in
              faith together, and discover the joy of living out God's purpose. Whether you're new
              to the area or have been here for years, there's a place for you in our women's ministry.
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
