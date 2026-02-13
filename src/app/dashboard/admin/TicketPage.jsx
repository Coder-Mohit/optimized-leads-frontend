import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  Grid3X3,
  Layers,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
  User,
  X,
  Reply,
  Paperclip,
  Send,
} from "lucide-react";

const mockTickets = Array.from({ length: 15 }).map((_, i) => {
  const n = i + 1;
  const statuses = ["Open", "In Progress", "Resolved", "Closed"];
  const priorities = ["Low", "Medium", "High", "Critical"];
  const subjects = [
    "Login Issue",
    "Payment Failed",
    "Account Verification",
    "Feature Request",
    "Bug Report",
    "Performance Issue",
    "UI Glitch",
    "API Error",
  ];
  const users = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "mike.wilson@example.com",
    "sarah.jones@example.com",
    "alex.brown@example.com",
  ];
  return {
    id: `TKT-${1000 + n}`,
    subject: subjects[n % subjects.length],
    description: `Issue description for ticket ${n}. User is experiencing problems with the system.`,
    status: statuses[n % statuses.length],
    priority: priorities[n % priorities.length],
    user: users[n % users.length],
    assignedTo: n % 3 === 0 ? "support@company.com" : "unassigned",
    createdAt: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    updatedAt: new Date(
      Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    category: n % 3 === 0 ? "Technical" : n % 2 === 0 ? "Billing" : "General",
    replies: Math.floor(Math.random() * 5),
    satisfaction: n % 4 === 0 ? 5 : Math.floor(Math.random() * 5) + 1,
  };
});

const categories = [
  {
    name: "All",
    count: mockTickets.length,
    color: "from-gray-500/20 to-gray-600/20",
  },
  {
    name: "Technical",
    count: mockTickets.filter((t) => t.category === "Technical").length,
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    name: "Billing",
    count: mockTickets.filter((t) => t.category === "Billing").length,
    color: "from-purple-500/20 to-pink-600/20",
  },
  {
    name: "General",
    count: mockTickets.filter((t) => t.category === "General").length,
    color: "from-emerald-500/20 to-teal-600/20",
  },
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

function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${className}`}
    >
      {children}
    </span>
  );
}

function StatusPill({ status }) {
  const cls =
    status === "Open"
      ? "bg-blue-500/15 text-blue-200 border-white/10"
      : status === "In Progress"
        ? "bg-amber-500/15 text-amber-200 border-white/10"
        : status === "Resolved"
          ? "bg-emerald-500/15 text-emerald-200 border-white/10"
          : "bg-gray-500/15 text-gray-200 border-white/10";

  return <Pill className={cls}>{status}</Pill>;
}

function PriorityPill({ priority }) {
  const cls =
    priority === "Critical"
      ? "bg-rose-500/15 text-rose-200 border-white/10"
      : priority === "High"
        ? "bg-orange-500/15 text-orange-200 border-white/10"
        : priority === "Medium"
          ? "bg-yellow-500/15 text-yellow-200 border-white/10"
          : "bg-green-500/15 text-green-200 border-white/10";

  return <Pill className={cls}>{priority}</Pill>;
}

function SatisfactionStars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-3 h-3 ${star <= rating ? "text-yellow-400" : "text-white/20"}`}
        >
          ★
        </div>
      ))}
    </div>
  );
}

