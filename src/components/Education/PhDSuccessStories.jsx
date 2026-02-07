import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Director, Elite Academic Advisors",
    avatar: "SC",
    rating: 5,
    content:
      "OptimizedLeads has transformed our consultancy. The quality of doctoral candidates they provide is exceptional - we've seen a 40% increase in enrollment rates within just six months. Their verification process ensures we only speak with serious, qualified applicants.",
    achievement: "40% Increase in Enrollments",
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "CEO, Graduate Pathways International",
    avatar: "MR",
    rating: 5,
    content:
      "The lead generation system is sophisticated yet easy to use. We particularly appreciate the real-time analytics and dedicated support. Our team can now focus on what they do best - guiding students to their ideal doctoral programs.",
    achievement: "250+ Successful Placements",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Founder, Academic Bridge Consulting",
    avatar: "ET",
    rating: 5,
    content:
      "As a growing consultancy, we needed a reliable source of high-quality leads. OptimizedLeads delivered beyond our expectations. The candidates are pre-screened, motivated, and genuinely interested in pursuing advanced degrees.",
    achievement: "96% Lead Satisfaction Rate",
  },
];

export default function PhDSuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Partner Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Academic Consultancies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our partners who have successfully grown their doctoral
            recruitment programs with our premium lead generation services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-3 h-3" />
                {testimonial.achievement}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
