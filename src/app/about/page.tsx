"use client";

import { Building2, Heart, Users, Globe, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              To Grow in the Lord and Show Him to the World
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether you&apos;re just having a look, or are searching for a place to worship,
              we&apos;re delighted to have you here.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-2xl md:text-3xl text-[#0b5a7f] font-semibold">
                To Grow in the Lord and Show Him to the World
              </p>
            </div>

            {/* Vision Statement */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Vision</h2>
              <div className="bg-gray-50 rounded-lg p-8 md:p-12">
                <p className="text-xl text-gray-700 mb-6 text-center">
                  Called by God to transform community and world by:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Welcoming all persons</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Growing relationships with each other and Christ</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold">Nurturing, equipping, and sending disciples</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Value 1 */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                  <div className="text-4xl mb-4 text-center">✝️</div>
                  <h3 className="text-xl font-bold mb-3 text-center">Christ Proclaimed</h3>
                  <p className="text-gray-700 text-center">
                    Christ proclaimed as the Son of God
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                  <div className="text-4xl mb-4 text-center">💝</div>
                  <h3 className="text-xl font-bold mb-3 text-center">Every Person Cherished</h3>
                  <p className="text-gray-700 text-center">
                    Every person cherished as a child of God
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                  <div className="text-4xl mb-4 text-center">🤝</div>
                  <h3 className="text-xl font-bold mb-3 text-center">Purposeful Relationships</h3>
                  <p className="text-gray-700 text-center">
                    Purposeful relationship building while growing in Christ
                  </p>
                </div>

                {/* Value 4 */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                  <div className="text-4xl mb-4 text-center">🌍</div>
                  <h3 className="text-xl font-bold mb-3 text-center">Global Mission</h3>
                  <p className="text-gray-700 text-center">
                    Sharing Christ&apos;s good news globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="h-8 w-8 text-[#0b5a7f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hopewell United Methodist Church</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We are a church with a place and ministry for every age and every level of maturity.
                    Our primary purpose is to be the body of Christ present in the Simpsonville community,
                    existing to grow in relationship with Christ and God&apos;s people.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    As a United Methodist congregation, we hold to the historic tenets of the Christian
                    faith while embracing the Wesleyan tradition of grace, love, and service to others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Subpages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Learn More</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* What to Expect */}
              <Link
                href="/about/visit"
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#094e6d] transition-colors">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <p className="text-gray-600 mb-6">
                  Planning your first visit? Learn about our service times, what to wear, and what
                  happens during worship.
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Plan Your Visit →
                </span>
              </Link>

              {/* Our Beliefs */}
              <Link
                href="/about/beliefs"
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#094e6d] transition-colors">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Beliefs</h3>
                <p className="text-gray-600 mb-6">
                  Discover what we believe as a United Methodist congregation and our theological
                  foundations.
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Learn About Our Beliefs →
                </span>
              </Link>

              {/* FAQ */}
              <Link
                href="/about/faq"
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#094e6d] transition-colors">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">FAQ</h3>
                <p className="text-gray-600 mb-6">
                  Have questions? Find answers to frequently asked questions about our church,
                  ministries, and more.
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  View FAQ →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Church Leadership Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Our staff team is made up of everyday people who love following Jesus and helping
              others follow him. We&apos;d love to connect with you!
            </p>

            {/* Staff Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Pastor */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/staff-photos/don-brown.jpg"
                    alt="Rev. Don Brown"
                    fill
                    className="object-cover rounded-full"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Rev. Don Brown</h3>
                <p className="text-gray-600 mb-4">Pastor</p>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(864) 630-0164</span>
                  </div>
                </div>
              </div>

              {/* Christian Education */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/staff-photos/sarah-erskine.jpg"
                    alt="Sarah Erskine"
                    fill
                    className="object-cover rounded-full"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sarah Erskine</h3>
                <p className="text-gray-600 mb-4">Director of Christian Education</p>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(651) 357-3668</span>
                  </div>
                </div>
              </div>

              {/* Youth Ministries */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-[#0b5a7f]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-[#0b5a7f] font-bold">LJ</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Lera Jackson</h3>
                <p className="text-gray-600 mb-4">Director of Youth Ministries</p>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(864) 360-4910</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Full Staff Button */}
            <div className="text-center">
              <Link
                href="/connect/staff"
                className="inline-block bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Meet Our Full Staff Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visit Us</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#0b5a7f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-gray-700">1420 Neely Ferry Rd</p>
                        <p className="text-gray-700">Simpsonville, SC 29680</p>
                        <a
                          href="https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0b5a7f] hover:underline text-sm"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-[#0b5a7f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:8649678181" className="text-gray-700 hover:text-[#0b5a7f]">
                          (864) 967-8181
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-[#0b5a7f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:office@humc1799.com" className="text-gray-700 hover:text-[#0b5a7f]">
                          office@humc1799.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Service Times</h3>
                <div className="bg-[#0b5a7f] text-white rounded-lg p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5" />
                        <h4 className="text-xl font-semibold">Sunday Schedule</h4>
                      </div>
                      <div className="ml-7">
                        <div className="flex justify-between items-center">
                          <span>Worship Service</span>
                          <span className="font-semibold">10:30 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5" />
                        <h4 className="text-xl font-semibold">Office Hours</h4>
                      </div>
                      <div className="ml-7">
                        <div className="flex justify-between items-center">
                          <span>Monday - Thursday</span>
                          <span className="font-semibold">9:00 AM - 2:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/about/visit"
                className="inline-block bg-white border-2 border-[#0b5a7f] text-[#0b5a7f] hover:bg-[#0b5a7f] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Plan Your First Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
