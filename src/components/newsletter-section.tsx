"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setMessage("Good news! Your form went through. Thank you.");
    setEmail("");
    setIsSubmitting(false);

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Weekly emails, Meet-Ups, House Churches, next steps, and more.
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full px-6 py-6 text-base"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="rounded-full bg-[#0b717f] hover:bg-[#09646a] text-white px-8 py-6 text-base whitespace-nowrap"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </Button>
            </form>
            {message && (
              <p className="text-sm text-green-600 font-medium">{message}</p>
            )}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/mens-group.jpg"
              alt="Community connection"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
