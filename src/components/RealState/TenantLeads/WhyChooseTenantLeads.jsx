import {
  ShieldCheck,
  ListChecks,
  Zap,
  MapPin,
  Headphones,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    title: "Verified Tenants",
    desc: "All leads are pre-verified with genuine contact information and serious rental intent.",
    icon: ShieldCheck,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Complete Preferences",
    desc: "Get detailed property requirements including budget range, preferred locations, and property size.",
    icon: ListChecks,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Instant Delivery",
    desc: "Receive leads instantly via WhatsApp, email, and SMS as soon as they're generated.",
    icon: Zap,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Location Targeting",
    desc: "Target specific areas, neighborhoods, or cities to get leads that match your service areas.",
    icon: MapPin,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    title: "24/7 Support",
    desc: "Get round-the-clock support via phone, WhatsApp, and email for all your queries.",
    icon: Headphones,
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    title: "Lead Replacement",
    desc: "Get free lead replacements if any lead doesn't meet our quality standards within the guarantee period.",
    icon: RefreshCcw,
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];

export default function WhyChooseTenantLeads() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Tenant Leads?
          </h2>
          <p className="text-gray-600">
            Get access to the highest quality tenant leads with complete
            property preferences and verified contact information.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({ title, desc, icon: Icon, iconBg }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-8
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconBg}`}
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
