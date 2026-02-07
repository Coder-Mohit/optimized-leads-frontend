import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCard() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
              <HelpCircle className="h-8 w-8 text-indigo-600" />
            </div>

            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-gray-900">
              Need More Help?
            </h3>
            <p className="mb-6 text-gray-600">
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </p>
            <Link to="/contact">
              <button className="w-full sm:w-auto rounded-xl bg-indigo-600 px-6 sm:px-8 py-3 font-semibold text-white transition hover:bg-indigo-700">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
