"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Coffee, Calendar, BookOpen, HandHeart } from "lucide-react";

export default function MensMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-slate-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Men's Ministry</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Brotherhood, Service, and Spiritual Growth
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Men Growing Together</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Men's Ministry provides a supportive environment where men can build authentic
                Christian friendships, grow in their faith, and encourage one another through life's
                challenges. We believe that men need other men to walk alongside them as they strive
                to be better husbands, fathers, leaders, and followers of Christ.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Get Connected</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    For information about men's ministry opportunities, upcoming events, and how to
                    get involved, please contact the church office or speak with any of our ministry
                    leaders on Sunday morning.
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
              {/* Monthly Breakfasts */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Monthly Breakfasts</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Monthly gatherings (contact for schedule)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for a hearty breakfast, great fellowship, and encouraging conversation.
                  Our monthly breakfasts provide a relaxed setting to connect with other men,
                  share life experiences, and grow in faith together.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Good food and fellowship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Inspiring devotionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Authentic conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Building Christian brotherhood</span>
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
                  Dig deeper into God's Word through our men's Bible studies. We tackle real-life
                  issues from a biblical perspective, providing practical application for the
                  challenges men face today.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Relevant, practical teaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Small group discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Accountability and encouragement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Application to daily life</span>
                  </li>
                </ul>
              </div>

              {/* Service Projects */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Service Projects</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Men working together can accomplish great things for God's kingdom. Our service
                  projects provide hands-on opportunities to serve our church, community, and those
                  in need.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Church maintenance and improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community service initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mission trip opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Helping families in need</span>
                  </li>
                </ul>
              </div>

              {/* Fellowship Events */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Fellowship Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Brotherhood is built through shared experiences. Throughout the year, we gather
                  for various events that strengthen friendships and create lasting memories.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Outdoor activities and recreation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Special gatherings and cookouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Game nights and competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Father-son events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Focus</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Spiritual Growth</h3>
                <p className="text-gray-700">
                  Growing deeper in our relationship with Christ through Bible study, prayer,
                  and authentic discipleship.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brotherhood</h3>
                <p className="text-gray-700">
                  Building strong, authentic relationships with other men who encourage and
                  challenge us to live out our faith.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Service</h3>
                <p className="text-gray-700">
                  Using our hands and hearts to serve God by serving others in our church,
                  community, and world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Times Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Involved</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Join Us</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Whether you're looking for a place to grow spiritually, seeking authentic friendships,
                or wanting to serve alongside other men, our men's ministry welcomes you. No matter
                your age or where you are in your faith journey, there's a place for you here.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0b5a7f]">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Ready to get started?</span>
                </p>
                <p className="text-gray-700">
                  Contact the church office for information about upcoming events and how to connect
                  with our men's ministry. We'd love to meet you!
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Men in Action</h2>
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
              Photos from our men's ministry events and gatherings will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Brotherhood
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every man needs other men to walk alongside him in his faith journey. Join us for
              our next gathering and experience the power of Christian brotherhood. You'll find
              encouragement, accountability, and authentic friendships that will strengthen your
              walk with Christ.
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
