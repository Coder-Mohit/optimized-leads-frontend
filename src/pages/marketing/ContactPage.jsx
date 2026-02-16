import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  User,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../../components/common/ContactForm";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-32 pb-24 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Lead Generation?
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Connect with our team to discover how OptimizedLeads can help you
            grow your business with high-quality, conversion-ready leads.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Start Growing Your Business Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is ready to help you find the perfect lead generation
              solution for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">
                Call us for immediate assistance
              </p>
              <a
                href="tel:+917415556568"
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                +91 7415556568
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat with our team instantly</p>
              <a
                href="https://wa.me/917415556568"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Start Chat
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <a
                href="mailto:info@optimizedleads.com"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                info@optimizedleads.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 mb-4">Visit our headquarters</p>
              <p className="text-orange-600 font-semibold text-sm">
                Indore, India
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Business Hours
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">
                  Monday - Friday
                </span>
                <span className="text-indigo-600 font-semibold">
                  9:00 AM - 7:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Saturday</span>
                <span className="text-indigo-600 font-semibold">
                  10:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Sunday</span>
                <span className="text-gray-500 font-semibold">Closed</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Support</span>
                <span className="text-green-600 font-semibold">
                  24/7 Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Using our unified ContactForm */}
      <ContactForm title="Send Us a Message" />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our lead generation
              services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I start receiving leads?",
                answer:
                  "Once you sign up and complete the onboarding process, you can start receiving leads within 24-48 hours.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We serve multiple industries including Real Estate, Education, Financial Services, Healthcare, and Technology.",
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer:
                  "Yes, we offer a 100% money-back guarantee on leads that don't meet our quality standards.",
              },
              {
                question: "How do you ensure lead quality?",
                answer:
                  "We use a multi-step verification process including phone verification, email confirmation, and intent assessment.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of businesses that are already growing with
            OptimizedLeads
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start_free_trial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <Send className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917415556568"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-400 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
