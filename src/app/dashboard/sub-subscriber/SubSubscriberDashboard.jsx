import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Users,
  TrendingUp,
  Target,
  ArrowUp,
  Plus,
  Download,
  Activity,
  DollarSign,
  ShoppingCart,
  MessageSquare,
  Settings,
  FileText,
  HelpCircle,
  Star,
  BarChart3,
  User,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

// Mock data for leads dashboard
const stats = {
  totalLeads: 1247,
  newLeads: 89,
  qualifiedLeads: 456,
  conversionRate: 23.5,
  growthRate: 18.2,
  avgResponseTime: 2.4,
};

const recentLeads = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    status: "new",
    source: "Website",
    date: "2024-01-15",
    value: "$5,000",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    location: "Los Angeles, CA",
    status: "contacted",
    source: "Referral",
    date: "2024-01-14",
    value: "$3,500",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, IL",
    status: "qualified",
    source: "LinkedIn",
    date: "2024-01-13",
    value: "$7,200",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 234-5678",
    location: "Houston, TX",
    status: "converted",
    source: "Email",
    date: "2024-01-12",
    value: "$4,800",
  },
];

const leadSources = [
  { name: "Website", value: 45, color: "from-blue-400 to-blue-600" },
  { name: "Referral", value: 25, color: "from-green-400 to-green-600" },
  { name: "LinkedIn", value: 15, color: "from-purple-400 to-purple-600" },
  { name: "Email", value: 10, color: "from-orange-400 to-orange-600" },
  { name: "Other", value: 5, color: "from-gray-400 to-gray-600" },
];

function GradientButton({ children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function SoftButton({ children, className = "", ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function SubSubscriberDashboard() {
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-400/20 text-blue-300 border border-blue-400/30";
      case "contacted":
        return "bg-orange-400/20 text-orange-300 border border-orange-400/30";
      case "qualified":
        return "bg-purple-400/20 text-purple-300 border border-purple-400/30";
      case "converted":
        return "bg-green-400/20 text-green-300 border border-green-400/30";
      default:
        return "bg-gray-400/20 text-gray-300 border border-gray-400/30";
    }
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Leads Dashboard
          </h1>
          <p className="text-white/70">
            Manage and track your sales leads pipeline
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300">
            <Search className="w-4 h-4" />
            Search Leads
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            <Plus className="w-4 h-4" />
            Add Lead
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-green-400 text-sm">+12.5%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {stats.totalLeads}
            </h3>
            <p className="text-white/60 text-sm">Total Leads</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <Target className="w-6 h-6 text-green-300" />
              </div>
              <span className="text-green-400 text-sm">+8.2%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {stats.newLeads}
            </h3>
            <p className="text-white/60 text-sm">New Leads</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <CheckCircle className="w-6 h-6 text-purple-300" />
              </div>
              <span className="text-green-400 text-sm">+15.3%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {stats.qualifiedLeads}
            </h3>
            <p className="text-white/60 text-sm">Qualified Leads</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center border border-white/10">
                <TrendingUp className="w-6 h-6 text-orange-300" />
              </div>
              <span className="text-green-400 text-sm">+5.7%</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {stats.conversionRate}%
            </h3>
            <p className="text-white/60 text-sm">Conversion Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Leads Table */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl h-full">
            <CardHeader className="pb-4 border-b border-white/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Leads</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                    All
                  </button>
                  <button className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                    New
                  </button>
                  <button className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                    Qualified
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Contact
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Location
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Value
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/10">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">
                                {lead.name}
                              </p>
                              <p className="text-white/60 text-xs">
                                {lead.source}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="space-y-1">
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              {lead.email}
                            </a>
                            <a
                              href={`tel:${lead.phone}`}
                              className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              {lead.phone}
                            </a>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-white/60" />
                            <span className="text-white text-sm">
                              {lead.location}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              lead.status === "Hot"
                                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                : lead.status === "Warm"
                                  ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                  : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-white font-medium">
                            ${lead.value.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors">
                              <Eye className="w-3 h-3" />
                            </button>
                            <button className="p-1.5 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors">
                              <Phone className="w-3 h-3" />
                            </button>
                            <button className="p-1.5 bg-gray-500/20 text-gray-300 rounded hover:bg-gray-500/30 transition-colors">
                              <MoreVertical className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {recentLeads.map((lead) => (
                  <Card
                    key={lead.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/10">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {lead.name}
                            </p>
                            <p className="text-white/60 text-xs">
                              {lead.source}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            lead.status === "Hot"
                              ? "bg-red-500/20 text-red-300 border border-red-500/30"
                              : lead.status === "Warm"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                          >
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </a>
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-green-400 hover:text-green-300 text-sm flex items-center gap-2"
                          >
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-white/60" />
                          <span className="text-white text-sm">
                            {lead.location}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">
                            ${lead.value.toLocaleString()}
                          </span>
                          <div className="flex gap-2">
                            <button className="p-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors">
                              <Phone className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lead Sources */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Lead Sources</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {leadSources.map((source, index) => (
                  <div
                    key={source.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${source.color} rounded-full`}
                      ></div>
                      <span className="text-white/80 text-sm">
                        {source.name}
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {source.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">
                    Avg Response Time
                  </span>
                  <span className="text-white font-semibold">
                    {stats.avgResponseTime}h
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Contact Rate</span>
                  <span className="text-white font-semibold">78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">
                    Follow-up Required
                  </span>
                  <span className="text-white font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Hot Leads</span>
                  <span className="text-white font-semibold">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-2 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg border border-white/10">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Lead converted
                    </p>
                    <p className="text-xs text-white/60">
                      John Smith - 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-2 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg border border-white/10">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      Call scheduled
                    </p>
                    <p className="text-xs text-white/60">
                      Sarah Johnson - 4 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-2 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg border border-white/10">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Email sent</p>
                    <p className="text-xs text-white/60">
                      Michael Brown - 6 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
