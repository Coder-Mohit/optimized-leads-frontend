import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  ArrowLeft,
  Clock,
  History,
  Info,
  Search,
  User,
  Users,
  Wand2,
} from "lucide-react";

const mockUsers = Array.from({ length: 19 }).map((_, i) => {
  const n = i + 1;
  const email = n % 3 === 0 ? `chris${n}@gmail.com` : `demo${n}@gmail.com`;
  return {
    id: `U-${100 + n}`,
    email,
    role: n % 2 === 0 ? "Subscriber" : "Premium",
    leadsCount: n % 5 === 0 ? 5 : (n % 7) + 1,
  };
});

const mockAssignedLeads = [
  {
    id: "study-1763",
    category: "Study Abroad",
    status: "Call Not Receive",
  },
  {
    id: "real-1021",
    category: "Real Estate",
    status: "New",
  },
  {
    id: "mba-244",
    category: "Online MBA",
    status: "Contacted",
  },
  {
    id: "forex-78",
    category: "Forex Trade",
    status: "New",
  },
  {
    id: "job-310",
    category: "Job Consultancy",
    status: "Converted",
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
    status === "Converted"
      ? "bg-emerald-500/15 text-emerald-200 border-white/10"
      : status === "Contacted"
        ? "bg-amber-500/15 text-amber-200 border-white/10"
        : status === "Call Not Receive"
          ? "bg-rose-500/15 text-rose-200 border-white/10"
          : "bg-blue-500/15 text-blue-200 border-white/10";

  return <Pill className={cls}>{status}</Pill>;
}

function AvatarCircle({ label }) {
  const letter = (label || "U").trim().charAt(0).toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg">
      <span className="text-white font-semibold">{letter}</span>
    </div>
  );
}

