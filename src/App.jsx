import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

/* Layouts */
import MarketingLayout from "./layouts/MarketingLayout";
import DashboardLayout from "./layouts/DashboardLayout";

/* Marketing Pages */
import HomePage from "./app/marketing/HomePage";
import StudyAbroadPage from "./app/marketing/StudyAbroadPage";
import ForexMarketPage from "./app/marketing/ForexMarketPage";
import BuyerLeadsPage from "./app/marketing/BuyerLeadsPage";
import TenantLeadsPage from "./app/marketing/TenantLeadsPage";
import OnlineMBAServicePage from "./app/marketing/OnlineMBAServicePage";
import CertificationPage from "./app/marketing/CertificationPage";
import PhDPage from "./app/marketing/PhDPage";
import AboutPage from "./app/marketing/AboutPage";
import ContactPage from "./app/marketing/ContactPage";
import LoginPage from "./app/marketing/LoginPage";
import StartFreeTrialPage from "./app/marketing/StartFreeTrialPage";
import BlogPage from "./app/marketing/BlogPage";

/* Dashboard Pages */
import SubscriberDashboard from "./app/dashboard/subscriber/SubscriberDashboard";
import Analytics from "./app/dashboard/subscriber/Analytics";
import Leads from "./app/dashboard/subscriber/Leads";
import Tickets from "./app/dashboard/subscriber/Tickets";
import Calendar from "./app/dashboard/subscriber/Calendar";
import Tasks from "./app/dashboard/subscriber/Tasks";

// Theme-matching loader component
const ThemeLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const loaderTexts = ["Welcome", "to", "Optimized Leads"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loaderTexts.length);
    }, 1000);

    // Auto-hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      clearInterval(timer);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-white/10 to-transparent transform rotate-180"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {/* Logo and text animation */}
      <div className="relative z-10 text-center">
        {/* Gradient image box */}
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <img
            src="/logo.png"
            alt="OptimizedLeads"
            className="h-14 w-auto filter brightness-0 invert"
          />
        </div>

        {/* Animated text */}
        <div className="space-y-4">
          <div className="h-16 flex items-center justify-center">
            {loaderTexts.map((text, index) => (
              <div
                key={index}
                className={`text-3xl font-light text-white transition-all duration-500 ${
                  index === textIndex
                    ? "opacity-100 transform scale-110"
                    : "opacity-0 transform scale-95"
                }`}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2">
            <div
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-1000 ease-out"
            style={{ width: "0%" }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.width = "100%";
                }, 100);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

function AppContent() {
  return (
    <Routes>
      {/* MARKETING SITE */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/buyers_leads" element={<BuyerLeadsPage />} />
        <Route path="/tenant_leads" element={<TenantLeadsPage />} />
        <Route path="/study_abroad" element={<StudyAbroadPage />} />
        <Route path="/online_mba" element={<OnlineMBAServicePage />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route path="/phd_doctorate" element={<PhDPage />} />
        <Route path="/forex_trader" element={<ForexMarketPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/start_free_trial" element={<StartFreeTrialPage />} />
      </Route>

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<SubscriberDashboard />} />
        <Route path="subscriber" element={<SubscriberDashboard />} />
        <Route path="subscriber/analytics" element={<Analytics />} />
        <Route path="subscriber/leads" element={<Leads />} />
        <Route path="subscriber/tickets" element={<Tickets />} />
        <Route path="subscriber/calendar" element={<Calendar />} />
        <Route path="subscriber/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader immediately on mount
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Theme-matching loader */}
      {showLoader && <ThemeLoader />}

      {/* Main app content */}
      {!showLoader && <AppContent />}
    </div>
  );
}
