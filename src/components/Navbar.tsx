"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isScrolled = isPageScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsPageScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-blue p-2 rounded-lg text-white group-hover:bg-brand-navy transition-colors">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h1 className={cn(
              "font-outfit font-bold text-xl tracking-tight leading-none",
              isScrolled ? "text-brand-navy" : "text-white drop-shadow-md"
            )}>
              JK BOREWELLS
            </h1>
            <p className={cn(
              "text-[10px] uppercase font-bold tracking-widest mt-0.5",
              isScrolled ? "text-brand-blue" : "text-brand-teal drop-shadow-md"
            )}>
              Since 1998
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium text-sm transition-colors hover:text-brand-blue",
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white drop-shadow-sm",
                pathname === link.href && (isScrolled ? "text-brand-blue font-semibold" : "text-white font-semibold")
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+917006724759"
            className={cn(
              "flex items-center gap-2 font-semibold text-sm transition-colors",
              isScrolled ? "text-brand-navy hover:text-brand-blue" : "text-white hover:text-brand-teal"
            )}
          >
            <Phone className="w-4 h-4" />
            <span>+91 7006724759</span>
          </a>
          <Link
            href="/contact"
            className="bg-brand-blue hover:bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-brand-blue/20"
          >
            Get Estimate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isScrolled ? "text-brand-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:+917006724759"
                  className="flex items-center justify-center gap-2 w-full py-3 text-brand-navy font-semibold border border-gray-200 rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  +91 7006724759
                </a>
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center bg-brand-blue text-white font-semibold rounded-lg shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
