import PhDHero from "../../components/Education/PhDHero";
import PhDProgramCategories from "../../components/Education/PhDProgramCategories";
import PhDLeadSolutions from "../../components/Education/PhDLeadSolutions";
import PhDHowItWorks from "../../components/Education/PhDHowItWorks";
import PhDSuccessStories from "../../components/Education/PhDSuccessStories";
import PhDContactForm from "../../components/Education/PhDContactForm";
import PhDWhyPartner from "../../components/Education/PhDWhyPartner";
import { useProductsByCategory } from "../../hooks/useProducts";
import PricingSection from "../../components/common/PricingSection";
import { Crown, Star, Zap } from "lucide-react";

export default function PhDPage() {
  // Fetch products for "Phd/doctorate" category
  const {
    data: products,
    isLoading,
    error,
  } = useProductsByCategory("education");

  // Transform API data to match expected format
  const phdPlans =
    products?.map((product, index) => ({
      id: product.id,
      name: product.name || `Plan ${index + 1}`,
      price: product.price?.toString() || "25,000",
      description:
        product.description ||
        "PhD/Doctorate Leads Subscription – Connect with Research Scholars!",
      icon: index === 1 ? Crown : index === 2 ? Star : Zap,
      iconBg:
        index === 1
          ? "bg-gradient-to-br from-indigo-500 to-purple-600"
          : index === 2
            ? "bg-blue-700"
            : "bg-blue-600",
      popular: index === 1,
      features: product.features || [
        "Dedicated Dashboard",
        "Account Manager",
        "24×7 Leads Support",
        "Research Scholar Verification",
      ],
      button: `Get Started with ${product.name || `Plan ${index + 1}`}`,
      link: `/product_details/?id=${product.id}`,
    })) || [];

  return (
    <div className="min-h-screen">
      <PhDHero />
      <PhDProgramCategories />
      <PhDLeadSolutions />
      <PhDHowItWorks />
      <PhDSuccessStories />
      <PricingSection
        title="PhD/Doctorate Leads Pricing"
        subtitle="Choose the perfect plan for your institution and start connecting with PhD aspirants today."
        plans={phdPlans}
        bg="bg-white"
        isLoading={isLoading}
        error={error}
      />
      <PhDContactForm />
      <PhDWhyPartner />
    </div>
  );
}
