"use client";

import { Clock, MapPin, Users, Heart, Car, Baby, Music, Coffee, HelpCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function VisitPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">What to Expect</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              We're glad you're planning to visit!
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether this is your first time visiting a church or you're looking for a new church home,
              we want you to feel welcome and comfortable. Here's what you can expect when you visit Hopewell UMC.
            </p>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Times</h2>
              <p className="text-xl text-gray-700">Join us on Sunday mornings</p>
            </div>

            <div className="bg-[#0b5a7f] text-white rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-3">Worship Service</h3>
                <p className="text-5xl font-bold mb-4">10:30 AM</p>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  A blend of traditional and contemporary worship with meaningful music, prayer, and biblical teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Wear Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Wear</h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <p className="text-2xl font-semibold text-[#0b5a7f] mb-4">
                Come as you are!
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Hopewell, we believe that what you wear doesn't matter to God, and it doesn't matter to us either.
                You'll find people in everything from jeans and t-shirts to suits and dresses. Wear whatever makes you comfortable.
              </p>
              <p className="text-lg text-gray-600">
                What matters most is that you're here to worship and connect with God and others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Arrival Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Parking & Arrival</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Parking</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We have ample free parking available in our main parking lot off Neely Ferry Road.
                    Accessible parking spaces are located near the main entrance for those who need them.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">When to Arrive</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We recommend arriving 10-15 minutes early, especially for your first visit. This gives you
                    time to find parking, locate the sanctuary, grab a cup of coffee, and meet some friendly faces
                    before the service begins.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">Where to Go</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our main entrance leads directly to the welcome area and sanctuary. Greeters will be available
                    to help you find your way, answer questions, and make you feel at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Kids Can Expect Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Kids Can Expect</h2>
              <p className="text-xl text-gray-700">We love kids and families!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Nursery */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Nursery</h3>
                <p className="text-gray-700 mb-4">
                  Our nursery is available for infants through age 3 during the worship service.
                  Our caring volunteers provide a safe, clean, and nurturing environment for your little ones.
                </p>
                <p className="text-sm text-gray-600">
                  All nursery volunteers are background-checked and trained in child safety.
                </p>
              </div>

              {/* Children's Ministry */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Children's Programs</h3>
                <p className="text-gray-700 mb-4">
                  During the worship service, we offer age-appropriate programs for children including
                  Sunday School classes, children's worship experiences, and special activities.
                </p>
                <p className="text-sm text-gray-600">
                  Children are also always welcome to stay in the sanctuary with their families.
                </p>
              </div>

              {/* Youth Ministry */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Youth Ministry</h3>
                <p className="text-gray-700 mb-4">
                  We have an active youth program for middle and high school students with Sunday School
                  classes, youth group meetings, and special events throughout the year.
                </p>
              </div>

              {/* Family-Friendly */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Family-Friendly</h3>
                <p className="text-gray-700 mb-4">
                  Don't worry if your child makes noise during worship - we believe that the sound of children
                  is a joyful noise! We're a family-friendly church that welcomes all ages.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/ministries/childrens"
                className="inline-block bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More About Children's Ministries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens in Worship Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens in Worship</h2>
              <p className="text-xl text-gray-700">A typical Sunday service includes:</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Welcome & Announcements</h3>
                    <p className="text-gray-700">
                      We begin by welcoming everyone and sharing what's happening in our church community.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Worship Through Music</h3>
                    <p className="text-gray-700">
                      We sing a blend of traditional hymns and contemporary worship songs, led by our
                      talented musicians and vocalists.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prayer & Scripture Reading</h3>
                    <p className="text-gray-700">
                      We pray together and hear readings from the Bible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Message</h3>
                    <p className="text-gray-700">
                      Our pastor shares a practical, biblical message that applies to everyday life.
                      Messages typically last 20-25 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Offering & Communion</h3>
                    <p className="text-gray-700">
                      We receive tithes and offerings (giving is voluntary - guests are not expected to give).
                      We also celebrate Holy Communion on the first Sunday of each month - all are welcome to participate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0b5a7f] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Closing & Benediction</h3>
                    <p className="text-gray-700">
                      We close with a final song and blessing. The entire service lasts about one hour.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                <strong>Pro tip:</strong> Bulletins with the order of service are available as you enter the sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">After Your Visit</h2>
              <p className="text-xl text-gray-700">Ready to take the next step?</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Connect */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Connect</h3>
                <p className="text-gray-600 mb-4">
                  Fill out a connection card or stop by the welcome center to let us know you visited.
                </p>
              </div>

              {/* Join a Group */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-3">Join a Group</h3>
                <p className="text-gray-600 mb-4">
                  Sunday School classes and small groups are great ways to build relationships and grow in faith.
                </p>
                <Link
                  href="/ministries"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Explore Groups
                </Link>
              </div>

              {/* Serve */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3">Serve</h3>
                <p className="text-gray-600 mb-4">
                  Discover how you can use your gifts and talents to serve others and make a difference.
                </p>
                <Link
                  href="/ministries"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Address & Info */}
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Hopewell United Methodist Church</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#0b5a7f] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-gray-700">1420 Neely Ferry Rd</p>
                        <p className="text-gray-700 mb-2">Simpsonville, SC 29680</p>
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

                  <div className="mt-8">
                    <a
                      href="https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center"
                    >
                      Get Directions on Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0906447595805!2d-82.2644!3d34.7281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582f6e3c3c3c3d%3A0x3c3c3c3c3c3c3c3c!2s1420%20Neely%20Ferry%20Rd%2C%20Simpsonville%2C%20SC%2029680!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hopewell UMC Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Is there a dress code?</h3>
                <p className="text-gray-700">
                  No! Come as you are. You'll see people in everything from casual wear to Sunday best.
                  Wear whatever makes you comfortable.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Do I have to give money?</h3>
                <p className="text-gray-700">
                  Absolutely not. While we do receive an offering during the service, giving is completely voluntary.
                  As a guest, you're not expected to give. We're just glad you're here!
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Will I have to stand up or speak in front of people?</h3>
                <p className="text-gray-700">
                  Not unless you want to! We may ask visitors to raise their hand so we can welcome you,
                  but you're never required to speak or come forward. Your comfort is important to us.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">What about my kids?</h3>
                <p className="text-gray-700">
                  We have nursery care for infants through age 3, and children's programs for older kids.
                  Children are also always welcome to stay in the service with you. We're a family-friendly church!
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Is the building accessible?</h3>
                <p className="text-gray-700">
                  Yes! We have accessible parking near the main entrance, ramps, elevators, and accessible restrooms.
                  If you need any assistance, our greeters are happy to help.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Can I take communion if I'm not a member?</h3>
                <p className="text-gray-700">
                  Yes! At Hopewell UMC, we practice an open communion table. All who seek to follow Christ are
                  welcome to participate in Holy Communion, regardless of church membership or denomination.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">How long is the service?</h3>
                <p className="text-gray-700">
                  Our worship service typically lasts about one hour, from 10:30 AM to 11:30 AM.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">What if I have more questions?</h3>
                <p className="text-gray-700 mb-3">
                  We'd love to answer them! Feel free to reach out to our office at (864) 967-8181 or
                  office@humc1799.com. You can also speak with a greeter or pastor when you visit.
                </p>
                <Link
                  href="/connect"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0b5a7f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Can't Wait to Meet You!</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Have more questions or want to let us know you're coming? We'd love to hear from you!
              Our staff is here to help make your first visit a great experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/connect"
                className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:8649678181"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0b5a7f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Call: (864) 967-8181
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
