import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
} from "lucide-react";
import { Download } from "lucide-react";

// Mock data for analytics
const analyticsData = [
  { month: "Jan", leads: 45, converted: 32, revenue: 125000 },
  { month: "Feb", leads: 52, converted: 38, revenue: 145000 },
  { month: "Mar", leads: 48, converted: 41, revenue: 155000 },
  { month: "Apr", leads: 61, converted: 45, revenue: 175000 },
  { month: "May", leads: 58, converted: 52, revenue: 185000 },
  { month: "Jun", leads: 67, converted: 58, revenue: 205000 },
];

const sourceData = [
  { source: "Study Abroad", value: 45, color: "bg-blue-500" },
  { source: "Real Estate", value: 30, color: "bg-green-500" },
  { source: "Education", value: 15, color: "bg-purple-500" },
  { source: "Forex Market", value: 10, color: "bg-orange-500" },
];

export default function Analytics() {
  const totalRevenue = analyticsData.reduce(
    (sum, item) => sum + item.revenue,
    0,
  );
  const avgConversionRate = 75.4;
  const totalLeads = analyticsData.reduce((sum, item) => sum + item.leads, 0);

  return (
    <div className="p-6 min-h-full relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Analytics
                </h1>
                <p className="text-white/70">
                  Detailed insights and performance metrics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline">Add Report</span>
                <span className="sm:hidden">Add</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="hidden sm:inline">Export</span>
                <span className="sm:hidden">Exp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-green-600">
                  +18.5%
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                ₹{totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-blue-600">+5.2%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {avgConversionRate}%
              </div>
              <div className="text-sm text-gray-600">Avg Conversion Rate</div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-600">
                  +12.3%
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {totalLeads}
              </div>
              <div className="text-sm text-gray-600">Total Leads</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Revenue Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-3">
                {analyticsData.map((data, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-sm transition-all duration-500 hover:from-green-600 hover:to-green-500"
                      style={{
                        height: `${(data.revenue / 205000) * 100}%`,
                        minHeight: "8px",
                      }}
                    />
                    <span className="text-xs text-gray-600 font-medium">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Source Distribution */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <PieChart className="w-5 h-5 text-blue-600" />
                Lead Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sourceData.map((source, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-4 h-4 ${source.color} rounded`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {source.source}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${source.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${source.value * 2}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {source.value}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Table */}
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Month
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Leads
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Converted
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {data.month}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{data.leads}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {data.converted}
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-medium">
                        ₹{data.revenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-600 font-medium">
                          {((data.converted / data.leads) * 100).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
