import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | JK Borewells Kashmir",
  description: "Read the latest articles on water conservation, borewell maintenance, and groundwater management.",
};

const POSTS = [
  {
    title: "Understanding Groundwater Levels in Kashmir",
    date: "June 15, 2026",
    category: "Groundwater",
    excerpt: "An in-depth look at how changing seasons affect groundwater levels in the Kashmir valley and what it means for your borewell."
  },
  {
    title: "Top 5 Maintenance Tips for Submersible Pumps",
    date: "May 22, 2026",
    category: "Maintenance",
    excerpt: "Ensure the longevity and efficiency of your borewell pump with these essential maintenance routines."
  },
  {
    title: "Agricultural Irrigation: Choosing the Right Water System",
    date: "April 10, 2026",
    category: "Agriculture",
    excerpt: "A guide for farmers on selecting the optimal borewell and pump setup for large-scale orchard irrigation."
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-gray/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and updates on water solutions and borewell maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-brand-blue font-semibold">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <button className="text-brand-navy font-bold hover:text-brand-blue transition-colors">
                  Read Article →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
