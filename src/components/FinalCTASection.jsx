import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-24 px-4">
      {/* Decorative blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>

        <p className="text-lg md:text-xl text-indigo-100 mb-10">
          Join thousands of successful businesses using OptimizedLeads to
          generate high-quality leads and grow their revenue.
        </p>

        {/* CTA Button */}
        <div className="mb-10 flex justify-center">
          <Link to="/start_free_trial">
            <button
              className="group inline-flex items-center gap-3 rounded-xl
              bg-gradient-to-r from-blue-600 to-purple-600
              px-10 py-4 text-lg font-semibold text-white
              shadow-xl transition-all duration-300
              hover:scale-105 hover:shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-indigo-200">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            No credit card required
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            Setup in 5 minutes
          </div>
        </div>
      </div>
    </section>
  );
}
