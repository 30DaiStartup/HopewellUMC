"use client";

import { useState } from "react";
import { DollarSign, Heart, Mail, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function GivePage() {
  const [givingModalOpen, setGivingModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Give</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Supporting God's work through Hopewell UMC
            </p>
            <button
              onClick={() => setGivingModalOpen(true)}
              className="bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Heart className="h-5 w-5" />
              Give Now
            </button>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ways to Give
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Online Giving */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Online Giving</h3>
                <p className="text-gray-600 mb-6">
                  Give securely online through our Realm giving platform. Set up
                  one-time or recurring gifts.
                </p>
                <button
                  onClick={() => setGivingModalOpen(true)}
                  className="bg-[#0b5a7f] text-white hover:bg-[#0b5a7f]/90 px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  Give Online
                </button>
              </div>

              {/* In-Person Giving */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">In-Person</h3>
                <p className="text-gray-600 mb-6">
                  Offering plates are available during our Sunday worship
                  services at 9:00 AM and 11:00 AM.
                </p>
                <a
                  href="/about/visit"
                  className="bg-white border-2 border-[#0b5a7f] text-[#0b5a7f] hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block w-full"
                >
                  Plan Your Visit
                </a>
              </div>

              {/* Mail */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mail</h3>
                <p className="text-gray-600 mb-6">
                  Send your gift by mail to:
                  <br />
                  <strong className="block mt-2">Hopewell UMC</strong>
                  1420 Neely Ferry Rd
                  <br />
                  Simpsonville, SC 29680
                </p>
              </div>
            </div>

            {/* Why We Give */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">Why We Give</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Giving is an act of worship and a response to God's generosity
                toward us. Your gifts support our ministries, help us serve our
                community, and enable us to share the love of Christ with the
                world. Every contribution, no matter the size, makes a
                difference in advancing God's kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enter In Campaign Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Enter In Campaign
              </h2>
              <p className="text-gray-700 text-lg text-center mb-8">
                Join us in our "Enter In" capital campaign as we invest in our
                facilities and expand our ministry impact in the community.
              </p>
              <div className="text-center">
                <button
                  onClick={() => setGivingModalOpen(true)}
                  className="bg-[#0b5a7f] text-white hover:bg-[#0b5a7f]/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Give to Enter In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generosity Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Generosity Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Biblical Teaching on Giving */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  Biblical Teaching on Giving
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore what Scripture teaches about generosity, stewardship,
                  and cheerful giving.
                </p>
                <a
                  href="/resources#giving"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              {/* Giving FAQ */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Giving FAQ</h3>
                <p className="text-gray-700 mb-4">
                  Common questions about online giving, tax statements, and
                  designated gifts.
                </p>
                <a
                  href="/about/faq#giving"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  View FAQ →
                </a>
              </div>

              {/* Planned Giving */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">Planned Giving</h3>
                <p className="text-gray-700 mb-4">
                  Learn about estate planning, legacy giving, and other ways to
                  support the church's future.
                </p>
                <a
                  href="/contact"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Contact Us →
                </a>
              </div>

              {/* Stock & Other Assets */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-colors">
                <h3 className="text-xl font-bold mb-3">
                  Stock &amp; Other Assets
                </h3>
                <p className="text-gray-700 mb-4">
                  Interested in donating stock, real estate, or other assets?
                  We can help with the process.
                </p>
                <a
                  href="/contact"
                  className="text-[#0b5a7f] font-semibold hover:underline"
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realm Giving Modal */}
      <Dialog open={givingModalOpen} onOpenChange={setGivingModalOpen}>
        <DialogContent className="max-w-4xl h-[90vh] md:h-[600px] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Online Giving</DialogTitle>
          </DialogHeader>
          <iframe
            src="https://onrealm.org/hopewellumcsimpsonville/give/now"
            className="w-full h-full border-0 rounded-lg"
            title="Online Giving via Realm"
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}
