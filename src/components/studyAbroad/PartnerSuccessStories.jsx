import { Star, Trophy } from "lucide-react";

export default function PartnerSuccessStories({ stories }) {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Trophy className="w-4 h-4" />
            Partner Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Education Consultancies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our partners who have successfully grown their recruitment
            programs with our premium lead generation services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                <Star className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(story.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{story.quote}"
                </blockquote>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                  <Trophy className="w-3 h-3" />
                  {story.results}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${story.avatarBg} rounded-full flex items-center justify-center ${story.avatarText} font-bold`}
                >
                  {story.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-gray-600">{story.role}</div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Partner Consultancies" },
            { value: "10,000+", label: "Students Placed" },
            { value: "94%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">
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
