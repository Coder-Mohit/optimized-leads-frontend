import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Share2,
  CheckCircle,
  AlertCircle,
  Edit,
  Save,
  MessageSquare,
  Printer,
  User,
  Briefcase,
  FileText,
  History,
  Plus,
  Loader2,
} from "lucide-react";

// Mock lead data - in real app, this would come from API
const mockLeadsData = [
  {
    id: "LD-001",
    name: "John Smith",
    type: "Job Consultancy",
    access: "Shared",
    status: "New",
    phone: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    currentLocation: "New York, NY",
    preferredLocation: "San Francisco, CA",
    experience: "5 years",
    noticePeriod: "2 weeks",
    createdBy: "Admin User",
    createdDate: "27 Jan 2026",
    createdTime: "10:30 AM",
    remarks: [],
    statusHistory: [],
    marker: "",
  },
  {
    id: "LD-002",
    name: "Sarah Johnson",
    type: "Business Loan",
    access: "Private",
    status: "Contacted",
    phone: "+1 (555) 987-6543",
    email: "sarah.j@example.com",
    currentLocation: "Los Angeles, CA",
    preferredLocation: "Seattle, WA",
    experience: "8 years",
    noticePeriod: "1 month",
    createdBy: "Admin User",
    createdDate: "26 Jan 2026",
    createdTime: "09:15 AM",
    remarks: [
      {
        text: "Initial contact made via phone",
        timestamp: "26 Jan 2026, 02:30 PM",
        author: "Admin User",
      },
      {
        text: "Follow-up email sent",
        timestamp: "27 Jan 2026, 10:00 AM",
        author: "Admin User",
      },
    ],
    statusHistory: [
      { status: "New", date: "26 Jan 2026, 09:15 AM", changedBy: "Admin User" },
      {
        status: "Contacted",
        date: "26 Jan 2026, 02:30 PM",
        changedBy: "Admin User",
      },
    ],
    marker: "Warm",
  },
  {
    id: "LD-003",
    name: "Michael Brown",
    type: "Investment",
    access: "Shared",
    status: "Qualified",
    phone: "+1 (555) 456-7890",
    email: "michael.b@example.com",
    currentLocation: "Chicago, IL",
    preferredLocation: "Boston, MA",
    experience: "12 years",
    noticePeriod: "3 weeks",
    createdBy: "Admin User",
    createdDate: "25 Jan 2026",
    createdTime: "03:45 PM",
    remarks: [
      {
        text: "High net worth individual interested in real estate",
        timestamp: "25 Jan 2026, 04:00 PM",
        author: "Admin User",
      },
    ],
    statusHistory: [
      { status: "New", date: "25 Jan 2026, 03:45 PM", changedBy: "Admin User" },
      {
        status: "Qualified",
        date: "26 Jan 2026, 11:00 AM",
        changedBy: "Admin User",
      },
    ],
    marker: "Hot",
  },
];

