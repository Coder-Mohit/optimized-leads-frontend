import { Users, Target, Database, TrendingUp, Shield, Headphones } from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Pre-qualified & Verified Leads",
    description: "Rigorously screened candidates with confirmed academic credentials and research interests.",
    features: [
      "Academic background verification",
      "Research interest validation",
      "Funding capability assessment",
      "Timeline confirmation"
    ]
  },
  {
    icon: Target,
    title: "Hyper-targeted Campaigns",
    description: "Precision-targeted outreach strategies tailored to specific doctoral programs and research areas.",
    features: [
      "Discipline-specific targeting",
      "Geographic customization",
      "Demographic filtering",
      "Interest-based segmentation"
    ]
  },
  {
    icon: Database,
    title: "Dedicated CRM Support",
    description: "Comprehensive customer relationship management system designed for academic consultancies.",
    features: [
      "Lead tracking dashboard",
      "Automated follow-ups",
      "Performance analytics",
      "Custom pipeline management"
    ]
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Advanced analytics and reporting to optimize your doctoral program recruitment strategy.",
    features: [
      "Conversion rate tracking",
      "Lead quality scoring",
      "ROI measurement",
      "Trend analysis"
    ]
  },
  {
    icon: Shield,
    title: "Compliance & Data Security",
    description: "GDPR-compliant lead generation with enterprise-grade data protection and privacy.",
    features: [
      "GDPR compliance",
      "Data encryption",
      "Privacy controls",
      "Audit trails"
    ]
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Round-the-clock assistance from our team of academic lead generation specialists.",
    features: [
      "Dedicated account manager",
      "Technical support team",
      "Strategic consulting",
      "Training resources"
    ]
  }
];

export default function PhDLeadSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Complete Doctorate Lead Generation Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Academic Lead Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools and services ensures your consultancy 
            receives the highest quality doctoral candidates with maximum conversion potential.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
