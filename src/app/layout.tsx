import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JK Borewells Kashmir | Trusted Water Solutions Since 1998",
  description: "Kashmir's leading borewell and water solution experts. Specializing in borewell drilling, well inspection, pump installation, and agricultural water systems across Kashmir.",
  keywords: "Borewell Drilling Kashmir, Water Well Drilling, Pump Installation, JK Borewells, Pattan, Baramulla",
  openGraph: {
    title: "JK Borewells Kashmir | Water Solutions Since 1998",
    description: "Kashmir's leading borewell and water solution experts since 1998.",
    url: "https://jkborewells.com",
    siteName: "JK Borewells",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-blue selection:text-white bg-brand-gray/5" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
