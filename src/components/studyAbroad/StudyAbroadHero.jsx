export default function StudyAbroadHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 pt-28 pb-24 text-center">
      {/* soft highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium text-white backdrop-blur">
            🎯 B2B Lead Generation Services
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
          <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Study Abroad
          </span>
          Lead Generation for Consultancies
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-4xl text-lg md:text-2xl text-indigo-100 leading-relaxed">
          Partner with us to get high-quality, pre-qualified study abroad leads.
          We connect serious students with trusted consultancies through our
          proven lead generation system.
        </p>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="5,000+" label="Monthly Leads" />
          <StatCard value="200+" label="Partner Consultancies" />
          <StatCard value="85%" label="Lead Conversion Rate" />
          <StatCard value="25+" label="Target Countries" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/25 bg-white/15 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
      <div className="text-3xl font-bold text-white">{value}</div>
      <p className="mt-2 text-indigo-100">{label}</p>
    </div>
  );
}
