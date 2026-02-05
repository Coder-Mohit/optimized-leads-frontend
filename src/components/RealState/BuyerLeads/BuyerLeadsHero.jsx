import { Link } from "react-router-dom";

export default function BuyerLeadsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      <div
        className="
    max-w-7xl mx-auto
    px-4 sm:px-6 md:px-10 lg:px-16
    py-16 sm:py-20 md:py-24
    text-center text-white
  "
      >
        {/* Badge */}
        <div
          className="
      inline-flex items-center gap-2
      px-4 sm:px-5 py-2
      rounded-full bg-white/15 backdrop-blur
      text-xs sm:text-sm font-medium
      mb-6 sm:mb-8
    "
        >
          🏢 Premium buyers Leads
        </div>

        {/* Heading */}
        <h1
          className="
      text-4xl md:text-5xl xl:text-6xl
      font-bold
      mb-4 sm:mb-6
    "
        >
          <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
            Subscription Plans
          </span>
        </h1>

        {/* Description */}
        <p
          className="
      max-w-3xl mx-auto
      text-base sm:text-lg md:text-xl
      text-indigo-100
      mb-12 sm:mb-16
      leading-relaxed
    "
        >
          Connect with verified Buyers actively searching for buying properties.
          Get high-quality leads with complete property preferences and instant
          notifications.
        </p>

        {/* Stats */}
        <div
          className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-5 sm:gap-6 lg:gap-8
    "
        >
          {/* Card 1 */}
          <div
            className="
        bg-white/10 backdrop-blur
        rounded-2xl
        p-6 sm:p-8 md:p-10
        border border-white/15
      "
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">500+</h3>
            <p className="text-indigo-100 text-sm sm:text-base">
              Active Buyers
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
        bg-white/10 backdrop-blur
        rounded-2xl
        p-6 sm:p-8 md:p-10
        border border-white/15
      "
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">90–95%</h3>
            <p className="text-indigo-100 text-sm sm:text-base">
              Conversation Rate
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
        bg-white/10 backdrop-blur
        rounded-2xl
        p-6 sm:p-8 md:p-10
        border border-white/15
      "
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">24/7</h3>
            <p className="text-indigo-100 text-sm sm:text-base">
              Lead Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
