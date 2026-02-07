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
  HelpCircle,
  MessageSquare,
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Mock data for tickets
const mockTickets = [
  {
    id: 1,
    title: "Issue with lead export functionality",
    description: "Unable to export leads to CSV format",
    status: "Open",
    priority: "High",
    category: "Technical",
    assignedTo: "John Doe",
    createdBy: "Sarah Wilson",
    createdAt: "2024-02-07",
    updatedAt: "2024-02-07",
    replies: 3,
  },
  {
    id: 2,
    title: "Request for additional lead sources",
    description: "Need to add social media platforms as lead sources",
    status: "In Progress",
    priority: "Medium",
    category: "Feature Request",
    assignedTo: "Jane Smith",
    createdBy: "Mike Johnson",
    createdAt: "2024-02-06",
    updatedAt: "2024-02-07",
    replies: 5,
  },
  {
    id: 3,
    title: "Dashboard loading performance issue",
    description: "Dashboard takes too long to load with large datasets",
    status: "Resolved",
    priority: "High",
    category: "Performance",
    assignedTo: "Tech Team",
    createdBy: "Priya Patel",
    createdAt: "2024-02-05",
    updatedAt: "2024-02-06",
    replies: 8,
  },
  {
    id: 4,
    title: "Custom report template needed",
    description: "Require custom report template for monthly reviews",
    status: "Open",
    priority: "Low",
    category: "Customization",
    assignedTo: "Unassigned",
    createdBy: "Amit Kumar",
    createdAt: "2024-02-04",
    updatedAt: "2024-02-04",
    replies: 1,
  },
];

const statusConfig = {
  Open: { icon: AlertCircle, color: "bg-red-100 text-red-700" },
  "In Progress": { icon: Clock, color: "bg-yellow-100 text-yellow-700" },
  Resolved: { icon: CheckCircle, color: "bg-green-100 text-green-700" },
};

const priorityConfig = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

export default function Tickets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesStatus =
      statusFilter === "All" || ticket.status === statusFilter;
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusTabs = ["All", "Open", "In Progress", "Resolved"];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-full">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-xl">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Support Tickets
              </h1>
              <p className="text-gray-600">Manage and track support requests</p>
            </div>
          </div>
          <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4" />
            New Ticket
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-gray-900">
                {mockTickets.length}
              </div>
              <div className="text-sm text-gray-600">Total Tickets</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">
                {mockTickets.filter((t) => t.status === "Open").length}
              </div>
              <div className="text-sm text-gray-600">Open</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {mockTickets.filter((t) => t.status === "In Progress").length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card className="shadow-md border-0 bg-white">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {mockTickets.filter((t) => t.status === "Resolved").length}
              </div>
              <div className="text-sm text-gray-600">Resolved</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="shadow-lg border-0 bg-white mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {statusTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    statusFilter === tab
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => {
          const StatusIcon = statusConfig[ticket.status].icon;
          return (
            <Card
              key={ticket.id}
              className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg ${statusConfig[ticket.status].color}`}
                      >
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {ticket.title}
                      </h3>
                      <Badge className={priorityConfig[ticket.priority]}>
                        {ticket.priority}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-200 text-gray-700"
                      >
                        {ticket.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{ticket.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>#{ticket.id.toString().padStart(4, "0")}</span>
                      <span>Created by {ticket.createdBy}</span>
                      <span>Assigned to {ticket.assignedTo}</span>
                      <span>{ticket.createdAt}</span>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {ticket.replies} replies
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTickets.length === 0 && (
        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-12 text-center">
            <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <div className="text-gray-400 text-sm">
              No tickets found matching your criteria
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
