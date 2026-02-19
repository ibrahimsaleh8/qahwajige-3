"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--main-background, #0a0a0a)" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial glow top-center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #d4af37 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#d4af37 1px, transparent 1px),
              linear-gradient(90deg, #d4af37 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to top, var(--main-background, #0a0a0a), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
          dir="rtl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="h-px w-8"
              style={{ background: "var(--main-color, #d4af37)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--main-color, #d4af37)" }}>
              باقاتنا المميزة
            </span>
            <span
              className="h-px w-8"
              style={{ background: "var(--main-color, #d4af37)" }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
            style={{ color: "#ffffff" }}>
            اختر الباقة{" "}
            <span style={{ color: "var(--main-color, #d4af37)" }}>
              المناسبة
            </span>{" "}
            لك
          </h2>

          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--low-color, #6b7280)" }}>
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              key={pkg.id}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "var(--card-background, #1a1a1a)",
                border: "1px solid rgba(212,175,55,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.45)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 40px rgba(212,175,55,0.12), 0 8px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.4)";
              }}>
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--main-black, #111318)" }}>
                    <span
                      className="text-6xl font-extrabold"
                      style={{ color: "rgba(212,175,55,0.25)" }}>
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Gold shimmer line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--main-color, #d4af37), transparent)",
                  }}
                />

                {/* Package badge */}
                <div className="absolute top-3 right-3" dir="rtl">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(212,175,55,0.15)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      color: "var(--main-color, #d4af37)",
                      backdropFilter: "blur(8px)",
                    }}>
                    <Sparkles className="w-3 h-3" />
                    الباقة {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7" dir="rtl">
                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-extrabold mb-3 text-right"
                  style={{ color: "#ffffff" }}>
                  {pkg.title}
                </h3>

                {/* Gold divider */}
                <div
                  className="w-12 h-0.5 rounded-full mb-5"
                  style={{ background: "var(--main-color, #d4af37)" }}
                />

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div className="flex-1 mb-6">
                    <p
                      className="text-xs font-bold mb-3 tracking-wider uppercase text-right"
                      style={{ color: "var(--main-color, #d4af37)" }}>
                      المميزات
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-right">
                          <span
                            className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                              background: "rgba(212,175,55,0.12)",
                              border: "1px solid rgba(212,175,55,0.3)",
                            }}>
                            <Check
                              className="w-2.5 h-2.5"
                              style={{ color: "var(--main-color, #d4af37)" }}
                              strokeWidth={3}
                            />
                          </span>
                          <span
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.75)" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-6" />
                )}

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2.5 group/btn relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #25d366, #1abe5a)",
                    color: "#ffffff",
                    boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 6px 24px rgba(37,211,102,0.4)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 16px rgba(37,211,102,0.25)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}>
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  اطلب الخدمة عبر واتساب
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
