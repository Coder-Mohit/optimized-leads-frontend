export default function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <div
      className={`group relative rounded-3xl border bg-white p-10 md:p-8 shadow-lg
      transition-all duration-300 ease-out
      hover:-translate-y-3 hover:shadow-2xl
      ${plan.popular ? "border-indigo-500 md:scale-105" : "border-slate-200"} h-full flex flex-col`}
    >
      {/* MOST POPULAR BADGE */}
      {plan.popular && (
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-600
          px-5 py-1 text-sm font-semibold text-white shadow-md"
        >
          ⭐ MOST POPULAR
        </div>
      )}

      {/* ICON */}
      <div
        className={`mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center
        rounded-2xl text-white shadow-md
        transition-transform duration-300
        group-hover:scale-110 group-hover:-rotate-6
        ${plan.iconBg}`}
      >
        <Icon size={28} />
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-center text-xl font-semibold text-slate-900">
        {plan.name}
      </h3>

      <p className="mt-2 text-center text-sm text-slate-600">
        {plan.description}
      </p>

      {/* PRICE */}
      <div
        className="mt-6 rounded-2xl border border-slate-200 bg-slate-50
        p-4 md:p-5 text-center"
      >
        <span className="text-3xl md:text-4xl font-bold text-indigo-600">
          ₹{plan.price}
        </span>
        <span className="text-slate-500"> /month</span>
        <p className="mt-1 text-xs text-slate-400">Billed monthly</p>
      </div>

      {/* FEATURES */}
      <ul className="mt-6 space-y-3 text-sm text-slate-700 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold text-white
        transition-all duration-300
        ${
          plan.popular
            ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {plan.button} →
      </button>
    </div>
  );
}
