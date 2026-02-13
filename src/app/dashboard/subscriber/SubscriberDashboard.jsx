import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import StatsCards from "../../../components/dashboard/StatsCards";
import LeadsChart from "../../../components/dashboard/LeadsChart";
import {
  Users,
  TrendingUp,
  Target,
  ArrowUp,
  Plus,
  Download,
  Activity,
} from "lucide-react";

// Mock data for recent activity
const recentActivity = [
  {
    id: 1,
    type: "lead",
    message: "New lead: Rahul Sharma",
    time: "2 hours ago",
    icon: Users,
  },
  {
    id: 2,
    type: "conversion",
    message: "Lead converted: Priya Patel",
    time: "4 hours ago",
    icon: TrendingUp,
  },
  {
    id: 3,
    type: "task",
    message: "Task completed: Update documentation",
    time: "6 hours ago",
    icon: Target,
  },
  {
    id: 4,
    type: "lead",
    message: "New lead: Amit Kumar",
    time: "1 day ago",
    icon: Users,
  },
];

export default function SubscriberDashboard() {
  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 animate-fade-in">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 mb-4 lg:mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Dashboard Overview
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Welcome back! Here's your business at a glance
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
              <span className="hidden xs:inline sm:inline">Add Lead</span>
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

      {/* Stats Cards Section */}
      <div className="mb-6 sm:mb-8">
        <StatsCards />
      </div>

      {/* Performance Chart and Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Chart Section - 2 cols on large screens */}
        <div className="xl:col-span-2">
          <LeadsChart />
        </div>

        {/* Recent Activity - 1 col */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <CardHeader className="pb-4 border-b border-white/20">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
              <div className="p-2 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg border border-white/10">
                <Activity className="w-5 h-5 text-orange-300" />
              </div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg border border-white/10">
                      <Icon className="w-4 h-4 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {activity.message}
                      </p>
                      <p className="text-xs text-white/60">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10 transition-transform duration-300">
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-300" />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
              View Leads
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Manage all your leads
            </p>
            <button className="text-xs sm:text-sm text-blue-300 hover:text-blue-200 font-medium flex items-center gap-1 mx-auto transition-colors duration-300">
              Go to Leads
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 transition-transform duration-300" />
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10 transition-transform duration-300">
              <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-green-300" />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
              Analytics
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              View performance metrics
            </p>
            <button className="text-xs sm:text-sm text-green-300 hover:text-green-200 font-medium flex items-center gap-1 mx-auto transition-colors duration-300">
              View Analytics
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 transition-transform duration-300" />
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10 transition-transform duration-300">
              <Target className="w-4 h-4 sm:w-6 sm:h-6 text-purple-300" />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
              Tasks
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Manage your tasks
            </p>
            <button className="text-xs sm:text-sm text-purple-300 hover:text-purple-200 font-medium flex items-center gap-1 mx-auto transition-colors duration-300">
              Go to Tasks
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 transition-transform duration-300" />
            </button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-white/10 transition-transform duration-300">
              <Activity className="w-4 h-4 sm:w-6 sm:h-6 text-orange-300" />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
              Reports
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Generate reports
            </p>
            <button className="text-xs sm:text-sm text-orange-300 hover:text-orange-200 font-medium flex items-center gap-1 mx-auto transition-colors duration-300">
              View Reports
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 transition-transform duration-300" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
