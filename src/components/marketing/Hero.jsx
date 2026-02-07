export default function Hero() {
  return (
    <main
      className="
        relative
        overflow-hidden
        min-h-[90vh]
        bg-gradient-to-br
        from-gray-50
        to-indigo-50
      "
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(180, 190, 255, 0.25) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(180, 190, 255, 0.25) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              <StarIcon />
              #1 Lead Generation Platform
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smart Lead Engine for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Real Business Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
              Generate high-converting, industry-specific leads with one
              powerful platform. Stop wasting time on cold prospects.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform shadow-xl">
                Start Free 2-Day Trial
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl group">
              {/* FLOATING ORBS */}
              <div
                className="orb w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 -top-10 -left-10"
                style={{ animation: "orbFloat1 6s ease-in-out infinite" }}
              />
              <div
                className="orb w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 top-1/2 -right-10"
                style={{ animation: "orbFloat2 7s ease-in-out infinite" }}
              />
              <div
                className="orb w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 -bottom-10 left-1/3"
                style={{ animation: "orbFloat3 5.5s ease-in-out infinite" }}
              />

              {/* DASHBOARD CARD */}
              <div
                className="
        relative
        bg-white
        rounded-2xl
        shadow-xl
        p-6
        transition-all
        duration-500
        ease-out
        hover:-translate-y-4
        hover:rotate-[1deg]
        hover:shadow-2xl
      "
              >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full traffic-red"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full traffic-yellow"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full traffic-green"></span>
                  </div>
                  <p className="text-sm text-gray-500">
                    OptimizedLeads Dashboard
                  </p>
                </div>

                <h3 className="font-semibold text-lg mb-4 text-gray-800">
                  Lead Performance
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <Metric
                    value="2,847"
                    label="Total Leads"
                    bg="bg-indigo-50"
                    text="text-indigo-600"
                  />
                  <Metric
                    value="68%"
                    label="Conversion"
                    bg="bg-green-50"
                    text="text-green-600"
                  />
                  <Metric
                    value="$94K"
                    label="Revenue"
                    bg="bg-purple-50"
                    text="text-purple-600"
                  />
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium text-gray-700">
                    <span>Lead Quality Score</span>
                    <span className="text-green-600">Excellent</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-green-400 to-green-600 animate-progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Metric = ({ value, label, bg, text }) => (
  <div
    className={`
      ${bg}
      rounded-2xl
      px-6 py-5
      flex flex-col items-center justify-center
      min-h-[96px]
      transition-transform
      hover:scale-[1.04]
    `}
  >
    <p className={`text-3xl font-bold ${text}`}>{value}</p>
    <p className="text-sm text-gray-600 mt-1 text-center">{label}</p>
  </div>
);

function StarIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1z" />
    </svg>
  );
}
