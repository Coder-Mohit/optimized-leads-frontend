import { BarChart3 } from "lucide-react";
import CertificationHero from "../../components/Education/CertificationHero";
import ServicesSection from "../../components/studyAbroad/ServicesSection";
import HowItWorks from "../../components/studyAbroad/HowItWorks";
import PartnerSuccessStories from "../../components/studyAbroad/PartnerSuccessStories";
import { ShieldCheck } from "lucide-react";
import { Zap } from "lucide-react";
import { Target } from "lucide-react";
import ContactForm from "../../components/common/ContactForm";
import WhyPartnerWithOptimizedLeads from "../../components/studyAbroad/WhyPartnerWithOptimizedLeads";

/* ---------------- DATA ---------------- */

export const certificationSolutions = [
  {
    icon: "🎯",
    title: "Pre-Qualified Professional Leads",
    description:
      "Every lead is thoroughly vetted for professional background, career goals, and financial capacity before delivery.",
    points: [
      "Professional experience verification",
      "Career advancement intent assessment",
      "Budget and timeline verification",
    ],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: "🏢",
    title: "Industry-Specific Targeting",
    description:
      "Target professionals from specific industries and companies based on your certification program focus.",
    points: [
      "Company size and industry filtering",
      "Job role and seniority targeting",
      "Career transition identification",
    ],
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    highlight: true,
  },
  {
    icon: "⚡",
    title: "Instant Lead Delivery",
    description:
      "Real-time lead delivery through multiple channels for immediate professional engagement.",
    points: [
      "Dashboard notifications",
      "Email & WhatsApp integration",
      "CRM system integration",
    ],
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: "📊",
    title: "Advanced Analytics Dashboard",
    description:
      "Comprehensive analytics to track lead performance think, conversion rates, and ROI across certification programs.",
    points: [
      "Real-time conversion tracking",
      "Program-wise performance reports",
      "Lead quality scoring system",
    ],
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: "🤝",
    title: "Dedicated Account Management",
    description:
      "Personal account manager to optimize your certification lead campaigns and ensure maximum enrollment rates.",
    points: [
      "Weekly performance reviews",
      "Campaign optimization strategies",
      "24/7 support availability",
    ],
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: "🎨",
    title: "Custom Lead Solutions",
    description:
      "Tailored lead generation strategies based on your specific certification programs and target audience.",
    points: [
      "Program-specific lead funnels",
      "Flexible volume and pricing",
      "Exclusive territory partnerships",
    ],
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

const certificationCategories = [
  {
    icon: "💻",
    title: "IT & Technology Certifications",
    description:
      "High-intent professionals looking for certifications in software, cloud, data, and cybersecurity.",
    points: [
      "Cloud & DevOps programs",
      "Data Science & AI",
      "Cybersecurity certifications",
      "Software development tracks",
    ],
    iconBg: "bg-blue-100",
  },
  {
    icon: "📊",
    title: "Finance & Accounting Certifications",
    description:
      "Generate leads for globally recognized finance and accounting certification programs.",
    points: [
      "CFA / FRM / ACCA",
      "Financial modeling",
      "Risk & compliance",
      "Accounting certifications",
    ],
    iconBg: "bg-green-100",
  },
  {
    icon: "📣",
    title: "Digital Marketing Certifications",
    description:
      "Professionals actively upgrading skills in performance marketing and analytics.",
    points: [
      "SEO & performance marketing",
      "Social media & branding",
      "Marketing analytics",
      "Growth marketing programs",
    ],
    iconBg: "bg-purple-100",
  },
  {
    icon: "📋",
    title: "Project Management Certifications",
    description:
      "Mid-level and senior professionals seeking leadership and project management roles.",
    points: ["PMP & PRINCE2", "Agile & Scrum", "Product management"],
    iconBg: "bg-orange-100",
  },
  {
    icon: "👥",
    title: "HR & People Management",
    description:
      "Certification programs focused on HR leadership and organizational development.",
    points: ["HR analytics", "Talent management", "People operations"],
    iconBg: "bg-rose-100",
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical Certifications",
    description:
      "Specialized certification leads for healthcare and medical professionals.",
    points: [
      "Healthcare management",
      "Medical coding",
      "Clinical research programs",
    ],
    iconBg: "bg-indigo-100",
  },
];

export const certificationPartnerStories = [
  {
    name: "Vikram Singh",
    role: "Director, TechCert Solutions",
    quote:
      "OptimizedLeads IT certification leads increased our enrollment by 320%. The professionals are genuinely interested in career advancement and have the budget to invest.",
    results: "450+ IT certification leads/month, ₹42L revenue increase",
    rating: 5,
    initial: "V",
    cardBg: "bg-blue-50",
    avatarBg: "bg-blue-200",
    avatarText: "text-blue-700",
  },
  {
    name: "Meera Patel",
    role: "Founder, Finance Pro Academy",
    quote:
      "The CFA and FRM leads come with detailed professional backgrounds. Our conversion rate improved by 280% with these pre-qualified finance professionals.",
    results: "200+ finance certification leads/month, 94% lead quality score",
    rating: 5,
    initial: "M",
    cardBg: "bg-rose-50",
    avatarBg: "bg-rose-200",
    avatarText: "text-rose-700",
  },
  {
    name: "Arjun Sharma",
    role: "CEO, Digital Marketing Institute",
    quote:
      "ROI improved by 250% within 3 months. The digital marketing certification leads are working professionals looking to upskill — perfect for our programs.",
    results: "350+ digital marketing leads/month, 250% ROI improvement",
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
    title: "Professional Targeting",
    desc: "Multi-channel targeting of working professionals through LinkedIn, industry events, and professional networks.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    step: "2",
    title: "Career Assessment",
    desc: "Initial screening for career stage, professional goals, and certification requirements alignment.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Intent Verification",
    desc: "Personal consultation calls to verify career advancement intent and certification program interest.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    step: "4",
    title: "Professional Scoring",
    desc: "Advanced scoring based on career level, company profile, and likelihood to complete certification programs.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "5",
    title: "Consultancy Matching",
    desc: "Intelligent matching with consultancies based on certification specialization and professional requirements.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    step: "6",
    title: "Instant Delivery",
    desc: "Real-time lead delivery with complete professional profile and contact details for immediate engagement.",
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

/* ---------------- PAGE ---------------- */

export default function CertificationPage() {
  return (
    <main>
      <CertificationHero />
      <ServicesSection
        title="🎓 Professional Certification Categories"
        subtitle="We generate qualified leads across major certification domains to help consultancies connect with career-focused professionals."
        services={certificationCategories}
        bg="bg-gray-50"
      />
      <ServicesSection
        title="🚀 Complete Certification Lead Generation Solutions"
        subtitle="We provide end-to-end certification lead generation services specifically designed for education consultancies and professional training providers."
        services={certificationSolutions}
        bg="bg-white"
      />
      <HowItWorks
        steps={steps}
        title="⚡ How Our Certification Lead Generation Works"
        subtitle="Our proven 6-step process ensures you receive only the highest quality, career-focused professionals ready for certification programs."
      />
      <PartnerSuccessStories stories={certificationPartnerStories} />
      <ContactForm industry="Education (Certification)" />
      <WhyPartnerWithOptimizedLeads features={features} />
    </main>
  );
}
