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
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  ChevronDown,
  Loader2,
  FileText,
  Target,
  Flag,
} from "lucide-react";

// Mock tasks data - in real app, this would come from API
const mockTasksData = [
  {
    id: "TSK-001",
    title: "Follow up with John Smith",
    description:
      "Contact John regarding his job consultancy inquiry and discuss available opportunities in San Francisco. Need to review his resume and prepare a list of suitable positions that match his 5 years of experience and notice period.",
    leadId: "LD-001",
    leadName: "John Smith",
    leadEmail: "john.smith@example.com",
    leadPhone: "+1 (555) 123-4567",
    priority: "High",
    status: "In Progress",
    dueDate: "30 Jan 2026",
    assignedBy: "Admin User",
    assignedTo: "Current User",
    createdDate: "27 Jan 2026",
    lastUpdated: "28 Jan 2026",
  },
  {
    id: "TSK-002",
    title: "Prepare loan documents for Sarah",
    description:
      "Gather and prepare all necessary documentation for Sarah's business loan application. This includes financial statements, business plan, tax returns, and collateral information.",
    leadId: "LD-002",
    leadName: "Sarah Johnson",
    leadEmail: "sarah.j@example.com",
    leadPhone: "+1 (555) 987-6543",
    priority: "Medium",
    status: "Pending",
    dueDate: "02 Feb 2026",
    assignedBy: "Admin User",
    assignedTo: "Current User",
    createdDate: "26 Jan 2026",
    lastUpdated: "26 Jan 2026",
  },
  {
    id: "TSK-003",
    title: "Schedule meeting with Michael",
    description:
      "Set up a consultation call to discuss investment opportunities and portfolio management. Review his current investment portfolio and suggest diversification strategies.",
    leadId: "LD-003",
    leadName: "Michael Brown",
    leadEmail: "michael.b@example.com",
    leadPhone: "+1 (555) 456-7890",
    priority: "High",
    status: "Completed",
    dueDate: "28 Jan 2026",
    assignedBy: "Admin User",
    assignedTo: "Current User",
    createdDate: "25 Jan 2026",
    lastUpdated: "27 Jan 2026",
  },
];

export default function SubSubscriberTaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("");

  // Simulate fetching task data by ID
  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundTask = mockTasksData.find((t) => t.id === id);

      if (foundTask) {
        setTask(foundTask);
        setSelectedStatus(foundTask.status);
      } else {
        // Task not found, redirect back to tasks
        navigate("/dashboard/sub-subscriber/tasks");
      }
      setLoading(false);
    };

    fetchTask();
  }, [id, navigate]);

  const handleStatusChange = () => {
    if (!task) return;

    const updatedTask = {
      ...task,
      status: selectedStatus,
      lastUpdated: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setTask(updatedTask);
    // In real app, this would make an API call
    console.log("Status updated:", { taskId: id, newStatus: selectedStatus });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      // In real app, this would make an API call
      console.log("Task deleted:", { taskId: id });
      navigate("/dashboard/sub-subscriber/tasks");
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-300 border border-red-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";
      case "Low":
        return "bg-green-500/20 text-green-300 border border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-300 border border-green-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
      case "Pending":
        return "bg-orange-500/20 text-orange-300 border border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-white animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading task details...</p>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
          <p className="text-white/60">Task not found</p>
          <button
            onClick={() => navigate("/dashboard/sub-subscriber/tasks")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard/sub-subscriber/tasks")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Tasks</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(task.priority)}`}
            >
              {task.priority} Priority
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}
            >
              {task.status}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-white mb-2">{task.title}</h1>
          <p className="text-white/70">Task ID: {task.id}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Task Description */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <FileText className="w-4 h-4 text-blue-300" />
                </div>
                Task Description
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-white leading-relaxed">{task.description}</p>
            </CardContent>
          </Card>

          {/* Lead Information */}
          {task.leadName && (
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader className="pb-4 border-b border-white/20">
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg flex items-center justify-center border border-white/10">
                    <User className="w-4 h-4 text-green-300" />
                  </div>
                  Related Lead Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-white/60 text-sm">Lead Name</label>
                    <p className="text-white font-medium">{task.leadName}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm">Email</label>
                    <a
                      href={`mailto:${task.leadEmail}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {task.leadEmail}
                    </a>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm">Phone</label>
                    <a
                      href={`tel:${task.leadPhone}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {task.leadPhone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Status Management */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <Edit className="w-4 h-4 text-purple-300" />
                </div>
                Status Management
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm block mb-2">
                    Change Status
                  </label>
                  <div className="flex gap-3">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="flex-1 p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button
                      onClick={handleStatusChange}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Update Status
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Information Panel */}
        <div className="space-y-6">
          {/* Task Details */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <Target className="w-4 h-4 text-orange-300" />
                </div>
                Task Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">Priority</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Flag className="w-4 h-4 text-white/60" />
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Due Date</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white">{task.dueDate}</span>
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Assigned By</label>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="w-4 h-4 text-white/60" />
                    <span className="text-white">{task.assignedBy}</span>
                  </div>
                </div>
                {task.assignedTo && (
                  <div>
                    <label className="text-white/60 text-sm">Assigned To</label>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="w-4 h-4 text-white/60" />
                      <span className="text-white">{task.assignedTo}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-white/10">
                  <Clock className="w-4 h-4 text-blue-300" />
                </div>
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">Created Date</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white">{task.createdDate}</span>
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Last Updated</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-white/60" />
                    <span className="text-white">{task.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit Task
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Task
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
