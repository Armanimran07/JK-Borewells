import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Target, Users, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | JK Borewells Kashmir",
  description: "Learn about JK Borewells, Kashmir's leading borewell and water solution company since 1998.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-brand-gray/10 min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 max-w-7xl mb-16 text-center">
        <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-6">About JK Borewells</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Kashmir's Trusted Borewell & Water Solutions Experts Since 1998
        </p>
      </div>

      {/* Story Section */}
      <section className="container mx-auto px-4 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-brand-navy">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Established in 1998 in Kripalpora Payeen, Pattan, Baramulla, JK Borewells started with a simple mission: to provide reliable access to clean water across the Kashmir Valley. Over the past two decades, we have evolved from a small local service to a premier water infrastructure company.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our deep understanding of Kashmir's unique geological terrain allows us to execute drilling projects with unparalleled precision. Whether it's a residential well or a large-scale agricultural water system, our commitment to quality and customer satisfaction remains unwavering.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-navy/10 z-10" />
            <Image src="/images/about-preview.png" alt="JK Borewells History" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-outfit font-bold mb-4">Our Core Values</h2>
            <p className="text-brand-teal max-w-2xl mx-auto">The principles that drive our everyday operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We use state-of-the-art equipment and proven techniques to deliver the best results.",
                icon: ShieldCheck
              },
              {
                title: "Reliability",
                desc: "Our systems are built to last, providing consistent water access for generations.",
                icon: Target
              },
              {
                title: "Customer First",
                desc: "We prioritize our clients' needs, offering transparent communication and support.",
                icon: Users
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <value.icon className="w-12 h-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
