import PricingCard from "./PricingCard";
import { AlertCircle, Loader2 } from "lucide-react";

export default function PricingSection({
  title,
  subtitle,
  plans,
  bg = "bg-slate-50",
  isLoading = false,
  error = null,
}) {
  // Show loading state
  if (isLoading) {
    return (
      <section className={`${bg} py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Loading cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 items-stretch">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-10 md:p-8 shadow-lg h-full flex flex-col items-center justify-center"
              >
                <Loader2 className="animate-spin h-8 w-8 text-indigo-600 mb-4" />
                <p className="text-slate-600">Loading plan {index}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className={`${bg} py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Error message */}
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Unable to Load Plans
            </h3>
            <p className="text-red-700">
              {error.message ||
                "Failed to load pricing plans. Please try again later."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Show empty state
  if (!plans || plans.length === 0) {
    return (
      <section className={`${bg} py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* Empty state */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No Plans Available
            </h3>
            <p className="text-slate-600">
              No pricing plans are currently available for this category.
            </p>
          </div>
        </div>
      </section>
    );
  }

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
            <PricingCard key={plan.id || plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
