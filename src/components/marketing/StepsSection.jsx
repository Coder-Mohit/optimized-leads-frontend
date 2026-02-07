export default function StepsSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          py-16 sm:py-20 md:py-24
        "
      >
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Find Your Next Paying Client / Customer In{" "}
            <span className="text-indigo-600">
              60 Seconds With Just 3 Simple Steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <StepCard
            step="1"
            color="indigo"
            title="Login with OptimizedLeads"
            description="Create your free account and access our powerful lead generation dashboard in seconds."
            icon="check"
          />

          <StepCard
            step="2"
            color="purple"
            title="Choose Your Industry"
            description="Select from Real Estate, Study Abroad, Education, or Job Consultancy for targeted results."
            icon="star"
          />

          <StepCard
            step="3"
            color="rose"
            title="Upgrade Your Plan"
            description="Unlock unlimited leads and advanced features to scale your business instantly."
            icon="zap"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Ready to get your first paying client in 60 seconds?
          </p>

          <button
            className="
  inline-flex items-center justify-center
  px-8 sm:px-10 py-4
  rounded-xl
  bg-white
  text-gray-900
  font-semibold
  shadow-lg
  transition-all
  duration-300
  hover:bg-blue-50
  hover:text-blue-600
  hover:shadow-xl
  hover:scale-105
  active:scale-95
"
          >
            Start Free 2-Day Trial
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= STEP CARD ================= */

function StepCard({ step, title, description, color, icon }) {
  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-600",
    purple: "bg-purple-100 text-purple-600",
    rose: "bg-rose-100 text-rose-600",
  };

  const badgeMap = {
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    rose: "bg-rose-500",
  };

  return (
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-6 sm:p-8
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Step Badge */}
      <div
        className={`
          absolute -top-4 left-6
          w-10 h-10
          ${badgeMap[color]}
          text-white
          rounded-full
          flex items-center justify-center
          font-bold
          shadow-md
        `}
      >
        {step}
      </div>

      {/* Icon */}
      <div
        className={`
          w-14 h-14
          rounded-xl
          flex items-center justify-center
          mb-6
          ${colorMap[color]}
        `}
      >
        <Icon type={icon} />
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}

/* ================= ICONS ================= */

function Icon({ type }) {
  if (type === "star") {
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z" />
      </svg>
    );
  }

  if (type === "zap") {
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    );
  }

  // default check icon
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
