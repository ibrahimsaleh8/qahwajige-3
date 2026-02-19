"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Share2, X } from "lucide-react";

const socialLinks = [
  {
    label: "whatsapp",
    icon: FaWhatsapp,
    color: "#25d366",
    href: (whatsapp: string) =>
      `https://wa.me/${whatsapp.includes("+") ? whatsapp.replace("+", "") : whatsapp}?text=`,
    pulse: true,
  },
  {
    label: "telephone",
    icon: FaPhone,
    color: "#3b82f6",
    href: (tel: string) => `tel:${tel}`,
    iconClass: "rotate-[110deg]",
  },
  {
    label: "instagram",
    icon: FaInstagram,
    color: "#e1306c",
    href: () => "https://www.instagram.com/qahwajeyn",
  },
  {
    label: "tiktok",
    icon: FaTiktok,
    color: "#ffffff",
    bg: "#010101",
    href: () => "https://www.tiktok.com/@user61719922769991",
  },
  {
    label: "facebook",
    icon: FaFacebookF,
    color: "#ffffff",
    bg: "#1877f2",
    href: () => "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
  },
  {
    label: "twitter",
    icon: FaTwitter,
    color: "#ffffff",
    bg: "#1da1f2",
    href: () => "https://x.com/NghmAbw11703",
  },
  {
    label: "youtube",
    icon: FaYoutube,
    color: "#ffffff",
    bg: "#ff0000",
    href: () => "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
  },
];

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;
  telephone: string;
}) {
  const [open, setOpen] = useState(true);

  const getHref = (item: (typeof socialLinks)[0]) => {
    if (item.label === "whatsapp") return item.href(whatsapp);
    if (item.label === "telephone") return item.href(telephone);
    return item.href("");
  };

  return (
    <div className="fixed z-40 left-4 bottom-6 flex flex-col items-center gap-3">
      {/* Social icons — revealed when open */}
      <AnimatePresence>
        {open &&
          socialLinks.map((item, i) => {
            const Icon = item.icon;
            const href = getHref(item);
            return (
              <motion.a
                key={item.label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.6 }}
                transition={{
                  duration: 0.28,
                  delay: open ? i * 0.05 : (socialLinks.length - i) * 0.04,
                  ease: "backOut",
                }}
                whileHover={{ scale: 1.15, x: 4 }}
                whileTap={{ scale: 0.92 }}
                className="relative flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg group"
                style={{
                  background: item.bg ?? item.color,
                  boxShadow: `0 4px 16px ${item.bg ?? item.color}55`,
                }}>
                <Icon
                  className={`w-5 h-5 text-white ${item.iconClass ?? ""}`}
                />

                {/* Pulse ring for WhatsApp */}
                {item.pulse && (
                  <span
                    className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                    style={{ background: item.color }}
                  />
                )}

                {/* Tooltip */}
                <span
                  className="absolute left-14 whitespace-nowrap text-xs font-semibold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{
                    background: "var(--card-background, #1a1a1a)",
                    color: "#fff",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}>
                  {item.label}
                </span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="toggle social links"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl focus:outline-none"
        style={{
          background: "var(--main-color, #d4af37)",
          boxShadow: "0 6px 24px rgba(212,175,55,0.4)",
        }}>
        {/* Subtle ring */}
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "0 0 0 2px rgba(212,175,55,0.3)",
          }}
        />
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center">
          {open ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Share2 className="w-6 h-6 text-black" />
          )}
        </motion.span>
      </motion.button>

      {/* Gold glow under toggle */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full blur-md opacity-60"
        style={{ background: "var(--main-color, #d4af37)" }}
      />
    </div>
  );
}
