"use client";

import Link from "next/link";
import { Heart, Users, Gift, HandHeart, Home, Baby, Calendar, Mail } from "lucide-react";

export default function FosterCareMinistryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b5a7f] to-green-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Foster Care Ministry</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Supporting Foster Families and Children in Our Community
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Caring for Children and Families</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Foster Care Ministry is dedicated to supporting foster families and the
                children in their care. We provide practical assistance, emotional support,
                and a caring community for those involved in foster care, helping to ensure
                that every child feels loved and valued.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-[#0b5a7f] to-blue-600 text-white rounded-lg p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 text-lg">
                To wrap our arms around foster families and foster children in our community,
                providing tangible support, encouragement, and the love of Christ during their
                foster care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Serve</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Support for Foster Families */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Foster Family Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  We provide practical and emotional support to families who have opened
                  their homes to children in need.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Meal trains for new placements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Respite care and babysitting support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Prayer partners and encouragement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Connection with other foster families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Emergency assistance and resources</span>
                  </li>
                </ul>
              </div>

              {/* Support for Children */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Baby className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Children's Care</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Meeting the practical needs of foster children and helping them feel
                  welcomed and loved in our church community.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Welcome bags for new foster placements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Clothing and essential items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Birthday celebrations and gifts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>School supplies and educational support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Toys and age-appropriate items</span>
                  </li>
                </ul>
              </div>

              {/* Donation Opportunities */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Donation Needs</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your donations help us provide essential items and support to foster
                  families and children in our community.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Diapers and baby supplies (all sizes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Children's clothing (new or gently used)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Toiletries and hygiene products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Backpacks and luggage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Gift cards for necessities</span>
                  </li>
                </ul>
              </div>

              {/* Volunteer Opportunities */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Volunteer Ways</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  There are many ways to volunteer and make a meaningful impact in the lives
                  of foster families and children.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Provide respite care for foster parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Organize donation drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Prepare welcome bags and care packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Transportation assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5a7f] font-bold">•</span>
                    <span>Mentoring and tutoring support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Making a Difference Together</h2>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="h-8 w-8 text-[#0b5a7f]" />
                <h3 className="text-2xl font-bold">Why Foster Care Ministry Matters</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Foster care is a critical need in our community. Children enter foster care
                  through no fault of their own, often experiencing trauma and upheaval.
                  Foster families step up to provide stability, love, and care during difficult
                  times.
                </p>
                <p>
                  Our ministry recognizes that foster families face unique challenges and need
                  strong community support. By coming alongside these families, we help ensure
                  they can continue to open their hearts and homes to children in need.
                </p>
                <p>
                  Every child deserves to feel loved, safe, and valued. Through our Foster Care
                  Ministry, we demonstrate Christ's love in practical ways, showing foster
                  children that they matter and that our church community cares about them.
                </p>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-[#0b5a7f] mb-3 text-lg">Did You Know?</h4>
                <p className="text-gray-700">
                  There are thousands of children in foster care across our state, with many
                  local families serving as foster parents. Your support through our Foster
                  Care Ministry helps strengthen these families and provides hope to vulnerable
                  children in our own community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ways to Get Involved</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Donate */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Donate Items</h3>
                <p className="text-gray-700 mb-4">
                  Bring needed items to the church office or participate in our donation drives
                  throughout the year.
                </p>
              </div>

              {/* Volunteer */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volunteer Your Time</h3>
                <p className="text-gray-700 mb-4">
                  Sign up to help with respite care, meal trains, or other practical support
                  for foster families.
                </p>
              </div>

              {/* Pray */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pray Faithfully</h3>
                <p className="text-gray-700 mb-4">
                  Join our prayer team to regularly lift up foster families, children, and
                  caseworkers in prayer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Foster Care Resources</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Interested in Becoming a Foster Parent?</h3>
                <p className="text-gray-700">
                  If you're interested in learning more about becoming a foster parent, we can
                  connect you with local agencies and resources. Contact our church office or
                  speak with our Foster Care Ministry coordinator to get started.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Current Foster Families</h3>
                <p className="text-gray-700">
                  If you're a foster family in our community, whether part of our church or not,
                  we're here to support you. Reach out to learn about the practical help,
                  encouragement, and resources available through our ministry.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Drop-Off Locations</h3>
                <p className="text-gray-700">
                  Donations can be dropped off at the church office during regular hours.
                  Watch for special collection events throughout the year where we focus on
                  specific needs for foster children and families.
                </p>
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
              Photos from our Foster Care Ministry events and activities will be added soon!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Supporting Foster Families
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you can donate items, volunteer your time, or offer prayer support,
              your involvement makes a real difference in the lives of foster families and
              children. Together, we can show Christ's love to those who need it most.
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
                href="/ministries"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore All Ministries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
