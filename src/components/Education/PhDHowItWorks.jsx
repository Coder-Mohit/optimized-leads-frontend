import { Search, Filter, UserCheck, Calendar, MessageSquare, GraduationCap } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Candidate Discovery",
    description: "We identify and source potential doctoral candidates through our extensive academic network and proprietary databases.",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: 2,
    icon: Filter,
    title: "Profile Screening",
    description: "Each candidate undergoes rigorous screening to verify academic credentials, research interests, and enrollment readiness.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    number: 3,
    icon: UserCheck,
    title: "Qualification Verification",
    description: "Our team conducts detailed background checks and validates all academic and professional qualifications.",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 4,
    icon: Calendar,
    title: "Lead Delivery",
    description: "Verified leads are delivered to your consultancy through our secure CRM platform with complete candidate profiles.",
    color: "from-green-500 to-green-600"
  },
  {
    number: 5,
    icon: MessageSquare,
    title: "Consultation Support",
    description: "We provide ongoing support and facilitate initial consultations between candidates and your academic advisors.",
    color: "from-orange-500 to-orange-600"
  },
  {
    number: 6,
    icon: GraduationCap,
    title: "Enrollment Success",
    description: "Track candidates through to successful enrollment with our comprehensive follow-up and conversion optimization.",
    color: "from-pink-500 to-pink-600"
  }
];

export default function PhDHowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            <GraduationCap className="w-4 h-4" />
            How Our Doctorate Lead Generation Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Six Steps to Academic Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures your consultancy receives only the most qualified 
            and motivated doctoral candidates ready to advance their academic journey.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-100">
                  {/* Number Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
                </div>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-200 to-purple-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <GraduationCap className="w-5 h-5" />
            Start Your Doctorate Lead Journey
          </div>
        </div>
      </div>
    </section>
  );
}
