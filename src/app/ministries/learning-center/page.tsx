"use client";

import Link from "next/link";
import { GraduationCap, Clock, Users, Mail, Phone, BookOpen, Heart, Calendar } from "lucide-react";

export default function LearningCenterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-purple-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learning Center</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Educational Programs and Resources for the Community
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nurturing Young Minds</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                The Hopewell Learning Center provides quality educational programs and childcare
                services for our community. We create a nurturing, safe environment where children
                can learn, grow, and develop their God-given potential.
              </p>
            </div>

            {/* Director Contact */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Center Director</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Tammy Wilcox</p>
                  <p className="text-gray-600 mb-4">Learning Center Director</p>
                  <p className="text-gray-700">
                    For information about enrollment, programs, or to schedule a tour of our
                    facilities, please contact Tammy through the church office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Programs & Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Preschool Program */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Preschool Program</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our preschool program provides age-appropriate learning experiences that prepare
                  children for kindergarten and beyond. We focus on social, emotional, cognitive,
                  and physical development through structured activities and play-based learning.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Age-appropriate curriculum and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Experienced, caring teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Safe, nurturing learning environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Faith-based values integrated into learning</span>
                  </li>
                </ul>
              </div>

              {/* Childcare Services */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Childcare Services</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We provide quality childcare services for working families in our community.
                  Our program offers flexible scheduling options and a curriculum that promotes
                  learning through play and structured activities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Full-time and part-time options available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Licensed and insured facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Nutritious meals and snacks provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Daily activities and outdoor play</span>
                  </li>
                </ul>
              </div>

              {/* Educational Resources */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Educational Resources</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our Learning Center provides educational resources and support for families,
                  helping parents support their children's development and learning at home.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Parent education and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Learning materials and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Family support and guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community partnerships and referrals</span>
                  </li>
                </ul>
              </div>

              {/* Community Outreach */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Community Programs</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We extend our ministry beyond our walls by offering programs and services that
                  serve the broader community and support families in need.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal camps and programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Special events for families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Educational field trips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Community partnerships and collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enrollment Information</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-purple-600 text-white rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Ready to Enroll?</h3>
              </div>
              <p className="text-white/90 mb-6">
                We welcome new families year-round! Contact our director to learn more about
                enrollment, schedule a tour of our facilities, and discover how our programs
                can benefit your family.
              </p>
              <div className="space-y-4 bg-white/10 rounded-lg p-6 backdrop-blur">
                <h4 className="font-semibold text-lg">How to Get Started:</h4>
                <ol className="space-y-2 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="font-bold">1.</span>
                    <span>Contact the Learning Center to schedule a tour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">2.</span>
                    <span>Meet with our director to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">3.</span>
                    <span>Complete enrollment paperwork and registration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">4.</span>
                    <span>Join our Learning Center family!</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Learning Center</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <GraduationCap className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our Learning Center will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn More About Our Programs
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're looking for preschool education, quality childcare, or educational
              resources for your family, the Hopewell Learning Center is here to serve you.
              Contact us today to learn more!
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
