import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Plus, Grid, List, Calendar as CalendarIcon, AlertCircle, ChevronDown } from "lucide-react";
import EventCard from "../../../components/common/calendar/EventCard";
import ScheduleEventForm from "../../../components/common/calendar/ScheduleEventForm";
import EventViewModal from "../../../components/common/calendar/EventViewModal";
import ModalWrapper from "../../../components/common/modals/ModalWrapper";

// Mock data
const mockEventsData = [
  {
    id: "EVT-001",
    title: "Initial Consultation with John Smith",
    date: "2024-02-15",
    time: "10:00",
    duration: "30",
    type: "call",
    description: "Discuss John's requirements for job consultancy and explain our services.",
    relatedLead: "John Smith",
    createdDate: "2024-02-10T09:30:00Z",
  },
  {
    id: "EVT-002",
    title: "Follow-up Meeting - Sarah Johnson",
    date: "2024-02-15",
    time: "14:30",
    duration: "45",
    type: "meeting",
    description: "Review Sarah's progress on loan application and discuss next steps.",
    relatedLead: "Sarah Johnson",
    createdDate: "2024-02-11T11:20:00Z",
  },
  {
    id: "EVT-003",
    title: "Portfolio Review - Michael Brown",
    date: "2024-02-16",
    time: "11:00",
    duration: "60",
    type: "video",
    description: "Video call to review Michael's investment portfolio and suggest diversification strategies.",
    relatedLead: "Michael Brown",
    createdDate: "2024-02-12T14:15:00Z",
  },
  {
    id: "EVT-004",
    title: "CRM Data Update Task",
    date: "2024-02-16",
    time: "16:00",
    duration: "30",
    type: "task",
    description: "Update CRM with new leads from weekly report and categorize them properly.",
    relatedLead: null,
    createdDate: "2024-02-13T10:45:00Z",
  },
  {
    id: "EVT-005",
    title: "Client Presentation - Emily Davis",
    date: "2024-02-17",
    time: "09:30",
    duration: "90",
    type: "meeting",
    description: "Present comprehensive business plan to Emily and discuss implementation timeline.",
    relatedLead: "Emily Davis",
    createdDate: "2024-02-13T16:30:00Z",
  },
];

const mockLeadsData = [
  { id: "LD-001", name: "John Smith" },
  { id: "LD-002", name: "Sarah Johnson" },
  { id: "LD-003", name: "Michael Brown" },
  { id: "LD-004", name: "Emily Davis" },
];

export default function SubSubscriberCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "timeline"
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Simulate API call to fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEvents(mockEventsData);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // Sort events by date and time
  const sortedEvents = [...events].sort((a, b) => {
    const dateCompare = new Date(a.date) - new Date(b.date);
    if (dateCompare !== 0) return dateCompare;
    return new Date(`2000-01-01T${a.time}`) - new Date(`2000-01-01T${b.time}`);
  });

  // Group events by date for timeline view
  const groupedEvents = sortedEvents.reduce((groups, event) => {
    const date = event.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});

  const handleScheduleEvent = async (eventData) => {
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Create new event
      const newEvent = {
        id: `EVT-${String(events.length + 1).padStart(3, "0")}`,
        ...eventData,
        createdDate: new Date().toISOString(),
      };

      setEvents([...events, newEvent]);
      setShowScheduleModal(false);
      
      console.log("Event created successfully:", newEvent);
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditEvent = async (eventData) => {
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Update event
      const updatedEvents = events.map(event =>
        event.id === selectedEvent.id
          ? { ...event, ...eventData }
          : event
      );

      setEvents(updatedEvents);
      setShowEditModal(false);
      setSelectedEvent(null);
      
      console.log("Event updated successfully");
    } catch (error) {
      console.error("Error updating event:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteEvent = (event) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(e => e.id !== event.id));
      setShowViewModal(false);
      setSelectedEvent(null);
      console.log("Event deleted:", event.id);
    }
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
    setShowViewModal(true);
  };

  const handleEditEventClick = (event) => {
    setSelectedEvent(event);
    setShowViewModal(false);
    setShowEditModal(true);
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return date.toDateString() === today.toDateString();
  };

  const isPast = (dateString, timeString) => {
    const eventDateTime = new Date(`${dateString}T${timeString}`);
    return eventDateTime < new Date();
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                My Calendar
              </h1>
              <p className="text-white/70">Manage your meetings and calls</p>
            </div>
            <Button
              onClick={() => setShowScheduleModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Plus className="w-4 h-4" />
              Schedule Event
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* View Toggle */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">View:</span>
              <div className="flex bg-white/10 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 text-sm ${viewMode === "grid" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "timeline" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("timeline")}
                  className={`px-3 py-1 text-sm ${viewMode === "timeline" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                >
                  <List className="w-4 h-4 mr-2" />
                  Timeline
                </Button>
              </div>
            </div>
            <div className="text-white/60 text-sm">
              {events.length} events scheduled
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Display */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <CalendarIcon className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 mb-4">No events scheduled yet</p>
              <Button
                onClick={() => setShowScheduleModal(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Schedule Your First Event
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {viewMode === "grid" ? (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onView={handleViewEvent}
                      onEdit={handleEditEventClick}
                      onDelete={handleDeleteEvent}
                    />
                  ))}
                </div>
              ) : (
                /* Timeline View */
                <div className="space-y-6">
                  {Object.entries(groupedEvents).map(([date, dateEvents]) => (
                    <div key={date} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {formatDate(date)}
                        </h3>
                        {isToday(date) && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="space-y-3">
                        {dateEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`relative ${isPast(event.date, event.time) ? 'opacity-60' : ''}`}
                          >
                            <EventCard
                              event={event}
                              onView={handleViewEvent}
                              onEdit={handleEditEventClick}
                              onDelete={handleDeleteEvent}
                              compact={true}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Schedule Event Modal */}
      <ModalWrapper
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule New Event"
        maxWidth="max-w-2xl"
      >
        <ScheduleEventForm
          onSubmit={handleScheduleEvent}
          onCancel={() => setShowScheduleModal(false)}
          loading={submitting}
          leads={mockLeadsData}
        />
      </ModalWrapper>

      {/* Edit Event Modal */}
      <ModalWrapper
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Event"
        maxWidth="max-w-2xl"
      >
        <ScheduleEventForm
          onSubmit={handleEditEvent}
          onCancel={() => setShowEditModal(false)}
          initialData={selectedEvent}
          loading={submitting}
          leads={mockLeadsData}
        />
      </ModalWrapper>

      {/* View Event Modal */}
      <EventViewModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        event={selectedEvent}
        onEdit={handleEditEventClick}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}
