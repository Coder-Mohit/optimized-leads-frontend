import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  Share2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Filter,
  Search,
  Plus,
} from "lucide-react";

// Mock data for leads
const leadsData = [
  {
    id: "LD-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    type: "Job Consultancy",
    access: "Shared",
    date: "27 Jan 2026",
    time: "10:30 AM",
    avatar: "J",
  },
  {
    id: "LD-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    type: "Business Loan",
    access: "Shared",
    date: "27 Jan 2026",
    time: "09:15 AM",
    avatar: "S",
  },
  {
    id: "LD-003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    type: "Investment",
    access: "Private",
    date: "26 Jan 2026",
    time: "03:45 PM",
    avatar: "M",
  },
  {
    id: "LD-004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 234-5678",
    type: "Job Consultancy",
    access: "Shared",
    date: "26 Jan 2026",
    time: "02:20 PM",
    avatar: "E",
  },
  {
    id: "LD-005",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    phone: "+1 (555) 345-6789",
    type: "Business Loan",
    access: "Shared",
    date: "25 Jan 2026",
    time: "11:00 AM",
    avatar: "R",
  },
  {
    id: "LD-006",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "+1 (555) 567-8901",
    type: "Investment",
    access: "Private",
    date: "25 Jan 2026",
    time: "04:30 PM",
    avatar: "L",
  },
  {
    id: "LD-007",
    name: "David Martinez",
    email: "david.m@example.com",
    phone: "+1 (555) 678-9012",
    type: "Job Consultancy",
    access: "Shared",
    date: "24 Jan 2026",
    time: "01:15 PM",
    avatar: "D",
  },
  {
    id: "LD-008",
    name: "Jennifer Taylor",
    email: "jennifer.t@example.com",
    phone: "+1 (555) 789-0123",
    type: "Business Loan",
    access: "Shared",
    date: "24 Jan 2026",
    time: "10:45 AM",
    avatar: "J",
  },
];

export default function Leads() {
  const navigate = useNavigate();

  const handleViewLead = (leadId) => {
    navigate(`/dashboard/sub-subscriber/leads/${leadId}`);
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header Section */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                My Leads
              </h1>
              <p className="text-white/70">Assigned & Shared Leads</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                {leadsData.length} Leads
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Lead Details
                    </th>
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Contact
                    </th>
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Type
                    </th>
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Access
                    </th>
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Date
                    </th>
                    <th className="text-left py-4 px-6 text-white/60 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leadsData.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/10">
                            <span className="text-white font-medium text-sm">
                              {lead.avatar}
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {lead.name}
                            </p>
                            <p className="text-white/60 text-xs">{lead.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                          >
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </a>
                          <div className="text-white/80 text-sm flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
                          {lead.type}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit ${
                            lead.access === "Shared"
                              ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                              : "bg-green-400/20 text-green-300 border border-green-400/30"
                          }`}
                        >
                          {lead.access === "Shared" && (
                            <Share2 className="w-3 h-3" />
                          )}
                          {lead.access}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <p className="text-white text-sm">{lead.date}</p>
                          <p className="text-white/60 text-xs">{lead.time}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => handleViewLead(lead.id)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors text-sm">
                            <Phone className="w-4 h-4" />
                            Call
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {leadsData.map((lead) => (
          <Card
            key={lead.id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-white font-medium">
                      {lead.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{lead.name}</p>
                    <p className="text-white/60 text-xs">{lead.id}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    lead.access === "Shared"
                      ? "bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                      : "bg-green-400/20 text-green-300 border border-green-400/30"
                  }`}
                >
                  {lead.access === "Shared" && <Share2 className="w-3 h-3" />}
                  {lead.access}
                </span>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {lead.email}
                  </a>
                  <div className="text-white/80 text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {lead.phone}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
                    {lead.type}
                  </span>
                  <div className="text-right">
                    <p className="text-white text-sm">{lead.date}</p>
                    <p className="text-white/60 text-xs">{lead.time}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
