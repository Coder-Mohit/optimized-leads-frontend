import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  CheckCircle,
  Filter,
  Grid3X3,
  Layers,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
  User,
  X,
  Phone,
  Globe,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

const mockEnquiries = Array.from({ length: 18 }).map((_, i) => {
  const n = i + 1;
  const subjects = [
    "Product Information Request",
    "Partnership Inquiry",
    "Technical Support",
    "Sales Question",
    "Feature Request",
    "Pricing Inquiry",
    "Demo Request",
    "General Information",
  ];
  const sources = ["Website", "Email", "Social Media", "Referral", "Advertisement", "Direct"];
  const statuses = ["New", "In Progress", "Responded", "Closed"];
  const priorities = ["Low", "Medium", "High", "Urgent"];
  const names = [
    "Alice Johnson", "Bob Smith", "Carol White", "David Brown", "Emma Davis",
    "Frank Miller", "Grace Wilson", "Henry Moore", "Ivy Taylor", "Jack Anderson"
  ];
  
  return {
    id: `ENQ-${1000 + n}`,
    subject: subjects[n % subjects.length],
    name: names[n % names.length],
    email: `contact${n}@example.com`,
    phone: `+1-555-${String(n).padStart(4, '0')}`,
    company: n % 3 === 0 ? `Company ${n}` : "",
    message: `This is enquiry number ${n}. I would like to know more about your services and products. Please provide detailed information.`,
    source: sources[n % sources.length],
    status: statuses[n % statuses.length],
    priority: priorities[n % priorities.length],
    assignedTo: n % 4 === 0 ? "sales@company.com" : "unassigned",
    createdAt: new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 2 * 24 * 60 * 60 * 1000).toISOString(),
    followUpRequired: n % 3 === 0,
    rating: n % 5 === 0 ? Math.floor(Math.random() * 3) + 3 : null,
  };
});

const sources = [
  { name: "All", count: mockEnquiries.length, color: "from-gray-500/20 to-gray-600/20" },
  { name: "Website", count: mockEnquiries.filter(e => e.source === "Website").length, color: "from-blue-500/20 to-cyan-600/20" },
  { name: "Email", count: mockEnquiries.filter(e => e.source === "Email").length, color: "from-purple-500/20 to-pink-600/20" },
  { name: "Social Media", count: mockEnquiries.filter(e => e.source === "Social Media").length, color: "from-emerald-500/20 to-teal-600/20" },
  { name: "Referral", count: mockEnquiries.filter(e => e.source === "Referral").length, color: "from-orange-500/20 to-red-600/20" },
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
    status === "New"
      ? "bg-blue-500/15 text-blue-200 border-white/10"
      : status === "In Progress"
        ? "bg-amber-500/15 text-amber-200 border-white/10"
        : status === "Responded"
          ? "bg-purple-500/15 text-purple-200 border-white/10"
          : "bg-gray-500/15 text-gray-200 border-white/10";

  return <Pill className={cls}>{status}</Pill>;
}

function PriorityPill({ priority }) {
  const cls =
    priority === "Urgent"
      ? "bg-rose-500/15 text-rose-200 border-white/10"
      : priority === "High"
        ? "bg-orange-500/15 text-orange-200 border-white/10"
        : priority === "Medium"
          ? "bg-yellow-500/15 text-yellow-200 border-white/10"
          : "bg-green-500/15 text-green-200 border-white/10";

  return <Pill className={cls}>{priority}</Pill>;
}

function SourcePill({ source }) {
  const colors = {
    "Website": "bg-blue-500/15 text-blue-200 border-white/10",
    "Email": "bg-purple-500/15 text-purple-200 border-white/10",
    "Social Media": "bg-emerald-500/15 text-emerald-200 border-white/10",
    "Referral": "bg-orange-500/15 text-orange-200 border-white/10",
    "Advertisement": "bg-pink-500/15 text-pink-200 border-white/10",
    "Direct": "bg-gray-500/15 text-gray-200 border-white/10",
  };
  return <Pill className={colors[source] || "bg-white/10 text-white/70 border-white/10"}>{source}</Pill>;
}

