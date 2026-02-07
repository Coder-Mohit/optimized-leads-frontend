import { Star } from "lucide-react";

const stories = [
  {
    name: "Rajesh Kumar",
    role: "Real Estate Agent",
    quote:
      "OptimizedLeads transformed my real estate business. I went from 2–3 deals per month to 15+ deals. The quality of buyer leads is exceptional!",
    color: "bg-blue-50",
    avatar: "R",
    avatarBg: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    role: "Study Abroad Consultant",
    quote:
      "The study abroad leads are incredibly targeted. Students are genuinely interested and ready to proceed. My conversion rate increased by 300%!",
    color: "bg-emerald-50",
    avatar: "P",
    avatarBg: "bg-emerald-500",
  },
  {
    name: "Amit Patel",
    role: "Job Consultant",
    quote:
      "Amazing platform! The job seeker leads are pre-qualified and serious about finding employment. My placement rate doubled in just 3 months.",
    color: "bg-violet-50",
    avatar: "A",
    avatarBg: "bg-violet-500",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-white p-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Success Stories
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            See how businesses like yours are growing with OptimizedLeads
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className={`rounded-3xl p-8 shadow-lg transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl ${story.color}`}
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full
  text-lg font-bold text-white ${story.avatarBg}`}
                >
                  {story.avatar}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{story.name}</h4>
                  <p className="text-sm text-slate-600">{story.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed">“{story.quote}”</p>

              {/* Stars */}
              <div className="mt-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
