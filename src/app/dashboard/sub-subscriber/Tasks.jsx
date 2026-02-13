import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  XCircle,
  Edit,
  Trash2,
  Eye,
  ChevronDown,
  Loader2,
} from "lucide-react";

// Mock tasks data - in real app, this would come from API
const mockTasksData = [
  {
    id: "TSK-001",
    title: "Follow up with John Smith",
    description:
      "Contact John regarding his job consultancy inquiry and discuss available opportunities in San Francisco.",
    leadId: "LD-001",
    leadName: "John Smith",
    priority: "High",
    status: "In Progress",
    dueDate: "30 Jan 2026",
    assignedBy: "Admin User",
    createdDate: "27 Jan 2026",
    lastUpdated: "28 Jan 2026",
  },
  {
    id: "TSK-002",
    title: "Prepare loan documents for Sarah",
    description:
      "Gather and prepare all necessary documentation for Sarah's business loan application.",
    leadId: "LD-002",
    leadName: "Sarah Johnson",
    priority: "Medium",
    status: "Pending",
    dueDate: "02 Feb 2026",
    assignedBy: "Admin User",
    createdDate: "26 Jan 2026",
    lastUpdated: "26 Jan 2026",
  },
  {
    id: "TSK-003",
    title: "Schedule meeting with Michael",
    description:
      "Set up a consultation call to discuss investment opportunities and portfolio management.",
    leadId: "LD-003",
    leadName: "Michael Brown",
    priority: "High",
    status: "Completed",
    dueDate: "28 Jan 2026",
    assignedBy: "Admin User",
    createdDate: "25 Jan 2026",
    lastUpdated: "27 Jan 2026",
  },
  {
    id: "TSK-004",
    title: "Update CRM with new leads",
    description:
      "Add all new leads from the weekly report to the CRM system with proper categorization.",
    leadId: null,
    leadName: null,
    priority: "Low",
    status: "Pending",
    dueDate: "05 Feb 2026",
    assignedBy: "Admin User",
    createdDate: "27 Jan 2026",
    lastUpdated: "27 Jan 2026",
  },
];

// Mock leads data for dropdown
const mockLeadsData = [
  { id: "LD-001", name: "John Smith" },
  { id: "LD-002", name: "Sarah Johnson" },
  { id: "LD-003", name: "Michael Brown" },
];

export default function SubSubscriberTasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("dueDate");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    leadId: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
    assignTo: "",
  });

  // Simulate fetching tasks data
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTasks(mockTasksData);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  // Filter and sort tasks
  const filteredAndSortedTasks = tasks
    .filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || task.status === statusFilter;
      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (sortBy === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else if (sortBy === "priority") {
        const priorityOrder = { High: 0, Medium: 1, Low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  const handleViewTask = (taskId) => {
    navigate(`/dashboard/sub-subscriber/tasks/${taskId}`);
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) return;

    const task = {
      id: `TSK-${String(tasks.length + 1).padStart(3, "0")}`,
      title: newTask.title,
      description: newTask.description,
      leadId: newTask.leadId || null,
      leadName: newTask.leadId
        ? mockLeadsData.find((lead) => lead.id === newTask.leadId)?.name
        : null,
      priority: newTask.priority,
      status: newTask.status,
      dueDate: newTask.dueDate,
      assignedBy: "Current User",
      createdDate: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      lastUpdated: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setTasks([task, ...tasks]);
    setNewTask({
      title: "",
      description: "",
      leadId: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
      assignTo: "",
    });
    setShowCreateModal(false);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const handleMarkCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: "Completed",
              lastUpdated: new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
            }
          : task,
      ),
    );
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
          <p className="text-white/60">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header Section */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Tasks
              </h1>
              <p className="text-white/70">Manage your assigned tasks</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              Create Task
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Filters Section */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 appearance-none"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none" />
            </div>

            {/* Priority Filter */}
            <div className="relative">
              <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 appearance-none"
              >
                <option value="All">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 appearance-none"
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="priority">Sort by Priority</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardContent className="p-6">
          {filteredAndSortedTasks.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60">No tasks found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Task
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Lead
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Priority
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Due Date
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAndSortedTasks.map((task) => (
                      <tr
                        key={task.id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="text-white font-medium">
                              {task.title}
                            </p>
                            <p className="text-white/60 text-sm line-clamp-1">
                              {task.description}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {task.leadName ? (
                            <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                              {task.leadName}
                            </span>
                          ) : (
                            <span className="text-white/60">-</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                          >
                            {task.priority}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                          >
                            {task.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-white/60" />
                            <span className="text-white text-sm">
                              {task.dueDate}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleViewTask(task.id)}
                              className="p-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors"
                              title="View"
                            >
                              <Eye className="w-3 h-3" />
                            </button>
                            <button
                              className="p-1.5 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="p-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                            {task.status !== "Completed" && (
                              <button
                                onClick={() => handleMarkCompleted(task.id)}
                                className="p-1.5 bg-emerald-500/20 text-emerald-300 rounded hover:bg-emerald-500/30 transition-colors"
                                title="Mark as Completed"
                              >
                                <CheckCircle className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {filteredAndSortedTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="mb-3">
                      <h3 className="text-white font-medium mb-1">
                        {task.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2">
                        {task.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {task.leadName && (
                        <div>
                          <p className="text-white/60 text-xs">Lead</p>
                          <p className="text-blue-400 text-sm">
                            {task.leadName}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-white/60 text-xs">Due Date</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-white/60" />
                          <span className="text-white text-sm">
                            {task.dueDate}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Priority</p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">Status</p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                        >
                          {task.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewTask(task.id)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors text-sm">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      {task.status !== "Completed" && (
                        <button
                          onClick={() => handleMarkCompleted(task.id)}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create Task Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white">Create New Task</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm block mb-2">
                    Task Title *
                  </label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Enter task title"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm block mb-2">
                    Description
                  </label>
                  <textarea
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 h-24 resize-none"
                    placeholder="Enter task description"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      Related Lead
                    </label>
                    <select
                      value={newTask.leadId}
                      onChange={(e) =>
                        setNewTask({ ...newTask, leadId: e.target.value })
                      }
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="">Select lead...</option>
                      {mockLeadsData.map((lead) => (
                        <option key={lead.id} value={lead.id}>
                          {lead.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      Priority
                    </label>
                    <select
                      value={newTask.priority}
                      onChange={(e) =>
                        setNewTask({ ...newTask, priority: e.target.value })
                      }
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) =>
                        setNewTask({ ...newTask, dueDate: e.target.value })
                      }
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      Assign To
                    </label>
                    <input
                      type="text"
                      value={newTask.assignTo}
                      onChange={(e) =>
                        setNewTask({ ...newTask, assignTo: e.target.value })
                      }
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateTask}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Save Task
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
