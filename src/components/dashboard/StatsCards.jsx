import { Card, CardContent } from "../ui/card";
import { Users, UserPlus, TrendingUp, CreditCard, ArrowUp } from "lucide-react";

// Mock data for stats
const statsData = [
  {
    title: "Total Leads",
    value: "1,284",
    icon: Users,
    trend: "+12%",
    trendUp: true,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    description: "All time leads",
  },
  {
    title: "New Leads",
    value: "47",
    icon: UserPlus,
    trend: "+8%",
    trendUp: true,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    description: "This month",
  },
  {
    title: "Converted Leads",
    value: "892",
    icon: TrendingUp,
    trend: "+15%",
    trendUp: true,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    description: "Successful conversions",
  },
  {
    title: "Remaining Credits",
    value: "2,450",
    icon: CreditCard,
    trend: "-5%",
    trendUp: false,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    description: "Available credits",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-6 h-6 text-${stat.color.split(" ")[1].split("-")[1]}-600`}
                  />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trendUp ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <ArrowUp
                    className={`w-4 h-4 ${!stat.trendUp && "rotate-180"}`}
                  />
                  {stat.trend}
                </div>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {stat.title}
                </p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
