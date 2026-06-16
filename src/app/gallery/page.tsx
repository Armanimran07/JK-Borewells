import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | JK Borewells Kashmir",
  description: "Browse images of our borewell drilling equipment and completed projects.",
};

const galleryItems = [
  { id: 1, src: "/images/gallery-1.png", alt: "High-pressure borewell water output" },
  { id: 2, src: "/images/gallery-2.png", alt: "Submersible water pump installation" },
  { id: 3, src: "/images/gallery-3.png", alt: "Massive drilling rig in Kashmir valley" },
  { id: 4, src: "/images/gallery-4.png", alt: "Agricultural irrigation system" },
  { id: 5, src: "/images/gallery-5.png", alt: "Geological water survey by engineers" },
  { id: 6, src: "/images/gallery-6.png", alt: "Residential water well setup" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-gray/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey of our equipment, team, and the successful projects we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="aspect-square bg-gray-300 rounded-xl overflow-hidden relative group shadow-md hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <span className="text-white font-semibold tracking-wider">View Image</span>
              </div>
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover z-10 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
