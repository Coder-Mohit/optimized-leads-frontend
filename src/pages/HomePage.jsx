import StepsSection from "../components/StepsSection";
import Hero from "../components/Hero";
import IndustriesSection from "../components/IndustriesSection";
import IndustriesCTASection from "../components/IndustriesCTASection";
import SuccessStories from "../components/SuccessStories";
import FAQSection from "../components/FAQSection";
import FinalCTASection from "../components/FinalCTASection";
import { Star, Zap, Crown, Target, ShieldCheck, BarChart3 } from "lucide-react";
import PricingSection from "../components/common/PricingSection";
import ServicesSection from "../components/studyAbroad/ServicesSection";
import HowItWorks from "../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../components/studyAbroad/PartnerSuccessStories";
import WhyPartnerWithOptimizedLeads from "../components/studyAbroad/WhyPartnerWithOptimizedLeads";

const homeServices = [
  {
    icon: "🎯",
    title: "Pre-Qualified Leads",
    description:
      "Every lead is thoroughly vetted for budget, requirements, and timeline before delivery.",
    features: [
      "Budget verification",
      "Requirements analysis",
      "Timeline confirmation",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "🏢",
    title: "Industry-Specific Targeting",
    description:
      "Target clients from specific industries - real estate, education, finance, and more.",
    features: ["Real estate leads", "Education sector", "Financial services"],
    iconBg: "bg-emerald-100",
  },
  {
    icon: "⚡",
    title: "Real-Time Lead Delivery",
    description:
      "Instant lead delivery through dashboard, email, and WhatsApp for immediate follow-up.",
    features: [
      "Dashboard notifications",
      "Email & WhatsApp alerts",
      "CRM integration available",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description:
      "Comprehensive analytics on lead behavior, conversion rates, and market trends.",
    features: [
      "Real-time conversion tracking",
      "Market trend analysis",
      "Lead behavior insights",
    ],
    iconBg: "bg-orange-100",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Personal account manager to optimize your lead campaigns and ensure maximum conversions.",
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
      "Tailored lead generation strategies based on your specific market and target audience.",
    features: [
      "Geographic targeting",
      "Industry-specific filtering",
      "Custom pricing models",
    ],
    iconBg: "bg-indigo-100",
  },
];

const homeStories = [
  {
    name: "Rajesh Enterprises",
    role: "Director, Business Solutions",
    quote:
      "OptimizedLeads increased our sales by 300%. The leads are genuinely interested and have verified budgets.",
    results: "500+ leads/month, ₹75L revenue increase",
    rating: 5,
    initial: "R",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Priya Consulting",
    role: "Founder, Growth Partners",
    quote:
      "The industry-specific targeting helps us match leads with the right services. Our conversion rate improved by 280%.",
    results: "400+ leads/month, 94% lead quality score",
    rating: 5,
    initial: "P",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Amit Group",
    role: "CEO, Elite Services",
    quote:
      "ROI improved by 250% within 2 months. The real-time delivery ensures we never miss an opportunity with qualified leads.",
    results: "600+ leads/month, 250% ROI improvement",
    rating: 5,
    initial: "A",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-200",
    avatarText: "text-emerald-700",
  },
];

const homeSteps = [
  {
    step: "1",
    title: "Lead Discovery",
    desc: "Multi-channel lead capture through digital marketing, social media, and industry events.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Initial Screening",
    desc: "Initial screening for basic eligibility including requirements and capacity.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Qualification Call",
    desc: "Personal qualification calls to verify intent, timeline, and specific requirements.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Lead Scoring",
    desc: "Advanced scoring algorithm to rate lead quality based on conversion probability.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Partner Matching",
    desc: "Intelligent matching with businesses based on specialization and capacity.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete profile and contact details for quick follow-up.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const homeFeatures = [
  {
    title: "85% Conversion Rate",
    description:
      "Industry-leading conversion rates with pre-qualified, intent-verified leads.",
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
    title: "Advanced Analytics",
    description:
      "Comprehensive tracking and analytics to optimize your lead conversion process.",
    icon: BarChart3,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const homePricingPlans = [
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
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <IndustriesSection />
      <ServicesSection
        title="🚀 Complete Lead Generation Solutions"
        subtitle="We provide end-to-end lead generation services specifically designed for businesses across all industries."
        services={homeServices}
        bg="bg-gray-50"
      />
      <HowItWorks
        steps={homeSteps}
        title="⚡ How Our Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, conversion-ready leads."
      />
      <PartnerSuccessStories stories={homeStories} />
      <PricingSection
        title="Most Purchased Lead Package"
        subtitle="Join thousands of businesses choosing our highest-converting plan."
        plans={homePricingPlans}
        bg="bg-white"
      />
      <IndustriesCTASection />
      <FAQSection />
      <WhyPartnerWithOptimizedLeads features={homeFeatures} />
      <FinalCTASection />
    </div>
  );
}
