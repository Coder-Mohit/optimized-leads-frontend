import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import Hero from "./components/Hero";
import IndustriesSection from "./components/IndustriesSection";
import StepsSection from "./components/StepsSection";
import HomePage from "./pages/HomePage";
import StudyAbroadPage from "./pages/StudyAbroadPage";
import ForexMarketPage from "./pages/ForexMarketPage";
import BuyerLeadsPage from "./pages/BuyerLeadsPage";
import TenantLeadsPage from "./pages/TenantLeadsPage";
import OnlineMBAServicePage from "./pages/OnlineMBAServicePage";
import CertificationPage from "./pages/CertificationPage";
import PhDPage from "./pages/PhDPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import StartFreeTrialPage from "./pages/StartFreeTrialPage";
import BlogPage from "./pages/BlogPage";

/* --------- PAGES (temporary placeholders) --------- */
function Placeholder({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
      {title}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* REAL ESTATE */}
        <Route path="/buyers_leads" element={<BuyerLeadsPage />} />
        <Route path="/tenant_leads" element={<TenantLeadsPage />} />

        {/* STUDY ABROAD */}
        <Route path="/study_abroad" element={<StudyAbroadPage />} />

        {/* EDUCATION */}
        <Route path="/online_mba" element={<OnlineMBAServicePage />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route path="/phd_doctorate" element={<PhDPage />} />

        {/* OTHER */}
        <Route path="/forex_trader" element={<ForexMarketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogPage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/start_free_trial" element={<StartFreeTrialPage />} />
      </Routes>
      <Footer />
    </>
  );
}
