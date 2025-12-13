"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const projects = [
  {
    id: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    titleAr: "إصلاح وصيانة بايبات الماء محطة توليد الكهرباء الزور",
    titleEn: "Water Pipes Repair & Maintenance at Al-Zour Power Plant",
    descAr:
      "إصلاح وصيانة أنابيب المياه بمحطة توليد الكهرباء في الزور. المقاول الرئيسي: شركة الغانم. خدماتنا: سحب المياه الجوفية.",
    descEn:
      "Repair and maintenance of water pipes at Al-Zour Power Plant. Main contractor: Al-Ghanim Company. Our services: Groundwater pumping.",
    year: "2023",
  },
  {
    id: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    titleAr: "أبراج كهرباء الضغط العالي - الصبية جزيرة بوبيان",
    titleEn: "High Voltage Electricity Towers - Subiya Bubiyan Island",
    descAr:
      "إنشاء وصيانة أبراج كهرباء الضغط العالي. الجهة المالكة: وزارة الكهرباء. المقاول الرئيسي: شركة السويدي. خدماتنا: سحب المياه.",
    descEn:
      "Construction and maintenance of high voltage electricity towers. Owner: Ministry of Electricity. Main contractor: Al-Suwaidi Company. Our services: Water pumping.",
    year: "2023",
  },
  {
    id: 3,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    titleAr: "المدرسة المتوسطة بنين - منطقة صباح الأحمد",
    titleEn: "Middle School for Boys - Sabah Al-Ahmad Area",
    descAr:
      "إنشاء وصيانة المدرسة المتوسطة للبنين. الجهة المالكة: الهيئة العامة للإسكان. المقاول الرئيسي: شركة الخرافي. خدماتنا: تدعيم وسحب ماء.",
    descEn:
      "Construction and maintenance of middle school for boys. Owner: Public Authority for Housing. Main contractor: Al-Kharafi Company. Our services: Reinforcement and water pumping.",
    year: "2023",
  },
  {
    id: 4,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    titleAr: "المدرسة الابتدائية بنين - المنطقة الاستثمارية صباح الأحمد",
    titleEn: "Primary School for Boys - Sabah Al-Ahmad Investment Area",
    descAr:
      "إنشاء وصيانة المدرسة الابتدائية للبنين. الجهة المالكة: الهيئة العامة للإسكان. المقاول الرئيسي: شركة الخرافي.",
    descEn:
      "Construction and maintenance of primary school for boys. Owner: Public Authority for Housing. Main contractor: Al-Kharafi Company.",
    year: "2023",
  },
  {
    id: 5,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    titleAr: "المدرسة الابتدائية بنات - المنطقة الاستثمارية صباح الأحمد",
    titleEn: "Primary School for Girls - Sabah Al-Ahmad Investment Area",
    descAr:
      "إنشاء وصيانة المدرسة الابتدائية للبنات. الجهة المالكة: الهيئة العامة للإسكان. المقاول الرئيسي: شركة الخرافي.",
    descEn:
      "Construction and maintenance of primary school for girls. Owner: Public Authority for Housing. Main contractor: Al-Kharafi Company.",
    year: "2023",
  },
  {
    id: 6,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    titleAr: "المستوصف ومخفر الشرطة - المنطقة الاستثمارية صباح الأحمد",
    titleEn: "Clinic and Police Station - Sabah Al-Ahmad Investment Area",
    descAr:
      "إنشاء وصيانة المستوصف ومخفر الشرطة. الجهة المالكة: الهيئة العامة للإسكان. المقاول الرئيسي: شركة الخرافي.",
    descEn:
      "Construction and maintenance of clinic and police station. Owner: Public Authority for Housing. Main contractor: Al-Kharafi Company.",
    year: "2023",
  },
  {
    id: 7,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    titleAr: "محطة ضخ الصرف الصحي - أم الهيمان",
    titleEn: "Sewage Pumping Station - Um Al-Haiman",
    descAr:
      "إنشاء محطة ضخ الصرف الصحي. الجهة المالكة: وزارة الأشغال. خدماتنا: سحب المياه والتدعيم.",
    descEn:
      "Construction of sewage pumping station. Owner: Ministry of Public Works. Our services: Water pumping and reinforcement.",
    year: "2022",
  },
  {
    id: 8,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    titleAr: "مصنع الإسمنت - منطقة الشعيبة الصناعية",
    titleEn: "Cement Factory - Shuaiba Industrial Area",
    descAr:
      "أعمال التدعيم والحفر لمصنع الإسمنت. خدماتنا: تدعيم وحفر وسحب مياه.",
    descEn:
      "Reinforcement and drilling works for cement factory. Our services: Reinforcement, drilling and water pumping.",
    year: "2022",
  },
  {
    id: 9,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    titleAr: "محطة تحلية المياه - الدوحة",
    titleEn: "Water Desalination Plant - Doha",
    descAr:
      "أعمال سحب المياه الجوفية لمحطة التحلية. خدماتنا: سحب المياه الجوفية.",
    descEn:
      "Groundwater pumping works for desalination plant. Our services: Groundwater pumping.",
    year: "2022",
  },
];

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMore = visibleProjects < projects.length;

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("مشاريعنا الناجحة", "Our Successful Projects")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed mb-4">
            {t(
              "نفتخر بتنفيذ مشاريع متنوعة وناجحة في جميع أنحاء الكويت بأعلى معايير الجودة والسلامة. استعرض مشاريعنا المميزة وتصفح أعمالنا في مختلف المجالات.",
              "We are proud to implement diverse and successful projects throughout Kuwait with the highest standards of quality and safety. Browse our featured projects and explore our work in various fields."
            )}
          </p>
          <p className="text-muted-foreground">
            {t(
              `عرض ${displayedProjects.length} من ${projects.length}+ مشروع`,
              `Showing ${displayedProjects.length} of ${projects.length}+ projects`
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group bg-card rounded-2xl shadow-lg border border-border overflow-hidden",
                "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              )}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={t(project.titleAr, project.titleEn)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  {t("مشروع مكتمل", "Completed")}
                </span>

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    {t("مميز", "Featured")}
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {t(project.titleAr, project.titleEn)}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(project.descAr, project.descEn)}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>

                  <button
                    onClick={handleContactClick}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    {t("استفسر عن المشروع", "Inquire About Project")}
                    <ArrowLeft
                      className={cn(
                        "w-4 h-4",
                        language === "en" && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-card border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-colors"
            >
              {t("عرض المزيد", "Load More")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
