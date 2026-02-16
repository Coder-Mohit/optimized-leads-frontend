import ContactForm from "../../components/common/ContactForm";
import OnlineMBAHero from "../../components/Education/OnlineMBAHero";
import HowItWorks from "../../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../../components/studyAbroad/PartnerSuccessStories";
import ServicesSection from "../../components/studyAbroad/ServicesSection";
import WhyPartnerWithOptimizedLeads from "../../components/studyAbroad/WhyPartnerWithOptimizedLeads";
import { Target, Zap, ShieldCheck, BarChart3, Crown, Star } from "lucide-react";
import { useProductsByCategory } from "../../hooks/useProducts";
import PricingSection from "../../components/common/PricingSection";
import { transformProductsToPlans } from "../../utils/productTransform";

// You already have these
// import PartnerSuccessStories from "../components/common/PartnerSuccessStories";
// import ServicesSection from "../components/common/ServicesSection";
// import StepsSection from "../components/common/StepsSection";
// import ContactFormSection from "../components/common/ContactFormSection";

const services = [
  {
    icon: "🎯",
    title: "Pre-Qualified Leads",
    description:
      "Every lead is thoroughly vetted for academic eligibility, financial capacity, and genuine interest before delivery.",
    features: [
      "Academic profile verification",
      "Financial capacity assessment",
      "Intent verification calls",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "⚡",
    title: "Real-Time Lead Delivery",
    description:
      "Instant lead delivery via dashboard, email, and WhatsApp so your team can follow up immediately.",
    features: [
      "Instant dashboard notifications",
      "Email & WhatsApp alerts",
      "API integration available",
    ],
    iconBg: "bg-green-100",
  },
  {
    icon: "🌍",
    title: "Geographic Targeting",
    description:
      "Target specific cities, states, or regions aligned with your consultancy’s service areas.",
    features: [
      "City-wise lead filtering",
      "Regional preference settings",
      "Tier 1 / 2 / 3 city options",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description:
      "Track performance, conversions, and ROI with a powerful analytics dashboard.",
    features: [
      "Real-time conversion tracking",
      "ROI & performance reports",
      "Lead quality scoring",
    ],
    iconBg: "bg-orange-100",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Manager",
    description:
      "Work with a personal account manager focused on maximizing your conversions.",
    features: [
      "Weekly performance reviews",
      "Campaign optimization",
      "24/7 support availability",
    ],
    iconBg: "bg-red-100",
  },
  {
    icon: "🎨",
    title: "Custom Lead Packages",
    description:
      "Flexible lead packages tailored to your budget, volume, and target countries.",
    features: [
      "Flexible volume options",
      "Custom pricing models",
      "Exclusive territory rights",
    ],
    iconBg: "bg-indigo-100",
  },
];

const stories = [
  {
    name: "Rajesh Kumar",
    role: "Director, Global Education Consultants",
    quote:
      "OptimizedLeads MBA leads increased our monthly conversions by 280%. The quality is exceptional with verified contact details and genuine interest.",
    results: "300+ MBA leads/month, ₹35L revenue increase",
    rating: 5,
    initial: "R",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Study Abroad Solutions",
    quote:
      "The MBA leads come with detailed profiles including work experience and budget. This saves us 75% time on initial screening.",
    results: "250+ MBA leads/month, 92% lead quality score",
    rating: 5,
    initial: "P",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Amit Patel",
    role: "CEO, International Education Hub",
    quote:
      "ROI improved by 220% within 2 months. The specialization-wise targeting helps us match leads with our MBA programs perfectly.",
    results: "400+ MBA leads/month, 220% ROI improvement",
    rating: 5,
    initial: "A",
    cardBg: "bg-emerald-50",
    avatarBg: "bg-emerald-200",
    avatarText: "text-emerald-700",
  },
];

const steps = [
  {
    step: "1",
    title: "Lead Capture",
    desc: "Multi-channel lead capture through digital marketing, social media, and educational events across India.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Initial Screening",
    desc: "Automated screening for basic eligibility including academic background and financial capacity.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Qualification Call",
    desc: "Personal qualification calls to verify intent, timeline, and specific study abroad requirements.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Lead Scoring",
    desc: "Advanced scoring algorithm to rate lead quality based on conversion probability and value potential.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Partner Matching",
    desc: "Intelligent matching with consultancies based on specialization, location, and capacity.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete student profile and contact details for quick follow-up.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

const features = [
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

export default function OnlineMBAServicePage() {
  console.log("OnlineMBAServicePage component rendering");

  // Fetch products for "Online MBA" category
  const {
    data: products,
    isLoading,
    error,
  } = useProductsByCategory("Online MBA");

  console.log("OnlineMBAServicePage hook results:", {
    products,
    isLoading,
    error,
  });

  // Transform API data to match expected format
  const onlineMBAPlans = transformProductsToPlans(products);

  console.log("Transformed plans:", onlineMBAPlans);

  return (
    <main>
      <OnlineMBAHero />
      <ServicesSection
        title="🚀 Complete MBA Lead Generation Solutions"
        subtitle="We provide end-to-end MBA lead generation services specifically designed for education consultancies and MBA program providers."
        services={services}
      />{" "}
      <HowItWorks
        steps={steps}
        title="⚡ How Our Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, conversion-ready leads."
      />
      <PartnerSuccessStories stories={stories} />
      <PricingSection
        title="Online MBA Leads Pricing"
        subtitle="Choose the perfect plan for your consultancy and start connecting with MBA aspirants today."
        plans={onlineMBAPlans}
        bg="bg-white"
        isLoading={isLoading}
        error={error}
      />
      <ContactForm industry="education" />
      <WhyPartnerWithOptimizedLeads features={features} />
    </main>
  );
}
