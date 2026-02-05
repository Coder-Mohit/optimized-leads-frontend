import { CheckCircle, GraduationCap, BookOpen, Briefcase } from "lucide-react";

const industries = [
  {
    title: "Study Abroad",
    desc: "International education leads",
    icon: CheckCircle,
    bg: "from-emerald-50 to-white",
    border: "border-emerald-200",
    iconBg: "bg-emerald-500",
  },
  {
    title: "Education",
    desc: "Course & tutoring leads",
    icon: BookOpen,
    bg: "from-orange-50 to-white",
    border: "border-orange-200",
    iconBg: "bg-orange-500",
  },
  {
    title: "Job Consultancy",
    desc: "Recruitment & career leads",
    icon: Briefcase,
    bg: "from-violet-50 to-white",
    border: "border-purple-200",
    iconBg: "bg-purple-500",
  },
];

export default function IndustriesCTASection() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-10 md:p-14 text-center shadow-xl">
          {/* TOP ICON */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Looking for Other Industries?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We have specialized lead generation solutions for Study Abroad,
            Education, and Job Consultancy sectors. Explore industry-specific
            plans tailored to your business needs.
          </p>

          {/* INDUSTRY CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border bg-gradient-to-br ${item.bg} ${item.border}
                  p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white
                    ${item.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon size={22} />
                  </div>

                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12">
            <button
              onClick={() => console.log("Explore Industries")}
              className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600
              px-12 py-5 text-lg font-bold text-white shadow-2xl transition-all
              duration-300 hover:scale-105 hover:from-indigo-700 hover:to-purple-700"
            >
              Explore All Industries & Get Subscription
            </button>

            <p className="mt-4 text-sm text-slate-500">
              Get early access to upcoming industry plans with special launch
              pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
