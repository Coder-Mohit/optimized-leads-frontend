export default function HowItWorks({ steps, title, subtitle }) {
  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            ⚡ {title.split("⚡")[1] || title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.replace("⚡ ", "")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group relative h-full flex flex-col"
            >
              {/* Step Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                {/* Number Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`relative w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-1">
                  {step.desc}
                </p>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
