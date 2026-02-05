import ContactForm from "../components/common/ContactForm";
import TenantLeadsHero from "../components/RealState/TenantLeads/TenantLeadsHero";
import ServicesSection from "../components/studyAbroad/ServicesSection";
import HowItWorks from "../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../components/studyAbroad/PartnerSuccessStories";
import WhyPartnerWithOptimizedLeads from "../components/studyAbroad/WhyPartnerWithOptimizedLeads";
import { Target, ShieldCheck, BarChart3, Zap } from "lucide-react";

const tenantLeadsServices = [
  {
    icon: "🎯",
    title: "Pre-Qualified Tenant Leads",
    description:
      "Every lead is thoroughly vetted for rental budget, property preferences, and move-in timeline before delivery.",
    features: [
      "Rental budget verification",
      "Property preference analysis",
      "Move-in timeline confirmation",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "🏠",
    title: "Property Type Targeting",
    description:
      "Target tenants interested in specific property types - apartments, houses, or commercial rental properties.",
    features: [
      "Residential rental seekers",
      "Commercial property tenants",
      "Luxury rental prospects",
    ],
    iconBg: "bg-emerald-100",
  },
  {
    icon: "⚡",
    title: "Real-Time Lead Delivery",
    description:
      "Instant lead delivery through dashboard, email, and WhatsApp for immediate follow-up with interested tenants.",
    features: [
      "Dashboard notifications",
      "Email & WhatsApp alerts",
      "CRM integration available",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📊",
    title: "Rental Market Analytics",
    description:
      "Comprehensive analytics on tenant behavior, rental market trends, and conversion performance.",
    features: [
      "Real-time conversion tracking",
      "Rental market analysis",
      "Tenant behavior insights",
    ],
    iconBg: "bg-orange-100",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Personal account manager to optimize your tenant lead campaigns and ensure maximum conversions.",
    features: [
      "Weekly performance reviews",
      "Campaign optimization",
      "24/7 support availability",
    ],
    iconBg: "bg-rose-100",
  },
  {
    icon: "🎨",
    title: "Custom Lead Solutions",
    description:
      "Tailored lead generation strategies based on your specific rental market and target properties.",
    features: [
      "Geographic targeting",
      "Property-specific filtering",
      "Custom pricing models",
    ],
    iconBg: "bg-indigo-100",
  },
];

const tenantLeadsStories = [
  {
    name: "Rajesh Properties",
    role: "Director, Premium Rentals",
    quote:
      "OptimizedLeads tenant leads increased our occupancy rate by 85%. The tenants are genuinely interested and have verified budgets.",
    results: "200+ tenant leads/month, 95% occupancy rate",
    rating: 5,
    initial: "R",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Priya Rentals",
    role: "Founder, Urban Living",
    quote:
      "The property-specific targeting helps us match tenants with the right properties. Our conversion rate improved by 300%.",
    results: "150+ tenant leads/month, 94% lead quality score",
    rating: 5,
    initial: "P",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Amit Estate",
    role: "CEO, Elite Properties",
    quote:
      "ROI improved by 280% within 2 months. The real-time delivery ensures we never miss an opportunity with qualified tenants.",
    results: "180+ tenant leads/month, 280% ROI improvement",
    rating: 5,
    initial: "A",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-200",
    avatarText: "text-emerald-700",
  },
];

const tenantLeadsSteps = [
  {
    step: "1",
    title: "Tenant Discovery",
    desc: "Multi-channel lead capture through rental portals, social media, and housing events.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Budget Verification",
    desc: "Initial screening for rental capacity and property eligibility requirements.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Property Matching",
    desc: "Personal consultation calls to verify rental preferences and property requirements.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Lead Scoring",
    desc: "Advanced scoring based on rental budget, timeline, and property type compatibility.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Landlord Matching",
    desc: "Intelligent matching with property owners based on rental portfolio and location.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete tenant profile and contact details for immediate engagement.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const tenantLeadsFeatures = [
  {
    title: "95% Conversion Rate",
    description:
      "Industry-leading conversion rates with pre-qualified, budget-verified tenants.",
    icon: Target,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Real-Time Delivery",
    description:
      "Instant lead delivery through multiple channels for immediate follow-up.",
    icon: Zap,
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Quality Guarantee",
    description:
      "100% money-back guarantee on leads that don't meet our quality standards.",
    icon: ShieldCheck,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Rental Analytics",
    description:
      "Comprehensive tracking and analytics to optimize your lead conversion process.",
    icon: BarChart3,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function TenantLeadsPage() {
  return (
    <main>
      <TenantLeadsHero />
      <ServicesSection
        title="🏠 Complete Tenant Lead Generation Solutions"
        subtitle="We provide end-to-end tenant lead generation services specifically designed for property owners and rental agencies."
        services={tenantLeadsServices}
        bg="bg-gray-50"
      />
      <HowItWorks
        steps={tenantLeadsSteps}
        title="⚡ How Our Tenant Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, budget-verified tenants ready to sign rental agreements."
      />
      <PartnerSuccessStories stories={tenantLeadsStories} />
      <ContactForm industry="Real Estate (Tenant Leads)" />
      <WhyPartnerWithOptimizedLeads features={tenantLeadsFeatures} />
    </main>
  );
}
