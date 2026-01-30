import { AboutSectionData } from "@/lib/responseType";
import { MessageCircle, Star } from "lucide-react";

export default function AboutSection({
  description1,
  label,
  title,
  whatsApp,
}: AboutSectionData & { whatsApp?: string | undefined }) {
  return (
    <section className="py-20 px-4 bg-card-background/30" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 items-center">
          {/* Text Content */}
          <div className="flex items-center flex-col gap-2 text-center">
            <div className="inline-block bg-main-color/10 border border-main-color/30 rounded-full px-6 py-2 mb-6">
              <span className="text-main-color font-semibold">{label}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {title}{" "}
            </h2>

            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              {description1}{" "}
            </p>
            {whatsApp && (
              <a
                target="_blank"
                href={`https://wa.me/${whatsApp?.includes("+") ? whatsApp.split("+").join("") : whatsApp}?text=`}
                className="bg-main-color hover:bg-main-color/90 text-main-black px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2">
                احجز معنا الان
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Image/Stats Section */}
          <div className="relative w-full">
            {/* Main Card */}
            <div className="bg-linear-to-br from-main-color/10 to-transparent border border-main-color/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #d4af37 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              {/* Stats */}
              <div className="relative z-10 space-y-8">
                <div className="text-center p-6 bg-main-black/50 backdrop-blur-sm rounded-2xl border border-white/5">
                  <div className="text-5xl font-bold text-main-color mb-2">
                    10+
                  </div>
                  <div className="text-white/70">سنوات من الخبرة</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-main-black/50 backdrop-blur-sm rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-white mb-2">
                      500+
                    </div>
                    <div className="text-white/60 text-sm">مناسبة ناجحة</div>
                  </div>
                  <div className="text-center p-6 bg-main-black/50 backdrop-blur-sm rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-white mb-2">
                      1,200+
                    </div>
                    <div className="text-white/60 text-sm">عميل راضٍ</div>
                  </div>
                </div>

                <div className="text-center p-6 bg-main-black/50 backdrop-blur-sm rounded-2xl border border-white/5">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="w-6 h-6 fill-main-color" />
                    <Star className="w-6 h-6 fill-main-color" />
                    <Star className="w-6 h-6 fill-main-color" />
                    <Star className="w-6 h-6 fill-main-color" />
                    <Star className="w-6 h-6 fill-main-color" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    4.9/5
                  </div>
                  <div className="text-white/60">تقييم العملاء</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-main-color/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-main-color/20 rounded-full blur-3xl" />
            </div>

            {/* Floating Badge */}
            <div className="hidden lg:flex absolute lg:-top-10 lg:-left-10 left-1/2 bg-main-color text-main-black rounded-2xl p-4 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-xs font-bold mt-1">معتمد ومرخص</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
