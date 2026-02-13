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
    <div className="p-4 sm:p-6 min-h-full">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 mb-4 lg:mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Analytics
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Detailed insights and performance metrics
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden xs:inline sm:inline">Add Report</span>
                <span className="xs:inline sm:hidden">Add</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 group">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="hidden xs:inline sm:inline">Export</span>
                <span className="xs:inline sm:hidden">Exp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <MetricCard
            title="Total Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            icon={<TrendingUp className="w-5 h-5 text-green-300" />}
          />
          <MetricCard
            title="Avg Conversion"
            value={`${avgConversionRate}%`}
            icon={<Target className="w-5 h-5 text-blue-300" />}
          />
          <MetricCard
            title="Total Leads"
            value={totalLeads}
            icon={<PieChart className="w-5 h-5 text-purple-300" />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Revenue bars */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-end h-48 overflow-x-auto">
                {analyticsData.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 min-w-[28px]"
                  >
                    <div
                      className="w-full bg-green-500/80 rounded-sm"
                      style={{ height: `${(d.revenue / 205000) * 100}%` }}
                    />
                    <span className="text-xs text-white/70">{d.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sources */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Lead Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sourceData.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${s.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{s.source}</p>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div
                        className={`${s.color} h-2 rounded-full`}
                        style={{ width: `${s.value * 2}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-white text-sm">{s.value}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-[520px] w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-3 text-left text-white/80">Month</th>
                  <th className="px-4 py-3 text-left text-white/80">Leads</th>
                  <th className="px-4 py-3 text-left text-white/80">
                    Converted
                  </th>
                  <th className="px-4 py-3 text-left text-white/80">Revenue</th>
                  <th className="px-4 py-3 text-left text-white/80">Rate</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="px-4 py-3 text-white">{d.month}</td>
                    <td className="px-4 py-3 text-white/80">{d.leads}</td>
                    <td className="px-4 py-3 text-white/80">{d.converted}</td>
                    <td className="px-4 py-3 text-white/80">
                      ₹{d.revenue.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-green-300">
                      {((d.converted / d.leads) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* Helper */
function MetricCard({ title, value, icon }) {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
        </div>
        <div className="text-xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/60">{title}</div>
      </CardContent>
    </Card>
  );
}
