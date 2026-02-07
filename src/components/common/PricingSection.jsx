import PricingCard from "./PricingCard";

export default function PricingSection({
  title,
  subtitle,
  plans,
  bg = "bg-slate-50",
}) {
  return (
    <section className={`${bg} py-12`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">{subtitle}</p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
