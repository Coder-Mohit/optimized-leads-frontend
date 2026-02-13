import React from "react";
import ModalWrapper from "../modals/ModalWrapper";
import EventBadge from "./EventBadge";
import { Button } from "../../ui/button";
import { Calendar as CalendarIcon, Clock, User, FileText, Edit, Trash2, ExternalLink } from "lucide-react";

const EventViewModal = ({ isOpen, onClose, event = null, onEdit, onDelete }) => {
  if (!event) return null;

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

  const formatTime = (timeString) => {
    try {
      return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return timeString;
    }
  };

  const formatCreatedDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const handleGoogleCalendar = () => {
    const startDate = `${event.date}T${event.time}:00`;
    const endDate = new Date(`${event.date}T${event.time}:00`);
    endDate.setMinutes(endDate.getMinutes() + parseInt(event.duration));
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.replace(/-/g, "")}/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=${encodeURIComponent(event.description || "")}`;
    
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={null}
      maxWidth="max-w-lg"
      showCloseButton={true}
    >
      <div className="space-y-6">
        {/* Event Header */}
        <div className="text-center border-b border-white/20 pb-4">
          <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <EventBadge type={event.type} />
            {event.relatedLead && (
              <span className="text-white/60 text-sm flex items-center gap-1">
                <User className="w-3 h-3" />
                {event.relatedLead}
              </span>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-white/60 text-sm">Date</label>
                <div className="flex items-center gap-2 text-white mt-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{formatDate(event.date)}</span>
                </div>
              </div>
              <div>
                <label className="text-white/60 text-sm">Time</label>
                <div className="flex items-center gap-2 text-white mt-1">
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(event.time)}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-white/60 text-sm">Duration</label>
                <p className="text-white mt-1">{event.duration} minutes</p>
              </div>
              <div>
                <label className="text-white/60 text-sm">Event Type</label>
                <div className="mt-1">
                  <EventBadge type={event.type} />
                </div>
              </div>
            </div>
          </div>

          {event.relatedLead && (
            <div>
              <label className="text-white/60 text-sm">Related Lead</label>
              <div className="flex items-center gap-2 text-white mt-1">
                <User className="w-4 h-4" />
                <span>{event.relatedLead}</span>
              </div>
            </div>
          )}

          {event.description && (
            <div>
              <label className="text-white/60 text-sm">Description</label>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-1">
                <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>
            </div>
          )}

          <div>
            <label className="text-white/60 text-sm">Created</label>
            <p className="text-white/60 text-sm mt-1">
              {formatCreatedDate(event.createdDate)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <Button
              onClick={handleGoogleCalendar}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Add to Google Calendar
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Close
            </Button>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onEdit(event)}
              className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="outline"
              onClick={() => onDelete(event)}
              className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EventViewModal;
