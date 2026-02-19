import { HeroSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
  features,
}: HeroSectionData & { image?: string | null; features?: WhyUsFeatureData[] }) {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="relative">
          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-main-color/10 border border-main-color/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-main-color rounded-full animate-pulse"></span>
                <span className="text-main-color text-sm">
                  خدمة ضيافة متميزة
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold mb-6 leading-tight text-main-color">
                {headline}
              </h1>

              {/* Description */}
              <p className="text-white/60 md:text-lg text-base mb-8 max-w-2xl mx-auto lg:mx-0">
                {subheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a
                  target="_blank"
                  href={`https://wa.me/${whatsApp?.includes("+") ? whatsApp.split("+").join("") : whatsApp}?text=`}
                  className="bg-main-color hover:bg-main-color/90 text-main-black px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                  <span>ابدأ الحجز الآن</span>
                  <ChevronLeft className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="bg-transparent border border-white/20 hover:border-main-color text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                  تصفح خدماتنا
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold text-main-color mb-1">
                    500+
                  </div>
                  <div className="text-white/60 text-sm">مناسبة راضية</div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold text-main-color mb-1">
                    10+
                  </div>
                  <div className="text-white/60 text-sm">سنوات الخبرة</div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold text-main-color mb-1">
                    24/7
                  </div>
                  <div className="text-white/60 text-sm">دعم مستمر</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 relative w-full">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl ">
                <div className="aspect-2/2 bg-linear-to-br from-main-color/20 to-transparent relative ">
                  {/* Placeholder for coffee image */}
                  <div className="absolute inset-0 bg-cover bg-center" />
                  {image && (
                    <Image
                      src={image}
                      alt="Hero Image"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-center object-cover"
                    />
                  )}

                  {/* Quality Badge */}
                  <div className="absolute bottom-6 left-6 bg-main-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-main-color/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-main-color"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        جودة مضمونة
                      </div>
                      <div className="text-white/60 text-sm">
                        خدمات ضيافة احترافية
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {features &&
              features.map((card) => {
                const IconComponent =
                  iconMap[card.icon as keyof typeof iconMap];

                return (
                  <div
                    key={card.title}
                    className="bg-card-background border border-white/5 rounded-2xl p-6 text-center hover:border-main-color/30 transition-all">
                    <div className="w-12 h-12 bg-main-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-main-color" />
                      )}
                    </div>

                    <p className="text-white text-sm mb-2">{card.title}</p>

                    <p className="text-white/70 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
