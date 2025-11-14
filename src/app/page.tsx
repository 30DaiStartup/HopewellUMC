import { AnnouncementBanner } from "@/components/announcement-banner";
import { Button } from "@/components/ui/button";
import { PrayerCarousel } from "@/components/prayer-carousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-foreground mb-2">Welcome to</span>
              <span className="block text-[#0b5a7f]">Hopewell UMC</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              To Grow in the Lord and Show Him to the World
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Whether you&apos;re just having a look, or searching for a place to worship,
              we&apos;re delighted to have you here.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/about/visit">
                <Button size="lg" className="rounded-full bg-[#0b5a7f] hover:bg-[#094e6d] text-white px-8 py-6 text-base">
                  Plan Your Visit
                </Button>
              </Link>
              <Link href="#sermon">
                <Button size="lg" className="rounded-full border-2 border-[#0b5a7f] bg-transparent hover:bg-[#0b5a7f] hover:text-white text-[#0b5a7f] px-8 py-6 text-base">
                  Watch Latest Sermon
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Times Card */}
        <section className="bg-[#0b5a7f] text-white py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Us This Sunday</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Sunday School</h3>
                <p className="text-3xl font-bold">9:15 AM</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Worship Service</h3>
                <p className="text-3xl font-bold">10:30 AM</p>
              </div>
            </div>

            <p className="text-lg mb-6 opacity-90">
              1420 Neely Ferry Rd, Simpsonville, SC 29680
            </p>

            <a
              href="https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#0b5a7f] text-white px-8 py-6 text-base"
              >
                Get Directions
              </Button>
            </a>
          </div>
        </section>

        {/* Mission Statement & Core Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0b5a7f]">Our Mission</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                &quot;To be the body of Christ present in the Simpsonville community,
                existing to grow in relationship with Christ and God&apos;s people.&quot;
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">✝️</div>
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Christ Proclaimed</h3>
                <p className="text-muted-foreground">Christ proclaimed as the Son of God</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Every Person Cherished</h3>
                <p className="text-muted-foreground">Every person cherished as a child of God</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Purposeful Relationships</h3>
                <p className="text-muted-foreground">Purposeful relationship building while growing in Christ</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2 text-[#0b5a7f]">Global Mission</h3>
                <p className="text-muted-foreground">Sharing Christ&apos;s good news globally</p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-[#0b5a7f] text-white rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Vision</h3>
              <p className="text-lg mb-4 text-center">Called by God to transform community and world by:</p>
              <ul className="space-y-3 max-w-2xl mx-auto text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Welcoming all persons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Growing relationships with each other and Christ</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Nurturing, equipping, and sending disciples</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links / CTAs */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0b5a7f]">
              Take Your Next Step
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/give" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">Give</h3>
                  <p className="text-muted-foreground">Support God&apos;s work through Hopewell</p>
                </div>
              </Link>

              <Link href="/about/visit" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">👋</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">Visit Us</h3>
                  <p className="text-muted-foreground">Plan your first visit to Hopewell</p>
                </div>
              </Link>

              <Link href="/ministries" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">🙌</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">Ministries</h3>
                  <p className="text-muted-foreground">Find your place to serve and grow</p>
                </div>
              </Link>

              <Link href="/prayer" className="group">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">🙏</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">Prayer</h3>
                  <p className="text-muted-foreground">Submit a prayer request</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Sermon/Video Section */}
        <section id="sermon" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b5a7f]">Latest Sermon</h2>
              <p className="text-lg text-muted-foreground">Watch our most recent message</p>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
              {/* YouTube Embed Placeholder */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl font-semibold text-gray-700">Latest Sermon Video</p>
                  <p className="text-sm text-gray-600 mt-2">YouTube embed will appear here</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Sermon Title</h3>
              <p className="text-muted-foreground mb-6">
                Rev. Don Brown | Scripture Reference
              </p>
              <Link href="/connect">
                <Button
                  size="lg"
                  className="rounded-full bg-[#0b5a7f] hover:bg-[#094e6d] text-white px-8 py-3"
                >
                  View All Sermons
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b5a7f]">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">Join us for these special gatherings</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Event cards will be dynamically populated */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0b5a7f] text-white rounded-lg p-3 mr-4 text-center min-w-[60px]">
                    <div className="text-2xl font-bold">17</div>
                    <div className="text-xs uppercase">Nov</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Sunday Worship</h3>
                    <p className="text-sm text-muted-foreground">10:30 AM</p>
                  </div>
                </div>
                <p className="text-muted-foreground">Join us for worship and fellowship</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0b5a7f] text-white rounded-lg p-3 mr-4 text-center min-w-[60px]">
                    <div className="text-2xl font-bold">20</div>
                    <div className="text-xs uppercase">Nov</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Wednesday Bible Study</h3>
                    <p className="text-sm text-muted-foreground">7:00 PM</p>
                  </div>
                </div>
                <p className="text-muted-foreground">Grow in faith through God&apos;s Word</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0b5a7f] text-white rounded-lg p-3 mr-4 text-center min-w-[60px]">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs uppercase">Dec</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Christmas Eve Service</h3>
                    <p className="text-sm text-muted-foreground">7:00 PM</p>
                  </div>
                </div>
                <p className="text-muted-foreground">Celebrate the birth of our Savior</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/connect">
                <Button
                  size="lg"
                  className="rounded-full border-2 border-[#0b5a7f] bg-transparent hover:bg-[#0b5a7f] hover:text-white text-[#0b5a7f] px-8 py-3"
                >
                  View Full Calendar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Ministries Preview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b5a7f]">Get Involved</h2>
              <p className="text-lg text-muted-foreground">
                Discover a place and ministry for every age and every level of maturity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link href="/ministries/children" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-6xl">👶</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">
                      Children&apos;s Ministry
                    </h3>
                    <p className="text-muted-foreground">Ages 4-13 | Sunday School, VBS, Choir</p>
                  </div>
                </div>
              </Link>

              <Link href="/ministries/youth" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl">🎸</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">
                      Youth Ministry
                    </h3>
                    <p className="text-muted-foreground">Middle & High School | Sundays 6:30 PM</p>
                  </div>
                </div>
              </Link>

              <Link href="/ministries/adult" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-6xl">📖</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">
                      Adult Ministry
                    </h3>
                    <p className="text-muted-foreground">Bible Studies & Small Groups</p>
                  </div>
                </div>
              </Link>

              <Link href="/ministries/missions" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <div className="text-6xl">🌍</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#0b5a7f] group-hover:underline">
                      Missions
                    </h3>
                    <p className="text-muted-foreground">Local & Global Outreach</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/ministries">
                <Button
                  size="lg"
                  className="rounded-full bg-[#0b5a7f] hover:bg-[#094e6d] text-white px-8 py-3"
                >
                  View All Ministries
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Prayer Request CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b5a7f] to-[#094e6d] text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can We Pray for You?</h2>
            <p className="text-xl mb-8 opacity-90">
              We all need a helping hand from time to time. Let us lift you up in prayer.
            </p>
            <Link href="/prayer">
              <Button
                size="lg"
                className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#0b5a7f] text-white px-8 py-6 text-base"
              >
                Submit Prayer Request
              </Button>
            </Link>

            {/* Prayer Requests Carousel */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Current Prayer Requests</h3>
              <p className="text-lg mb-6 opacity-90">
                Join us in praying for these requests from our community
              </p>
              <PrayerCarousel />
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b5a7f]">Stay Connected</h2>
              <p className="text-lg text-muted-foreground">
                Get weekly updates, prayer requests, and news from Hopewell UMC
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Mobile Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f]"
                    placeholder="(864) 123-4567"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="sms"
                    className="mt-1 mr-2 h-4 w-4 text-[#0b5a7f] focus:ring-[#0b5a7f] border-gray-300 rounded"
                  />
                  <label htmlFor="sms" className="text-sm text-muted-foreground">
                    I would like to receive text message updates
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-[#0b5a7f] hover:bg-[#094e6d] text-white py-6 text-base"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
