import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diabetologie Derschlag - Ihre Spezialisten für Diabetes",
  description: "Professionelle Betreuung von Diabetes-Patienten mit modernster Diagnostik und individueller Therapie in Gummersbach-Derschlag. DDG-zertifizierte Praxis mit über 15 Jahren Erfahrung.",
  keywords: "Diabetologie, Diabetes, Gummersbach, Derschlag, CGM, Insulinpumpe, Diabetesberatung, DDG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
