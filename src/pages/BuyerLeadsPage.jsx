import PricingSection from "../components/common/PricingSection";
import BuyerLeadsHero from "../components/RealState/BuyerLeads/BuyerLeadsHero";
import ServicesSection from "../components/studyAbroad/ServicesSection";
import HowItWorks from "../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../components/studyAbroad/PartnerSuccessStories";
import { Star, Crown, Zap, Target, ShieldCheck, BarChart3 } from "lucide-react";
import IndustriesCTASection from "../components/IndustriesCTASection";
import StepsSection from "../components/StepsSection";
import ContactForm from "../components/common/ContactForm";
import FinalCTASection from "../components/FinalCTASection";

export const buyerLeadsServices = [
  {
    icon: "🎯",
    title: "Pre-Qualified Buyer Leads",
    description:
      "Every lead is thoroughly vetted for budget, property preferences, and purchase timeline before delivery.",
    features: [
      "Budget verification",
      "Property preference analysis",
      "Purchase timeline confirmation",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "🏢",
    title: "Property Type Targeting",
    description:
      "Target buyers interested in specific property types - residential, commercial, or investment properties.",
    features: [
      "Residential property buyers",
      "Commercial property investors",
      "Luxury property seekers",
    ],
    iconBg: "bg-emerald-100",
  },
  {
    icon: "⚡",
    title: "Real-Time Lead Delivery",
    description:
      "Instant lead delivery through dashboard, email, and WhatsApp for immediate follow-up with interested buyers.",
    features: [
      "Dashboard notifications",
      "Email & WhatsApp alerts",
      "CRM integration available",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📊",
    title: "Market Analytics",
    description:
      "Comprehensive analytics on buyer behavior, market trends, and conversion performance.",
    features: [
      "Real-time conversion tracking",
      "Market trend analysis",
      "Buyer behavior insights",
    ],
    iconBg: "bg-orange-100",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Personal account manager to optimize your buyer lead campaigns and ensure maximum conversions.",
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
      "Tailored lead generation strategies based on your specific real estate market and target properties.",
    features: [
      "Geographic targeting",
      "Property-specific filtering",
      "Custom pricing models",
    ],
    iconBg: "bg-indigo-100",
  },
];

const buyerLeadsStories = [
  {
    name: "Rajesh Malhotra",
    role: "Director, Premium Properties",
    quote:
      "OptimizedLeads buyer leads increased our sales by 280%. The buyers are genuinely interested and have verified budgets.",
    results: "150+ buyer leads/month, ₹35L revenue increase",
    rating: 5,
    initial: "R",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Priya Desai",
    role: "Founder, Urban Realty",
    quote:
      "The property-specific targeting helps us match buyers with the right properties. Our conversion rate improved by 300%.",
    results: "200+ buyer leads/month, 94% lead quality score",
    rating: 5,
    initial: "P",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Amit Sharma",
    role: "CEO, Elite Estates",
    quote:
      "ROI improved by 250% within 2 months. The real-time delivery ensures we never miss an opportunity with hot buyers.",
    results: "180+ buyer leads/month, 250% ROI improvement",
    rating: 5,
    initial: "A",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-200",
    avatarText: "text-emerald-700",
  },
];

const buyerLeadsSteps = [
  {
    step: "1",
    title: "Buyer Discovery",
    desc: "Multi-channel lead capture through property portals, social media, and real estate events.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Budget Verification",
    desc: "Initial screening for financial capacity and property purchase eligibility.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Property Matching",
    desc: "Personal consultation calls to verify property preferences and purchase requirements.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Lead Scoring",
    desc: "Advanced scoring based on budget, timeline, and property type compatibility.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Agent Matching",
    desc: "Intelligent matching with real estate agents based on specialization and location.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete buyer profile and contact details for immediate engagement.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const buyerLeadsFeatures = [
  {
    title: "90% Conversion Rate",
    description:
      "Industry-leading conversion rates with pre-qualified, budget-verified buyers.",
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
    title: "Market Analytics",
    description:
      "Comprehensive tracking and analytics to optimize your lead conversion process.",
    icon: BarChart3,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const buyerLeadsPlans = [
  {
    name: "Basic Plan",
    price: "15,000",
    description: "Buyer Leads Subscription – Grow Your Sales Pipeline Fast!",
    icon: Zap,
    iconBg: "bg-blue-600",
    features: [
      "Dedicated Dashboard",
      "Account Manager",
      "24×7 Leads Support",
      "Sales Assistant",
    ],
    button: "Get Started with Basic",
    link: "/product_details/?id=1",
  },
  {
    name: "Premium Plan",
    price: "25,000",
    description: "Premium Buyer Leads Subscription Plan",
    popular: true,
    icon: Crown,
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    features: [
      "Premium Dashboard Access",
      "Dedicated Account Manager",
      "24×7 Priority Support",
      "Sales Assistant Support",
      "Performance Analytics Report",
      "Verified & Nurtured Leads",
    ],
    button: "Get Started with Premium",
    link: "/product_details/?id=2",
  },
  {
    name: "Pro Plan",
    price: "20,000",
    description: "Pro Buyer Leads Subscription Plan",
    icon: Star,
    iconBg: "bg-blue-700",
    features: [
      "Dedicated Dashboard Access",
      "Personal Account Manager",
      "24×7 Lead Support",
      "Sales Assistant Support",
      "Verified & Nurtured Leads",
      "Performance Insights",
    ],
    button: "Get Started with Pro",
    link: "/product_details/?id=3",
  },
];

export default function BuyerLeadsPage() {
  return (
    <main>
      <BuyerLeadsHero />
      <ServicesSection
        title="🏢 Complete Buyer Lead Generation Solutions"
        subtitle="We provide end-to-end buyer lead generation services specifically designed for real estate agencies and property developers."
        services={buyerLeadsServices}
        bg="bg-gray-50"
      />
      <HowItWorks
        steps={buyerLeadsSteps}
        title="⚡ How Our Buyer Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, budget-verified buyers ready to make property purchases."
      />
      <PartnerSuccessStories stories={buyerLeadsStories} />
      <PricingSection
        title="Real Estate Buyer Leads Pricing"
        subtitle="Choose the perfect plan for your real estate business and start connecting with qualified property buyers today."
        plans={buyerLeadsPlans}
        bg="bg-white"
      />
      <ContactForm industry="Real Estate (Buyers Leads)" />
      <FinalCTASection />
    </main>
  );
}
