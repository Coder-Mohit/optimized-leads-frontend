import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Users,
  DollarSign,
  Package,
  Ticket,
  FileText,
  ArrowUp,
} from "lucide-react";

function StatCard({ title, value, changeText, icon: Icon, accentClass }) {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-white/70">{title}</div>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {value}
            </div>
            <div className="text-xs sm:text-sm text-white/60 mt-2">
              {changeText}
            </div>
          </div>
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 flex items-center justify-center ${accentClass}`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function QuickAction({ title, subtitle, icon: Icon, accentClass }) {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 flex items-center justify-center ${accentClass}`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-semibold text-sm sm:text-base">
              {title}
            </div>
            <div className="text-white/70 text-xs sm:text-sm mt-1">
              {subtitle}
            </div>
            <div className="mt-4 text-xs sm:text-sm text-white/80 group-hover:text-white font-medium flex items-center gap-1 transition-colors duration-300">
              Open
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-6 min-h-full">
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
                Welcome back, Admin! Here's your system overview.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <StatCard
          title="Total Users"
          value="1,234"
          changeText="+12%"
          icon={Users}
          accentClass="bg-gradient-to-br from-blue-400/20 to-blue-600/20"
        />
        <StatCard
          title="Total Revenue"
          value="$45,678"
          changeText="+8%"
          icon={DollarSign}
          accentClass="bg-gradient-to-br from-green-400/20 to-emerald-600/20"
        />
        <StatCard
          title="Active Products"
          value="156"
          changeText="+5 new this week"
          icon={Package}
          accentClass="bg-gradient-to-br from-purple-400/20 to-purple-600/20"
        />
        <StatCard
          title="Pending Tickets"
          value="23"
          changeText="+3 needs attention"
          icon={Ticket}
          accentClass="bg-gradient-to-br from-orange-400/20 to-orange-600/20"
        />
      </div>

      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
        <CardHeader className="pb-4 border-b border-white/20">
          <CardTitle className="text-lg font-semibold text-white">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <QuickAction
              title="Manage Blogs"
              subtitle="Create, edit and publish posts"
              icon={FileText}
              accentClass="bg-gradient-to-br from-blue-400/20 to-indigo-600/20"
            />
            <QuickAction
              title="Manage Users"
              subtitle="View and control user accounts"
              icon={Users}
              accentClass="bg-gradient-to-br from-green-400/20 to-emerald-600/20"
            />
            <QuickAction
              title="Products"
              subtitle="Manage product catalog"
              icon={Package}
              accentClass="bg-gradient-to-br from-purple-400/20 to-purple-600/20"
            />
            <QuickAction
              title="Support Tickets"
              subtitle="Review and resolve issues"
              icon={Ticket}
              accentClass="bg-gradient-to-br from-orange-400/20 to-orange-600/20"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
