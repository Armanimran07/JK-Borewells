import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PhoneCall, Droplets, Wrench, BadgeCheck, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Background Image / Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/60 z-10" />
          <Image
            src="/images/hero-bg.png"
            alt="JK Borewells Drilling Rig"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 mx-auto text-left sm:text-center">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">Kashmir's Trusted Experts Since 1998</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Reliable <span className="text-brand-blue">Borewell Drilling</span> & Water Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Professional drilling, pump installation, and groundwater management across the Kashmir Valley. Fast, efficient, and built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-white hover:text-brand-navy text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,119,255,0.4)]"
            >
              Get Free Estimate
            </Link>
            <a 
              href="tel:+917006724759" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-white/70 text-xs uppercase tracking-widest mb-2 font-semibold">Scroll Down</span>
          <div className="w-1 h-8 rounded-full bg-white/20 overflow-hidden">
            <div className="w-full h-1/2 bg-brand-teal rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 border-b border-gray-100 relative z-30 -mt-8 rounded-t-[2.5rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Projects Completed", value: "10k+" },
              { label: "Areas Served", value: "10+" },
              { label: "Customer Satisfaction", value: "99%" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-outfit font-bold text-brand-navy mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-brand-gray/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-brand-navy/20 z-10" />
                <Image src="/images/about-preview.png" alt="JK Borewells Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-navy p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 text-white">
                  <BadgeCheck className="w-12 h-12 text-brand-teal shrink-0" />
                  <div>
                    <div className="font-bold text-xl">Certified</div>
                    <div className="text-sm text-gray-300">ISO Standard Quality</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-blue font-semibold uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-brand-blue" />
                About Our Company
              </div>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-brand-navy leading-tight">
                Engineering Water Solutions for Over Two Decades
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Based in Pattan, Baramulla, JK Borewells has grown from a local drilling service to Kashmir's leading water infrastructure provider. With state-of-the-art machinery and a team of seasoned experts, we deliver reliable water sources to residential, agricultural, and commercial clients.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Advanced Rotary & DTH Drilling Technology",
                  "Expert Groundwater Survey & Assessment",
                  "Fast & Efficient Pump Installation",
                  "24/7 Emergency Support across Kashmir"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-blue transition-colors group">
                  Learn More About Us 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 text-brand-blue font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-brand-blue" />
              Our Expertise
              <span className="w-8 h-0.5 bg-brand-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-brand-navy mb-6">
              Comprehensive Water Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From initial geological surveys to final pump installations, we provide end-to-end services tailored to your specific water requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Borewell Drilling",
                desc: "High-power rig drilling for deep water access in difficult terrains.",
                icon: Droplets
              },
              {
                title: "Pump Installation",
                desc: "Professional setup of submersible and surface pumps for optimal flow.",
                icon: Wrench
              },
              {
                title: "Motor Recovery",
                desc: "Expert retrieval of stuck or fallen motors and pipes from borewells.",
                icon: CheckCircle2
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:bg-brand-navy hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-brand-gray/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-teal" />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-brand-navy mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
                <Link href={`/services`} className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:text-brand-teal">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-brand-navy text-white rounded-full font-bold transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
            Ready to Start Your Drilling Project?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contact us today for a free site inspection and detailed estimate. Our experts are ready to provide the best water solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-brand-navy hover:bg-gray-100 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
              Request a Quote
            </Link>
            <a href="tel:+917006724759" className="px-8 py-4 bg-brand-navy text-white hover:bg-gray-900 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              <PhoneCall className="w-5 h-5" />
              Call +91 7006724759
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
