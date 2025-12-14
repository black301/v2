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
    title: {
      ar: "إنشاء وصيانة أبراج كهرباء الضغط العالي الصبية",
      en: "High Voltage Power Towers Construction & Maintenance at Al-Subiya",
    },
    description: {
      ar: "مشروع إنشاء وصيانة أبراج الكهرباء الضغط العالي في جزيرة بوبيان، يشمل سحب المياه الجوفية وإعادة تأهيل الأبراج",
      en: "Project for construction and maintenance of high voltage power towers at Bubiyan Island, including groundwater extraction and tower rehabilitation",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: { ar: "جزيرة بوبيان، الكويت", en: "Bubiyan Island, Kuwait" },
    date: "2025",
    image: "/images/projects/1.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة السويدي", en: "Al-Suwaidi Company" },
  },
  {
    id: 2,
    title: {
      ar: "إصلاح وصيانة بايبات الماء محطة توليد الكهرباء الزور",
      en: "Water Pipeline Maintenance at Al-Zour Power Plant",
    },
    description: {
      ar: "مشروع لصيانة وإصلاح بايبات المياه في محطة توليد الكهرباء الزور، يشمل سحب المياه الجوفية وإعادة تأهيل الأنابيب",
      en: "Project for maintenance and repair of water pipelines at Al-Zour Power Plant, including groundwater extraction and pipeline rehabilitation",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: { ar: "الزور، الكويت", en: "Al-Zour, Kuwait" },
    date: "2025",
    image: "/images/projects/2.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة الغانم", en: "Al-Ghanim Company" },
  },
  {
    id: 3,
    title: {
      ar: "إنشاء وصيانة المدرسة الابتدائية بنات",
      en: "Construction & Maintenance of Girls' Primary School",
    },
    description: {
      ar: "مشروع إنشاء وصيانة المدرسة الابتدائية للبنات في المنطقة الاستثمارية صباح الأحمد، يشمل التدعيم وسحب المياه",
      en: "Project for construction and maintenance of the girls' primary school in Sabah Al-Ahmad Investment Area, including reinforcement and water extraction",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الاستثمارية صباح الأحمد، الكويت",
      en: "Sabah Al-Ahmad Investment Area, Kuwait",
    },
    date: "2025",
    image: "/images/projects/3.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة الخرافي", en: "Al-Kharafi Company" },
  },
  {
    id: 4,
    title: {
      ar: "إنشاء وصيانة المدرسة الابتدائية بنين",
      en: "Construction & Maintenance of Boys' Primary School",
    },
    description: {
      ar: "مشروع إنشاء وصيانة المدرسة الابتدائية للبنين في المنطقة الاستثمارية صباح الأحمد، يشمل التدعيم وسحب المياه",
      en: "Project for construction and maintenance of the boys' primary school in Sabah Al-Ahmad Investment Area, including reinforcement and water extraction",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الاستثمارية صباح الأحمد، الكويت",
      en: "Sabah Al-Ahmad Investment Area, Kuwait",
    },
    date: "2025",
    image: "/images/projects/4.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة الخرافي", en: "Al-Kharafi Company" },
  },
  {
    id: 5,
    title: {
      ar: "إنشاء وصيانة المستوصف ومخفر الشرطة (66 عمارة)",
      en: "Construction & Maintenance of Clinic and Police Station (66 Buildings)",
    },
    description: {
      ar: "مشروع إنشاء وصيانة المستوصف ومخفر الشرطة في المنطقة الاستثمارية صباح الأحمد، يشمل سحب المياه الجوفية",
      en: "Project for construction and maintenance of the clinic and police station in Sabah Al-Ahmad Investment Area, including groundwater extraction",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الاستثمارية صباح الأحمد، الكويت",
      en: "Sabah Al-Ahmad Investment Area, Kuwait",
    },
    date: "2025",
    image: "/images/projects/5.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة الخرافي", en: "Al-Kharafi Company" },
  },
  {
    id: 6,
    title: {
      ar: "إنشاء وصيانة المدرسة المتوسطة بنات وبنين",
      en: "Construction & Maintenance of Girls' and Boys' Middle School",
    },
    description: {
      ar: "مشروع إنشاء وصيانة المدرسة المتوسطة للبنات والبنين في المنطقة الاستثمارية صباح الأحمد تحت إشراف الهيئة العامة للإسكان",
      en: "Project for construction and maintenance of the girls' and boys' middle school in Sabah Al-Ahmad Investment Area under the supervision of the Public Authority for Housing",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الاستثمارية صباح الأحمد، الكويت",
      en: "Sabah Al-Ahmad Investment Area, Kuwait",
    },
    date: "2025",
    image: "/images/projects/6.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة الخرافي", en: "Al-Kharafi Company" },
  },
  {
    id: 7,
    title: {
      ar: "إنشاء وتنفيذ وصيانة مركز سلطان",
      en: "Construction, Implementation & Maintenance of Sultan Center",
    },
    description: {
      ar: "مشروع إنشاء وتنفيذ وصيانة مركز سلطان في المنطقة الصناعية بمدينة صباح الأحمد، يشمل جميع أعمال الصيانة والتشغيل",
      en: "Project for construction, implementation, and maintenance of Sultan Center in the industrial area of Sabah Al-Ahmad City, including all operational and maintenance works",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الصناعية، مدينة صباح الأحمد، الكويت",
      en: "Industrial Area, Sabah Al-Ahmad City, Kuwait",
    },
    date: "2025",
    image: "/images/projects/7.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة تيكو كونستركت", en: "Teco Construct Company" },
  },
  {
    id: 8,
    title: {
      ar: "إنشاء وتنفيذ وصيانة مبنى البلازا",
      en: "Construction, Implementation & Maintenance of Plaza Building",
    },
    description: {
      ar: "مشروع إنشاء وتنفيذ وصيانة مبنى البلازا في المنطقة الصناعية بمدينة صباح الأحمد، يشمل الحفر والتدعيم وأعمال الصيانة المتكاملة",
      en: "Project for construction, implementation, and maintenance of the Plaza Building in the industrial area of Sabah Al-Ahmad City, including excavation, reinforcement, and full maintenance works",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الصناعية، مدينة صباح الأحمد، الكويت",
      en: "Industrial Area, Sabah Al-Ahmad City, Kuwait",
    },
    date: "2025",
    image: "/images/projects/8.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة تيكو كونستركت", en: "Teco Construct Company" },
  },
  {
    id: 9,
    title: {
      ar: "إنشاء وتنفيذ وصيانة البنية التحتية والطرق",
      en: "Construction, Implementation & Maintenance of Infrastructure and Roads",
    },
    description: {
      ar: "مشروع إنشاء وتنفيذ وصيانة البنية التحتية والطرق في المنطقة الصناعية بمدينة صباح الأحمد، يشمل الحفر والتدعيم وأعمال الصيانة المتكاملة",
      en: "Project for construction, implementation, and maintenance of infrastructure and roads in the industrial area of Sabah Al-Ahmad City, including excavation, reinforcement, and full maintenance works",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "المنطقة الصناعية، مدينة صباح الأحمد، الكويت",
      en: "Industrial Area, Sabah Al-Ahmad City, Kuwait",
    },
    date: "2025",
    image: "/images/projects/9.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة تيكو كونستركت", en: "Teco Construct Company" },
  },
  {
    id: 10,
    title: {
      ar: "إنشاء وصيانة مبنى مطعم كباب الحجة",
      en: "Construction & Maintenance of Kebab Al-Hujjah Restaurant Building",
    },
    description: {
      ar: "مشروع إنشاء وصيانة مبنى مطعم كباب الحجة في منطقة الشعب البحري، يشمل الحفر والتدعيم وأعمال الصيانة المتكاملة",
      en: "Project for construction and maintenance of Kebab Al-Hujjah Restaurant Building in Al-Shaab Al-Bahri area, including excavation, reinforcement, and full maintenance works",
    },
    category: { ar: "إنشاءات وصيانة", en: "Construction & Maintenance" },
    location: {
      ar: "منطقة الشعب البحري، الكويت",
      en: "Al-Shaab Al-Bahri Area, Kuwait",
    },
    date: "2025",
    image: "/images/projects/10.png",
    badge: { ar: "مميز", en: "Featured" },
    contractor: { ar: "شركة يوسف الكوت", en: "Yousef Al-Kout Company" },
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
