"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Youtube,
  Instagram,
  User,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Address */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Visit Us</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  1420 Neely Ferry Rd
                  <br />
                  Simpsonville, SC 29680
                </p>
                <a
                  href="https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b5a7f] hover:underline text-sm font-semibold mt-2 inline-block"
                >
                  Get Directions
                </a>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Call Us</h3>
                <a
                  href="tel:8649678181"
                  className="text-gray-700 hover:text-[#0b5a7f] text-sm block mb-2"
                >
                  (864) 967-8181
                </a>
                <p className="text-gray-500 text-xs">Main Office</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Email Us</h3>
                <a
                  href="mailto:office@humc1799.com"
                  className="text-gray-700 hover:text-[#0b5a7f] text-sm block break-all"
                >
                  office@humc1799.com
                </a>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Office Hours</h3>
                <p className="text-gray-700 text-sm">
                  Monday - Thursday
                  <br />
                  9:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            {/* Two Column Layout: Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a question or need assistance? Fill out the form below
                  and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="membership">Membership</option>
                      <option value="ministries">Ministries</option>
                      <option value="facilities">Facility Use</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <p className="font-semibold">
                        Oops! Something went wrong.
                      </p>
                      <p className="text-sm">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Map and Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Find Us
                </h2>

                {/* Google Maps Embed */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8567654321!2d-82.2547321!3d34.7658123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582a0c1234567a%3A0x1234567890abcdef!2s1420%20Neely%20Ferry%20Rd%2C%20Simpsonville%2C%20SC%2029680!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hopewell UMC Location"
                  />
                </div>

                {/* Directions */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Directions</h3>
                  <p className="text-gray-700 mb-4">
                    Located on Neely Ferry Road in Simpsonville, SC. Easily
                    accessible from I-385 and Highway 14.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/1420+Neely+Ferry+Rd,+Simpsonville,+SC+29680"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                    Get Directions
                  </a>
                </div>

                {/* Staff Directory Link */}
                <div className="bg-[#0b5a7f] text-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <User className="h-8 w-8 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Meet Our Staff
                      </h3>
                      <p className="text-white/90 mb-4">
                        Want to connect with a specific staff member? Visit our
                        staff directory to find contact information.
                      </p>
                      <Link
                        href="/connect/staff"
                        className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        View Staff Directory
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect With Us Online
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Follow us on social media to stay updated on events, sermons, and
              church news
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/hopewellumc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-gray-50 px-8 py-4 rounded-lg shadow-md transition-all border-2 border-gray-200 hover:border-[#1877f2] group"
              >
                <Facebook className="h-6 w-6 text-[#1877f2]" />
                <span className="font-semibold text-gray-700 group-hover:text-[#1877f2]">
                  Facebook
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@hopewellumc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-gray-50 px-8 py-4 rounded-lg shadow-md transition-all border-2 border-gray-200 hover:border-[#ff0000] group"
              >
                <Youtube className="h-6 w-6 text-[#ff0000]" />
                <span className="font-semibold text-gray-700 group-hover:text-[#ff0000]">
                  YouTube
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hopewellumc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-gray-50 px-8 py-4 rounded-lg shadow-md transition-all border-2 border-gray-200 hover:border-[#e4405f] group"
              >
                <Instagram className="h-6 w-6 text-[#e4405f]" />
                <span className="font-semibold text-gray-700 group-hover:text-[#e4405f]">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0b5a7f] to-[#094e6d] text-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <Clock className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Us for Worship
                </h2>
              </div>

              <div className="text-center max-w-md mx-auto">
                <h3 className="text-3xl font-bold mb-4">
                  Worship Service
                </h3>
                <p className="text-5xl font-bold text-white/90 mb-3">10:30 AM</p>
                <p className="text-xl text-white/80">Traditional worship</p>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/about/visit"
                  className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
