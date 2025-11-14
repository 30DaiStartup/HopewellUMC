import { Button } from "@/components/ui/button";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  reverse?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export function ContentBlock({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  ctaText,
  ctaHref,
  reverse = false,
  backgroundColor = "bg-[#0b5a7f]",
  textColor = "text-white",
}: ContentBlockProps) {
  return (
    <section className={`${backgroundColor} ${textColor} py-20 md:py-32`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`${reverse ? "md:order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={imageUrl} alt={imageAlt} className="w-full h-auto" />
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? "md:order-1" : ""} space-y-6`}>
            {subtitle && (
              <p className="text-sm md:text-base font-medium uppercase tracking-wide opacity-90">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl">{description}</p>
            <Button
              size="lg"
              className="rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-[#0b5a7f] text-white px-8 py-6 text-base"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
