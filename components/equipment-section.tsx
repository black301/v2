"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const equipment = [
  {
    titleAr: "سيارات نقل خفيفة",
    titleEn: "Pickup Trucks",
    descAr: "سيارات نقل خفيفة مجهزة لخدمة مواقع العمل",
    descEn: "Light pickup trucks equipped for site operations",
    image: "/images/equipment/pickup.jpg",
  },
  {
    titleAr: "نقل متوسط",
    titleEn: "Half Lorry Trucks",
    descAr: "شاحنات نصف نقل لأعمال النقل الثقيلة",
    descEn: "Medium-duty trucks for heavy transport",
    image: "/images/equipment/half-lorry.jpg",
  },
  {
    titleAr: "شاحنات بوم",
    titleEn: "Boom Trucks",
    descAr: "شاحنات مزودة برافعة لأعمال الرفع",
    descEn: "Boom trucks with cranes for lifting operations",
    image: "/images/equipment/boom.jpg",
  },
  {
    titleAr: "ماكينات شد التربة",
    titleEn: "Anchor Machines",
    descAr: "ماكينات شد ودعم التربة – Casagrande C8",
    descEn: "Soil anchoring machines – Casagrande C8",
    image: "/images/equipment/anchor.jpg",
  },
  {
    titleAr: "ماكينات حفر",
    titleEn: "Drilling Machines",
    descAr: "معدات حفر متطورة لأعمال الأساسات",
    descEn: "Advanced drilling equipment for foundation works",
    image: "/images/equipment/drilling.jpg",
  },
  {
    titleAr: "مضخات المياه",
    titleEn: "Dewatering Pumps",
    descAr: "Sykes – Hudig – Geho – Varisco – Miller 6”",
    descEn: "Sykes, Hudig, Geho, Varisco, Miller 6”",
    image: "/images/equipment/pumps.jpg",
  },
  {
    titleAr: "مضخة Geho ZD 900",
    titleEn: 'Geho ZD 900 Pump – 6"',
    descAr: "مضخة نزح مياه عالية الكفاءة بقطر 6 بوصة",
    descEn: "High-efficiency dewatering pump – 6 inch",
    image: "/images/equipment/geho-zd-900.jpg",
  },
  {
    titleAr: "مضخة Miller",
    titleEn: 'Miller Pump – 6"',
    descAr: "مضخة نزح مياه قوية لمواقع العمل الثقيلة",
    descEn: "Heavy-duty dewatering pump for construction sites",
    image: "/images/equipment/miller-6.jpg",
  },
  {
    titleAr: "مضخاتنا",
    titleEn: "Our Pumps",
    descAr: "Sykes، Hudig، Geho، Varisco، Miller - 6 بوصة",
    descEn: 'Sykes, Hudig, Geho, Varisco, Miller – 6"',
    image: "/images/equipment/OurPumps.jpg",
  },
];

export function EquipmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );

    sectionRef.current
      ?.querySelectorAll(".section-animate")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("معداتنا", "Our Equipment")}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            {t(
              "نمتلك مجموعة متكاملة من المعدات الحديثة لتنفيذ جميع أعمال التدعيم والحفر والنقل.",
              "We own a full fleet of modern equipment for drilling, anchoring, pumping, and transportation."
            )}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {equipment.map((item, index) => (
            <div
              key={index}
              className={cn(
                "section-animate bg-card rounded-2xl overflow-hidden border shadow-lg",
                "hover:-translate-y-2 hover:shadow-xl transition-all"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={t(item.titleAr, item.titleEn)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">
                  {t(item.titleAr, item.titleEn)}
                </h3>
                <p className="text-muted-foreground">
                  {t(item.descAr, item.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
