import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-10 md:py-16 pb-8 md:pb-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Subtitle */}
        <p className="text-[#0b717f] text-lg md:text-xl font-semibold uppercase tracking-wide mb-6">
          Hopewell umC
        </p>

        {/* Main Heading with Outline Effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
          <span className="block text-foreground">MAKING JESUS KNOWN TO</span>
          <span className="block text-[#0b717f]">EVERYONE, EVERYWHERE</span>
        </h1>

        {/* Taglines */}
        <div className="space-y-2 mb-12 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          <p>Everyone is welcome.</p>
          <p>Everyone has a next best step.</p>
          <p>Everyone can make a difference.</p>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="rounded-full bg-[#0b717f] hover:bg-[#09646a] text-white px-8 py-6 text-base"
        >
          VISIT
        </Button>
      </div>
    </section>
  );
}
