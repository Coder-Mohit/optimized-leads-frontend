import { CheckCircle } from "lucide-react";

const stats = [
  { value: "1000+", label: "Max Monthly Leads" },
  { value: "200+", label: "Active Brokers" },
  { value: "92%", label: "Lead Quality Score" },
  { value: "Daily", label: "Lead Delivery" },
];

export default function ForexHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center text-white">
        {/* badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium mb-8">
          <CheckCircle className="w-4 h-4 text-green-300" />
          Premium Forex Trading Leads
        </div>

        {/* heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
          Forex Leads <br />
          <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Subscription Plans
          </span>
        </h1>

        {/* description */}
        <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-16 leading-relaxed">
          Get high-quality, verified forex trading leads delivered monthly.
          Choose from flexible subscription plans designed for brokers and
          trading firms.
        </p>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/15 backdrop-blur border border-white/20 px-6 py-8"
            >
              <div className="text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-sm text-indigo-100">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
