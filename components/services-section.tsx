"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const services = [
  {
    id: "water-pumping",
    icon: "/images/service-icons/water.png",
    titleAr: "سحب المياه الجوفية",
    titleEn: "Groundwater Pumping",
    descAr:
      "نقدم خدمات سحب المياه الجوفية بأحدث المعدات والتقنيات المتطورة لضمان كفاءة وجودة عالية. نستخدم مضخات متطورة وأنظمة مراقبة ذكية.",
    descEn:
      "We provide groundwater pumping services with the latest equipment and advanced technologies to ensure high efficiency and quality.",
    image: "/images/services/water.jpg",
  },
  {
    id: "reinforcement",
    icon: "/images/service-icons/reinforcement.png",
    titleAr: "أعمال التدعيم",
    titleEn: "Reinforcement Works",
    descAr:
      "نقوم بتدعيم المباني والمنشآت باستخدام أحدث تقنيات التدعيم والمواد عالية الجودة لضمان متانة وأمان المنشآت.",
    descEn:
      "We reinforce buildings and structures using the latest reinforcement technologies and high-quality materials to ensure durability and safety.",
    image: "/images/services/reinforcement.jpg",
  },
  {
    id: "drilling",
    icon: "/images/service-icons/drilling.png",
    titleAr: "أعمال الحفر",
    titleEn: "Drilling Works",
    descAr:
      "نقدم خدمات حفر متخصصة تشمل حفر الآبار والأساسات باستخدام أحدث الآلات والمعدات المتطورة لضمان الدقة والسلامة.",
    descEn:
      "We provide specialized drilling services including well and foundation drilling using the latest advanced machinery and equipment.",
    image: "/images/services/drilling.jpg",
  },
  {
    id: "finishing",
    icon: "/images/service-icons/finishing.png",
    titleAr: "التشطيبات",
    titleEn: "Finishing Works",
    descAr:
      "تشطيبات عالية الجودة تحقق رؤية العملاء وتوقعاتهم بأفضل الأسعار وأعلى مستويات الدقة والاهتمام بالتفاصيل.",
    descEn:
      "High-quality finishes that achieve clients' vision and expectations at the best prices with precision and attention to detail.",
    image: "/images/services/finishing.jpg",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-4xl mx-auto mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* 🔥 BIG خدماتنا */}
          <div className="mb-6">
            <p
              className="text-accent font-extrabold uppercase tracking-widest
                          text-3xl md:text-4xl lg:text-5xl leading-none inline-block"
            >
              {t("خدماتنا", "Our Services")}
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            {t(
              "حلول متكاملة لجميع احتياجات مشاريعكم",
              "Complete Solutions for All Your Project Needs"
            )}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Tabs */}
          <div
            className={cn(
              "space-y-4 transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "w-full p-6 rounded-2xl text-start transition-all duration-500 group",
                    isActive
                      ? "bg-white shadow-2xl shadow-black/20"
                      : "bg-white/5 hover:bg-white/10 border border-white/10",
                    language && "text-end"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-5",
                      language && "flex-row-reverse"
                    )}
                  >
                    {/* 🔥 BIG ICON */}
                    <div
                      className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500",
                        isActive
                          ? "bg-accent scale-110"
                          : "bg-white/20 scale-95"
                      )}
                    >
                      <Image
                        src={service.icon}
                        alt=""
                        width={42}
                        height={42}
                        quality={100}
                        className={isActive ? "opacity-100" : "opacity-60"}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          "text-xl font-bold mb-1 transition-colors duration-300",
                          isActive ? "text-primary" : "text-white"
                        )}
                      >
                        {t(service.titleAr, service.titleEn)}
                      </h3>
                      <p
                        className={cn(
                          "text-sm line-clamp-2 transition-colors duration-300",
                          isActive ? "text-muted-foreground" : "text-white/60"
                        )}
                      >
                        {t(service.descAr, service.descEn)}
                      </p>
                    </div>

                    <ArrowRight
                      className={cn(
                        "w-5 h-5 shrink-0 transition-all duration-300",
                        isActive
                          ? "text-accent translate-x-0 opacity-100"
                          : "text-white/40 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
                        language && "rotate-180"
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Image */}
          <div
            className={cn(
              "relative transition-all duration-1000 delay-400",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      activeService === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={t(service.titleAr, service.titleEn)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                ))}

                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 p-6 md:p-8",
                    language && "text-end"
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {t(
                      services[activeService].titleAr,
                      services[activeService].titleEn
                    )}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {t(
                      services[activeService].descAr,
                      services[activeService].descEn
                    )}
                  </p>

                  <a
                    href="#contact"
                    className={cn(
                      "inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105",
                      language && "flex-row-reverse"
                    )}
                  >
                    {t("اطلب الخدمة", "Request Service")}
                    <ArrowRight
                      className={cn("w-4 h-4", language && "rotate-180")}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
