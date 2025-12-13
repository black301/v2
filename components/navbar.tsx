"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const navItems = [
  { href: "#home", ar: "الرئيسية", en: "Home" },
  { href: "#about", ar: "عن الشركة", en: "About" },
  { href: "#services", ar: "الخدمات", en: "Services" },
  { href: "#projects", ar: "المشاريع", en: "Projects" },
  { href: "#map", ar: "خريطة الموقع", en: "Location" },
  { href: "#contact", ar: "اتصل بنا", en: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll state
      setIsScrolled(window.scrollY > 50);

      // Scroll progress calculation
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("#home")}
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
              <Image
                src="/images/logo/logo.png"
                alt="Summit International Company"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={cn(
                  "font-bold text-lg transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {t("سومت العالمية", "Summit International")}
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {t(item.ar, item.en)}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "text-foreground hover:bg-muted border border-border"
                  : "text-white hover:bg-white/10 border border-white/20"
              )}
            >
              {language === "ar" ? "English" : "العربية"}
              <Globe className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="bg-background/95 backdrop-blur-md rounded-xl border border-border shadow-xl p-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "w-full text-start px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {t(item.ar, item.en)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
