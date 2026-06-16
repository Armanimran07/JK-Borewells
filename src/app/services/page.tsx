import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Droplets, Wrench, Settings, Search, HardHat, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | JK Borewells Kashmir",
  description: "Comprehensive borewell drilling, pump installation, and water infrastructure services by JK Borewells.",
};

const SERVICES = [
  {
    title: "Borewell Drilling",
    desc: "Professional drilling services using advanced DTH and Rotary technology suitable for Kashmir's terrain.",
    icon: Droplets,
    slug: "borewell-drilling"
  },
  {
    title: "Pump Installation",
    desc: "Expert installation of submersible and surface pumps for optimal water pressure and flow.",
    icon: Wrench,
    slug: "pump-installation"
  },
  {
    title: "Well Inspection",
    desc: "Detailed camera inspection and yield testing to assess the health of your existing borewell.",
    icon: Search,
    slug: "well-inspection"
  },
  {
    title: "Motor Recovery",
    desc: "Specialized service to recover dropped or stuck motors and pipes from deep borewells.",
    icon: Settings,
    slug: "motor-recovery"
  },
  {
    title: "Agricultural Solutions",
    desc: "High-yield water systems designed specifically for farming and irrigation needs.",
    icon: HardHat,
    slug: "agricultural-solutions"
  },
  {
    title: "Commercial Projects",
    desc: "Large-scale water infrastructure for industries, hospitals, and commercial complexes.",
    icon: Factory,
    slug: "commercial-projects"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
        <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Providing end-to-end water solutions with professional expertise and advanced machinery.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:bg-brand-navy hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="w-16 h-16 bg-brand-gray/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-teal" />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-brand-navy mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-1 group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:text-brand-teal mt-auto">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
