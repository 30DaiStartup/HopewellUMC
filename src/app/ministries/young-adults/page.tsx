"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Heart, Coffee, Calendar, BookOpen } from "lucide-react";

export default function YoungAdultsMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-teal-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Young Adults Ministry</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Fellowship and Growth for Ages 18-35
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Community Together</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Young Adults Ministry creates a vibrant community where adults ages 18-35
                can connect with others navigating similar life stages. Whether you're in college,
                starting a career, building relationships, or exploring what's next, you'll find
                a welcoming place to grow in faith, build meaningful friendships, and make a
                difference in the world.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Get Connected</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    For information about young adults ministry opportunities, upcoming events,
                    and how to get involved, please contact the church office or visit us on
                    Sunday morning.
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
                  Dive into Scripture together through relevant, engaging Bible studies designed
                  for young adults. Explore God's Word in a relaxed setting where questions are
                  encouraged and authentic discussion is welcomed.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Topical and book-based studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Real-world application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Open discussion and questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Flexible meeting times</span>
                  </li>
                </ul>
              </div>

              {/* Fellowship Events */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Social Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Building friendships is essential to our community. We host regular social
                  events where you can relax, have fun, and connect with others in a casual
                  atmosphere.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Game nights and movie nights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Coffee meetups and dinners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Outdoor adventures and recreation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal celebrations</span>
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
                  Put your faith into action by serving together. Our service projects provide
                  hands-on opportunities to make a tangible difference in our community and beyond.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Local community outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Volunteer opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mission trips and projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Hands-on ministry experiences</span>
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
                  Find authentic community in a small group setting. These intimate gatherings
                  provide a safe space for deeper connections, spiritual growth, and mutual support.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Life-stage specific groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Prayer and accountability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mentorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Support during life transitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Times Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When We Meet</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-teal-600 text-white rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Regular Gatherings</h3>
                    <p className="text-white/90">
                      We meet regularly for Bible study, fellowship, and service. Contact us
                      for current meeting times and locations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Flexible Locations</h3>
                    <p className="text-white/90">
                      We meet at the church, in homes, and at various locations around town
                      to accommodate different schedules and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What to Expect</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0b5a7f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Come As You Are</h3>
                    <p className="text-gray-700">
                      No matter where you are in your faith journey, you're welcome here. We're
                      a diverse group with different backgrounds and experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0b5a7f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Authentic Community</h3>
                    <p className="text-gray-700">
                      We value real relationships over surface-level interactions. This is a safe
                      space to be yourself, ask questions, and grow together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0b5a7f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Relevant Faith</h3>
                    <p className="text-gray-700">
                      We explore how faith connects to real life - relationships, careers, purpose,
                      and the challenges unique to this season of life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0b5a7f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fun and Fellowship</h3>
                    <p className="text-gray-700">
                      While we're serious about growing in faith, we also know how to have fun!
                      Expect laughter, good food, and memorable experiences.
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Young Adults in Action</h2>
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
              Photos from our young adults ministry events and gatherings will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Your Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're new to the area, looking for community, or wanting to deepen your
              faith, our young adults ministry is a great place to start. Come check us out and
              see what it's all about!
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
