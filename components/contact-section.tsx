"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/app/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    titleAr: "الهاتف",
    titleEn: "Phone",
    values: ["+965 6041 5151"],
  },
  {
    icon: Mail,
    titleAr: "البريد الإلكتروني",
    titleEn: "Email",
    values: ["summitceo25@gmail.com", "summitsic81@gmail.com"],
  },
  {
    icon: MapPin,
    titleAr: "العنوان",
    titleEn: "Address",
    valuesAr: ["الفحيحيل شارع مكة قطعة ٧ قسيمة ٧٣٠١ الدور ٤ مكتب ٣١٢"],
    valuesEn: [
      "Al-Fahaheel, Makkah Street, Piece 7, Plot 7301, 4th Floor, Office 312",
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/summitsic", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/summitsic",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/summitsic",
    label: "LinkedIn",
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { t, language } = useLanguage();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("اتصل بنا", "Contact Us")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="section-animate">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t("معلومات التواصل", "Contact Information")}
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {t(info.titleAr, info.titleEn)}
                    </h4>
                    {info.valuesAr ? (
                      <p className="text-muted-foreground">
                        {t(info.valuesAr[0], info.valuesEn?.[0] || "")}
                      </p>
                    ) : (
                      info.values?.map((value, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground"
                          dir={info.icon === Phone ? "ltr" : undefined}
                        >
                          {value}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-bold text-foreground mb-4">
                {t("وسائل التواصل الاجتماعي", "Social Media")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-animate">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t("أرسل لنا رسالة", "Send Us a Message")}
            </h3>

            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {t("تم إرسال رسالتك بنجاح!", "Message Sent Successfully!")}
                </h4>
                <p className="text-muted-foreground">
                  {t(
                    "سنتواصل معك في أقرب وقت ممكن.",
                    "We will contact you as soon as possible."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("الاسم", "Name")}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("البريد الإلكتروني", "Email")}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("الموضوع", "Subject")}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("الرسالة", "Message")}
                    rows={5}
                    required
                    className="w-full px-5 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all shadow-lg shadow-primary/25",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("جاري الإرسال...", "Sending...")}
                    </>
                  ) : (
                    <>
                      {t("إرسال الرسالة", "Send Message")}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
