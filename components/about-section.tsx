"use client";

import { useEffect, useRef } from "react";
import {
  Eye,
  Target,
  Award,
  Handshake,
  Shield,
  UserCheck,
  EyeIcon,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const coreValues = [
  {
    icon: Award,
    titleAr: "الجودة",
    titleEn: "Quality",
    descAr: "نحرص على تنفيذ جميع أعمالنا وفق أعلى معايير الجودة العالمية.",
    descEn:
      "We ensure all our works are executed according to the highest international quality standards.",
  },
  {
    icon: Handshake,
    titleAr: "الالتزام",
    titleEn: "Commitment",
    descAr: "نوفي بوعودنا ونلتزم بالمواعيد والتسليم في الوقت المحدد.",
    descEn:
      "We fulfill our promises and commit to deadlines and on-time delivery.",
  },
  {
    icon: Shield,
    titleAr: "السلامة",
    titleEn: "Safety",
    descAr: "نضع سلامة فريقنا ومواقع العمل على رأس أولوياتنا.",
    descEn:
      "We place the safety of our team and work sites at the top of our priorities.",
  },
  {
    icon: UserCheck,
    titleAr: "الاحترافية",
    titleEn: "Professionalism",
    descAr: "نعمل بفريق متخصص يمتلك الخبرة والكفاءة العالية.",
    descEn:
      "We work with a specialized team that possesses experience and high efficiency.",
  },
  {
    icon: EyeIcon,
    titleAr: "الشفافية",
    titleEn: "Transparency",
    descAr: "نبني علاقتنا مع العملاء على الثقة والمصداقية.",
    descEn: "We build our relationships with clients on trust and credibility.",
  },
];

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("عن شركتنا", "About Our Company")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 section-animate">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            {t("نظرة عامة", "Overview")}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t(
              "تأسست شركة سومت العالمية لتكون واحدة من الشركات المتخصصة والرائدة في مجال سحب المياه الجوفية وأعمال التدعيم والحفر، مع التوسع في تقديم حلول متكاملة لأعمال البناء والتشطيبات.",
              "Summit International Company was established to be one of the specialized and leading companies in groundwater pumping, reinforcement works, and drilling, while expanding to provide integrated solutions for construction and finishing works."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "نتميز بخبرة عملية وفريق عمل مؤهل، مدعوم بأحدث المعدات والأنظمة، لنضمن لعملائنا تنفيذ مشاريعهم بجودة عالية، ووفق أعلى معايير السلامة والالتزام بالمواعيد.",
              "We are distinguished by practical experience and a qualified team, supported by the latest equipment and systems, to ensure our clients' projects are implemented with high quality and according to the highest standards of safety and deadline commitment."
            )}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="section-animate bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              {t("الرؤية", "Vision")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "أن نكون الخيار الأول في الكويت والمنطقة في مجال سحب المياه والتدعيم وأعمال الحفر والتشطيبات، من خلال تقديم حلول متكاملة تواكب التطور وتحقق أعلى معايير الجودة.",
                "To be the first choice in Kuwait and the region in water pumping, reinforcement, drilling and finishing works, by providing integrated solutions that keep pace with development and achieve the highest quality standards."
              )}
            </p>
          </div>

          <div className="section-animate bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              {t("الرسالة", "Mission")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "الالتزام بتقديم خدمات متخصصة وفعّالة لعملائنا، ترتكز على الخبرة، الكفاءة، الابتكار، والسلامة، وبناء شراكات طويلة الأمد تقوم على الثقة والاحترافية.",
                "Commitment to providing specialized and effective services to our clients, based on experience, efficiency, innovation, and safety, and building long-term partnerships based on trust and professionalism."
              )}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="section-animate">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            {t("قيمنا الأساسية", "Our Core Values")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group",
                  "hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {t(value.titleAr, value.titleEn)}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(value.descAr, value.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
