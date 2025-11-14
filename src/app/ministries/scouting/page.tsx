"use client";

import Link from "next/link";
import { Users, Clock, MapPin, Mail, Compass, Award, Calendar, Shield } from "lucide-react";

export default function ScoutingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Scouting Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Building Character, Leadership, and Faith in Young Lives
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chartered Scouting Programs</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Hopewell United Methodist Church is proud to charter both Boy Scouts and Girl Scouts
                programs, providing a safe and nurturing environment where young people can develop
                leadership skills, build character, and grow in their faith. Our scouting ministries
                are an extension of our commitment to nurturing the next generation.
              </p>
            </div>

            {/* Church Partnership */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Why Scouting at Hopewell?</h3>
              <p className="text-gray-700 mb-4">
                As a chartered organization, we provide more than just meeting space. We offer a
                faith-based foundation for character development, leadership training, and community
                service. Our scouting programs complement our church's mission to help young people
                grow in faith, character, and service to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Scouting Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Boy Scouts */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Boy Scouts of America</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Meeting Times</p>
                      <p className="text-gray-700">Contact for current schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-700">Hopewell UMC</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Boy Scout troop focuses on outdoor skills, leadership development, community
                  service, and character building through the Scout Oath and Law.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Camping and outdoor adventures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Merit badge opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Leadership development programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community service projects</span>
                  </li>
                </ul>
              </div>

              {/* Girl Scouts */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Girl Scouts of America</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Meeting Times</p>
                      <p className="text-gray-700">Contact for current schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-700">Hopewell UMC</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Girl Scout troop empowers girls to discover their strengths, make a difference
                  in their community, and build courage, confidence, and character.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>STEM and outdoor activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Badge and journey programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Leadership and life skills training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community service and entrepreneurship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Scouts Learn Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Scouts Learn</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Leadership Skills */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Leadership Skills</h3>
                </div>
                <p className="text-gray-700">
                  Scouts develop leadership abilities through planning activities, leading their peers,
                  and taking responsibility for projects and community service.
                </p>
              </div>

              {/* Character Development */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Character Building</h3>
                </div>
                <p className="text-gray-700">
                  Through the Scout Oath, Law, and Promise, young people learn values like honesty,
                  respect, responsibility, and service to others.
                </p>
              </div>

              {/* Practical Skills */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="h-8 w-8 text-[#0b5a7f]" />
                  <h3 className="text-xl font-bold">Practical Skills</h3>
                </div>
                <p className="text-gray-700">
                  From outdoor survival to financial literacy, scouts gain hands-on experience with
                  valuable life skills that prepare them for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Scouting Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Scouting</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-green-700 text-white rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-xl mb-4">For Youth</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Build confidence and self-esteem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Develop leadership and teamwork skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Learn outdoor and survival skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Make lasting friendships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Serve the community</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4">For Families</h4>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Faith-based character development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Safe, supervised activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Family involvement opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Connect with other families</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold">•</span>
                      <span>Positive peer influences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troop Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Join Our Troops</h2>

            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <Users className="h-16 w-16 mx-auto text-[#0b5a7f] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
                <p className="text-gray-700 mb-6">
                  Whether your child is interested in joining a troop or you'd like to volunteer
                  as a leader, we welcome you to be part of our scouting family. For more information
                  about troop numbers, meeting schedules, and how to join, please contact us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">New Scouts</h4>
                  <p className="text-gray-700 text-sm">
                    We welcome new scouts throughout the year. Contact the church office to learn
                    about our current troops and age groups.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Adult Volunteers</h4>
                  <p className="text-gray-700 text-sm">
                    We're always looking for dedicated adults to serve as troop leaders, merit
                    badge counselors, and activity coordinators.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Scouting Adventures</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Compass className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our scouting activities and events will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Scouting Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Scouting provides young people with opportunities to discover their potential, build
              character, and develop lifelong skills in a faith-centered environment. Join us today
              and become part of a legacy of leadership and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Us
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
