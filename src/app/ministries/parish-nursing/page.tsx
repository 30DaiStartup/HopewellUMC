"use client";

import Link from "next/link";
import { Heart, Clock, Phone, Mail, Activity, Stethoscope, Users, Calendar } from "lucide-react";

export default function ParishNursingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-teal-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Parish Nursing</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Caring for the Whole Person - Body, Mind, and Spirit
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Health and Wellness Ministry</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Parish Nursing ministry combines professional healthcare expertise with
                spiritual care to promote health and wellness for our congregation and community.
                We believe that caring for the whole person - body, mind, and spirit - is essential
                to living abundantly as God intended.
              </p>
            </div>

            {/* Ministry Coordinator */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ministry Coordinator</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Brenda Rau</p>
                  <p className="text-gray-600 mb-4">Parish Nurse Coordinator</p>
                  <p className="text-gray-700">
                    Brenda brings professional nursing expertise and a heart for ministry to provide
                    health education, wellness support, and compassionate care to our church family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services We Provide</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Blood Pressure Checks */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Blood Pressure Checks</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#0b5a7f] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">When</p>
                      <p className="text-gray-700">Available on Sunday mornings</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Free blood pressure screenings are available to help you monitor your cardiovascular
                  health. Regular monitoring is an important part of preventing and managing health conditions.
                </p>
              </div>

              {/* Health Education */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Health Education</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We provide education on various health topics to help you make informed decisions
                  about your wellbeing and that of your family.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Disease prevention and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Nutrition and healthy lifestyle choices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal health concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mental and emotional wellness</span>
                  </li>
                </ul>
              </div>

              {/* Care Support */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Care Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Compassionate support for individuals and families facing health challenges,
                  including guidance and resources during difficult times.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Health advocacy and navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Connection to community resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Support for caregivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Prayer and spiritual encouragement</span>
                  </li>
                </ul>
              </div>

              {/* Wellness Programs */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Wellness Programs</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Throughout the year, we offer special programs and events focused on improving
                  overall health and wellbeing in our community.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Health fairs and screenings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Educational workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Support groups for specific health needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Wellness challenges and initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Parish Nursing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What is Parish Nursing?</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-teal-600 text-white rounded-lg p-8 md:p-12">
              <p className="text-lg text-white/90 mb-6">
                Parish nursing is a unique specialty practice that focuses on the intentional care of
                the spirit as part of the process of promoting wholistic health and preventing or
                minimizing illness in a faith community.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-bold text-xl mb-3">Our Approach</h4>
                  <p className="text-white/90">
                    We combine professional nursing knowledge with an understanding of faith and
                    spiritual needs to provide comprehensive care.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-bold text-xl mb-3">Our Mission</h4>
                  <p className="text-white/90">
                    To promote health, healing, and wholeness within our congregation and surrounding
                    community through faith-based nursing care.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ministry in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Heart className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our parish nursing ministry will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let Us Support Your Health Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you need a blood pressure check, health education, or support during a
              challenging time, our parish nursing ministry is here to serve you with professional
              care and Christian compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Brenda Rau
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
