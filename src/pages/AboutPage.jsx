import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const stats = [
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "50K+", label: "Leads Delivered", icon: Target },
    { value: "94%", label: "Success Rate", icon: TrendingUp },
    { value: "10+", label: "Years Experience", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We prioritize lead quality over quantity, ensuring every lead has genuine conversion potential.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Building long-term partnerships through honest communication and reliable service delivery.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description:
        "Continuously evolving our strategies and technology to stay ahead of market trends.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description:
        "Your growth is our success. We're committed to helping you achieve your business goals.",
      color: "from-red-500 to-orange-600",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description:
        "Visionary leader with 15+ years in lead generation and digital marketing.",
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & COO",
      description:
        "Operations expert focused on scaling processes and ensuring client success.",
      avatar: "PS",
    },
    {
      name: "Amit Patel",
      role: "Head of Technology",
      description:
        "Tech innovator building cutting-edge lead generation platforms.",
      avatar: "AP",
    },
    {
      name: "Neha Gupta",
      role: "Head of Sales",
      description:
        "Sales strategist helping clients find the perfect lead solutions.",
      avatar: "NG",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Foundation",
      description:
        "Started with a vision to revolutionize lead generation for small businesses.",
    },
    {
      year: "2017",
      title: "Expansion",
      description:
        "Expanded services to multiple industries and launched our proprietary lead scoring system.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Embraced AI and machine learning to enhance lead quality and targeting.",
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "Became the preferred lead generation partner for 500+ businesses across India.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-32 pb-24 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            About OptimizedLeads
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6">
            Transforming Businesses Through Quality Lead Generation
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            We're on a mission to help businesses grow by connecting them with
            high-quality, conversion-ready leads that drive real results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              From a small startup to India's trusted lead generation partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2014, OptimizedLeads began with a simple yet powerful
                idea: to help businesses grow by providing them with
                high-quality, conversion-ready leads. What started as a small
                operation serving local businesses has now grown into a trusted
                partner for over 500 companies across India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our journey has been defined by innovation, customer-centric
                approach, and an unwavering commitment to quality. We've
                continuously evolved our strategies, embraced cutting-edge
                technology, and refined our processes to stay ahead of market
                trends and deliver exceptional results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to be the preferred lead generation partner
                for businesses across Real Estate, Education, Financial
                Services, and more. Our success is measured by the success of
                our clients, and we're committed to helping them achieve their
                growth goals.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <Globe className="w-32 h-32 text-indigo-600 mx-auto mb-4" />
                <p className="text-center text-gray-700 font-medium">
                  Serving businesses across India with global expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones that shaped our growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              The experts behind your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OptimizedLeads?
            </h2>
            <p className="text-lg text-gray-600">
              The difference that makes us the preferred choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Industry-leading 94% success rate",
              "Proprietary lead scoring technology",
              "Multi-industry expertise",
              "24/7 dedicated support",
              "100% quality guarantee",
              "Custom solutions for every business",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of successful businesses that trust OptimizedLeads for
            their lead generation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <Zap className="w-5 h-5" />
            </Link>
            <Link
              to="/start_free_trial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-400 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
