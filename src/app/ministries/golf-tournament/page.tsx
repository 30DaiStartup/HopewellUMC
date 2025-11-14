"use client";

import Link from "next/link";
import { Trophy, Users, Heart, Calendar, MapPin, DollarSign, Mail, Phone, Star } from "lucide-react";

export default function GolfTournamentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Golf Tournament for Missions</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Tee Off for a Great Cause - Supporting Mission Work Locally and Globally
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Play Golf, Change Lives</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Join us for our annual Golf Tournament for Missions - a day of fellowship, fun,
                and fundraising that supports our mission work near and far. Every swing you take
                helps transform lives through the love of Christ. Whether you're an experienced
                golfer or just enjoy the game, this tournament offers a wonderful opportunity to
                make a real difference while enjoying great company on the course.
              </p>
            </div>

            {/* Tournament Director */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Tournament Director</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">John Hastings</p>
                  <p className="text-gray-600 mb-4">Golf Tournament Coordinator</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="tel:8645050489" className="hover:text-[#0b5a7f]">
                        (864) 505-0489
                      </a>
                    </div>
                    <p className="text-gray-600">
                      Contact John for registration information, sponsorship opportunities,
                      or any questions about the tournament.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Details Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tournament Details</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Event Information */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">When & Where</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">When</p>
                    <p className="text-gray-700">Annual Fall Event</p>
                    <p className="text-sm text-gray-600 italic">Exact date announced each year</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Format</p>
                    <p className="text-gray-700">Captain's Choice Tournament</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Location</p>
                    <p className="text-gray-700">Local Golf Course</p>
                    <p className="text-sm text-gray-600 italic">Course details provided upon registration</p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">What's Included</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>18 holes of golf with cart</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Breakfast and lunch provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Refreshments on the course</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Awards ceremony and prizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Fellowship with other golfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Special contests and games</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Register to Play</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-green-600 text-white rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-12 w-12" />
                <h3 className="text-3xl font-bold">Join the Tournament</h3>
              </div>
              <p className="text-xl text-white/90 mb-8">
                Registration is now open for golfers of all skill levels. You can register as
                an individual or bring your own foursome. Don't have a full team? No problem -
                we'll pair you with other golfers to complete your group.
              </p>
              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-white mb-4 text-lg">Registration Options</h4>
                <div className="space-y-3 text-white/90">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Individual Registration</span>
                    <span className="font-semibold">Contact for pricing</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Team Registration (4 players)</span>
                    <span className="font-semibold">Contact for pricing</span>
                  </div>
                  <p className="text-sm text-white/80 pt-2">
                    All proceeds support Hopewell UMC mission work locally and globally
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8645050489"
                  className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call to Register
                </a>
                <Link
                  href="/connect"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Email for Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sponsorship Opportunities</h2>

            <div className="mb-12 text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Can't play but still want to support our mission work? Consider becoming a
                tournament sponsor! Your generosity helps fund vital ministries while gaining
                visibility for your business or organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Major Sponsor */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#0b5a7f]">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-2xl font-bold">Major Sponsor</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Premier visibility throughout the event with maximum impact on our mission work.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Prominent logo placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Recognition at awards ceremony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Social media recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f]">•</span>
                    <span>Complimentary team entry</span>
                  </li>
                </ul>
              </div>

              {/* Hole Sponsor */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold">Hole Sponsor</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Sponsor a hole and get your name seen by every golfer throughout the day.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Sign at sponsored hole</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Recognition in program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Social media mention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Supporting a great cause</span>
                  </li>
                </ul>
              </div>

              {/* General Sponsor */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-600">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                  <h3 className="text-2xl font-bold">General Sponsor</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Support the tournament and our mission work with a general sponsorship.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Recognition in program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Social media thank you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span>Supporting missions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center bg-white rounded-lg p-8 shadow-md">
              <h4 className="text-xl font-bold mb-4">Custom Sponsorship Packages Available</h4>
              <p className="text-gray-700 mb-4">
                Contact John Hastings to discuss custom sponsorship opportunities tailored to
                your organization's goals and budget.
              </p>
              <a
                href="tel:8645050489"
                className="inline-flex items-center gap-2 bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                Contact About Sponsorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Impact</h2>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 md:p-12 border-2 border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-12 w-12 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Supporting Missions Locally and Globally</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Every dollar raised through the Golf Tournament for Missions goes directly to
                supporting our mission work. Your participation helps fund:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Local Missions</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Food assistance programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Community outreach initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Support for families in need</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Global Missions</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Medical mission trips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>International partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Humanitarian aid projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Volunteer Opportunities</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-10 w-10 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Help Make the Tournament a Success</h3>
              </div>
              <p className="text-gray-700 mb-6">
                The success of our tournament depends on dedicated volunteers. Whether you're
                a golfer or not, there are many ways to serve and support this important fundraiser.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Day-of Volunteers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Registration and check-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Hole marshals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Food and beverage service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Photography and social media</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Planning Committee</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Event planning and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Sponsorship outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Marketing and promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Logistics and setup</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tournament Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Trophy className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from previous golf tournaments will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tee Off for Missions
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us for a day of golf, fellowship, and fundraising that makes a real difference.
              Whether you play, sponsor, or volunteer, you're helping transform lives through
              Christ's love. Contact John Hastings today to get involved!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8645050489"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call John Hastings
              </a>
              <Link
                href="/ministries/missions"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Learn About Our Missions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
