export default function TenantLeadsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-cyan-500/30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-6 border border-white/10">
          🏠 Premium Tenant Leads
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          Tenant Leads
          <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Subscription Plans
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-14 leading-relaxed">
          Connect with verified tenants actively searching for rental
          properties. Get high-quality leads with complete property preferences
          and instant notifications.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StatCard value="5,000+" label="Active Tenants" />
          <StatCard value="95%" label="Conversion Rate" />
          <StatCard value="24/7" label="Lead Delivery" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({ value, label }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl px-8 py-8 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10">
      <h3 className="text-3xl sm:text-4xl font-bold mb-1">{value}</h3>
      <p className="text-slate-300 text-sm sm:text-base">{label}</p>

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-indigo-400/20 to-purple-400/20" />
    </div>
  );
}
