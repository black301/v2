"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Navigation,
  Copy,
  Check,
} from "lucide-react";
import { useLanguage } from "./language-context";

export function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
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

  const handleGetDirections = () => {
    window.open("https://maps.google.com/?q=29.2985,47.6855", "_blank");
  };

  const handleCopyAddress = async () => {
    const address = t(
      "الفحيحيل شارع مكة قطعة ٧ قسيمة ٧٣٠١ الدور ٤ مكتب ٣١٢",
      "Al-Fahaheel, Makkah Street, Piece 7, Plot 7301, 4th Floor, Office 312"
    );
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="map" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("موقعنا ومشاريعنا", "Our Location & Projects")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            {t(
              "استعرض مواقع مشاريعنا الناجحة على الخريطة التفاعلية وتعرف على أماكن تنفيذ أعمالنا في جميع أنحاء الكويت.",
              "Browse the locations of our successful projects on the interactive map and learn about the places where we implement our work throughout Kuwait."
            )}
          </p>
        </div>

        {/* Map Container */}
        <div className="relative max-w-5xl mx-auto section-animate">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            {/* Google Map Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892621.9633528772!2d46.94956243383769!3d29.29852725421783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-[450px] md:h-[500px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96">
              <div className="bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-border p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {t(
                        "مكتب شركة سومت العالمية",
                        "Summit International Company Office"
                      )}
                    </h4>
                    <p className="text-muted-foreground text-sm flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>
                        {t(
                          "الفحيحيل شارع مكة قطعة ٧ قسيمة ٧٣٠١ الدور ٤ مكتب ٣١٢",
                          "Al-Fahaheel, Makkah Street, Piece 7, Plot 7301, 4th Floor, Office 312"
                        )}
                      </span>
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span dir="ltr">+965 6041 5151</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleGetDirections}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-sm transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    {t("الاتجاهات", "Directions")}
                  </button>
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium text-sm transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {t("نسخ", "Copy")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
