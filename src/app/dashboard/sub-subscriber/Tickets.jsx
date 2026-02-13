import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Plus, Search, Eye, AlertCircle, Filter } from "lucide-react";
import TicketStatusBadge from "../../../components/common/tickets/TicketStatusBadge";
import TicketPriorityBadge from "../../../components/common/tickets/TicketPriorityBadge";
import CreateTicketModal from "../../../components/common/tickets/CreateTicketModal";
import ViewTicketModal from "../../../components/common/tickets/ViewTicketModal";
import FormField from "../../../components/common/form/FormField";

// Mock data
const mockTicketsData = [
  {
    id: "TKT-0738",
    category: "technical",
    priority: "high",
    status: "open",
    createdDate: "2024-02-10T10:30:00Z",
    description: "Having trouble accessing my account. The login page shows an error message when I try to enter my credentials.",
    adminResponse: null,
    adminResponseDate: null,
  },
  {
    id: "TKT-0737",
    category: "billing",
    priority: "medium",
    status: "in progress",
    createdDate: "2024-02-09T14:20:00Z",
    description: "I was charged twice for my subscription this month. Please review and refund the duplicate charge.",
    adminResponse: "We've reviewed your billing history and can confirm there was a duplicate charge. We've processed a refund which should appear in your account within 3-5 business days. We apologize for the inconvenience.",
    adminResponseDate: "2024-02-10T09:15:00Z",
  },
  {
    id: "TKT-0736",
    category: "feature",
    priority: "low",
    status: "closed",
    createdDate: "2024-02-08T16:45:00Z",
    description: "It would be great to have a dark mode option for the dashboard interface.",
    adminResponse: "Thank you for your suggestion! We've added this to our feature request backlog and will consider it for future updates. We appreciate your feedback!",
    adminResponseDate: "2024-02-09T11:30:00Z",
  },
  {
    id: "TKT-0735",
    category: "bug",
    priority: "high",
    status: "open",
    createdDate: "2024-02-07T09:15:00Z",
    description: "The export functionality is not working. When I try to export leads to CSV, the file downloads but is empty.",
    adminResponse: null,
    adminResponseDate: null,
  },
  {
    id: "TKT-0734",
    category: "account",
    priority: "medium",
    status: "closed",
    createdDate: "2024-02-06T13:20:00Z",
    description: "Need to update my email address associated with the account.",
    adminResponse: "Your email has been successfully updated. You should receive a confirmation email at your new address shortly.",
    adminResponseDate: "2024-02-06T15:45:00Z",
  },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "open", label: "Open" },
  { value: "in progress", label: "In Progress" },
  { value: "closed", label: "Closed" },
];

export default function SubSubscriberTickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Simulate API call to fetch tickets
  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTickets(mockTicketsData);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  // Filter tickets based on search and status
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateTicket = async (ticketData) => {
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Create new ticket
      const newTicket = {
        id: `TKT-${String(mockTicketsData.length + 1).padStart(4, "0")}`,
        category: ticketData.category,
        priority: ticketData.priority,
        status: "open",
        createdDate: new Date().toISOString(),
        description: ticketData.description,
        adminResponse: null,
        adminResponseDate: null,
      };

      setTickets([newTicket, ...tickets]);
      setShowCreateModal(false);
      
      // In real app, this would show a success toast
      console.log("Ticket created successfully:", newTicket);
    } catch (error) {
      console.error("Error creating ticket:", error);
      // In real app, this would show an error toast
    } finally {
      setSubmitting(false);
    }
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowViewModal(true);
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                My Tickets
              </h1>
              <p className="text-white/70">Track and manage your support tickets</p>
            </div>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Plus className="w-4 h-4" />
              New Ticket
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              type="search"
              placeholder="Search by Ticket ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FormField
              type="select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={statusOptions}
              icon={<Filter className="w-4 h-4" />}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60">Loading tickets...</p>
            </div>
          ) : filteredTickets.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60">No tickets found</p>
              <p className="text-white/40 text-sm mt-2">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Create your first ticket to get started"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Ticket ID
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Category
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Priority
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Created Date
                      </th>
                      <th className="text-left py-3 px-4 text-white/60 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTickets.map((ticket) => (
                      <tr
                        key={ticket.id}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className="text-white font-medium">
                            {ticket.id}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-white/80 capitalize">
                            {ticket.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <TicketPriorityBadge priority={ticket.priority} />
                        </td>
                        <td className="py-4 px-4">
                          <TicketStatusBadge status={ticket.status} />
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-white/80 text-sm">
                            {formatDate(ticket.createdDate)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewTicket(ticket)}
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {filteredTickets.map((ticket) => (
                  <Card
                    key={ticket.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-white font-medium mb-1">
                            {ticket.id}
                          </h3>
                          <p className="text-white/60 text-sm capitalize">
                            {ticket.category}
                          </p>
                        </div>
                        <TicketStatusBadge status={ticket.status} />
                      </div>

                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">Priority</span>
                          <TicketPriorityBadge priority={ticket.priority} />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">Created</span>
                          <span className="text-white/80 text-sm">
                            {formatDate(ticket.createdDate)}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewTicket(ticket)}
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create Ticket Modal */}
      <CreateTicketModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateTicket}
        loading={submitting}
      />

      {/* View Ticket Modal */}
      <ViewTicketModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        ticket={selectedTicket}
      />
    </div>
  );
}
