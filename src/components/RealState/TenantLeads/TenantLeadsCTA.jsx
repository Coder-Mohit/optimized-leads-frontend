export default function TenantLeadsCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Getting Quality Tenant Leads?
        </h2>

        <p className="text-indigo-100 max-w-3xl mx-auto mb-10">
          Join thousands of successful real estate professionals who trust
          OptimizedLeads for their tenant lead generation needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-xl
              bg-white
              text-indigo-700
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:bg-indigo-50
              hover:scale-105
              transition-all
            "
          >
            Start Free 2-Day Trial
          </button>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
            <span>95% Average Conversion Rate</span>
            <span>2.5M+ Leads Generated</span>
            <span>5,000+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
