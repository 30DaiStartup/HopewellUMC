import { AnnouncementBanner } from "@/components/announcement-banner";
import { Header } from "@/components/header";
import { ScrollingText } from "@/components/scrolling-text";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              We're a church{" "}
              <span className="text-[#0b717f]">all about loving Jesus.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              We are a church with a place and ministry for every age and every level of maturity. Our primary purpose is to be the body of Christ present in the Simpsonville community, existing to grow in relationship with Christ and God's people.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <div className="aspect-video relative">
                <img
                  src="/images/woman-speaking.jpg"
                  alt="Church worship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button className="bg-[#0b717f] hover:bg-[#09646a] text-white rounded-full p-8 transition-all transform hover:scale-110 shadow-xl">
                    <Play className="h-16 w-16 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollingText text="We Are—Who We Are" />

        {/* Three Column Features */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src="/images/womens-breakfast.jpg"
                    alt="Everyone is welcome"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Everyone is welcome.</h3>
                <p className="text-muted-foreground">
                  Seriously. We'd be honored if you joined us this Sunday, no strings attached.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src="/images/womens-group.jpg"
                    alt="Everyone has a next best step"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Everyone has a next best step.</h3>
                <p className="text-muted-foreground">
                  You won't find any grace-graduates here. We're all taking next steps in our walk
                  with Jesus.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src="/images/outdoor-work.jpg"
                    alt="Everyone can make a difference"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Everyone can make a difference.</h3>
                <p className="text-muted-foreground">
                  Your life matters. God made you on purpose. No matter what your story is, you
                  have something to contribute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-[#0b717f] text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Believe</h2>
                <p className="text-lg mb-2">
                  We hold to the historic tenants of the Christian faith.
                </p>
                <p className="text-lg">If you want the fine print, you can find it here.</p>
              </div>
              <Button
                size="lg"
                className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#0b717f] text-white px-8 py-6 text-base shrink-0"
              >
                OUR BELIEFS
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* FAQ List */}
              <div className="space-y-4">
                <div className="border-2 border-[#0b717f] rounded-2xl p-6 hover:bg-[#0b717f]/5 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold">
                    What's the most important thing I should know about Church?
                  </h3>
                </div>
                <div className="border-2 border-[#0b717f] rounded-2xl p-6 hover:bg-[#0b717f]/5 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold">What about Leadership & Finances?</h3>
                </div>
                <div className="border-2 border-[#0b717f] rounded-2xl p-6 hover:bg-[#0b717f]/5 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold">When did Church begin?</h3>
                </div>
                <div className="border-2 border-[#0b717f] rounded-2xl p-6 hover:bg-[#0b717f]/5 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold">What kind of stuff do you believe?</h3>
                </div>
              </div>

              {/* FAQ Outline Text */}
              <div className="flex items-center justify-center">
                <h2 className="text-8xl md:text-9xl font-bold text-[#0b717f] outline-text-lg opacity-20">
                  FAQ
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get to know the folks on our team.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our Leadership Team is made up of everyday people who love following Jesus and
                  helping others follow him.
                </p>
                <Button
                  size="lg"
                  className="rounded-full border-2 border-[#0b717f] bg-transparent hover:bg-[#0b717f] hover:text-white text-[#0b717f] px-8 py-6 text-base"
                >
                  MEET THE TEAM
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mens-group.jpg"
                  alt="Team member"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Everyone is Welcome - Large Section */}
        <section className="bg-[#0b717f] py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/volunteers-packing.jpg"
                    alt="Community"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 text-white text-6xl font-bold tracking-wider opacity-50 hidden md:block">
                  JOIN US ON SUNDAYS
                </div>
              </div>
              <div className="text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Everyone is welcome.</h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Seriously. Every week at Church, Christians and non-Christians, seekers and
                  skeptics, the fired-up and the burned-out all come together to learn the ins
                  and outs of Jesus' great invitation into a new life.
                </p>
                <Button
                  size="lg"
                  className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#0b717f] text-white px-8 py-6 text-base"
                >
                  VISIT
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ScrollingText text="Connect—Connect—Connect" />
      </main>

      <Footer />
    </div>
  );
}
