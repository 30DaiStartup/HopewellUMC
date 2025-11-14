"use client";

import { useState, FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Send, Heart, Users, BookOpen, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PrayerFormData {
  name: string;
  email: string;
  prayerRequest: string;
  category: string;
  isPublic: boolean;
}

export default function PrayerPage() {
  const [formData, setFormData] = useState<PrayerFormData>({
    name: "",
    email: "",
    prayerRequest: "",
    category: "other",
    isPublic: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // Form validation
  const validateForm = (): boolean => {
    if (!formData.prayerRequest.trim()) {
      setError("Please enter your prayer request");
      return false;
    }
    if (formData.prayerRequest.trim().length < 10) {
      setError("Prayer request must be at least 10 characters");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError("");

    try {
      // Check if Firebase is configured
      if (!db) {
        throw new Error("Firebase is not configured");
      }

      // Add to Firestore
      await addDoc(collection(db, "prayerRequests"), {
        name: formData.name || "Anonymous",
        email: formData.email || "",
        prayerRequest: formData.prayerRequest.trim(),
        category: formData.category,
        isPublic: formData.isPublic,
        createdAt: serverTimestamp(),
        status: "active",
      });

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        prayerRequest: "",
        category: "other",
        isPublic: false,
      });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting prayer request:", err);
      setError(
        "There was an error submitting your prayer request. Please try again or contact the church office."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Prayer</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              "We all need a helping hand from time to time."
            </p>
            <p className="text-lg text-white/80">
              Share your prayer request with our caring community, and let us
              lift you up in prayer.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Request Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Submit a Prayer Request
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Your request will be prayed for by our dedicated prayer team. All
              fields are optional except your prayer request.
            </p>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-lg p-6 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    Prayer Request Submitted
                  </h3>
                  <p className="text-green-800">
                    Thank you for sharing your prayer request. Our prayer team
                    will be lifting you up in prayer. May God bless you and
                    provide comfort, healing, and peace.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 bg-red-50 border-2 border-red-500 rounded-lg p-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-gray-700"
                >
                  Name <span className="text-gray-500">(Optional)</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name or 'Anonymous'"
                  className="w-full px-4 py-3 h-12 text-base"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave blank to remain anonymous
                </p>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-700"
                >
                  Email <span className="text-gray-500">(Optional)</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 h-12 text-base"
                />
                <p className="text-sm text-gray-500 mt-1">
                  For prayer updates (optional)
                </p>
              </div>

              {/* Category Selection */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold mb-2 text-gray-700"
                >
                  Category <span className="text-gray-500">(Optional)</span>
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-3 h-12 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] transition-all"
                >
                  <option value="health">Health/Hospital</option>
                  <option value="praise">Praise</option>
                  <option value="grief">Grief</option>
                  <option value="travel">Travel</option>
                  <option value="salvation">Salvation</option>
                  <option value="missions">Missions</option>
                  <option value="nursing">Nursing Care</option>
                  <option value="military">Military Personnel</option>
                  <option value="persecution">Persecution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Prayer Request Textarea */}
              <div>
                <label
                  htmlFor="prayerRequest"
                  className="block text-sm font-semibold mb-2 text-gray-700"
                >
                  Prayer Request <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="prayerRequest"
                  value={formData.prayerRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, prayerRequest: e.target.value })
                  }
                  placeholder="Share your prayer request here..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] transition-all resize-vertical"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please share how we can pray for you
                </p>
              </div>

              {/* Privacy Options */}
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold mb-4 text-gray-700">
                  Privacy Options
                </p>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="privacy"
                      checked={!formData.isPublic}
                      onChange={() =>
                        setFormData({ ...formData, isPublic: false })
                      }
                      className="mt-1 h-4 w-4 text-[#0b5a7f] focus:ring-[#0b5a7f]"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        Private (Recommended)
                      </p>
                      <p className="text-sm text-gray-600">
                        Shared only with our prayer team
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="privacy"
                      checked={formData.isPublic}
                      onChange={() =>
                        setFormData({ ...formData, isPublic: true })
                      }
                      className="mt-1 h-4 w-4 text-[#0b5a7f] focus:ring-[#0b5a7f]"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Public</p>
                      <p className="text-sm text-gray-600">
                        Visible to the church community on this page
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0b5a7f] text-white hover:bg-[#094e6d] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Prayer Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Prayer Ministry Description */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Prayer Ministry
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Prayer is at the heart of our community at Hopewell UMC. Our
                dedicated prayer team commits to praying for every request
                submitted, believing in the power of prayer to bring comfort,
                healing, and transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Dedicated Team */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Team</h3>
                <p className="text-gray-600">
                  Our prayer team meets regularly to lift up all requests in
                  prayer, both public and private.
                </p>
              </div>

              {/* Confidential */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Confidential Care</h3>
                <p className="text-gray-600">
                  Private requests are kept confidential and shared only with
                  our trusted prayer team members.
                </p>
              </div>

              {/* Faithful */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Faithful Support</h3>
                <p className="text-gray-600">
                  We believe in the power of prayer and are committed to
                  supporting you through every season of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Prayer Requests Section (Static for now) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Current Prayer Requests
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Join us in praying for these public requests from our community
            </p>

            {/* Sample Prayer Requests - These would be dynamic in production */}
            <div className="space-y-6">
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">Pete Lattig</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Health/Hospital
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Hip replacement scheduled for November 17th
                </p>
                <p className="text-sm text-gray-500">
                  Submitted by: Mary S. • Nov 12, 2025
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">Amy Duryea</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Praise
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Discharged from infectious disease treatment for staph
                  infection
                </p>
                <p className="text-sm text-gray-500">
                  Submitted by: Church Family • Nov 10, 2025
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">Sommer Tinsley Porter</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Health/Hospital
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  Kidney transplant on November 4th
                </p>
                <p className="text-sm text-gray-500">
                  Submitted by: Prayer Team • Nov 3, 2025
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 italic">
                Public prayer requests will appear here. Check back soon for
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Pray / Resources Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Prayer Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Join Prayer Team */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Join Our Prayer Team</h3>
                <p className="text-gray-700 mb-4">
                  Feel called to pray for others? Join our dedicated prayer
                  team and make a difference through intercessory prayer.
                </p>
                <a
                  href="/connect"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Learn More →
                </a>
              </div>

              {/* Prayer Guide */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">How to Pray</h3>
                <p className="text-gray-700 mb-4">
                  New to prayer or want to deepen your prayer life? Explore
                  resources and guides to strengthen your connection with God.
                </p>
                <a
                  href="/resources"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View Resources →
                </a>
              </div>

              {/* Scripture on Prayer */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  Scripture on Prayer
                </h3>
                <p className="text-gray-700 mb-4">
                  "Do not be anxious about anything, but in every situation, by
                  prayer and petition, with thanksgiving, present your requests
                  to God." - Philippians 4:6
                </p>
                <a
                  href="/resources#prayer-scriptures"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  More Verses →
                </a>
              </div>

              {/* Contact Prayer Ministry */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  Contact Prayer Ministry
                </h3>
                <p className="text-gray-700 mb-4">
                  Have questions about prayer or need immediate spiritual
                  support? Our pastoral staff is here for you.
                </p>
                <a
                  href="/contact"
                  className="text-[#0b5a7f] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
