import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-blue p-2 rounded-lg text-white">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-outfit font-bold text-xl tracking-tight leading-none text-white">
                  JK BOREWELLS
                </h2>
                <p className="text-[10px] uppercase font-bold tracking-widest mt-0.5 text-brand-teal">
                  Since 1998
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kashmir's most trusted borewell and water solutions company. Providing premium drilling, pump installation, and water infrastructure services since 1998.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-400">Follow us on Social Media</span>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Projects", "Gallery", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-brand-teal flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Borewell Drilling",
                "Water Well Inspection",
                "Pump Installation",
                "Motor Recovery",
                "Agricultural Solutions",
                "Commercial Projects"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-brand-teal flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-outfit text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start text-gray-400">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <span>Kripalpora Payeen, Pattan,<br />Baramulla, Kashmir, India</span>
              </li>
              <li className="flex gap-4 items-center text-gray-400">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="tel:+917006724759" className="hover:text-white transition-colors">+91 7006724759</a>
              </li>
              <li className="flex gap-4 items-center text-gray-400">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:jkborewells786@gmail.com" className="hover:text-white transition-colors">jkborewells786@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JK Borewells. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
