"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";

// Staff data from old-site-content/staff.md
const staffMembers = [
  {
    name: "Rev. Don Brown",
    title: "Pastor",
    photo: "/staff-photos/don-brown.jpg",
    phone: "(864) 630-0164",
    email: "pastor@humc1799.com",
    department: "Leadership",
  },
  {
    name: "Jessica Collins",
    title: "Administrative Assistant / Bookkeeper",
    photo: "/staff-photos/jessica-collins.jpg",
    phone: "(864) 967-8181",
    email: "office@humc1799.com",
    department: "Administration",
    officeHours: "Monday–Thursday, 9:00 AM–2:00 PM",
  },
  {
    name: "Stacy Black",
    title: "Director of Marketing",
    photo: "/staff-photos/stacy-black.jpg",
    phone: "(561) 213-3426",
    email: "marketing@humc1799.com",
    department: "Administration",
  },
  {
    name: "Sarah Erskine",
    title: "Director of Christian Education",
    photo: "/staff-photos/sarah-erskine.jpg",
    phone: "(651) 357-3668",
    email: "education@humc1799.com",
    department: "Education & Youth",
  },
  {
    name: "Lera Jackson",
    title: "Director of Youth Ministries",
    photo: null, // No photo available
    phone: "(864) 360-4910",
    email: "youth@humc1799.com",
    department: "Education & Youth",
  },
  {
    name: "Tammy Wilcox",
    title: "Learning Center Director",
    photo: "/staff-photos/tammy-wilcox.jpg",
    phone: "(864) 962-3235",
    email: "learningcenter@humc1799.com",
    department: "Education & Youth",
  },
  {
    name: "JoEllen Borton",
    title: "Music Ministries Coordinator / Choir Director",
    photo: "/staff-photos/joellen-borton.jpg",
    phone: "(703) 447-5972",
    email: "music@humc1799.com",
    department: "Music & Worship",
  },
  {
    name: "Beth Lowe",
    title: "Director of Children's Choir, Handbells, Ukuleles",
    photo: "/staff-photos/beth-lowe.jpg",
    phone: "(704) 480-7262",
    email: "childrenschoir@humc1799.com",
    department: "Music & Worship",
  },
  {
    name: "Ann McDonald",
    title: "Pianist",
    photo: "/staff-photos/ann-mcdonald.jpg",
    phone: "(864) 915-3918",
    email: "pianist@humc1799.com",
    department: "Music & Worship",
  },
  {
    name: "Pat McNabb",
    title: "Praise Team Leader",
    photo: "/staff-photos/pat-mcnabb.jpg",
    phone: "(864) 630-2629",
    email: "praiseteam@humc1799.com",
    department: "Music & Worship",
  },
  {
    name: "Brenda Rau",
    title: "Parish Nursing Coordinator",
    photo: "/staff-photos/brenda-rau.jpeg",
    phone: "(336) 416-6181",
    email: "nursing@humc1799.com",
    department: "Care & Nursing",
  },
];

export default function ConnectPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Meet our staff and find your place in our church family
            </p>
          </div>
        </div>
      </section>

      {/* Staff Directory Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Staff
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Our dedicated staff is here to serve you and help you grow in
              your faith journey. Don't hesitate to reach out with any
              questions or needs.
            </p>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((staff, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Staff Photo */}
                  <div className="relative w-full aspect-square bg-gray-200">
                    {staff.photo ? (
                      <Image
                        src={staff.photo}
                        alt={staff.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0b5a7f]/10">
                        <div className="w-24 h-24 rounded-full bg-[#0b5a7f]/20 flex items-center justify-center">
                          <span className="text-4xl text-[#0b5a7f] font-bold">
                            {staff.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Staff Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{staff.name}</h3>
                    <p className="text-sm text-[#0b5a7f] font-semibold mb-4">
                      {staff.title}
                    </p>

                    {/* Office Hours (if applicable) */}
                    {staff.officeHours && (
                      <p className="text-sm text-gray-600 mb-4 italic">
                        {staff.officeHours}
                      </p>
                    )}

                    {/* Contact Info */}
                    <div className="space-y-2">
                      {staff.email && (
                        <a
                          href={`mailto:${staff.email}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0b5a7f] transition-colors"
                        >
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{staff.email}</span>
                        </a>
                      )}
                      {staff.phone && (
                        <a
                          href={`tel:${staff.phone.replace(/[^0-9]/g, "")}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0b5a7f] transition-colors"
                        >
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span>{staff.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Get Involved
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Volunteer */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Share your gifts and talents to serve others and make a
                  difference in our community.
                </p>
                <a
                  href="/ministries"
                  className="inline-block bg-[#0b5a7f] text-white hover:bg-[#0b5a7f]/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Opportunities
                </a>
              </div>

              {/* Small Groups */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Small Groups</h3>
                <p className="text-gray-600 mb-6">
                  Build deeper relationships and grow in faith through small
                  group studies and fellowship.
                </p>
                <a
                  href="/ministries/small-groups"
                  className="inline-block bg-[#0b5a7f] text-white hover:bg-[#0b5a7f]/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Find a Group
                </a>
              </div>

              {/* Worship Team */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Join Worship</h3>
                <p className="text-gray-600 mb-6">
                  Use your musical gifts in our choir, praise team, or
                  instrumental ensembles.
                </p>
                <a
                  href="/ministries/music"
                  className="inline-block bg-[#0b5a7f] text-white hover:bg-[#0b5a7f]/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Visit Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Office Hours */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Monday – Thursday:</strong> 9:00 AM – 2:00 PM
                  </p>
                  <p>
                    <strong>Friday – Sunday:</strong> Closed
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Jessica Collins, our Administrative Assistant, is available
                  during office hours to assist you.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">
                      1420 Neely Ferry Rd
                      <br />
                      Simpsonville, SC 29680
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:8649678181"
                      className="text-[#0b5a7f] hover:underline"
                    >
                      (864) 967-8181
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:office@humc1799.com"
                      className="text-[#0b5a7f] hover:underline"
                    >
                      office@humc1799.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form CTA */}
            <div className="mt-12 bg-[#0b5a7f] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Have a Question?</h3>
              <p className="text-white/90 mb-6 text-lg">
                We'd love to hear from you! Send us a message and we'll get
                back to you as soon as possible.
              </p>
              <a
                href="/about/contact"
                className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
