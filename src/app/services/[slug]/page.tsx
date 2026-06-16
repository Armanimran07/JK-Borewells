import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";

const SERVICES = {
  "borewell-drilling": {
    name: "Borewell Drilling",
    desc: "Professional drilling services using advanced DTH and Rotary technology suitable for Kashmir's terrain.",
    benefits: ["High precision", "Fast execution", "Suitable for all terrains"]
  },
  "pump-installation": {
    name: "Pump Installation",
    desc: "Expert installation of submersible and surface pumps for optimal water pressure and flow.",
    benefits: ["Optimal water pressure", "Energy efficient models", "Long-lasting setup"]
  },
  "well-inspection": {
    name: "Well Inspection",
    desc: "Detailed camera inspection and yield testing to assess the health of your existing borewell.",
    benefits: ["Identify blockages", "Assess water yield", "Preventive maintenance"]
  },
  "motor-recovery": {
    name: "Motor Recovery",
    desc: "Specialized service to recover dropped or stuck motors and pipes from deep borewells.",
    benefits: ["Safe retrieval", "No casing damage", "Fast emergency response"]
  },
  "agricultural-solutions": {
    name: "Agricultural Solutions",
    desc: "High-yield water systems designed specifically for farming and irrigation needs.",
    benefits: ["Large scale irrigation", "Drought resistance", "Boosted crop yield"]
  },
  "commercial-projects": {
    name: "Commercial Projects",
    desc: "Large-scale water infrastructure for industries, hospitals, and commercial complexes.",
    benefits: ["High capacity output", "Compliant with standards", "Reliable supply"]
  }
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug as keyof typeof SERVICES];
  if (!service) return { title: "Not Found" };
  
  return {
    title: `${service.name} | JK Borewells Kashmir`,
    description: service.desc,
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES[slug as keyof typeof SERVICES];
  if (!service) notFound();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-gray/10">
      <div className="bg-brand-navy text-white py-20 mb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
            {service.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {service.desc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-brand-navy">Service Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At JK Borewells, our {service.name.toLowerCase()} services are designed to meet the highest industry standards. We utilize cutting-edge equipment and leverage our decades of experience to deliver flawless execution. Whether you need a new installation or maintenance on an existing setup, our team guarantees satisfaction.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                  <span className="font-semibold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-brand-blue text-white rounded-3xl p-8 shadow-2xl sticky top-32">
              <h3 className="text-2xl font-bold mb-4">Need this service?</h3>
              <p className="mb-8 text-white/80">Contact our team today to get a custom quote and schedule an inspection.</p>
              <div className="space-y-4">
                <a href="tel:+917006724759" className="flex items-center justify-center gap-2 w-full py-4 bg-brand-navy hover:bg-gray-900 rounded-xl font-bold transition-colors">
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-brand-blue hover:bg-gray-100 rounded-xl font-bold transition-colors">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
