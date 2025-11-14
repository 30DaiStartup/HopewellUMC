"use client";

import Link from "next/link";
import { BookOpen, Clock, Users, Mail, GraduationCap, Heart, Baby, UserCheck } from "lucide-react";

export default function ChristianEducationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Christian Education</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Growing in Faith Through Learning and Discovery
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lifelong Faith Formation</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Christian Education ministry is committed to helping people of all ages grow
                in their understanding of Scripture, deepen their relationship with Jesus Christ,
                and apply biblical principles to daily life. From nursery through senior adults,
                we offer engaging, age-appropriate learning opportunities that nurture faith and
                build Christian community.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Leadership</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Education Team</p>
                  <p className="text-gray-600 mb-4">Christian Education Coordinators</p>
                  <p className="text-gray-700">
                    For questions about Sunday School classes, educational programs, or teaching
                    opportunities, please contact the church office or speak with one of our
                    education team members.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sunday School Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Children's Sunday School */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Baby className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Children's Classes</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Every Sunday, 9:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ages</p>
                      <p className="text-gray-700">Preschool through 5th Grade</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our children's Sunday School provides age-appropriate Bible lessons, engaging
                  activities, and caring teachers who help young hearts learn about God's love.
                  Classes are divided by age to ensure developmentally appropriate teaching.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Interactive Bible stories and lessons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Creative activities and crafts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Scripture memorization and songs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Safe, nurturing environment</span>
                  </li>
                </ul>
              </div>

              {/* Youth Sunday School */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Youth Classes</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Every Sunday, 9:15 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ages</p>
                      <p className="text-gray-700">6th Grade through High School</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our youth Sunday School tackles real-life questions and helps students build
                  a strong biblical foundation. Through relevant discussions and authentic
                  relationships, teens explore what it means to follow Jesus in today's world.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Relevant, engaging Bible studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Open discussion and questions welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Practical faith application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Supportive peer community</span>
                  </li>
                </ul>
              </div>

              {/* Adult Sunday School */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Adult Classes</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Every Sunday, 9:15 AM</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our adult Sunday School classes offer in-depth Bible study, meaningful discussions,
                  and opportunities for spiritual growth. Multiple classes are available to meet
                  different learning preferences and life stages.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Multiple class options available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Various teaching styles and formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Book-by-book and topical studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Welcoming to newcomers and visitors</span>
                  </li>
                </ul>
              </div>

              {/* Nursery */}
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
                      <p className="font-semibold">Available</p>
                      <p className="text-gray-700">Sunday School & Worship Service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ages</p>
                      <p className="text-gray-700">Infants through Preschool</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our nursery provides a safe, loving environment where the youngest members of
                  our church family are cared for by trained volunteers. Parents can worship and
                  learn with confidence knowing their children are well cared for.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Trained, background-checked volunteers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Clean, secure facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Age-appropriate toys and activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Additional Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vacation Bible School */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Vacation Bible School</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for an exciting week of Bible stories, music, crafts, games, and fun
                  during our annual Vacation Bible School. VBS is a highlight of our summer
                  education program for children.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Annual summer program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Ages preschool through elementary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Interactive, theme-based learning</span>
                  </li>
                </ul>
              </div>

              {/* Confirmation Class */}
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Confirmation Class</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our confirmation program helps youth explore their faith, understand Methodist
                  beliefs and practices, and make their own commitment to follow Jesus Christ.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>For youth in 6th-8th grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Explores core Christian beliefs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Culminates in profession of faith</span>
                  </li>
                </ul>
              </div>

              {/* Bible Studies */}
              <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Weekday Bible Studies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  In addition to Sunday School, we offer various Bible study opportunities
                  throughout the week for deeper exploration of Scripture and spiritual growth.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Morning and evening options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Various study formats and topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>In-person and online options</span>
                  </li>
                </ul>
              </div>

              {/* Special Events */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Special Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Throughout the year, we host special educational events, workshops, and seminars
                  to help our church family grow in faith and knowledge.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Guest speakers and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Family-focused education events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Seasonal learning opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Teaching Opportunities</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Become a Sunday School Teacher</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Teaching Sunday School is one of the most rewarding ways to serve in the church.
                We're always looking for caring individuals who want to invest in the spiritual
                growth of others. No teaching experience necessary - we provide training, curriculum,
                and ongoing support!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">We Provide</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Teacher training and orientation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Complete curriculum and materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Ongoing support and mentorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Background checks and safety training</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Opportunities For</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Lead teachers and co-teachers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Substitute teachers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Teaching assistants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>All age levels from nursery to adult</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sunday Schedule</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <Clock className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Us This Sunday</h3>
                <p className="text-white/90 mb-6">
                  Learning and worship opportunities for the whole family.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Sunday School</h4>
                  <p className="text-white/90 text-lg mb-1">9:15 AM</p>
                  <p className="text-white/80">All Ages - Nursery through Adult</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Worship Service</h4>
                  <p className="text-white/90 text-lg mb-1">10:30 AM</p>
                  <p className="text-white/80">Nursery Care Available</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Learning in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our Christian education programs and events will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're new to faith or have been walking with Jesus for years, our Christian
              education programs offer opportunities to grow deeper in your understanding of God's
              Word. Join us this Sunday and discover the joy of learning together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get Connected
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
