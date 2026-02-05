import { Frown } from "lucide-react";

export default function NoSubscriptionAvailable() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Tenant Leads Plans
        </h2>

        <p className="text-gray-600 mb-10">
          Select the subscription plan that matches your business needs and
          start receiving verified tenant leads today.
        </p>

        <div className="flex flex-col items-center gap-4 text-gray-400">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
            <Frown className="w-6 h-6" />
          </div>

          <p className="font-medium">
            No subscription plans available at the moment.
          </p>
          <span className="text-sm">Please check back later.</span>
        </div>
      </div>
    </section>
  );
}
