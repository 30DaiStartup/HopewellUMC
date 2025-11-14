"use client";

import { useState } from "react";
import { Search, ChevronDown, Phone, Mail, MapPin, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQCategory {
  title: string;
  icon: string;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "About Worship & Services",
      icon: "⛪",
      faqs: [
        {
          question: "What time are services?",
          answer: "Sunday School is at 9:15 AM and our main Worship Service is at 10:30 AM every Sunday."
        },
        {
          question: "What should I wear?",
          answer: "Come as you are! We have people in everything from jeans to suits. The most important thing is that you're comfortable and can focus on worship."
        },
        {
          question: "Where do I park?",
          answer: "We have a large parking lot available on-site at 1420 Neely Ferry Rd. Parking is free and accessible."
        },
        {
          question: "What about my kids during worship?",
          answer: "We love having children in worship! We offer Sunday School at 9:15 AM for all ages, and children are welcome in the 10:30 AM service. We have programs specifically designed for children and youth."
        },
        {
          question: "Why not have multiple Sunday services?",
          answer: "Our congregation survey showed most members preferred maintaining one service. Adding multiple services would strain our musicians, hospitality team, and worship committees. We believe one unified service helps build stronger community connections."
        }
      ]
    },
    {
      title: "About Membership",
      icon: "👥",
      faqs: [
        {
          question: "How do I become a member?",
          answer: "We'd love to have you join our church family! Contact our church office at (864) 967-8181 or office@humc1799.com to learn about upcoming membership classes and opportunities to join."
        },
        {
          question: "What do United Methodists believe?",
          answer: (
            <span>
              As a United Methodist congregation, we hold to the historic tenets of the Christian faith while embracing the Wesleyan tradition of grace, love, and service to others. Learn more on our{" "}
              <Link href="/about/beliefs" className="text-white underline hover:text-white/80">
                Beliefs page
              </Link>
              .
            </span>
          )
        },
        {
          question: "Do I have to be a member to attend or participate?",
          answer: "Absolutely not! Everyone is welcome to attend our services and participate in most church activities. Membership is for those who want to make a deeper commitment to our church community."
        }
      ]
    },
    {
      title: "About Giving",
      icon: "💝",
      faqs: [
        {
          question: "How can I give to the church?",
          answer: "We offer multiple ways to give: during Sunday services, online through our website, by mail, or through automatic bank transfers. Contact our office for more information about setting up recurring giving."
        },
        {
          question: "Is my donation tax-deductible?",
          answer: "Yes! As a 501(c)(3) non-profit organization, all donations to Hopewell UMC are tax-deductible. You will receive an annual giving statement for tax purposes."
        },
        {
          question: "What does my giving support?",
          answer: "Your generous giving supports our ministries, missions, staff, facility maintenance, and our commitment to transforming our community and world through Christ's love."
        }
      ]
    },
    {
      title: "About Children & Youth",
      icon: "🎓",
      faqs: [
        {
          question: "What programs do you offer for children?",
          answer: "We offer Sunday School at 9:15 AM for all ages, children's ministries throughout the week, and special events. Contact our Director of Christian Education, Sarah Erskine, at (651) 357-3668 for more details."
        },
        {
          question: "What about youth programs?",
          answer: "Our youth ministry provides engaging programs for middle and high school students. Contact our Director of Youth Ministries, Lera Jackson, at (864) 360-4910 to learn more about upcoming events and regular meetings."
        },
        {
          question: "Are there classroom spaces available?",
          answer: "Yes! Our current worship space addresses our classroom needs, with plans for additional spaces in future building phases."
        }
      ]
    },
    {
      title: "About Facilities",
      icon: "🏛️",
      faqs: [
        {
          question: "Can I tour the facility?",
          answer: "Absolutely! We'd love to show you around. Visit during office hours (Monday-Thursday, 9:00 AM - 2:00 PM) or contact us to schedule a tour at another time."
        },
        {
          question: "Can I rent church facilities?",
          answer: "We do offer facility rental for appropriate events. Please contact our church office at (864) 967-8181 or office@humc1799.com for availability, rates, and policies."
        },
        {
          question: "Will historic features be preserved during building projects?",
          answer: (
            <div className="space-y-2">
              <p>We are committed to preserving our cherished features:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Stone Wall:</strong> Should remain unaffected</li>
                <li><strong>Oak Trees:</strong> Will be preserved with every effort</li>
                <li><strong>Picnic Shelter:</strong> Stays in current location</li>
                <li><strong>Playground:</strong> Stays in current location</li>
                <li><strong>Brush Arbor:</strong> Will likely be relocated or removed</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      title: "General Questions",
      icon: "❓",
      faqs: [
        {
          question: "How can I get involved?",
          answer: "There are many ways to get involved at Hopewell! We have small groups, mission opportunities, volunteer teams, and various ministries. Contact our office or speak with Pastor Don Brown after a service to find the right fit for you."
        },
        {
          question: "Do you offer small groups?",
          answer: "Yes! We have various small groups and Bible studies that meet throughout the week. These are great opportunities to build deeper relationships and grow in faith together."
        },
        {
          question: "How do I request prayer?",
          answer: "We'd be honored to pray for you or your loved ones. You can submit prayer requests through our church office at (864) 967-8181 or office@humc1799.com, or speak with Pastor Don Brown directly."
        },
        {
          question: "What is your mission statement?",
          answer: "Our mission is 'To Grow in the Lord and Show Him to the World.' We are called by God to transform community and world by welcoming all persons, growing relationships with each other and Christ, and nurturing, equipping, and sending disciples."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.faqs.length > 0);

  const totalFAQs = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);
  const visibleFAQs = filteredCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="h-16 w-16 md:h-20 md:w-20" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find answers to common questions about Hopewell UMC
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-[#0b5a7f] focus:outline-none text-lg"
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600 text-center">
                Showing {visibleFAQs} of {totalFAQs} questions
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No questions found matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-[#0b5a7f] hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{category.icon}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemId = `${categoryIndex}-${faqIndex}`;
                        const isOpen = openItems.has(itemId);

                        return (
                          <div
                            key={faqIndex}
                            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#0b5a7f] transition-colors"
                          >
                            {/* Question Button */}
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`h-6 w-6 text-[#0b5a7f] flex-shrink-0 transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {/* Answer */}
                            {isOpen && (
                              <div className="px-5 md:px-6 pb-5 md:pb-6 bg-[#0b5a7f] text-white">
                                <div className="pt-4 border-t border-white/20">
                                  <div className="text-base md:text-lg leading-relaxed">
                                    {faq.answer}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0b5a7f] text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-8 text-white/90">
                We'd love to hear from you! Don't hesitate to reach out.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Phone */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <p className="font-semibold mb-1">Call Us</p>
                  <a href="tel:8649678181" className="hover:underline">
                    (864) 967-8181
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a href="mailto:office@humc1799.com" className="hover:underline">
                    office@humc1799.com
                  </a>
                </div>

                {/* Visit */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <p className="font-semibold mb-1">Visit Us</p>
                  <p className="text-sm">Mon-Thu, 9 AM - 2 PM</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/connect/contact"
                  className="inline-block bg-white text-[#0b5a7f] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about/visit"
                  className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Learn More</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/about"
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-bold mb-3">About Us</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our mission, vision, and values
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Read More →
                </span>
              </Link>

              <Link
                href="/about/beliefs"
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-bold mb-3">Our Beliefs</h3>
                <p className="text-gray-600 mb-4">
                  Discover what we believe as United Methodists
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Read More →
                </span>
              </Link>

              <Link
                href="/ministries"
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-bold mb-3">Ministries</h3>
                <p className="text-gray-600 mb-4">
                  Explore ways to connect and serve
                </p>
                <span className="text-[#0b5a7f] font-semibold group-hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
