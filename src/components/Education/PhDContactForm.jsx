import { MessageSquare } from "lucide-react";
import ContactForm from "../common/ContactForm";

export default function PhDContactForm() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Send Us a Message
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Doctorate Lead Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with our team to discuss how we can help your consultancy
            grow with high-quality doctoral candidate leads.
          </p>
        </div>

        {/* Use our unified ContactForm with education industry */}
        <ContactForm industry="education" title="Get Started with PhD Leads" />
      </div>
    </section>
  );
}