export default function LeadReplacement() {
  const [step, setStep] = useState("select_user");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedLeadId, setSelectedLeadId] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [leadSearch, setLeadSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!userSearch.trim()) return mockUsers;
    const q = userSearch.toLowerCase();
    return mockUsers.filter((u) => u.email.toLowerCase().includes(q));
  }, [userSearch]);

  const filteredAssignedLeads = useMemo(() => {
    if (!leadSearch.trim()) return mockAssignedLeads;
    const q = leadSearch.toLowerCase();
    return mockAssignedLeads.filter(
      (l) => l.id.toLowerCase().includes(q) || l.category.toLowerCase().includes(q)
    );
  }, [leadSearch]);

  const openUser = (u) => {
    setSelectedUser(u);
    setSelectedLeadId("");
    setLeadSearch("");
    setStep("select_lead");
  };

  const backToUsers = () => {
    setStep("select_user");
    setSelectedLeadId("");
    setLeadSearch("");
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-start gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-white/20">
            <Wand2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Lead Replacement
            </h1>
            <p className="text-white/70 text-sm sm:text-base">
              {step === "select_user"
                ? "Select user for lead replacement"
                : "Select a lead to replace with a new one"}
            </p>
            {step === "select_lead" && selectedUser && (
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                User: {selectedUser.email}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        <div className="lg:col-span-8 xl:col-span-9">
          {step === "select_user" ? (
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader className="pb-4 border-b border-white/20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-white text-lg">Select User</CardTitle>
                    <p className="text-white/70 text-sm">
                      Choose a user to replace their leads
                    </p>
                  </div>
                  <Pill className="bg-white/10 text-white/80 border-white/20 w-fit">
                    {mockUsers.length} User’s
                  </Pill>
                </div>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                  <Input
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Search users by name or email..."
                    className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="max-h-[520px] overflow-y-auto no-scrollbar">
                  {filteredUsers.map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => openUser(u)}
                      className="w-full text-left px-4 sm:px-6 py-4 border-b border-white/10 hover:bg-white/5 transition"
                    >
                      <div className="flex items-center gap-3">
                        <AvatarCircle label={u.email} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="text-white font-semibold truncate">
                              {u.email}
                            </div>
                            <Pill className="bg-emerald-500/15 text-emerald-200 border-white/10">
                              {u.role}
                            </Pill>
                          </div>
                          <div className="text-white/60 text-xs mt-1 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            Leads Count: {u.leadsCount}
                          </div>
                        </div>
                        <div className="text-white/60 text-xs hidden sm:block">
                          Open
                        </div>
                      </div>
                    </button>
                  ))}

                  {filteredUsers.length === 0 && (
                    <div className="p-8 text-center text-white/70 text-sm">
                      No users found.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader className="pb-4 border-b border-white/20">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <CardTitle className="text-white text-lg truncate">
                        Assigned Leads for {selectedUser?.email}
                      </CardTitle>
                      <p className="text-white/70 text-sm">
                        Select a lead to replace with a new one
                      </p>
                    </div>
                    <Pill className="bg-white/10 text-white/80 border-white/20 w-fit">
                      {mockAssignedLeads.length} leads
                    </Pill>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <SoftButton onClick={backToUsers} className="sm:w-auto">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Users
                    </SoftButton>
                    <SoftButton className="sm:w-auto">
                      <History className="w-4 h-4" />
                      View History
                    </SoftButton>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    <Input
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      placeholder="Search leads by name, phone, email, or type..."
                      className="pl-9 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="p-4 sm:p-6">
                  <div className="space-y-3">
                    {filteredAssignedLeads.map((lead) => (
                      <label
                        key={lead.id}
                        className={`block rounded-2xl border transition-all duration-300 p-4 sm:p-5 cursor-pointer ${
                          selectedLeadId === lead.id
                            ? "bg-gradient-to-r from-blue-500/15 to-purple-600/15 border-white/30"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="selectedLead"
                            checked={selectedLeadId === lead.id}
                            onChange={() => setSelectedLeadId(lead.id)}
                            className="mt-1"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-white font-semibold">
                                {lead.id}
                              </span>
                              <Pill className="bg-white/10 text-white/80 border-white/10">
                                {lead.category}
                              </Pill>
                            </div>
                          </div>
                          <StatusPill status={lead.status} />
                        </div>
                      </label>
                    ))}

                    {filteredAssignedLeads.length === 0 && (
                      <div className="p-8 text-center text-white/70 text-sm">
                        No assigned leads found.
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <GradientButton
                      className="w-full sm:w-auto"
                      disabled={!selectedLeadId}
                      style={{
                        opacity: selectedLeadId ? 1 : 0.5,
                        cursor: selectedLeadId ? "pointer" : "not-allowed",
                      }}
                      type="button"
                    >
                      Select Lead for Replacement
                    </GradientButton>
                    <SoftButton className="w-full sm:w-auto" type="button">
                      Cancel
                    </SoftButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3">
              <SoftButton className="w-full" type="button">
                <Clock className="w-4 h-4" />
                Recent Activity
              </SoftButton>
              <SoftButton className="w-full" type="button">
                <Users className="w-4 h-4" />
                View All Users
              </SoftButton>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <CardTitle className="text-white text-lg">User Information</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {selectedUser ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <AvatarCircle label={selectedUser.email} />
                    <div className="min-w-0">
                      <div className="text-white font-semibold truncate">
                        {selectedUser.email}
                      </div>
                      <div className="text-white/60 text-xs truncate">
                        {selectedUser.email}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <div className="text-white/60 text-xs">Role</div>
                      <div className="text-white font-semibold text-sm mt-1">
                        {selectedUser.role}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <div className="text-white/60 text-xs">Leads</div>
                      <div className="text-white font-semibold text-sm mt-1">
                        {selectedUser.leadsCount}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-white/10 p-4">
                    <div className="flex items-start gap-2">
                      <User className="w-4 h-4 text-blue-200 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm">
                          Replacement Ready
                        </div>
                        <div className="text-white/70 text-xs mt-1">
                          Select a lead to replace. You’ll choose the replacement lead in the next step.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white/70 text-sm">
                  Select a user to view their info.
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader className="pb-4 border-b border-white/20">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-200" />
                <CardTitle className="text-white text-lg">
                  About Lead Replacement
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="text-white/70 text-sm">
                {step === "select_user"
                  ? "Select a user to replace their existing leads with new ones. This helps maintain lead quality and user engagement."
                  : "Select a lead to replace. You’ll be able to choose a new lead from available leads in the next step."}
              </div>

              <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-white font-semibold text-sm">Search Tips</div>
                <ul className="mt-2 text-white/70 text-xs space-y-1">
                  <li>Search by name or email</li>
                  <li>Partial matches are supported</li>
                  <li>Search is case-insensitive</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
