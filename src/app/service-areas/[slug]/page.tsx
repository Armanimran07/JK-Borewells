import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AREAS = [
  "srinagar", "baramulla", "kupwara", "budgam", "pulwama", 
  "shopian", "ganderbal", "bandipora", "anantnag", "kulgam"
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!AREAS.includes(slug)) return { title: "Not Found" };
  
  const formattedName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `Borewell Drilling & Water Solutions in ${formattedName} | JK Borewells`,
    description: `Professional borewell drilling and pump installation services in ${formattedName}, Kashmir by JK Borewells.`,
  };
}

export async function generateStaticParams() {
  return AREAS.map((slug) => ({ slug }));
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  if (!AREAS.includes(slug)) notFound();

  const formattedName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-brand-navy text-white py-20 mb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
            Expert Borewell Services in {formattedName}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing reliable water solutions, drilling, and pump installations across {formattedName} district.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-brand-navy">
              Trusted Water Infrastructure in {formattedName}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              JK Borewells has been serving {formattedName} with premium borewell drilling and water management solutions. Our local expertise allows us to understand the unique geological challenges of this area, ensuring a successful and long-lasting water source for your property.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Residential Borewell Drilling",
                "Agricultural & Irrigation Wells",
                "Submersible Pump Installation",
                "Fast Emergency Motor Recovery"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Link href="/contact" className="inline-flex px-8 py-4 bg-brand-blue hover:bg-brand-navy text-white rounded-full font-bold transition-all shadow-lg">
                Get a Quote for {formattedName}
              </Link>
            </div>
          </div>
          <div className="bg-brand-gray/20 rounded-3xl p-10 border border-gray-100 shadow-xl">
             <h3 className="text-2xl font-bold text-brand-navy mb-6">Why Choose Us in {formattedName}?</h3>
             <div className="space-y-6">
               <div>
                 <h4 className="font-bold text-lg text-brand-blue mb-2">Local Geological Knowledge</h4>
                 <p className="text-gray-600">Our deep understanding of {formattedName}'s water table ensures high success rates.</p>
               </div>
               <div>
                 <h4 className="font-bold text-lg text-brand-blue mb-2">Rapid Response</h4>
                 <p className="text-gray-600">Our proximity allows us to respond quickly to emergencies and service requests.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
