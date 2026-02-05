import { Link } from "react-router-dom";

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Specialize In
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored lead generation solutions for high-growth sectors with
            proven conversion strategies
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <IndustryCard
            icon={<HomeIcon />}
            title="Real Estate"
            desc="Connect with qualified buyers, sellers, and investors. Generate high-intent leads for properties, rentals, and commercial real estate."
            color="blue"
            link="/real_estate"
          />

          <IndustryCard
            icon={<CheckIcon />}
            title="Study Abroad"
            desc="Reach students seeking international education opportunities. Target by destination, course type, and academic level."
            color="green"
            link="/study_abroad"
          />

          <IndustryCard
            icon={<BriefcaseIcon />}
            title="Job Consultancy"
            desc="Connect with job seekers and employers. Generate leads for recruitment, career coaching, and professional development services."
            color="purple"
            link="/job_consultancy"
          />

          <IndustryCard
            icon={<CapIcon />}
            title="Education"
            desc="Target students and parents for specialized courses, tutoring, test prep, and skill development programs."
            color="orange"
            link="/education"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function IndustryCard({ icon, title, desc, color, link }) {
  return (
    <div
      className={`
        relative
        rounded-2xl
        p-8
        bg-${color}-50
        border border-${color}-100
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-xl
        group
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-14 h-14
          rounded-xl
          bg-${color}-500
          flex items-center justify-center
          mb-6
          transition-transform duration-500
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>

      {/* CTA */}
      <Link
        to={link}
        className={`
          inline-flex items-center gap-2
          font-medium
          text-${color}-600
          group-hover:gap-3
          transition-all
        `}
      >
        Learn More
        <ArrowIcon />
      </Link>
    </div>
  );
}

/* ================= ICONS ================= */

function HomeIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2z" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
