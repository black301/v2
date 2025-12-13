"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "./language-context";

const quickLinks = [
  { href: "#home", labelAr: "الرئيسية", labelEn: "Home" },
  { href: "#about", labelAr: "عن الشركة", labelEn: "About" },
  { href: "#services", labelAr: "الخدمات", labelEn: "Services" },
  { href: "#projects", labelAr: "المشاريع", labelEn: "Projects" },
  { href: "#contact", labelAr: "اتصل بنا", labelEn: "Contact" },
];

const serviceLinks = [
  {
    href: "#services",
    labelAr: "سحب المياه الجوفية",
    labelEn: "Groundwater Pumping",
  },
  {
    href: "#services",
    labelAr: "أعمال التدعيم",
    labelEn: "Reinforcement Works",
  },
  { href: "#services", labelAr: "أعمال الحفر", labelEn: "Drilling Works" },
  { href: "#services", labelAr: "التشطيبات", labelEn: "Finishing Works" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/summitsic", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/summitsic",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/summitsic",
    label: "LinkedIn",
  },
];

export function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#11224E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Summit International"
                width={60}
                height={60}
                className="rounded-full border-2 border-white/20"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {t("سومت العالمية", "Summit International")}
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t(
                "شركة رائدة في مجال حلول البناء والبنية التحتية في الكويت",
                "A leading company in construction and infrastructure solutions in Kuwait"
              )}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {t(link.labelAr, link.labelEn)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              {t("خدماتنا", "Our Services")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {t(link.labelAr, link.labelEn)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              {t("بيانات التواصل", "Contact Info")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span dir="ltr">+965 6041 5151</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>summitceo25@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-white/70">
                  {t(
                    "الفحيحيل شارع مكة قطعة ٧ قسيمة ٧٣٠١ الدور ٤ مكتب ٣١٢",
                    "Al-Fahaheel, Makkah Street, Piece 7, Plot 7301, 4th Floor, Office 312"
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            {t(
              "© 2025 شركة سومت العالمية. جميع الحقوق محفوظة.",
              "© 2025 Summit International Company. All rights reserved."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