export default function LeadDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leadData, setLeadData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [remarkText, setRemarkText] = useState("");
  const [selectedMarker, setSelectedMarker] = useState("");

  // Simulate fetching lead data by ID
  useEffect(() => {
    const fetchLeadData = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const lead = mockLeadsData.find((lead) => lead.id === id);

      if (lead) {
        setLeadData(lead);
        setSelectedStatus(lead.status);
        setSelectedMarker(lead.marker || "");
      } else {
        // Lead not found, redirect back to leads
        navigate("/dashboard/sub-subscriber/leads");
      }
      setLoading(false);
    };

    fetchLeadData();
  }, [id, navigate]);

  const handleStatusUpdate = () => {
    if (!leadData) return;

    const updatedLead = {
      ...leadData,
      status: selectedStatus,
      statusHistory: [
        ...leadData.statusHistory,
        {
          status: selectedStatus,
          date: new Date().toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          changedBy: "Current User",
        },
      ],
    };

    setLeadData(updatedLead);
    // In real app, this would make an API call
    console.log("Status updated:", { leadId: id, newStatus: selectedStatus });
  };

  const handleRemarkAdd = () => {
    if (!leadData || !remarkText.trim()) return;

    const updatedLead = {
      ...leadData,
      remarks: [
        ...leadData.remarks,
        {
          text: remarkText.trim(),
          timestamp: new Date().toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          author: "Current User",
        },
      ],
    };

    setLeadData(updatedLead);
    setRemarkText("");
    // In real app, this would make an API call
    console.log("Remark added:", { leadId: id, remark: remarkText });
  };

  const handleMarkerUpdate = () => {
    if (!leadData) return;

    const updatedLead = {
      ...leadData,
      marker: selectedMarker,
    };

    setLeadData(updatedLead);
    // In real app, this would make an API call
    console.log("Marker updated:", { leadId: id, newMarker: selectedMarker });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-white animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading lead details...</p>
        </div>
      </div>
    );
  }

  if (!leadData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
          <p className="text-white/60">Lead not found</p>
          <button
            onClick={() => navigate("/dashboard/sub-subscriber/leads")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Leads
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Top Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="/dashboard/sub-subscriber/leads"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Leads</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 rounded-full text-sm font-medium flex items-center gap-1">
              <Share2 className="w-3 h-3" />
              Shared
            </span>
            <span className="px-3 py-1 bg-blue-400/20 text-blue-300 border border-blue-400/30 rounded-full text-sm font-medium">
              New
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            {leadData.name}
          </h1>
          <p className="text-white/70">{leadData.type}</p>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                <FileText className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-white/60 text-xs">Lead ID</p>
                <p className="text-white font-medium">{leadData.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center border border-white/10">
                <Phone className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <p className="text-white/60 text-xs">Phone</p>
                <p className="text-white font-medium">{leadData.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <p className="text-white/60 text-xs">Email</p>
                <p className="text-white font-medium truncate">
                  {leadData.email}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg flex items-center justify-center border border-white/10">
                <User className="w-5 h-5 text-orange-300" />
              </div>
              <div>
                <p className="text-white/60 text-xs">Created By</p>
                <p className="text-white font-medium">{leadData.createdBy}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <User className="w-4 h-4 text-blue-300" />
                </div>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">Full Name</label>
                  <p className="text-white font-medium">{leadData.name}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Phone Number</label>
                  <p className="text-white font-medium">{leadData.phone}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Email Address</label>
                  <a
                    href={`mailto:${leadData.email}`}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {leadData.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lead Details */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <Briefcase className="w-4 h-4 text-green-300" />
                </div>
                Lead Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">
                    Current Location
                  </label>
                  <p className="text-white font-medium">
                    {leadData.currentLocation}
                  </p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">
                    Preferred Location
                  </label>
                  <p className="text-white font-medium">
                    {leadData.preferredLocation}
                  </p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Experience</label>
                  <p className="text-white font-medium">
                    {leadData.experience}
                  </p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Notice Period</label>
                  <p className="text-white font-medium">
                    {leadData.noticePeriod}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Management */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <Edit className="w-4 h-4 text-blue-300" />
                </div>
                Status Management
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">
                    Current Status
                  </label>
                  <p className="text-white font-medium mb-3">
                    {leadData.status}
                  </p>
                </div>
                <div>
                  <label className="text-white/60 text-sm block mb-2">
                    Update Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 mb-3"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Converted">Converted</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Add remark..."
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 mb-3"
                  />
                </div>
                <button
                  onClick={handleStatusUpdate}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Save className="w-4 h-4 inline mr-2" />
                  Save
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Add Remark */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <MessageSquare className="w-4 h-4 text-green-300" />
                </div>
                Add Remark
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <textarea
                  value={remarkText}
                  onChange={(e) => setRemarkText(e.target.value)}
                  placeholder="Type your remark..."
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 mb-3 h-20 resize-none"
                />
                <button
                  onClick={handleRemarkAdd}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add Remark
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Update Marker */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-orange-300" />
                </div>
                Update Marker
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">
                    Current Marker
                  </label>
                  <p className="text-white font-medium mb-3">
                    {leadData.marker || "Not set"}
                  </p>
                </div>
                <select
                  value={selectedMarker}
                  onChange={(e) => setSelectedMarker(e.target.value)}
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 mb-3"
                >
                  <option value="">Select marker...</option>
                  <option value="Hot">Hot Lead</option>
                  <option value="Warm">Warm Lead</option>
                  <option value="Cold">Cold Lead</option>
                </select>
                <button
                  onClick={handleMarkerUpdate}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Update
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Remarks History */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <History className="w-4 h-4 text-purple-300" />
                </div>
                Remarks History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {leadData.remarks.length === 0 ? (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
                  <p className="text-white/60">No remarks yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {leadData.remarks.map((remark, index) => (
                    <div
                      key={index}
                      className="p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <p className="text-white text-sm mb-2">{remark.text}</p>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>{remark.author}</span>
                        <span>{remark.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Status History */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <History className="w-4 h-4 text-blue-300" />
                </div>
                Status History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {leadData.statusHistory.length === 0 ? (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
                  <p className="text-white/60">
                    No status changes recorded yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {leadData.statusHistory.map((change, index) => (
                    <div
                      key={index}
                      className="p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium">
                          {change.status}
                        </span>
                        <span className="text-white/60 text-xs">
                          {change.date}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs">
                        Changed by: {change.changedBy}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <a
                  href={`tel:${leadData.phone}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`mailto:${leadData.email}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print Details
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
