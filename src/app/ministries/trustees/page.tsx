"use client";

import Link from "next/link";
import { Wrench, Building2, TreePine, Hammer, Users, Mail, CheckCircle, Calendar } from "lucide-react";

export default function TrusteesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Trustees</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Maintaining and Improving Our Church Facilities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Faithful Stewards of God's House</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                The Board of Trustees is responsible for maintaining and improving our church facilities,
                ensuring that our buildings and grounds provide a safe, welcoming, and functional space
                for worship, ministry, and fellowship. We are committed to being good stewards of the
                physical resources God has entrusted to us.
              </p>
            </div>

            {/* Ministry Leader */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Board of Trustees</h3>
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Our trustees work together to oversee all aspects of facility management, from
                    routine maintenance to major building projects. If you have facilities-related
                    questions or concerns, please contact the church office to reach a member of
                    the Board of Trustees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Responsibilities</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Building Maintenance */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Building Maintenance</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Regular maintenance and upkeep of all church buildings to ensure they remain
                  safe, functional, and welcoming for worship and ministry activities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>HVAC systems and climate control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Plumbing and electrical systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Roof, walls, and structural integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Interior finishes and furnishings</span>
                  </li>
                </ul>
              </div>

              {/* Grounds Keeping */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Grounds Keeping</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Maintaining our church grounds to create a beautiful, inviting environment
                  that reflects our care for God's creation and welcomes all who visit.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Lawn care and landscaping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Trees and shrub maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Parking lot and walkway upkeep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Seasonal cleanup and snow removal</span>
                  </li>
                </ul>
              </div>

              {/* Facility Projects */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Facility Projects</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Planning and overseeing renovation projects, upgrades, and improvements to
                  better serve our congregation and community ministries.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Capital improvement planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Renovation and remodeling projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Equipment purchases and upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Accessibility improvements</span>
                  </li>
                </ul>
              </div>

              {/* Safety & Compliance */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Safety & Compliance</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Ensuring our facilities meet all safety standards and legal requirements to
                  protect everyone who uses our church buildings and grounds.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Fire safety and emergency systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Building code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Insurance and risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Security systems and protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Faithful Stewardship</h2>

            <div className="bg-gradient-to-br from-[#0b5a7f] to-green-700 text-white rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Caring for God's House</h3>
              </div>
              <p className="text-white/90 mb-6">
                The Board of Trustees views our work as an act of worship and service. We believe
                that maintaining our church facilities is part of our calling to be faithful stewards
                of all that God has provided. Every repair, improvement, and maintenance task is done
                with care and dedication, recognizing that our buildings serve as a home for worship,
                ministry, and community.
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-white/90 italic">
                  "Unless the LORD builds the house, the builders labor in vain." - Psalm 127:1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Involved</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Volunteer Opportunities</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We welcome volunteers who want to help maintain and improve our church facilities.
                Whether you have special skills in construction, landscaping, or general maintenance,
                or simply want to help with seasonal projects, there are many ways to serve.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Ways to Help</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Work days and cleanup events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Landscaping and grounds care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Painting and minor repairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Seasonal decorating and setup</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b5a7f] mb-3">Skilled Trades Needed</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Carpentry and woodworking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Electrical work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>Plumbing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0b5a7f]">•</span>
                      <span>HVAC maintenance</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Facilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Building2 className="h-12 w-12 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Photos of our facilities and improvement projects will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions or Facility Concerns?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              If you have questions about our facilities, notice something that needs attention,
              or want to help with facility maintenance and improvements, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact the Trustees
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
