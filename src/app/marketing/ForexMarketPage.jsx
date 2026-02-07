import PricingSection from "../../components/common/PricingSection";
import ForexHero from "../../components/ForexMarket/ForexHero";
import ServicesSection from "../../components/studyAbroad/ServicesSection";
import HowItWorks from "../../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../../components/studyAbroad/PartnerSuccessStories";
import ContactForm from "../../components/common/ContactForm";
import WhyPartnerWithOptimizedLeads from "../../components/studyAbroad/WhyPartnerWithOptimizedLeads";
import { Zap, Crown, Star, Target, ShieldCheck, BarChart3 } from "lucide-react";

const forexServices = [
  {
    icon: "🎯",
    title: "Pre-Qualified Trader Leads",
    description:
      "Every lead is thoroughly vetted for trading experience, investment capacity, and market interest before delivery.",
    features: [
      "Trading experience verification",
      "Investment capacity assessment",
      "Market interest confirmation",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "💹",
    title: "Market-Specific Targeting",
    description:
      "Target traders interested in specific markets - forex, stocks, commodities, or cryptocurrencies.",
    features: [
      "Forex market traders",
      "Stock market investors",
      "Commodity trading prospects",
    ],
    iconBg: "bg-emerald-100",
  },
  {
    icon: "⚡",
    title: "Real-Time Lead Delivery",
    description:
      "Instant lead delivery through dashboard, email, and WhatsApp for immediate follow-up with interested traders.",
    features: [
      "Dashboard notifications",
      "Email & WhatsApp alerts",
      "CRM integration available",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📊",
    title: "Trading Analytics",
    description:
      "Comprehensive analytics on trader behavior, market trends, and conversion performance.",
    features: [
      "Real-time conversion tracking",
      "Market trend analysis",
      "Trader behavior insights",
    ],
    iconBg: "bg-orange-100",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Personal account manager to optimize your trader lead campaigns and ensure maximum conversions.",
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
      "Tailored lead generation strategies based on your specific trading market and target audience.",
    features: [
      "Geographic targeting",
      "Market-specific filtering",
      "Custom pricing models",
    ],
    iconBg: "bg-indigo-100",
  },
];

const forexStories = [
  {
    name: "Rajesh Trading",
    role: "Director, Premium Forex",
    quote:
      "OptimizedLeads forex trader leads increased our conversions by 320%. The traders are genuinely interested and have verified investment capacity.",
    results: "300+ trader leads/month, ₹45L revenue increase",
    rating: 5,
    initial: "R",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Priya Markets",
    role: "Founder, Global Trading",
    quote:
      "The market-specific targeting helps us match traders with the right platforms. Our conversion rate improved by 280%.",
    results: "250+ trader leads/month, 94% lead quality score",
    rating: 5,
    initial: "P",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Amit Forex",
    role: "CEO, Elite Trading",
    quote:
      "ROI improved by 300% within 2 months. The real-time delivery ensures we never miss an opportunity with qualified traders.",
    results: "400+ trader leads/month, 300% ROI improvement",
    rating: 5,
    initial: "A",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-200",
    avatarText: "text-emerald-700",
  },
];

const forexSteps = [
  {
    step: "1",
    title: "Trader Discovery",
    desc: "Multi-channel lead capture through trading platforms, social media, and financial events.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Experience Verification",
    desc: "Initial screening for trading experience and investment capacity requirements.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Market Interest",
    desc: "Personal consultation calls to verify trading preferences and market requirements.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Lead Scoring",
    desc: "Advanced scoring based on trading experience, investment capacity, and market compatibility.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Broker Matching",
    desc: "Intelligent matching with forex brokers based on specialization and market focus.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete trader profile and contact details for immediate engagement.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const forexFeatures = [
  {
    title: "92% Conversion Rate",
    description:
      "Industry-leading conversion rates with pre-qualified, experience-verified traders.",
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
    title: "Trading Analytics",
    description:
      "Comprehensive tracking and analytics to optimize your lead conversion process.",
    icon: BarChart3,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const forexPlans = [
  {
    name: "Basic Plan",
    price: "19,999",
    description: "Buyer Leads Subscription – India",
    icon: Zap,
    iconBg: "bg-blue-600",
    features: [
      "100% Indian Market Focus",
      "Verified Trading Interest",
      "Real-Time Dashboard",
      "Campaign Support",
    ],
    button: "Get Started",
  },
  {
    name: "Premium Plan",
    price: "28,999",
    description: "Premium Forex Leads (India)",
    popular: true,
    icon: Crown,
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    features: [
      "High Intent Traders",
      "WhatsApp & Email Verified",
      "Live Dashboard Access",
      "Campaign Optimization",
    ],
    button: "Start Premium",
  },
  {
    name: "Platinum Plan",
    price: "110,000",
    description: "Dubai Forex Leads (Exclusive)",
    icon: Star,
    iconBg: "bg-blue-700",
    features: [
      "Ready-to-Invest Traders",
      "Exclusive Leads",
      "Dedicated Manager",
      "Priority Delivery",
    ],
    button: "Contact Sales",
  },
];

export default function ForexMarketPage() {
  return (
    <main>
      <ForexHero />
      <ServicesSection
        title="💹 Complete Forex Trader Lead Generation Solutions"
        subtitle="We provide end-to-end forex trader lead generation services specifically designed for forex brokers and trading platforms."
        services={forexServices}
        bg="bg-gray-50"
      />
      <HowItWorks
        steps={forexSteps}
        title="⚡ How Our Forex Trader Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, experience-verified traders ready to invest."
      />
      <PartnerSuccessStories stories={forexStories} />
      <PricingSection
        title="Forex Trader Leads Pricing"
        subtitle="Choose the perfect plan for your forex trading business and start connecting with qualified traders today."
        plans={forexPlans}
        bg="bg-white"
      />
      <ContactForm industry="Financial Services (Forex Trading)" />
      <WhyPartnerWithOptimizedLeads features={forexFeatures} />
    </main>
  );
}
