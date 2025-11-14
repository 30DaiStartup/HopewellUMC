"use client";

import Link from "next/link";
import { Music, Clock, BookOpen, Mail, Users, Heart, Mic, Radio } from "lucide-react";

export default function WorshipMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-purple-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Worship Ministry</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Lifting Our Voices in Praise and Worship
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Joyful Noise</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our worship ministry is dedicated to creating meaningful worship experiences that
                honor God and inspire our congregation. Whether through traditional hymns or
                contemporary praise, we believe that music is a powerful way to connect with God
                and express our faith. We invite you to use your musical gifts to serve and lead
                others in worship.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Leadership</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Worship Team</p>
                  <p className="text-gray-600 mb-4">Music Ministry Coordinators</p>
                  <p className="text-gray-700">
                    For questions about worship ministry opportunities, including choir, praise team,
                    or instrumental participation, please contact the church office or speak with a
                    worship team member on Sunday morning.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Music Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Choir */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Chancel Choir</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Rehearsals</p>
                      <p className="text-gray-700">Wednesdays, 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Music className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Performs</p>
                      <p className="text-gray-700">Sunday Services, Special Events</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Chancel Choir leads worship through traditional and contemporary choral music.
                  All adults and high school students are welcome to join. No audition required -
                  just a heart for worship and willingness to learn.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Weekly rehearsals in a supportive environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Varied repertoire of sacred music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Fellowship and spiritual growth through music</span>
                  </li>
                </ul>
              </div>

              {/* Praise Team */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Praise Team</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Rehearsals</p>
                      <p className="text-gray-700">Thursdays, 7:00 PM</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Praise Team leads contemporary worship with vocals and instruments, creating
                  an engaging and uplifting worship atmosphere. We're always looking for vocalists
                  and instrumentalists who have a passion for worship.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Contemporary worship music style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Vocals, guitar, drums, keyboard, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Team-based approach to worship leading</span>
                  </li>
                </ul>
              </div>

              {/* Instrumentalists */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Instrumental Music</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Musicians are invited to share their instrumental gifts in worship. Whether you
                  play piano, organ, guitar, strings, brass, woodwinds, or percussion, there are
                  opportunities to enhance our worship services.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Solo and ensemble opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Special music for services and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Accompaniment for congregational singing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Flexible scheduling based on availability</span>
                  </li>
                </ul>
              </div>

              {/* Special Music */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Special Music & Solos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Share your musical gifts through special music during worship services. Vocalists
                  and instrumentalists are welcome to offer solos, duets, and small ensemble pieces
                  that enhance our worship experience.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Scheduled throughout the year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Support and accompaniment provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Various styles and arrangements welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Opportunities for individual expression</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Times Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Worship Services</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <Radio className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Us for Worship</h3>
                <p className="text-white/90 mb-6">
                  Experience meaningful worship through music, prayer, and the Word of God.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Sunday Morning Worship</h4>
                  <p className="text-white/90 text-lg mb-1">10:30 AM</p>
                  <p className="text-white/80">Traditional & Contemporary Blended Service</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Sunday School</h4>
                  <p className="text-white/90 text-lg mb-1">9:15 AM</p>
                  <p className="text-white/80">All Ages Welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Opportunities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Worship Leadership Opportunities</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Lead Others in Worship</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Beyond performing, we're looking for individuals who feel called to help lead and
                shape our worship ministry. These leadership roles help ensure vibrant, meaningful
                worship experiences for our entire congregation:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Musical Leadership</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Worship team leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Section leaders for choir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Music coordinators</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Technical & Support</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Sound and media technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Music library coordinators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Worship planning team</span>
                    </li>
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Worship in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Music className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our worship ministry events and performances will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share Your Musical Gifts
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're an experienced musician or just beginning your musical journey,
              there's a place for you in our worship ministry. Join us in making a joyful noise
              unto the Lord and leading others in meaningful worship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get Involved
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
