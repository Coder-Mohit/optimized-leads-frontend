import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Building,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  Home,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

export default function StartFreeTrialPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    industry: "",
    sub_industry: "",
    preferred_country: "",
    working_location: "",
    property_type: "",
    real_estate_type: "",
    leads_quantity: "",
    custom_quantity: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const industryOptions = {
    "real-estate": {
      label: "Real Estate",
      icon: Building,
      subOptions: ["buyers_leads", "tenant_leads"],
      showWorkingLocation: true,
      showPropertyType: true,
      showRealEstateType: true,
    },
    education: {
      label: "Education",
      icon: GraduationCap,
      subOptions: ["online_mba", "certification", "phd_doctorate"],
      showWorkingLocation: false,
      showPropertyType: false,
      showRealEstateType: false,
    },
    "study-abroad": {
      label: "Study Abroad",
      icon: Users,
      subOptions: [],
      showWorkingLocation: false,
      showPropertyType: false,
      showRealEstateType: false,
      showPreferredCountry: true,
    },
    trading: {
      label: "Trading",
      icon: TrendingUp,
      subOptions: [],
      showWorkingLocation: false,
      showPropertyType: false,
      showRealEstateType: false,
    },
    job_consultancy: {
      label: "Job Consultancy",
      icon: Briefcase,
      subOptions: [],
      showWorkingLocation: false,
      showPropertyType: false,
      showRealEstateType: false,
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Reset dependent fields when industry changes
    if (name === "industry") {
      setFormData((prev) => ({
        ...prev,
        sub_industry: "",
        preferred_country: "",
        working_location: "",
        property_type: "",
        real_estate_type: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
    }

    const selectedIndustry = industryOptions[formData.industry];
    if (selectedIndustry?.showWorkingLocation && !formData.working_location) {
      newErrors.working_location = "Working location is required";
    }

    if (selectedIndustry?.showPropertyType && !formData.property_type) {
      newErrors.property_type = "Property type is required";
    }

    if (selectedIndustry?.showRealEstateType && !formData.real_estate_type) {
      newErrors.real_estate_type = "Please specify your type";
    }

    if (selectedIndustry?.showPreferredCountry && !formData.preferred_country) {
      newErrors.preferred_country = "Preferred country is required";
    }

    if (!formData.leads_quantity) {
      newErrors.leads_quantity = "Please select leads quantity";
    } else if (
      formData.leads_quantity === "custom" &&
      !formData.custom_quantity
    ) {
      newErrors.custom_quantity = "Please specify custom quantity";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On successful registration, redirect to login or dashboard
      navigate("/login");
    } catch (error) {
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedIndustry = industryOptions[formData.industry];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                <img
                  src="/logo.png"
                  alt="OptimizedLeads"
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              OptimizedLeads
            </span>
          </Link>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Start Your Free Trial
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with high-quality leads in your industry. No credit card
            required.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Free Trial</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>High-Quality Leads</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8"
        >
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Industry Field */}
          <div className="mt-6">
            <label
              htmlFor="industry"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Industry *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 appearance-none bg-white ${
                  errors.industry
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select your industry</option>
                {Object.entries(industryOptions).map(([value, config]) => (
                  <option key={value} value={value}>
                    {config.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            {errors.industry && (
              <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
            )}
          </div>

          {/* Conditional Fields Based on Industry */}
          {selectedIndustry && (
            <div className="mt-6 space-y-6">
              {/* Working Location (Real Estate) */}
              {selectedIndustry.showWorkingLocation && (
                <div>
                  <label
                    htmlFor="working_location"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Working Location *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="working_location"
                      name="working_location"
                      type="text"
                      value={formData.working_location}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                        errors.working_location
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your working location/city"
                    />
                  </div>
                  {errors.working_location && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.working_location}
                    </p>
                  )}
                </div>
              )}

              {/* Property Type (Real Estate) */}
              {selectedIndustry.showPropertyType && (
                <div>
                  <label
                    htmlFor="property_type"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Property Type *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="property_type"
                      name="property_type"
                      value={formData.property_type}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 appearance-none bg-white ${
                        errors.property_type
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select property type</option>
                      <option value="commercial">Commercial</option>
                      <option value="investment">Investment</option>
                      <option value="residential">Residential</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.property_type && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.property_type}
                    </p>
                  )}
                </div>
              )}

              {/* Real Estate Type (Buyers Leads) */}
              {selectedIndustry.showRealEstateType && (
                <div>
                  <label
                    htmlFor="real_estate_type"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    You are a: *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="real_estate_type"
                      name="real_estate_type"
                      value={formData.real_estate_type}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 appearance-none bg-white ${
                        errors.real_estate_type
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select your type</option>
                      <option value="individual">Individual</option>
                      <option value="builder">Builder</option>
                      <option value="real-estate-firm">Real Estate Firm</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.real_estate_type && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.real_estate_type}
                    </p>
                  )}
                </div>
              )}

              {/* Preferred Country (Study Abroad) */}
              {selectedIndustry.showPreferredCountry && (
                <div>
                  <label
                    htmlFor="preferred_country"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Preferred Country *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="preferred_country"
                      name="preferred_country"
                      type="text"
                      value={formData.preferred_country}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                        errors.preferred_country
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your preferred country"
                    />
                  </div>
                  {errors.preferred_country && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.preferred_country}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Leads Quantity */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              If you purchase leads, what would be your required quantity per
              month? *
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["100", "150", "200"].map((quantity) => (
                  <label key={quantity} className="relative">
                    <input
                      type="radio"
                      name="leads_quantity"
                      value={quantity}
                      checked={formData.leads_quantity === quantity}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 hover:border-gray-300">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">
                          {quantity}
                        </div>
                        <div className="text-sm text-gray-600">leads/month</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <br />
              {/* Custom Quantity */}
              <label className="relative">
                <input
                  type="radio"
                  name="leads_quantity"
                  value="custom"
                  checked={formData.leads_quantity === "custom"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 hover:border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Custom quantity
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  {formData.leads_quantity === "custom" && (
                    <div className="mt-3">
                      <input
                        type="number"
                        name="custom_quantity"
                        value={formData.custom_quantity}
                        onChange={handleChange}
                        placeholder="Enter custom quantity"
                        min="1"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                          errors.custom_quantity
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.custom_quantity && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.custom_quantity}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </label>
            </div>
            {errors.leads_quantity && (
              <p className="mt-1 text-sm text-red-600">
                {errors.leads_quantity}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-8 w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </div>
            ) : (
              <>
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          {/* Already have account link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>24/7 Support</span>
            </div>
          </div>
          <p>© 2024 OptimizedLeads. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
