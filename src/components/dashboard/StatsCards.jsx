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
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20",
    description: "All time leads",
  },
  {
    title: "New Leads",
    value: "47",
    icon: UserPlus,
    trend: "+8%",
    trendUp: true,
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-500/20",
    description: "This month",
  },
  {
    title: "Converted Leads",
    value: "892",
    icon: TrendingUp,
    trend: "+15%",
    trendUp: true,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/20",
    description: "Successful conversions",
  },
  {
    title: "Remaining Credits",
    value: "2,450",
    icon: CreditCard,
    trend: "-5%",
    trendUp: false,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/20",
    description: "Available credits",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${stat.bgColor} border border-white/10`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-white`} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trendUp ? "text-green-300" : "text-red-300"
                  }`}
                >
                  <ArrowUp
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${!stat.trendUp && "rotate-180"}`}
                  />
                  <span className="text-xs sm:text-sm">{stat.trend}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-white/80 mb-1">
                  {stat.title}
                </p>
                <p className="text-xs text-white/60">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
