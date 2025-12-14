"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "./language-context";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
const featuredProjects = [
  {
    id: 1,
    title: { ar: "مجمع الأبراج السكنية", en: "Residential Towers Complex" },
    description: {
      ar: "مشروع سكني متكامل يضم 3 أبراج بارتفاع 25 طابق مع مرافق خدمية متكاملة",
      en: "Integrated residential project featuring 3 towers of 25 floors with full service facilities",
    },
    category: { ar: "إنشاءات", en: "Construction" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 2,
    title: { ar: "مشروع الطرق السريعة", en: "Highway Infrastructure Project" },
    description: {
      ar: "تطوير وتوسعة شبكة الطرق السريعة بطول 45 كم مع جسور حديثة",
      en: "Expansion of a 45 km highway network with modern bridges",
    },
    category: { ar: "بنية تحتية", en: "Infrastructure" },
    location: { ar: "جدة، السعودية", en: "Jeddah, Saudi Arabia" },
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 3,
    title: { ar: "محطة معالجة المياه", en: "Water Treatment Plant" },
    description: {
      ar: "محطة متطورة لمعالجة المياه بطاقة 500,000 م³ يومياً",
      en: "Advanced water treatment plant with 500,000 m³/day capacity",
    },
    category: { ar: "مياه", en: "Water" },
    location: { ar: "الدمام، السعودية", en: "Dammam, Saudi Arabia" },
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 4,
    title: { ar: "المدرسة الدولية", en: "International School Campus" },
    description: {
      ar: "مجمع تعليمي بسعة 2000 طالب مع مرافق رياضية",
      en: "Educational campus for 2,000 students with sports facilities",
    },
    category: { ar: "تعليم", en: "Education" },
    location: { ar: "مكة، السعودية", en: "Makkah, Saudi Arabia" },
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 5,
    title: { ar: "مصنع صناعي ضخم", en: "Large Industrial Factory" },
    description: {
      ar: "مصنع بمساحة 50,000 م² مجهز بأحدث التقنيات",
      en: "50,000 sqm industrial factory with advanced technology",
    },
    category: { ar: "صناعي", en: "Industrial" },
    location: { ar: "ينبع، السعودية", en: "Yanbu, Saudi Arabia" },
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 6,
    title: { ar: "مشروع نفق حضري", en: "Urban Tunnel Project" },
    description: {
      ar: "تنفيذ نفق حضري بطول 2 كم داخل المدينة",
      en: "Construction of a 2 km urban tunnel",
    },
    category: { ar: "بنية تحتية", en: "Infrastructure" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    date: "2022",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 7,
    title: { ar: "مستشفى تخصصي", en: "Specialized Hospital" },
    description: {
      ar: "مستشفى حديث بسعة 350 سرير",
      en: "Modern hospital with 350 beds",
    },
    category: { ar: "صحي", en: "Healthcare" },
    location: { ar: "المدينة، السعودية", en: "Madinah, Saudi Arabia" },
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 8,
    title: { ar: "مشروع إسكان حكومي", en: "Government Housing Project" },
    description: {
      ar: "تنفيذ 1200 وحدة سكنية",
      en: "Construction of 1,200 residential units",
    },
    category: { ar: "إسكان", en: "Housing" },
    location: { ar: "تبوك، السعودية", en: "Tabuk, Saudi Arabia" },
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 9,
    title: { ar: "ميناء تجاري", en: "Commercial Port" },
    description: {
      ar: "تطوير أرصفة ومرافق ميناء تجاري",
      en: "Development of commercial port facilities",
    },
    category: { ar: "موانئ", en: "Ports" },
    location: { ar: "جازان، السعودية", en: "Jazan, Saudi Arabia" },
    date: "2022",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
  {
    id: 10,
    title: { ar: "محطة طاقة شمسية", en: "Solar Power Plant" },
    description: {
      ar: "محطة طاقة شمسية بقدرة 300 ميجاوات",
      en: "300 MW solar power plant",
    },
    category: { ar: "طاقة", en: "Energy" },
    location: { ar: "القصيم، السعودية", en: "Qassim, Saudi Arabia" },
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1920&q=80",
    badge: { ar: "مميز", en: "Featured" },
  },
];

export function FeaturedProjects() {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProject = featuredProjects[currentIndex];

  return (
    <section
      id="featured-projects"
      className="py-20 bg-[#11224E] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            {isRTL ? "أعمالنا المتميزة" : "Our Excellence"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {isRTL ? "مشاريعنا" : "Our Projects"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isRTL
              ? "نفخر بتقديم مجموعة من أبرز مشاريعنا التي تعكس خبرتنا وجودة أعمالنا"
              : "We are proud to present our most outstanding projects that reflect our expertise and quality"}
          </p>
        </div>

        {/* Main Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative order-1 lg:order-none">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">
                    {currentProject.badge[language]}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {currentProject.category[language]}
                  </span>
                </div>
              </div>

              {/* Project Counter */}
              <div className="absolute -bottom-4 right-4 rtl:right-auto rtl:left-4 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-bold">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-white/60 mx-2">/</span>
                <span className="text-white/60">
                  {String(featuredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
              <div
                key={currentIndex}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {currentProject.title[language]}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentProject.description[language]}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span>{currentProject.location[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>{currentProject.date}</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#11224E] transition-all duration-300"
                  aria-label={isRTL ? "المشروع السابق" : "Previous project"}
                >
                  {isRTL ? (
                    <ChevronRight className="w-5 h-5" />
                  ) : (
                    <ChevronLeft className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#11224E] transition-all duration-300"
                  aria-label={isRTL ? "المشروع التالي" : "Next project"}
                >
                  {isRTL ? (
                    <ChevronLeft className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>

                {/* Progress Dots */}
                <div className="flex-1 flex items-center justify-center gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-orange-500"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`${
                        isRTL ? "انتقل للمشروع" : "Go to project"
                      } ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {featuredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-[#11224E]"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 rtl:left-auto rtl:right-2 text-white text-xs font-medium truncate max-w-[90%]">
                {project.title[language]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
