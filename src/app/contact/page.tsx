import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | JK Borewells Kashmir",
  description: "Get in touch with JK Borewells for reliable drilling and water solutions in Kashmir.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-gray/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We are here to help with all your water infrastructure needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Information */}
          <div className="bg-brand-navy text-white p-10 lg:col-span-1">
            <h2 className="text-3xl font-outfit font-bold mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-300">Kripalpora Payeen, Pattan,<br />Baramulla, Kashmir, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-300">+91 7006724759</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-300">jkborewells786@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-teal shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-300">Mon - Sun: 8:00 AM - 8:00 PM<br />Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:col-span-2">
            <h2 className="text-3xl font-outfit font-bold text-brand-navy mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Required</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                  <option value="">Select a service</option>
                  <option value="drilling">Borewell Drilling</option>
                  <option value="pump">Pump Installation</option>
                  <option value="inspection">Well Inspection</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-brand-blue hover:bg-brand-navy text-white rounded-lg font-bold text-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
