import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="relative z-50">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="w-full px-8 sm:px-12 lg:px-16">
            <div className="flex justify-between items-center py-4 md:py-6">
              {/* LOGO */}
              <Link to="/" className="flex items-center space-x-3 h-16">
                <img
                  src="/logo.png"
                  alt="OptimizedLeads"
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </Link>

              {/* ================= DESKTOP NAV ================= */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* REAL ESTATE */}
                <div className="relative group">
                  <div className="flex items-center text-indigo-100 group-hover:text-white font-medium transition-colors">
                    Real Estate
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>

                  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-auto">
                    <Link
                      to="/buyers_leads"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Buyers Leads
                    </Link>
                    <Link
                      to="/tenant_leads"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Tenant Leads
                    </Link>
                  </div>
                </div>

                <Link
                  to="/study_abroad"
                  className={`font-medium transition-colors ${
                    isActive("/study_abroad")
                      ? "text-white underline underline-offset-4"
                      : "text-indigo-100 hover:text-white"
                  }`}
                >
                  Study Abroad
                </Link>

                {/* EDUCATION */}
                <div className="relative group">
                  <div className="flex items-center text-indigo-100 group-hover:text-white font-medium transition-colors">
                    Education
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>

                  <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-auto">
                    <Link
                      to="/online_mba"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Online MBA
                    </Link>
                    <Link
                      to="/certification"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      Certification
                    </Link>
                    <Link
                      to="/phd_doctorate"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      PhD / Doctorate
                    </Link>
                  </div>
                </div>

                {[
                  ["/forex_trader", "Forex Market"],
                  ["/about", "About"],
                  ["/blogs", "Blog"],
                  ["/contact", "Contact"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={path}
                    className={`font-medium transition-colors ${
                      isActive(path)
                        ? "text-white underline underline-offset-4"
                        : "text-indigo-100 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* DESKTOP CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-indigo-100 hover:text-white px-4 py-2 border border-indigo-200 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  to="/start_free_trial"
                  className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold shadow"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden text-white text-2xl"
                onClick={() => setMobileOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 overflow-y-auto h-full relative">
          <button
            onClick={() => setMobileOpen(false)}
            className="mb-6 text-gray-500"
          >
            ✕ Close
          </button>

          <nav className="space-y-4 font-medium text-gray-800 relative">
            {/* REAL ESTATE (HOVER) */}
            <div className="relative group">
              <div className="flex items-center justify-between py-3 uppercase text-gray-800 group-hover:text-indigo-600 font-medium h-12">
                <span>Real Estate</span>
                <span className="transition-transform group-hover:rotate-180">
                  ▼
                </span>
              </div>

              <div className="absolute left-0 top-full w-full bg-gray-50 rounded-lg shadow-md z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/buyers_leads"
                  className="block px-6 py-3 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Buyers Leads
                </Link>
                <Link
                  to="/tenant_leads"
                  className="block px-6 py-3 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Tenant Leads
                </Link>
              </div>
            </div>

            {/* STUDY ABROAD */}
            <Link to="/study_abroad" className="block py-3 uppercase">
              Study Abroad
            </Link>

            {/* EDUCATION (HOVER) */}
            <div className="relative group">
              <div className="flex items-center justify-between py-3 uppercase text-gray-800 group-hover:text-indigo-600 font-medium h-12">
                <span>Education</span>
                <span className="transition-transform group-hover:rotate-180">
                  ▼
                </span>
              </div>

              <div className="absolute left-0 top-full w-full bg-gray-50 rounded-lg shadow-md z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/online_mba"
                  className="block px-6 py-3 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Online MBA
                </Link>
                <Link
                  to="/certification"
                  className="block px-6 py-3 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Certification
                </Link>
                <Link
                  to="/phd_doctorate"
                  className="block px-6 py-3 text-gray-600 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  PhD / Doctorate
                </Link>
              </div>
            </div>

            {[
              ["/forex_trader", "Forex Market"],
              ["/about", "About"],
              ["/blogs", "Blog"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={`block py-3 uppercase ${
                  isActive(path) ? "text-indigo-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <div className="pt-6 space-y-4 border-t">
              <Link
                to="/login"
                className="block text-center border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                to="/start_free_trial"
                className="block text-center bg-indigo-600 text-white py-4 rounded-lg font-semibold"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="text-center text-gray-500 text-sm">
              📞 +91 7415556568 <br />
              ✉️ info@optimizedleads.com
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
