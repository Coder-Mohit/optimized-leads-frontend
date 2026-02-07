import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

// Mock data for the chart
const chartData = [
  { month: "Jan", leads: 45, converted: 32 },
  { month: "Feb", leads: 52, converted: 38 },
  { month: "Mar", leads: 48, converted: 41 },
  { month: "Apr", leads: 61, converted: 45 },
  { month: "May", leads: 58, converted: 52 },
  { month: "Jun", leads: 67, converted: 58 },
];

export default function PerformanceChart() {
  const maxValue = Math.max(
    ...chartData.map((d) => Math.max(d.leads, d.converted)),
  );

  return (
    <Card className="shadow-md border-0">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          Leads Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2 px-2">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div className="w-full flex flex-col gap-1">
                {/* Converted leads bar */}
                <div
                  className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm transition-all duration-500 hover:from-green-600 hover:to-green-500"
                  style={{
                    height: `${(data.converted / maxValue) * 100}%`,
                    minHeight: "4px",
                  }}
                />
                {/* Total leads bar */}
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-b-sm transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                  style={{
                    height: `${((data.leads - data.converted) / maxValue) * 100}%`,
                    minHeight: "4px",
                  }}
                />
              </div>
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
        </div>

        {/* Summary */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="font-medium">18.5% conversion rate</span>
          </div>
          <span className="text-xs text-gray-500">Last 6 months</span>
        </div>
      </CardContent>
    </Card>
  );
}
