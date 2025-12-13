"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Eye,
  ArrowDown,
  Cog,
  Shield,
  Clock,
  Award,
  Trophy,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    badge: null,
    titleAr: "شركة سومت العالمية",
    titleEn: "Summit International Company",
    subtitleAr: "حلول متكاملة لسحب المياه والتدعيم والحفر باحترافية عالية",
    subtitleEn:
      "Integrated solutions for water pumping, reinforcement and drilling with high professionalism",
    showStats: false,
    showLogo: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
    badgeAr: "خدمات متخصصة",
    badgeEn: "Specialized Services",
    badgeIcon: Cog,
    titleAr: "خبرة في سحب المياه والتدعيم تبني مستقبل المشاريع",
    titleEn:
      "Experience in water pumping and reinforcement builds project future",
    subtitleAr:
      "خبرة واسعة في سحب المياه والتدعيم والحفر والتشطيبات بأعلى المعايير",
    subtitleEn:
      "Extensive experience in water pumping, reinforcement, drilling, and finishing with highest standards",
    showStats: false,
    showLogo: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    badgeAr: "مشاريع ناجحة",
    badgeEn: "Successful Projects",
    badgeIcon: Trophy,
    titleAr: "نحو مشاريع آمنة وناجحة بخبرة واحتراف",
    titleEn:
      "Towards safe and successful projects with expertise and professionalism",
    subtitleAr: "ننفذ مشاريع معقدة باحترافية عالية ونسلمها في الوقت المحدد",
    subtitleEn:
      "We execute complex projects with high professionalism and deliver on time",
    showStats: false,
    showLogo: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80",
    badgeAr: "الجودة والسلامة",
    badgeEn: "Quality & Safety",
    badgeIcon: Shield,
    titleAr: "جودة تسبق الزمن... من الأرض حتى السقف",
    titleEn: "Quality precedes time... from ground to ceiling",
    subtitleAr: "نلتزم بأعلى معايير الجودة العالمية ونضع السلامة كأولوية قصوى",
    subtitleEn:
      "We commit to the highest international quality standards and prioritize safety",
    showStats: false,
    showLogo: false,
    showQualityFeatures: true,
  },
];

const stats = [
  { value: 20, labelAr: "سنة خبرة", labelEn: "Years Experience" },
  { value: 500, labelAr: "مشروع ناجح", labelEn: "Successful Projects" },
  { value: 50, labelAr: "فريق متخصص", labelEn: "Expert Team" },
];

const qualityFeatures = [
  { icon: Award, labelAr: "شهادات الجودة", labelEn: "Quality Certificates" },
  {
    icon: Shield,
    labelAr: "نظام سلامة متكامل",
    labelEn: "Integrated Safety System",
  },
  { icon: Clock, labelAr: "التسليم في الوقت", labelEn: "On-Time Delivery" },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));
  const { t, language } = useLanguage();

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Count-up animation for stats
  useEffect(() => {
    if (currentSlide === 0) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCountedStats(
          stats.map((stat) => Math.round((stat.value * step) / steps))
        );
        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentSlide]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-700",
            index === currentSlide
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-105 pointer-events-none"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#11224E]/80 via-[#11224E]/60 to-[#11224E]/80" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                {/* Logo for first slide */}
                {slide.showLogo && (
                  <div
                    className={cn(
                      "mb-6 transition-all duration-700 delay-100",
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8"
                    )}
                  >
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src="/images/logo/logo.png"
                        alt="Summit International"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                )}

                {/* Badge */}
                {slide.badgeAr && (
                  <div
                    className={cn(
                      "mb-6 transition-all duration-700 delay-100",
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-8"
                    )}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                      {t(slide.badgeAr, slide.badgeEn)}
                      {slide.badgeIcon && (
                        <slide.badgeIcon className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h1
                  className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 text-balance",
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                >
                  {t(slide.titleAr, slide.titleEn)}
                </h1>

                {/* Subtitle */}
                <p
                  className={cn(
                    "text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 text-pretty",
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                >
                  {t(slide.subtitleAr, slide.subtitleEn)}
                </p>

                {/* Stats for first slide */}
                {slide.showStats && (
                  <div
                    className={cn(
                      "grid grid-cols-3 gap-4 md:gap-8 mb-10 max-w-lg mx-auto transition-all duration-700 delay-400",
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                  >
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                          {countedStats[i]}+
                        </div>
                        <div className="text-sm text-white/70">
                          {t(stat.labelAr, stat.labelEn)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quality Features for last slide */}
                {slide.showQualityFeatures && (
                  <div
                    className={cn(
                      "grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto transition-all duration-700 delay-400",
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                  >
                    {qualityFeatures.map((feature, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                      >
                        <feature.icon className="w-8 h-8 text-accent" />
                        <span className="text-sm text-white/90 text-center">
                          {t(feature.labelAr, feature.labelEn)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div
                  className={cn(
                    "flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-500",
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                >
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105"
                  >
                    {t("اتصل بنا الآن", "Contact Us Now")}
                    <Phone className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNavClick("#projects")}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/20"
                  >
                    {t("عرض المشاريع", "View Projects")}
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 hover:border-white/60 text-white rounded-xl font-semibold transition-all hover:bg-white/5"
                  >
                    {t("اكتشف خدماتنا", "Discover Services")}
                    <ArrowDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentSlide
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </section>
  );
}
