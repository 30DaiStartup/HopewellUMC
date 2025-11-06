import { AnnouncementBanner } from "@/components/announcement-banner";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ImageCarousel } from "@/components/image-carousel";
import { ContentBlock } from "@/components/content-block";
import { ScrollingText } from "@/components/scrolling-text";
import { VideoSection } from "@/components/video-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Header />

      <main>
        <HeroSection />

        <ImageCarousel />

        <ContentBlock
          title="Everyone is welcome."
          description="Seriously. Every week at our church, Christians and non-Christians, seekers and skeptics, the fired-up and the burned-out all come together to learn the ins and outs of Jesus' great invitation into a new life."
          imageUrl="/images/womens-breakfast.jpg"
          imageAlt="Welcoming community"
          ctaText="VISIT"
          ctaHref="#visit"
          backgroundColor="bg-[#0b717f]"
          textColor="text-white"
        />

        <ScrollingText text="We Are—Who We Are" />

        <ContentBlock
          title="Looking for a life-changing performance?"
          description="Neither are we. Instead of hosting a great event every Sunday, we desire to meet with Jesus. Every weekend is an opportunity to gather as his Church, to learn from his Word, and to welcome his Spirit among us. Because Jesus changes lives, not us."
          imageUrl="/images/woman-speaking.jpg"
          imageAlt="Worship gathering"
          ctaText="WHO WE ARE"
          ctaHref="/about"
          reverse={true}
          backgroundColor="bg-[#0b717f]"
          textColor="text-white"
        />

        <VideoSection />

        <ScrollingText text="Connect—Connect—Connect" />

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
