import PhDHero from "../../components/Education/PhDHero";
import PhDProgramCategories from "../../components/Education/PhDProgramCategories";
import PhDLeadSolutions from "../../components/Education/PhDLeadSolutions";
import PhDHowItWorks from "../../components/Education/PhDHowItWorks";
import PhDSuccessStories from "../../components/Education/PhDSuccessStories";
import PhDContactForm from "../../components/Education/PhDContactForm";
import PhDWhyPartner from "../../components/Education/PhDWhyPartner";

export default function PhDPage() {
  return (
    <div className="min-h-screen">
      <PhDHero />
      <PhDProgramCategories />
      <PhDLeadSolutions />
      <PhDHowItWorks />
      <PhDSuccessStories />
      <PhDContactForm />
      <PhDWhyPartner />
    </div>
  );
}
