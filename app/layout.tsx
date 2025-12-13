import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/language-context";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "شركة سومت العالمية - Summit International Company",
  description:
    "شركة سومت العالمية - رواد في حلول البناء والبنية التحتية بأعلى معايير الجودة والسلامة. سحب مياه، تدعيم، حفر، تشطيبات.",
  keywords:
    "سومت, بناء, تشييد, كويت, مقاولات, هندسة, مشاريع, سحب مياه, تدعيم, حفر, تشطيبات",
  authors: [{ name: "Summit International Company" }],
  icons: {
    icon: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#11224E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`font-sans antialiased ${ibmPlexArabic.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
