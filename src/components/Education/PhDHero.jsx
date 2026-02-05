export default function PhDHero() {
  const stats = [
    { value: "3,500+", label: "Monthly Leads" },
    { value: "80+", label: "Partner Universities" },
    { value: "96%", label: "Lead Quality Score" },
    { value: "800+", label: "Successful Enrollments" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-8">
          🎓 Elite Academic Lead Generation
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          Doctorate & PhD
          <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Lead Generation for Consultancies
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-indigo-100 mb-16 leading-relaxed">
          Connect ambitious scholars with prestigious doctoral programs. Our
          specialized lead generation service delivers high-intent candidates
          actively seeking advanced academic degrees across diverse disciplines.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-indigo-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