export default function TicketPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState("");

  const filteredTickets = useMemo(() => {
    let tickets = mockTickets;
    if (search.trim()) {
      const q = search.toLowerCase();
      tickets = tickets.filter(
        (t) =>
          t.subject.toLowerCase().includes(q) ||
          t.user.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q),
      );
    }
    if (selectedCategory !== "All") {
      tickets = tickets.filter((t) => t.category === selectedCategory);
    }
    if (selectedStatus !== "All") {
      tickets = tickets.filter((t) => t.status === selectedStatus);
    }
    return tickets;
  }, [search, selectedCategory, selectedStatus]);

  const stats = useMemo(() => {
    const total = mockTickets.length;
    const open = mockTickets.filter((t) => t.status === "Open").length;
    const inProgress = mockTickets.filter(
      (t) => t.status === "In Progress",
    ).length;
    const resolved = mockTickets.filter((t) => t.status === "Resolved").length;
    const avgSatisfaction = (
      mockTickets.reduce((sum, t) => sum + (t.satisfaction || 0), 0) /
      mockTickets.length
    ).toFixed(1);
    return { total, open, inProgress, resolved, avgSatisfaction };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    return "Just now";
  };

  const openTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeTicket = () => {
    setSelectedTicket(null);
    setReplyText("");
  };

  const sendReply = () => {
    if (replyText.trim()) {
      // TODO: API call to send reply
      console.log("Sending reply:", replyText);
      setReplyText("");
    }
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Support Tickets
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Manage customer support tickets and track resolution progress
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <SoftButton
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="flex-1 sm:flex-none"
            >
              {viewMode === "grid" ? (
                <Grid3X3 className="w-4 h-4" />
              ) : (
                <Layers className="w-4 h-4" />
              )}
            </SoftButton>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Total Tickets
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Open</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.open}
                </p>
              </div>
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">In Progress</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.inProgress}
                </p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Resolved</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.resolved}
                </p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Avg Satisfaction
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {stats.avgSatisfaction}
                </p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8 xl:col-span-9">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-white text-lg">
                      Ticket List
                    </CardTitle>
                    <p className="text-white/70 text-sm">
                      {filteredTickets.length} of {mockTickets.length} tickets
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <SoftButton className="sm:w-auto">
                      <Filter className="w-4 h-4" />
                      Filters
                    </SoftButton>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search tickets by subject, user, or ID..."
                      className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <Pill
                      onClick={() => setSelectedCategory("All")}
                      className={`cursor-pointer transition-all ${
                        selectedCategory === "All"
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                      }`}
                    >
                      All
                    </Pill>
                    {categories.slice(1).map((cat) => (
                      <Pill
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`cursor-pointer transition-all whitespace-nowrap ${
                          selectedCategory === cat.name
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </Pill>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                  <Pill
                    onClick={() => setSelectedStatus("All")}
                    className={`cursor-pointer transition-all ${
                      selectedStatus === "All"
                        ? "bg-white/20 text-white border-white/30"
                        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                    }`}
                  >
                    All Status
                  </Pill>
                  {["Open", "In Progress", "Resolved", "Closed"].map(
                    (status) => (
                      <Pill
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`cursor-pointer transition-all whitespace-nowrap ${
                          selectedStatus === status
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                        }`}
                      >
                        {status}
                      </Pill>
                    ),
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="p-4 sm:p-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="group rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-white font-semibold text-sm truncate mb-1">
                                {ticket.subject}
                              </h3>
                              <p className="text-white/60 text-xs">
                                ID: {ticket.id}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => openTicket(ticket)}
                                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                title="View Ticket"
                              >
                                <MessageSquare className="w-4 h-4 text-white/60" />
                              </button>
                              <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                <MoreHorizontal className="w-4 h-4 text-white/60" />
                              </button>
                            </div>
                          </div>

                          <p className="text-white/70 text-xs mb-3 line-clamp-2">
                            {ticket.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <StatusPill status={ticket.status} />
                            <PriorityPill priority={ticket.priority} />
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">User:</span>
                              <span className="text-white/80 truncate ml-2">
                                {ticket.user}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Assigned:</span>
                              <span className="text-white/80 truncate ml-2">
                                {ticket.assignedTo === "unassigned"
                                  ? "Unassigned"
                                  : ticket.assignedTo}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Replies:</span>
                              <span className="text-white/80 ml-2">
                                {ticket.replies}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Created:</span>
                              <span className="text-white/80 ml-2">
                                {formatDate(ticket.createdAt)}
                              </span>
                            </div>
                          </div>

                          {ticket.satisfaction && (
                            <div className="mt-3 pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between">
                                <span className="text-white/60 text-xs">
                                  Satisfaction:
                                </span>
                                <SatisfactionStars
                                  rating={ticket.satisfaction}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-2">
                              <h3 className="text-white font-semibold truncate">
                                {ticket.subject}
                              </h3>
                              <StatusPill status={ticket.status} />
                              <PriorityPill priority={ticket.priority} />
                              <Pill className="bg-white/10 text-white/70 border-white/10">
                                {ticket.category}
                              </Pill>
                            </div>
                            <p className="text-white/60 text-sm mb-2">
                              ID: {ticket.id}
                            </p>
                            <p className="text-white/70 text-sm mb-3 line-clamp-1">
                              {ticket.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-white/60">
                              <span>User: {ticket.user}</span>
                              <span>
                                Assigned:{" "}
                                {ticket.assignedTo === "unassigned"
                                  ? "Unassigned"
                                  : ticket.assignedTo}
                              </span>
                              <span>Replies: {ticket.replies}</span>
                              <span>
                                Created: {formatDate(ticket.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {ticket.satisfaction && (
                              <SatisfactionStars rating={ticket.satisfaction} />
                            )}
                            <button
                              onClick={() => openTicket(ticket)}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              title="View Ticket"
                            >
                              <MessageSquare className="w-4 h-4 text-white/60" />
                            </button>
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredTickets.length === 0 && (
                  <div className="p-8 text-center text-white/70 text-sm">
                    No tickets found matching your criteria.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3">
              <SoftButton className="w-full">
                <BarChart3 className="w-4 h-4" />
                Generate Report
              </SoftButton>
              <SoftButton className="w-full">
                <User className="w-4 h-4" />
                Assign Tickets
              </SoftButton>
              <SoftButton className="w-full">
                <Calendar className="w-4 h-4" />
                Schedule Follow-up
              </SoftButton>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                {mockTickets.slice(0, 4).map((ticket) => (
                  <div key={ticket.id} className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MessageSquare className="w-3 h-3 text-white/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {ticket.subject}
                      </p>
                      <p className="text-white/60 text-xs">
                        {formatDate(ticket.updatedAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 text-white/70 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Response Time
                  </div>
                  <div className="text-xs">
                    Aim to respond to tickets within 2 hours for better customer
                    satisfaction.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Priority Handling
                  </div>
                  <div className="text-xs">
                    Address Critical and High priority tickets first to minimize
                    customer impact.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">
                    Templates
                  </div>
                  <div className="text-xs">
                    Use response templates for common issues to improve
                    efficiency and consistency.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ticket View Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={closeTicket}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-white/70" />
                  </button>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {selectedTicket.subject}
                    </h2>
                    <p className="text-white/60 text-sm">
                      Ticket ID: {selectedTicket.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <StatusPill status={selectedTicket.status} />
                  <PriorityPill priority={selectedTicket.priority} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Ticket Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">User</p>
                  <p className="text-white font-medium text-sm">
                    {selectedTicket.user}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Category</p>
                  <p className="text-white font-medium text-sm">
                    {selectedTicket.category}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Assigned To</p>
                  <p className="text-white font-medium text-sm">
                    {selectedTicket.assignedTo === "unassigned"
                      ? "Unassigned"
                      : selectedTicket.assignedTo}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-1">Created</p>
                  <p className="text-white font-medium text-sm">
                    {formatDate(selectedTicket.createdAt)}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-white font-semibold mb-3">Description</h3>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {selectedTicket.description}
                  </p>
                </div>
              </div>

              {/* Conversation Thread */}
              <div>
                <h3 className="text-white font-semibold mb-3">Conversation</h3>
                <div className="space-y-4">
                  {/* Initial Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-white font-medium text-sm">
                            {selectedTicket.user}
                          </p>
                          <p className="text-white/60 text-xs">
                            {formatDate(selectedTicket.createdAt)}
                          </p>
                        </div>
                        <p className="text-white/80 text-sm">
                          {selectedTicket.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sample Reply */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-white font-medium text-sm">
                            Support Team
                          </p>
                          <p className="text-white/60 text-xs">2h ago</p>
                        </div>
                        <p className="text-white/80 text-sm">
                          Thank you for reaching out. We're looking into this
                          issue and will get back to you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply Section */}
              <div>
                <h3 className="text-white font-semibold mb-3">Reply</h3>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={4}
                    className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20 resize-none"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                      <Paperclip className="w-4 h-4" />
                      <span className="text-sm">Attach File</span>
                    </button>
                    <GradientButton
                      onClick={sendReply}
                      disabled={!replyText.trim()}
                    >
                      <Send className="w-4 h-4" />
                      Send Reply
                    </GradientButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
