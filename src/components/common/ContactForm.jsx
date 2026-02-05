import { useState } from "react";

const INDUSTRY_OPTIONS = [
  "Real Estate",
  "Study Abroad",
  "Education",
  "Job Consultancy",
  "Forex Market",
  "Other",
];

export default function ContactForm({
  title = "Send us a Message",
  industry, // if passed → LOCKED
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    industry: industry || "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.industry) {
      newErrors.industry = "Please select an industry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Submitted:", form);
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            {title}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              error={errors.name}
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              error={errors.email}
            />

            <Field
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              error={errors.phone}
            />

            {/* INDUSTRY FIELD (LOCKED OR SELECTABLE) */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Which Industry Are You Looking For? *
              </label>

              {industry ? (
                <div className="relative">
                  <input
                    value={industry}
                    disabled
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 bg-gray-50 text-gray-600 cursor-not-allowed"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔒
                  </span>
                </div>
              ) : (
                <>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 transition
                      ${
                        errors.industry
                          ? "border-red-400 focus:ring-red-400"
                          : "border-gray-200 focus:ring-blue-500"
                      }
                    `}
                  >
                    <option value="">Select your industry</option>
                    {INDUSTRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {errors.industry && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.industry}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your lead generation needs..."
                rows={4}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="
                w-full py-4 rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95
              "
            >
              Send Message & Get Free Consultation
            </button>

            <p className="text-center text-xs sm:text-sm text-gray-500 pt-2">
              By submitting this form, you agree to receive communications from
              OptimizedLeads about our services.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FIELD ---------------- */

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label} *</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 transition
          ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-200 focus:ring-blue-500"
          }
        `}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
