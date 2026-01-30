import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "#home" },
      { name: "عن الشركة", href: "#about" },
      { name: "خدماتنا", href: "#services" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-main-black border-t border-white/5">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6 text-xl font-bold text-white">
              {brandName}{" "}
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">{description} </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-main-color transition-colors inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>

            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4" />
                {address}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4" />
                {email}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4" />
                {phone}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-right">
              © {currentYear} قهوجيين الرياض. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
