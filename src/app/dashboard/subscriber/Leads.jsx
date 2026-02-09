import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Input } from "../../../components/ui/input";
import {
  Search,
  Filter,
  Plus,
  Download,
  Eye,
  Edit,
  MoreVertical,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import StatusBadge from "../../../components/dashboard/StatusBadge";

// Mock data for leads
const mockLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    source: "Study Abroad",
    status: "New",
    date: "2024-02-07",
    value: "₹45,000",
    assignedTo: "John Doe",
    priority: "High",
  },
  {
    id: 2,
    name: "Priya Patel",
    phone: "+91 87654 32109",
    email: "priya.patel@email.com",
    source: "Real Estate",
    status: "Contacted",
    date: "2024-02-06",
    value: "₹32,000",
    assignedTo: "Jane Smith",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Amit Kumar",
    phone: "+91 76543 21098",
    email: "amit.kumar@email.com",
    source: "Education",
    status: "Converted",
    date: "2024-02-05",
    value: "₹58,000",
    assignedTo: "Mike Johnson",
    priority: "High",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    phone: "+91 65432 10987",
    email: "sneha.reddy@email.com",
    source: "Forex Market",
    status: "New",
    date: "2024-02-07",
    value: "₹28,000",
    assignedTo: "Sarah Wilson",
    priority: "Low",
  },
  {
    id: 5,
    name: "Vikram Singh",
    phone: "+91 54321 09876",
    email: "vikram.singh@email.com",
    source: "Study Abroad",
    status: "Contacted",
    date: "2024-02-04",
    value: "₹41,000",
    assignedTo: "John Doe",
    priority: "Medium",
  },
  {
    id: 6,
    name: "Meera Joshi",
    phone: "+91 43210 98765",
    email: "meera.joshi@email.com",
    source: "Real Estate",
    status: "Converted",
    date: "2024-02-03",
    value: "₹67,000",
    assignedTo: "Jane Smith",
    priority: "High",
  },
];

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter leads based on status and search term
  const filteredLeads = mockLeads.filter((lead) => {
    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const statusTabs = ["All", "New", "Contacted", "Converted"];

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
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Leads Management
                </h1>
                <p className="text-white/70">
                  Manage and track all your leads in one place
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline">Add Lead</span>
                <span className="sm:hidden">Add</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="hidden sm:inline">Export</span>
                <span className="sm:hidden">Exp</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-md border-0 bg-white">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-gray-900">
                  {mockLeads.length}
                </div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 bg-white">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">
                  {mockLeads.filter((l) => l.status === "New").length}
                </div>
                <div className="text-sm text-gray-600">New Leads</div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 bg-white">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-600">
                  {mockLeads.filter((l) => l.status === "Contacted").length}
                </div>
                <div className="text-sm text-gray-600">Contacted</div>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 bg-white">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">
                  {mockLeads.filter((l) => l.status === "Converted").length}
                </div>
                <div className="text-sm text-gray-600">Converted</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-lg border-0 bg-white mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {statusTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setStatusFilter(tab)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                      statusFilter === tab
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-48 lg:w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Filters</span>
                  <span className="sm:hidden">F</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto max-w-full">
              <div className="min-w-[800px]">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                        Lead
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                        Contact
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm hidden lg:table-cell">
                        Source
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm hidden md:table-cell">
                        Value
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm hidden lg:table-cell">
                        Priority
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm hidden xl:table-cell">
                        Assigned To
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm hidden md:table-cell">
                        Date
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 text-sm">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {lead.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: #{lead.id.toString().padStart(4, "0")}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-xs text-gray-700">
                              <Phone className="w-3 h-3" />
                              <span className="truncate max-w-[120px]">
                                {lead.phone}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Mail className="w-3 h-3" />
                              <span className="truncate max-w-[120px]">
                                {lead.email}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <Badge
                            variant="outline"
                            className="border-gray-200 text-gray-700 text-xs"
                          >
                            {lead.source}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-semibold text-gray-900 text-sm hidden md:table-cell">
                          {lead.value}
                        </td>
                        <td className="py-3 px-4">
                          <StatusBadge status={lead.status} />
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <Badge
                            className={`text-xs ${
                              lead.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : lead.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {lead.priority}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-700 text-sm hidden xl:table-cell">
                          {lead.assignedTo}
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell">
                          <div className="flex items-center gap-1 text-xs text-gray-700">
                            <Calendar className="w-3 h-3" />
                            {lead.date}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1 h-8 w-8"
                            >
                              <Eye className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1 h-8 w-8"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1 h-8 w-8"
                            >
                              <MoreVertical className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        {filteredLeads.length === 0 && (
          <Card className="shadow-lg border-0 bg-white">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 text-sm">
                No leads found matching your criteria
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
