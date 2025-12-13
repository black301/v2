"use client";

import { useEffect, useRef } from "react";
import { Award, Clock, GraduationCap, DollarSign } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const advantages = [
  {
    icon: Award,
    titleAr: "الجودة",
    titleEn: "Quality",
    descAr: "نلتزم بأعلى معايير الجودة العالمية",
    descEn: "We adhere to the highest international quality standards",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    titleAr: "الالتزام بالوقت",
    titleEn: "Time Commitment",
    descAr: "نوفي بوعودنا ونلتزم بالمواعيد المحددة",
    descEn: "We keep our promises and meet deadlines",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: GraduationCap,
    titleAr: "الخبرة",
    titleEn: "Experience",
    descAr: "فريق عمل متخصص ذو خبرة واسعة",
    descEn: "Specialized team with extensive experience",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: DollarSign,
    titleAr: "الأسعار التنافسية",
    titleEn: "Competitive Prices",
    descAr: "أسعار تنافسية مع جودة عالية",
    descEn: "Competitive prices with high quality",
    color: "bg-accent/10 text-accent",
  },
];

export function AdvantagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("مميزات الشركة", "Company Advantages")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={cn(
                "section-animate text-center p-8 bg-card rounded-2xl shadow-lg border border-border",
                "hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                  advantage.color,
                  "group-hover:scale-110 transition-transform"
                )}
              >
                <advantage.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t(advantage.titleAr, advantage.titleEn)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(advantage.descAr, advantage.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
