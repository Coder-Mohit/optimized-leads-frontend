import { BarChart3, Users, Zap, FileText, Send } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description:
      "Our advanced analytics and machine learning algorithms ensure you receive the most qualified doctoral candidates with the highest conversion potential.",
    features: [
      "Predictive lead scoring",
      "Real-time performance metrics",
      "A/B testing capabilities",
      "Custom reporting dashboards",
    ],
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with seasoned professionals who understand the academic landscape and have deep experience in doctoral program recruitment.",
    features: [
      "Academic industry specialists",
      "Dedicated account managers",
      "24/7 technical support",
      "Regular strategy consultations",
    ],
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description:
      "Whether you're a boutique consultancy or a large organization, our flexible solutions scale with your business growth and requirements.",
    features: [
      "Flexible pricing models",
      "Custom lead packages",
      "Enterprise-grade infrastructure",
      "Rapid deployment capabilities",
    ],
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "Get complete visibility into your lead generation performance with detailed analytics and comprehensive reporting tools.",
    features: [
      "Monthly performance reports",
      "Lead quality insights",
      "ROI tracking",
      "Conversion funnel analysis",
    ],
  },
];

export default function PhDWhyPartner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Why Partner With OptimizedLeads?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Leading Choice for Academic Consultancies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why hundreds of academic consultancies trust us to deliver
            exceptional doctoral candidate leads that drive growth and success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Consultancy?
            </h3>
            <p className="text-lg text-indigo-100 mb-8">
              Join hundreds of successful academic consultancies that have
              already discovered the OptimizedLeads advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start_free_trial"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <Send className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "50K+", label: "Leads Delivered" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
