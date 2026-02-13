import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Download, Plus, Upload } from "lucide-react";

const categories = [
  { id: "real-estate", name: "Real Estate" },
  { id: "online-mba", name: "Online MBA" },
  { id: "study-abroad", name: "Study Abroad" },
  { id: "forex-trade", name: "Forex Trade" },
  { id: "job-consultancy", name: "Job Consultancy" },
];

function CategoryCard({ id, name }) {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-white text-lg sm:text-xl font-semibold">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-3">
          <Link
            to={`/dashboard/admin/categories/${id}`}
            className="w-full text-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Leads
          </Link>
          <button
            type="button"
            className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Excel
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Categories() {
  return (
    <div className="p-4 sm:p-6 min-h-full">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-white">
              Categories
            </h1>
            <p className="text-white/70 text-sm">
              Select a category or upload leads
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              Sync from Google Sheets
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-4 h-4" />
              New Assign
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((c) => (
          <CategoryCard key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
    </div>
  );
}
