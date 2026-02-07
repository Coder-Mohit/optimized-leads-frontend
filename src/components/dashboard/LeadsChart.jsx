import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart3, TrendingUp, TrendingDown, Calendar } from "lucide-react";

// Mock data for the chart
const chartData = [
  { month: "Jan", leads: 45, converted: 32, target: 40 },
  { month: "Feb", leads: 52, converted: 38, target: 45 },
  { month: "Mar", leads: 48, converted: 41, target: 50 },
  { month: "Apr", leads: 61, converted: 45, target: 55 },
  { month: "May", leads: 58, converted: 52, target: 60 },
  { month: "Jun", leads: 67, converted: 58, target: 65 },
];

export default function LeadsChart() {
  const maxValue = Math.max(
    ...chartData.map((d) => Math.max(d.leads, d.converted, d.target)),
  );

  return (
    <Card className="shadow-sm border-0 bg-white">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Leads Performance
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Monthly overview of leads and conversions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-md">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+18.5%</span>
            </div>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Chart Container */}
        <div className="h-64 flex items-end justify-between gap-3 px-2">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              {/* Bars Container */}
              <div className="w-full flex gap-1 items-end relative">
                {/* Target Line */}
                <div
                  className="absolute w-full bg-gray-300 rounded-sm opacity-30"
                  style={{
                    height: `${(data.target / maxValue) * 100}%`,
                    minHeight: "2px",
                    bottom: 0,
                  }}
                />
                {/* Converted leads bar */}
                <div
                  className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-sm transition-all duration-500 hover:from-green-600 hover:to-green-500 relative z-10"
                  style={{
                    height: `${(data.converted / maxValue) * 100}%`,
                    minHeight: "4px",
                  }}
                />
                {/* Total leads bar */}
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm transition-all duration-500 hover:from-blue-600 hover:to-blue-500 relative z-10"
                  style={{
                    height: `${((data.leads - data.converted) / maxValue) * 100}%`,
                    minHeight: "4px",
                  }}
                />
              </div>
              {/* Month Label */}
              <span className="text-xs text-gray-600 font-medium">
                {data.month}
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded" />
            <span className="text-xs text-gray-600">Total Leads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded" />
            <span className="text-xs text-gray-600">Converted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded" />
            <span className="text-xs text-gray-600">Target</span>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">331</div>
            <div className="text-xs text-blue-700 font-medium">Total Leads</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">266</div>
            <div className="text-xs text-green-700 font-medium">Converted</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-xl font-bold text-purple-600">80.4%</div>
            <div className="text-xs text-purple-700 font-medium">
              Conversion Rate
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
