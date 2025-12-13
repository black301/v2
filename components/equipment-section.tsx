"use client";

import { useEffect, useRef } from "react";
import { Cog, Truck, Hammer } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const equipment = [
  {
    icon: Cog,
    titleAr: "مضخات متطورة",
    titleEn: "Advanced Pumps",
    descAr: "مضخات عالية الكفاءة لسحب المياه الجوفية بأحدث التقنيات العالمية",
    descEn:
      "High-efficiency pumps for groundwater pumping using the latest global technologies",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Truck,
    titleAr: "لوادر حديثة",
    titleEn: "Modern Loaders",
    descAr: "لوادر حديثة لجميع أعمال البناء والتشييد مع قدرات تحميل عالية",
    descEn:
      "Modern loaders for all construction works with high loading capacities",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Hammer,
    titleAr: "حفارات تدعيم",
    titleEn: "Reinforcement Excavators",
    descAr: "حفارات متخصصة لأعمال التدعيم والحفر بأعلى مستويات الدقة والأمان",
    descEn:
      "Specialized excavators for reinforcement and drilling works with the highest levels of precision and safety",
    color: "from-emerald-500 to-teal-500",
  },
];

export function EquipmentSection() {
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
            {t("معداتنا المتطورة", "Our Advanced Equipment")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            {t(
              "نمتلك أحدث المعدات والتقنيات التي تمكننا من تنفيذ مشاريعنا بكفاءة وجودة عالية.",
              "We possess the latest equipment and technologies that enable us to execute our projects with high efficiency and quality."
            )}
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {equipment.map((item, index) => (
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
                  "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br",
                  item.color,
                  "group-hover:scale-110 transition-transform"
                )}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t(item.titleAr, item.titleEn)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(item.descAr, item.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
