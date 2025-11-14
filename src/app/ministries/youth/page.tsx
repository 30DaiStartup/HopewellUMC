"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Phone, Calendar, Heart, Globe } from "lucide-react";

export default function YouthMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-purple-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Youth Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Growing Together in Faith and Service
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Young Disciples</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our youth ministry provides a dynamic community where middle and high school students
                can grow in their relationship with Christ, build lasting friendships, and discover
                their purpose through worship, fellowship, and service. We're committed to creating
                a safe space where youth can ask questions, explore their faith, and make a real
                difference in the world.
              </p>
            </div>

            {/* Ministry Coordinator */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Coordinator</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Lera Jackson</p>
                  <p className="text-gray-600 mb-4">Director of Youth Ministries</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="mailto:lera_jackson@humc1799.com" className="hover:text-[#0b5a7f]">
                        lera_jackson@humc1799.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="tel:8643604910" className="hover:text-[#0b5a7f]">
                        (864) 360-4910
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups & Meeting Times Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Serve</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Age Group */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Age Group</h3>
                </div>
                <p className="text-xl text-gray-700 mb-4">
                  Middle School & High School Students
                </p>
                <p className="text-gray-600">
                  Our youth ministry welcomes all students in grades 6-12. Whether you're
                  navigating middle school or preparing for college, you'll find a supportive
                  community here.
                </p>
              </div>

              {/* Weekly Meeting */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Weekly Meeting</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700">When</p>
                    <p className="text-lg">Every Sunday Evening</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Time</p>
                    <p className="text-lg">6:30 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Location</p>
                    <p className="text-lg">Hopewell UMC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Activities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Youth Group Gatherings */}
              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Sunday Night Youth Group</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our weekly gatherings are packed with games, worship, relevant teaching,
                  small group discussions, and tons of fun. It's a place where you can be
                  yourself, ask tough questions, and grow alongside friends who share your values.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Interactive Bible studies and discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Worship and prayer time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Games and fellowship activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Building authentic Christian friendships</span>
                  </li>
                </ul>
              </div>

              {/* Service Projects */}
              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Service Projects</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We believe faith is more than just words - it's action! Our youth regularly
                  engage in service opportunities that make a real difference in our community
                  and beyond.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Local community outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Volunteer opportunities with partner organizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Service days and mission projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Hands-on ministry to those in need</span>
                  </li>
                </ul>
              </div>

              {/* Special Events */}
              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Special Events & Activities</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Throughout the year, we host special events that create lasting memories
                  and deepen friendships.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Retreats and conferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Lock-ins and youth nights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal celebrations and parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Recreation and outdoor adventures</span>
                  </li>
                </ul>
              </div>

              {/* Mentorship */}
              <div className="bg-white rounded-lg shadow-md p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Small Groups & Mentorship</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Real growth happens in authentic relationships. Our small groups provide
                  a safe place to share struggles, celebrate victories, and grow in faith
                  together.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Age and gender-specific small groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Caring adult mentors and leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Accountability and encouragement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Life application and discipleship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Trips Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mission Opportunities</h2>

            {/* Salkehatchie Summer */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 border-2 border-orange-100 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Salkehatchie Summer Service</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Dates</p>
                  <p className="text-lg">June 20-27, 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Duration</p>
                  <p className="text-lg">Week-long service program</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Salkehatchie is a transformative week of service where youth work alongside teams
                to repair and rebuild homes for families in need. It's more than just a mission
                trip - it's a life-changing experience that deepens faith, builds character, and
                teaches the true meaning of service.
              </p>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Contact Pastor Don Brown for more information:</span>
                </p>
                <p className="text-sm text-gray-600">
                  Phone: (864) 967-8181
                </p>
              </div>
            </div>

            {/* James Monroe Mission House */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">James Monroe Mission House</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our youth regularly volunteer at the James Monroe Mission House, helping to pack
                food boxes, sort donations, and serve meals to those experiencing food insecurity
                in our community.
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">How to Get Involved:</p>
                <p className="text-sm text-gray-600">
                  Youth participate in regular service days throughout the year. Contact Lera Jackson
                  to find out about upcoming volunteer opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Youth in Action</h2>
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
              Photos from our youth ministry events and mission trips will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Youth Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're looking for a place to belong, wanting to grow in your faith,
              or ready to make a difference, our youth ministry is here for you. Come check
              us out this Sunday!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:lera_jackson@humc1799.com"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Lera Jackson
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
