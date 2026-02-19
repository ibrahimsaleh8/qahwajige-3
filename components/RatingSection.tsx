"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {}
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const ratingLabels: Record<number, string> = {
    1: "سيء",
    2: "مقبول",
    3: "جيد",
    4: "جيد جداً",
    5: "ممتاز",
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2 md:gap-3">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;
        return (
          <span key={star} className="relative inline-block">
            {interactive ? (
              <button
                type="button"
                disabled={isLoading || !mounted}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="group p-1.5 rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: active ? "rgba(212,175,55,0.1)" : "transparent",
                }}
                aria-label={`تقييم ${star} من 5`}>
                <Star
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-200 group-hover:scale-110"
                  style={{
                    fill: active
                      ? "var(--main-color, #d4af37)"
                      : "rgba(255,255,255,0.08)",
                    color: active
                      ? "var(--main-color, #d4af37)"
                      : "rgba(255,255,255,0.15)",
                    filter: active
                      ? "drop-shadow(0 0 8px rgba(212,175,55,0.5))"
                      : "none",
                  }}
                />
              </button>
            ) : (
              <Star
                className="w-10 h-10 md:w-12 md:h-12"
                style={{
                  fill: active
                    ? "var(--main-color, #d4af37)"
                    : "rgba(255,255,255,0.08)",
                  color: active
                    ? "var(--main-color, #d4af37)"
                    : "rgba(255,255,255,0.15)",
                  filter: active
                    ? "drop-shadow(0 0 8px rgba(212,175,55,0.4))"
                    : "none",
                }}
              />
            )}
          </span>
        );
      })}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--main-background, #0a0a0a)" }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, #d4af37 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#d4af37 1px, transparent 1px),
              linear-gradient(90deg, #d4af37 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        {/* Section label */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          dir="rtl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="h-px w-8"
              style={{ background: "var(--main-color, #d4af37)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--main-color, #d4af37)" }}>
              آراء العملاء
            </span>
            <span
              className="h-px w-8"
              style={{ background: "var(--main-color, #d4af37)" }}
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
            قيّم{" "}
            <span style={{ color: "var(--main-color, #d4af37)" }}>تجربتك</span>{" "}
            معنا
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: "var(--low-color, #6b7280)" }}>
            رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--card-background, #1a1a1a)",
            border: "1px solid rgba(212,175,55,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.5)",
          }}>
          {/* Gold top line */}
          <div
            className="h-0.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--main-color, #d4af37), transparent)",
            }}
          />

          <div className="p-8 md:p-12 text-center" dir="rtl">
            {/* Stats */}
            {(averageRating > 0 || totalRatings > 0) && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 pb-8"
                style={{ borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
                {averageRating > 0 && (
                  <div className="flex flex-col items-center gap-1.5">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ color: "var(--main-color, #d4af37)" }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4"
                          style={{
                            fill:
                              star <= Math.round(averageRating)
                                ? "var(--main-color, #d4af37)"
                                : "rgba(255,255,255,0.1)",
                            color:
                              star <= Math.round(averageRating)
                                ? "var(--main-color, #d4af37)"
                                : "rgba(255,255,255,0.1)",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: "var(--low-color, #6b7280)" }}>
                      متوسط التقييم
                    </span>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div className="flex flex-col items-center gap-1.5">
                    <span
                      className="text-4xl font-extrabold"
                      style={{ color: "#ffffff" }}>
                      {totalRatings}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--low-color, #6b7280)" }}>
                      {totalRatings === 1 ? "تقييم" : "تقييمات"}
                    </span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Stars / Submitted state */}
            {submitted !== null && mounted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-4 space-y-4">
                {renderStars(submitted, false)}
                <div className="space-y-1 mt-4">
                  <p
                    className="font-bold text-lg"
                    style={{ color: "var(--main-color, #d4af37)" }}>
                    شكراً لتقييمك!
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--low-color, #6b7280)" }}>
                    نسعد بتقييمك وسنعمل على تحسين تجربتك
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {renderStars(displayRating || 0, true)}

                {/* Label hint */}
                <div className="h-6 flex items-center justify-center">
                  {mounted && !isLoading && (
                    <p
                      className="text-sm font-medium transition-all duration-200"
                      style={{
                        color: displayRating
                          ? "var(--main-color, #d4af37)"
                          : "var(--low-color, #6b7280)",
                      }}>
                      {displayRating
                        ? ratingLabels[displayRating]
                        : "انقر على النجم المناسب للتقييم"}
                    </p>
                  )}
                  {isLoading && (
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "var(--low-color, #6b7280)" }}>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin inline-block"
                        style={{
                          borderColor: "var(--main-color, #d4af37)",
                          borderTopColor: "transparent",
                        }}
                      />
                      <span className="text-sm">جاري الإرسال...</span>
                    </div>
                  )}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: dot <= displayRating ? "20px" : "6px",
                        height: "6px",
                        background:
                          dot <= displayRating
                            ? "var(--main-color, #d4af37)"
                            : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
