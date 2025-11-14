"use client";

import Link from "next/link";
import { Globe, Heart, Users, Phone, Mail, Calendar, MapPin, HandHeart } from "lucide-react";

export default function MissionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-orange-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Missions</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Serving Those in Need, Near and Far
            </p>
            <p className="text-lg text-white/80 italic">
              "We all need a helping hand from time to time."
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference Together</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Hopewell UMC, missions are at the heart of who we are. We believe in
                putting faith into action by serving those in need - from our local community
                to global partners around the world. With 14+ active mission initiatives,
                there are countless ways to get involved and make a real difference.
              </p>
            </div>

            {/* Mission Chairperson */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Mission Leadership</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-[#0b5a7f] mb-2">Brenda Rau</p>
                  <p className="text-gray-600 mb-4">Missions Chairperson</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-[#0b5a7f]" />
                      <div>
                        <p className="font-semibold">Mission Hotline: <a href="tel:8645310409" className="hover:text-[#0b5a7f]">(864) 531-0409</a></p>
                        <p className="text-sm text-gray-600">Leave a message anytime</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-[#0b5a7f]" />
                      <a href="tel:3364166181" className="hover:text-[#0b5a7f]">
                        Direct: (336) 416-6181
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Initiatives Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Seasonal Initiatives</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* One Warm Coat */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">One Warm Coat</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-gray-600">Duration</p>
                  <p className="text-gray-700">December 1, 2025 - February 1, 2026</p>
                </div>
                <p className="text-gray-700 mb-4">
                  Help keep our community warm during the winter months by donating gently
                  used or new coats for all ages.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>John Hastings</p>
                  <p>(864) 505-0489</p>
                </div>
              </div>

              {/* Macaroni Mayhem */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Macaroni Mayhem</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-gray-600">When</p>
                  <p className="text-gray-700">Thanksgiving Season</p>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us in preparing over 1,600 servings of mac and cheese for the
                  James Monroe Mission House Thanksgiving meal.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>Steve Jackson</p>
                  <p>(864) 838-7084</p>
                </div>
              </div>

              {/* Pumpkin Patch */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Pumpkin Patch</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-gray-600">When</p>
                  <p className="text-gray-700">October</p>
                </div>
                <p className="text-gray-700 mb-4">
                  Annual pumpkin sales event supporting missions and foster care programs
                  throughout the community.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>Mary Donbach</p>
                  <p>(321) 750-8332</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grubby and Grace Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Grubby and Grace</h2>
            <p className="text-center text-xl text-gray-700 mb-12">
              Church-Wide Mission Projects - Choose Your Service
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Harvest Hope Food Bank */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 border-2 border-orange-100">
                <h3 className="text-2xl font-bold mb-4">1. Harvest Hope Food Bank</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Activity:</p>
                  <p className="text-gray-700">Pack food boxes for families in need</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Location:</p>
                  <p className="text-gray-700">White Horse Road facility</p>
                </div>
              </div>

              {/* HUMC Member Needs */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-4">2. HUMC Member Needs</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Activity:</p>
                  <p className="text-gray-700">Light construction and yard work assistance</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Beneficiaries:</p>
                  <p className="text-gray-700">Church members in need</p>
                </div>
              </div>

              {/* Sunday Dinner with a Twist */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold mb-4">3. Sunday Dinner with a Twist</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Activity:</p>
                  <p className="text-gray-700">Prepare hygiene and food bags</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Beneficiaries:</p>
                  <p className="text-gray-700">Homeless community members</p>
                </div>
              </div>

              {/* Casseroles of Caring */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-purple-100">
                <h3 className="text-2xl font-bold mb-4">4. Casseroles of Caring</h3>
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-2">Activity:</p>
                  <p className="text-gray-700">Prepare meals for families</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Beneficiaries:</p>
                  <p className="text-gray-700">Families experiencing illness or loss</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Contact Brenda Rau for all Grubby and Grace projects:</span>
              </p>
              <p className="text-lg text-[#0b5a7f] font-semibold">(336) 416-6181</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Missions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">International Missions</h2>

            {/* Hands of Healing - Guatemala */}
            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-12 w-12" />
                <h3 className="text-3xl font-bold">Hands of Healing - Guatemala</h3>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Medical, dental, and vision care for underserved populations
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="font-semibold text-white/90 mb-2">Next Trip</p>
                  <p className="text-xl font-bold">February 28 - March 8, 2026</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="font-semibold text-white/90 mb-2">Focus</p>
                  <p className="text-lg">Healthcare for those in need</p>
                </div>
              </div>
              <p className="text-white/90 mb-6">
                Join our medical mission team to provide essential healthcare services to
                communities in Guatemala. This life-changing experience combines medical
                care with Christian compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ministries/hands-of-healing"
                  className="bg-white text-[#0b5a7f] hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Learn More About Hands of Healing
                </Link>
                <a
                  href="tel:3364166181"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Brenda Rau
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Missions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Youth Missions</h2>

            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg p-8 border-2 border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-10 w-10 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Salkehatchie Summer</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Dates</p>
                  <p className="text-lg">June 20-27, 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Duration</p>
                  <p className="text-lg">Week-long volunteer service program</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                A transformative week where youth help families in need through home repairs
                and community service. This hands-on mission teaches the value of servant
                leadership and Christian compassion.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Contact Pastor Don Brown:</span>
                </p>
                <p className="text-sm text-gray-600">(864) 967-8181</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Support Programs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* James Monroe Mission House */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">James Monroe Mission House</h3>
                <p className="text-gray-700 mb-4">
                  Ongoing food and coat donations supporting families facing food insecurity.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>Sally & Don Hipps</p>
                  <p>(864) 630-6590</p>
                </div>
              </div>

              {/* Epworth Christmas Tree */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Epworth Christmas Tree</h3>
                <p className="text-gray-700 mb-4">
                  Fulfill Christmas wishes for foster children in our community.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>Reenie Selby</p>
                  <p>(803) 487-3322</p>
                </div>
              </div>

              {/* Food Coupons */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Spring Fling & Fall Festival Food Coupons</h3>
                <p className="text-gray-700 mb-4">
                  Provide free meals for food-insecure children at community events.
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Contact:</p>
                  <p>Mary Donbach</p>
                  <p>(321) 750-8332</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Ministries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Specialized Ministries</h2>

            <div className="space-y-8">
              {/* Kairos Outside */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-4">Kairos Outside</h3>
                <p className="text-gray-700 mb-6">
                  Support retreat for families of incarcerated individuals, providing spiritual
                  encouragement, community, and hope during difficult times.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Schedule</p>
                    <p className="text-gray-700">Spring and fall weekends</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Location</p>
                    <p className="text-gray-700">South Mountain Christian Camp, North Carolina</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Contact:</span> Beth Lowe - music@humc1799.com
                  </p>
                </div>
              </div>

              {/* Golf Tournament */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold mb-4">Golf Tournament for Missions</h3>
                <p className="text-gray-700 mb-6">
                  Annual fall fundraising event supporting our mission work locally and globally.
                  Join us for a day of fellowship and fun while supporting a great cause!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/ministries/golf-tournament"
                    className="bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href="tel:8645050489"
                    className="border-2 border-[#0b5a7f] text-[#0b5a7f] hover:bg-[#0b5a7f] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Contact John Hastings
                  </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mission in Action</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Globe className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos from our mission trips and service projects will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Answer the Call to Serve
            </h2>
            <p className="text-xl text-white/90 mb-8">
              With 14+ active mission initiatives, there's a perfect opportunity for you to
              make a difference. Whether you want to serve locally or globally, with your
              hands or your resources, we invite you to join us in transforming lives through
              Christ's love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8645310409"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Mission Hotline
              </a>
              <Link
                href="/give"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Support Missions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
