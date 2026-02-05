export default function CertificationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 0 L0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium mb-6">
          🎓 Professional Certification Services
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          Professional Certification
          <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Lead Generation for Consultancies
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-blue-100 mb-14 leading-relaxed">
          Convert professionals into certification enrollments across
          industry-recognized programs like IT, Finance, Digital Marketing,
          Healthcare, and more.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl">
          <Stat value="5,000+" label="Monthly Enquiries" />
          <Stat value="200+" label="Partner Consultancies" />
          <Stat value="92%" label="Lead Conversion Rate" />
          <Stat value="100+" label="Certification Programs" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-6 border border-white/15 transition hover:scale-105">
      <h3 className="text-2xl sm:text-3xl font-bold mb-1">{value}</h3>
      <p className="text-blue-100 text-sm">{label}</p>
    </div>
  );
}
