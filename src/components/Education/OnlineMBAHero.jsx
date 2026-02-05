export default function OnlineMBAHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-500 opacity-90" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-indigo-400/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-purple-400/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-6">
          🎓 MBA Lead Generation Services
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          Online / Offline MBA
          <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Lead Generation for Consultancies
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-indigo-100 mb-14 leading-relaxed">
          Partner with us to get high-quality, pre-qualified Online MBA leads.
          We connect serious MBA aspirants with trusted consultancies through
          our proven lead generation system.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Stat value="3,000+" label="Monthly MBA Leads" />
          <Stat value="150+" label="Partner Consultancies" />
          <Stat value="88%" label="Lead Conversion Rate" />
          <Stat value="50+" label="MBA Programs" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- STAT CARD ---------------- */

function Stat({ value, label }) {
  return (
    <div className="bg-white/15 backdrop-blur rounded-2xl px-6 py-6 border border-white/20 shadow-md transition hover:scale-105">
      <h3 className="text-2xl sm:text-3xl font-bold mb-1">{value}</h3>
      <p className="text-indigo-100 text-sm">{label}</p>
    </div>
  );
}
