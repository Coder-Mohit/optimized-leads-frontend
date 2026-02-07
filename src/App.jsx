import { Routes, Route } from "react-router-dom";

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

export default function App() {
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
