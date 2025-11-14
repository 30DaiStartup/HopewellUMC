"use client";

import Link from "next/link";
import { Users, Heart, BookOpen, Globe, Music, Handshake } from "lucide-react";

export default function MinistriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ministries</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find your place to serve and grow in Christ
            </p>
          </div>
        </div>
      </section>

      {/* Featured Ministries Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Featured Ministries
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              Explore our core ministry areas and discover opportunities to connect
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Children's Ministry */}
              <Link
                href="/ministries/children"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 transform hover:scale-[1.02]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Users className="h-16 w-16 text-white relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
                    Children's Ministry
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Sunday School, Children's Church, VBS, and choir for ages 4-13
                  </p>
                  <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>

              {/* Youth Ministry */}
              <Link
                href="/ministries/youth"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 transform hover:scale-[1.02]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Heart className="h-16 w-16 text-white relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
                    Youth Ministry
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Weekly gatherings, service projects, and Salkehatchie for middle and high school students
                  </p>
                  <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>

              {/* Adult Ministry */}
              <Link
                href="/ministries/adult"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 transform hover:scale-[1.02]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <BookOpen className="h-16 w-16 text-white relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
                    Adult Ministry
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Bible studies, small groups, and fellowship opportunities for all adults
                  </p>
                  <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>

              {/* Missions */}
              <Link
                href="/ministries/missions"
                className="group bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 transform hover:scale-[1.02]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Globe className="h-16 w-16 text-white relative z-10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
                    Missions
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Local and global mission opportunities to serve those in need
                  </p>
                  <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Ministries List */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              All Ministries
            </h2>

            {/* Age-Based Ministries */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-[#0b5a7f]" />
                Age-Based Ministries
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Children's Ministries"
                  description="Sunday School, Children's Church, VBS, and choir for ages 4-13"
                  href="/ministries/children"
                />
                <MinistryCard
                  title="Youth Ministries"
                  description="Weekly gatherings and service projects for middle and high school"
                  href="/ministries/youth"
                />
                <MinistryCard
                  title="Young Adults Ministry"
                  description="Fellowship and growth opportunities for young adults"
                  href="/ministries/young-adults"
                />
                <MinistryCard
                  title="Adult Ministries"
                  description="Bible studies, small groups, and fellowship for all adults"
                  href="/ministries/adult"
                />
              </div>
            </div>

            {/* Gender-Specific Ministries */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Handshake className="h-6 w-6 text-[#0b5a7f]" />
                Fellowship Ministries
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Men's Ministry"
                  description="Fellowship, service, and spiritual growth for men"
                  href="/ministries/mens"
                />
                <MinistryCard
                  title="Women's Ministries"
                  description="Bible studies, fellowship, and service opportunities for women"
                  href="/ministries/womens"
                />
              </div>
            </div>

            {/* Worship & Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Music className="h-6 w-6 text-[#0b5a7f]" />
                Worship & Education
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Worship Ministry"
                  description="Choir, music, and worship leadership opportunities"
                  href="/ministries/worship"
                />
                <MinistryCard
                  title="Christian Education"
                  description="Sunday School and educational programs for all ages"
                  href="/ministries/christian-education"
                />
              </div>
            </div>

            {/* Outreach & Missions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="h-6 w-6 text-[#0b5a7f]" />
                Outreach & Missions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Missions"
                  description="Local and global mission opportunities throughout the year"
                  href="/ministries/missions"
                />
                <MinistryCard
                  title="Hands of Healing Mission"
                  description="Medical mission trips to Guatemala providing care for underserved communities"
                  href="/ministries/hands-of-healing"
                />
                <MinistryCard
                  title="Foster Care Ministry"
                  description="Supporting foster families and children in our community"
                  href="/ministries/foster-care"
                />
                <MinistryCard
                  title="Community Events"
                  description="Spring Fling, Fall Festival, and other community gatherings"
                  href="/ministries/community-events"
                />
                <MinistryCard
                  title="Golf Tournament for Missions"
                  description="Annual fundraising golf tournament supporting mission work"
                  href="/ministries/golf-tournament"
                />
              </div>
            </div>

            {/* Specialized Ministries */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#0b5a7f]" />
                Specialized Ministries
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Parish Nursing"
                  description="Health and wellness ministry providing care and support"
                  href="/ministries/parish-nursing"
                />
                <MinistryCard
                  title="Scouting Ministries"
                  description="Chartered Boy Scouts and Girl Scouts programs"
                  href="/ministries/scouting"
                />
              </div>
            </div>

            {/* Facilities & Operations */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-[#0b5a7f]" />
                Facilities & Operations
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MinistryCard
                  title="Learning Center"
                  description="Educational programs and resources for the community"
                  href="/ministries/learning-center"
                />
                <MinistryCard
                  title="Trustees"
                  description="Maintaining and improving our church facilities"
                  href="/ministries/trustees"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're looking to serve, grow in your faith, or connect with others,
              there's a place for you at Hopewell UMC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Connect With Us
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

// Ministry Card Component
interface MinistryCardProps {
  title: string;
  description: string;
  href: string;
}

function MinistryCard({ title, description, href }: MinistryCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-all duration-200 hover:shadow-md"
    >
      <h4 className="text-lg font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
        {title}
      </h4>
      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <span className="text-[#0b5a7f] font-semibold group-hover:underline text-sm">
        Learn More →
      </span>
    </Link>
  );
}
