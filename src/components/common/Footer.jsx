import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Home,
  GraduationCap,
  Briefcase,
  BookOpen,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
                OL
              </div>
              <h3 className="text-2xl font-bold text-white">OptimizedLeads</h3>
            </div>

            <p className="mb-6 leading-relaxed text-slate-400">
              The #1 lead generation platform for Real Estate, Study Abroad,
              Education, and Job Consultancy businesses.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg
                  bg-slate-800 text-slate-400 transition
                  hover:bg-indigo-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Industries
            </h4>
            <ul className="space-y-4">
              <FooterLink icon={Home} label="Real Estate Leads" />
              <FooterLink icon={GraduationCap} label="Study Abroad Leads" />
              <FooterLink icon={BookOpen} label="Education Leads" />
              <FooterLink icon={Briefcase} label="Job Consultancy Leads" />
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-4">
              <FooterNav to="/help" label="Help Center" />
              <FooterNav to="/contact_us" label="Contact Support" />
              <FooterNav to="/" label="Live Chat" />
              <FooterNav to="/" label="WhatsApp Support" />
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-4">
              <FooterNav to="/about_us" label="About Us" />
              <FooterNav to="/" label="Careers" />
              <FooterNav to="/" label="Press" />
              <FooterNav to="/" label="Blog" />
              <FooterNav to="/policy" label="Privacy Policy" />
              <FooterNav to="/terms" label="Terms of Service" />
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 border-t border-slate-800 pt-12 text-center">
          <h4 className="mb-3 text-xl font-semibold text-white">
            Stay Updated
          </h4>
          <p className="mb-6 text-slate-400">
            Get the latest lead generation tips and insights.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-900
              px-4 py-3 text-white placeholder-slate-500
              focus:border-indigo-500 focus:outline-none"
            />
            <button
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold
              text-white transition hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-6
          border-t border-slate-800 pt-8 md:flex-row"
        >
          <p className="text-sm text-slate-400">
            © 2024 OptimizedLeads. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <TrustBadge icon={ShieldCheck} label="SSL Secured" />
            <TrustBadge icon={ShieldCheck} label="GDPR Compliant" />
            <TrustBadge icon={Star} label="99.9% Uptime" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function FooterLink({ icon: Icon, label }) {
  // Map labels to actual routes
  const routeMap = {
    "Real Estate Leads": "/buyers_leads",
    "Study Abroad Leads": "/study_abroad",
    "Education Leads": "/online_mba",
    "Job Consultancy Leads": "/",
  };

  const to = routeMap[label] || "/";

  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-slate-400 transition
        hover:text-white"
      >
        <Icon size={16} />
        {label}
      </Link>
    </li>
  );
}

function FooterNav({ to, label }) {
  return (
    <li>
      <Link to={to} className="text-slate-400 transition hover:text-white">
        {label}
      </Link>
    </li>
  );
}

function TrustBadge({ icon: Icon, label }) {
  return (
    <span className="flex items-center gap-1">
      <Icon size={16} className="text-green-500" />
      {label}
    </span>
  );
}
