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
  MoreHorizontal,
  Plus,
  Search,
  Shield,
  TrendingUp,
  User,
  UserCheck,
  UserX,
  X,
  Calendar,
  Activity,
} from "lucide-react";

const mockUsers = Array.from({ length: 20 }).map((_, i) => {
  const n = i + 1;
  const firstNames = ["John", "Jane", "Mike", "Sarah", "Alex", "David", "Emma", "Chris", "Lisa", "Tom"];
  const lastNames = ["Smith", "Johnson", "Wilson", "Brown", "Davis", "Miller", "Garcia", "Rodriguez", "Martinez", "Anderson"];
  const roles = ["Admin", "Subscriber", "Premium", "Moderator"];
  const statuses = ["Active", "Inactive", "Suspended"];
  
  const firstName = firstNames[n % firstNames.length];
  const lastName = lastNames[n % lastNames.length];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
  
  return {
    id: `USR-${1000 + n}`,
    firstName,
    lastName,
    email,
    role: roles[n % roles.length],
    status: statuses[n % statuses.length],
    joinedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    leadsCount: Math.floor(Math.random() * 50) + 5,
    ticketsCount: Math.floor(Math.random() * 20) + 1,
    satisfaction: Math.floor(Math.random() * 3) + 3,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=6366f1&color=fff&size=64`,
  };
});

const roles = [
  { name: "All", count: mockUsers.length, color: "from-gray-500/20 to-gray-600/20" },
  { name: "Admin", count: mockUsers.filter(u => u.role === "Admin").length, color: "from-red-500/20 to-pink-600/20" },
  { name: "Subscriber", count: mockUsers.filter(u => u.role === "Subscriber").length, color: "from-blue-500/20 to-cyan-600/20" },
  { name: "Premium", count: mockUsers.filter(u => u.role === "Premium").length, color: "from-purple-500/20 to-pink-600/20" },
  { name: "Moderator", count: mockUsers.filter(u => u.role === "Moderator").length, color: "from-emerald-500/20 to-teal-600/20" },
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
    status === "Active"
      ? "bg-emerald-500/15 text-emerald-200 border-white/10"
      : status === "Inactive"
        ? "bg-gray-500/15 text-gray-200 border-white/10"
        : "bg-rose-500/15 text-rose-200 border-white/10";

  return <Pill className={cls}>{status}</Pill>;
}

function RolePill({ role }) {
  const cls =
    role === "Admin"
      ? "bg-red-500/15 text-red-200 border-white/10"
      : role === "Premium"
        ? "bg-purple-500/15 text-purple-200 border-white/10"
        : role === "Moderator"
          ? "bg-emerald-500/15 text-emerald-200 border-white/10"
          : "bg-blue-500/15 text-blue-200 border-white/10";

  return <Pill className={cls}>{role}</Pill>;
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

export default function Users() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredUsers = useMemo(() => {
    let users = mockUsers;
    if (search.trim()) {
      const q = search.toLowerCase();
      users = users.filter(
        (u) =>
          u.firstName.toLowerCase().includes(q) ||
          u.lastName.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.id.toLowerCase().includes(q)
      );
    }
    if (selectedRole !== "All") {
      users = users.filter((u) => u.role === selectedRole);
    }
    if (selectedStatus !== "All") {
      users = users.filter((u) => u.status === selectedStatus);
    }
    return users;
  }, [search, selectedRole, selectedStatus]);

  const stats = useMemo(() => {
    const total = mockUsers.length;
    const active = mockUsers.filter((u) => u.status === "Active").length;
    const premium = mockUsers.filter((u) => u.role === "Premium").length;
    const avgSatisfaction = (
      mockUsers.reduce((sum, u) => sum + u.satisfaction, 0) / mockUsers.length
    ).toFixed(1);
    return { total, active, premium, avgSatisfaction };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) return `${diffYears}y ago`;
    if (diffMonths > 0) return `${diffMonths}m ago`;
    if (diffDays > 0) return `${diffDays}d ago`;
    return "Today";
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Users
              </h1>
              <p className="text-white/70 text-sm sm:text-base">
                Manage user accounts and permissions
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
              <span className="hidden sm:inline">Add User</span>
              <span className="sm:hidden">Add</span>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Total Users</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.total}</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Active</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.active}</p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Premium</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.premium}</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs sm:text-sm">Avg Satisfaction</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">{stats.avgSatisfaction}</p>
              </div>
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
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
                    <CardTitle className="text-white text-lg">User List</CardTitle>
                    <p className="text-white/70 text-sm">
                      {filteredUsers.length} of {mockUsers.length} users
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
                      placeholder="Search users by name, email, or ID..."
                      className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                    <Pill
                      onClick={() => setSelectedRole("All")}
                      className={`cursor-pointer transition-all ${
                        selectedRole === "All"
                          ? "bg-white/20 text-white border-white/30"
                          : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                      }`}
                    >
                      All
                    </Pill>
                    {roles.slice(1).map((role) => (
                      <Pill
                        key={role.name}
                        onClick={() => setSelectedRole(role.name)}
                        className={`cursor-pointer transition-all whitespace-nowrap ${
                          selectedRole === role.name
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/70 border-white/20 hover:bg-white/15"
                        }`}
                      >
                        {role.name} ({role.count})
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
                  {["Active", "Inactive", "Suspended"].map((status) => (
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
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="group rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={user.avatar}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                              />
                              <div className="min-w-0">
                                <h3 className="text-white font-semibold text-sm truncate">
                                  {user.firstName} {user.lastName}
                                </h3>
                                <p className="text-white/60 text-xs truncate">{user.email}</p>
                              </div>
                            </div>
                            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <RolePill role={user.role} />
                            <StatusPill status={user.status} />
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">User ID:</span>
                              <span className="text-white/80 truncate ml-2">{user.id}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Leads:</span>
                              <span className="text-white/80 ml-2">{user.leadsCount}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Tickets:</span>
                              <span className="text-white/80 ml-2">{user.ticketsCount}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/60">Joined:</span>
                              <span className="text-white/80 ml-2">{formatDate(user.joinedAt)}</span>
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-white/60 text-xs">Satisfaction:</span>
                              <SatisfactionStars rating={user.satisfaction} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={user.avatar}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-2">
                              <h3 className="text-white font-semibold truncate">
                                {user.firstName} {user.lastName}
                              </h3>
                              <RolePill role={user.role} />
                              <StatusPill status={user.status} />
                            </div>
                            <p className="text-white/60 text-sm mb-2">ID: {user.id}</p>
                            <p className="text-white/70 text-sm mb-3 truncate">{user.email}</p>
                            <div className="flex items-center gap-4 text-xs text-white/60">
                              <span>Leads: {user.leadsCount}</span>
                              <span>Tickets: {user.ticketsCount}</span>
                              <span>Joined: {formatDate(user.joinedAt)}</span>
                              <span>Last Active: {formatDate(user.lastActive)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <SatisfactionStars rating={user.satisfaction} />
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-white/60" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredUsers.length === 0 && (
                  <div className="p-8 text-center text-white/70 text-sm">
                    No users found matching your criteria.
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
                Add New User
              </GradientButton>
              <SoftButton className="w-full">
                <Mail className="w-4 h-4" />
                Email All Users
              </SoftButton>
              <SoftButton className="w-full">
                <BarChart3 className="w-4 h-4" />
                Export Users
              </SoftButton>
              <SoftButton className="w-full">
                <Shield className="w-4 h-4" />
                Manage Permissions
              </SoftButton>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                {mockUsers.slice(0, 4).map((user) => (
                  <div key={user.id} className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Activity className="w-3 h-3 text-white/70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">
                        {user.firstName} {user.lastName} logged in
                      </p>
                      <p className="text-white/60 text-xs">{formatDate(user.lastActive)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">User Management</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 text-white/70 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">Bulk Operations</div>
                  <div className="text-xs">
                    Select multiple users to perform bulk actions like role changes or status updates.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">Role Management</div>
                  <div className="text-xs">
                    Assign appropriate roles to control access levels and permissions.
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="text-white font-semibold text-xs mb-1">User Analytics</div>
                  <div className="text-xs">
                    Track user engagement, satisfaction scores, and activity patterns.
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