function StarRating({ rating }) {
  if (!rating) return null;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

export default function Enquiries() {
  const [search, setSearch] = useState("");
  const [selectedSource, setSelectedSource] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredEnquiries = useMemo(() => {
    let enquiries = mockEnquiries;
    if (search.trim()) {
      const q = search.toLowerCase();
      enquiries = enquiries.filter(
        (e) =>
          e.subject.toLowerCase().includes(q) ||
          e.name.toLowerCase().includes(q) ||
          e.email.toLowerCase().includes(q) ||
          e.id.toLowerCase().includes(q)
      );
    }
    if (selectedSource !== "All") {
      enquiries = enquiries.filter((e) => e.source === selectedSource);
    }
    if (selectedStatus !== "All") {
      enquiries = enquiries.filter((e) => e.status === selectedStatus);
    }
    return enquiries;
  }, [search, selectedSource, selectedStatus]);

  const stats = useMemo(() => {
    const total = mockEnquiries.length;
    const newEnquiries = mockEnquiries.filter((e) => e.status === "New").length;
    const inProgress = mockEnquiries.filter((e) => e.status === "In Progress").length;
    const responded = mockEnquiries.filter((e) => e.status === "Responded").length;
    const avgRating = (
      mockEnquiries.reduce((sum, e) => sum + (e.rating || 0), 0) / 
      mockEnquiries.filter(e => e.rating).length
    ).toFixed(1) || "N/A";
    return { total, newEnquiries, inProgress, responded, avgRating };
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

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Enquiries
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Manage customer inquiries and lead generation
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
            <GradientButton className="flex-1 sm:flex-none">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Enquiry</span>
              <span className="sm:hidden">Add</span>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Total Enquiries</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.total}</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">New</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.newEnquiries}</p>
              </div>
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">In Progress</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.inProgress}</p>
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
                <p className="text-white/60 text-xs sm:text-sm">Responded</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.responded}</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Avg Rating</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.avgRating}</p>
              </div>
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
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
                    <CardTitle className="text-white text-lg">Enquiry List</CardTitle>
                    <p className="text-white/70 text-sm">
                      {filteredEnquiries.length} of {mockEnquiries.length} enquiries
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
                      placeholder="Search enquiries by subject, name, or email..."
                      className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <Pill
                      onClick={() => setSelectedSource("All")}
                      className={`cursor-pointer transition-all ${
                        selectedSource === "All"
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                      }`}
                    >
                      All
                    </Pill>
                    {sources.slice(1).map((source) => (
                      <Pill
                        key={source.name}
                        onClick={() => setSelectedSource(source.name)}
                        className={`cursor-pointer transition-all whitespace-nowrap ${
                          selectedSource === source.name
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                        }`}
                      >
                        {source.name} ({source.count})
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
                  {["New", "In Progress", "Responded", "Closed"].map((status) => (
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
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="p-4 sm:p-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredEnquiries.map((enquiry) => (
                      <div
                        key={enquiry.id}
                        className="group rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-white font-semibold text-sm truncate mb-1">
                                {enquiry.subject}
                              </h3>
                              <p className="text-white/60 text-xs">ID: {enquiry.id}</p>
                            </div>
                            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                          </div>

                          <p className="text-white/70 text-xs mb-3 line-clamp-2">
                            {enquiry.message}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <StatusPill status={enquiry.status} />
                            <PriorityPill priority={enquiry.priority} />
                            <SourcePill source={enquiry.source} />
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Name:</span>
                              <span className="text-white/80 truncate ml-2">{enquiry.name}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Email:</span>
                              <span className="text-white/80 truncate ml-2">{enquiry.email}</span>
                            </div>
                            {enquiry.company && (
                              <div className="flex items-center justify-between">
                                <span className="text-white/60">Company:</span>
                                <span className="text-white/80 truncate ml-2">{enquiry.company}</span>
                              </div>
                            )}
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Created:</span>
                              <span className="text-white/80 ml-2">{formatDate(enquiry.createdAt)}</span>
                            </div>
                          </div>

                          {(enquiry.followUpRequired || enquiry.rating) && (
                            <div className="mt-3 pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between">
                                {enquiry.followUpRequired && (
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-amber-400" />
                                    <span className="text-amber-400 text-xs">Follow-up Required</span>
                                  </div>
                                )}
                                {enquiry.rating && <StarRating rating={enquiry.rating} />}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredEnquiries.map((enquiry) => (
                      <div
                        key={enquiry.id}
                        className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-2">
                              <h3 className="text-white font-semibold truncate">{enquiry.subject}</h3>
                              <StatusPill status={enquiry.status} />
                              <PriorityPill priority={enquiry.priority} />
                              <SourcePill source={enquiry.source} />
                            </div>
                            <p className="text-white/60 text-sm mb-2">ID: {enquiry.id}</p>
                            <p className="text-white/70 text-sm mb-3 line-clamp-1">
                              {enquiry.message}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-white/60">
                              <span>Name: {enquiry.name}</span>
                              <span>Email: {enquiry.email}</span>
                              {enquiry.company && <span>Company: {enquiry.company}</span>}
                              <span>Created: {formatDate(enquiry.createdAt)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {enquiry.followUpRequired && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-amber-400" />
                              </div>
                            )}
                            {enquiry.rating && <StarRating rating={enquiry.rating} />}
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredEnquiries.length === 0 && (
                  <div className="p-8 text-center text-white/70 text-sm">
                    No enquiries found matching your criteria.
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
              <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3">
              <GradientButton className="w-full">
                <Plus className="w-4 h-4" />
                Add Enquiry
              </GradientButton>
              <SoftButton className="w-full">
                <Mail className="w-4 h-4" />
                Bulk Email
              </SoftButton>
              <SoftButton className="w-full">
                <BarChart3 className="w-4 h-4" />
                Export Report
              </SoftButton>
              <SoftButton className="w-full">
                <Calendar className="w-4 h-4" />
                Schedule Follow-up
              </SoftButton>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Source Analytics</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                {sources.slice(1).map((source) => (
                  <div key={source.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color}`}></div>
                      <span className="text-white/80 text-sm">{source.name}</span>
                    </div>
                    <span className="text-white font-semibold">{source.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Recent Enquiries</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                {mockEnquiries.slice(0, 4).map((enquiry) => (
                  <div key={enquiry.id} className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Mail className="w-3 h-3 text-white/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{enquiry.subject}</p>
                      <p className="text-white/60 text-xs">{formatDate(enquiry.createdAt)}</p>
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
                  <div className="text-white font-semibold text-xs mb-1">Response Time</div>
                  <div className="text-xs">
                    Aim to respond to new enquiries within 24 hours for better conversion rates.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">Lead Qualification</div>
                  <div className="text-xs">
                    Prioritize enquiries based on source, budget, and urgency to maximize efficiency.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">Follow-up System</div>
                  <div className="text-xs">
                    Set up automated follow-ups for enquiries that require additional information.
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
