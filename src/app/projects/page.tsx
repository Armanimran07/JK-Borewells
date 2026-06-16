import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | JK Borewells Kashmir",
  description: "View our recent borewell drilling and water infrastructure projects across Kashmir.",
};

const PROJECTS = [
  {
    title: "Commercial Water Supply System",
    location: "Srinagar",
    type: "Commercial",
    depth: "450 ft",
    desc: "Complete borewell drilling and high-capacity pump installation for a commercial complex.",
  },
  {
    title: "Agricultural Irrigation Well",
    location: "Baramulla",
    type: "Agricultural",
    depth: "300 ft",
    desc: "High-yield borewell designed to support a 50-acre apple orchard irrigation system.",
  },
  {
    title: "Residential Deep Borewell",
    location: "Budgam",
    type: "Residential",
    depth: "250 ft",
    desc: "Safe and clean drinking water solution for a multi-family residential building.",
  },
  {
    title: "Emergency Motor Recovery",
    location: "Pulwama",
    type: "Maintenance",
    depth: "N/A",
    desc: "Successfully recovered a dropped 5HP motor from a 300ft deep borewell without damaging the casing.",
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our successful drilling and water solution projects across the Kashmir Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-brand-gray/5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-brand-navy">{project.title}</h3>
                <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{project.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                <div>
                  <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</div>
                  <div className="font-bold text-brand-navy">{project.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Depth/Details</div>
                  <div className="font-bold text-brand-navy">{project.depth}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
