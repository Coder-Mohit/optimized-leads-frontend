import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Eye, Edit, Trash2, Calendar as CalendarIcon, Clock, User, ExternalLink } from "lucide-react";
import EventBadge from "./EventBadge";

const EventCard = ({ 
  event, 
  onView, 
  onEdit, 
  onDelete, 
  compact = false,
  className = "" 
}) => {
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

  const handleGoogleCalendar = () => {
    // Create Google Calendar URL
    const startDate = `${event.date}T${event.time}:00`;
    const endDate = new Date(`${event.date}T${event.time}:00`);
    endDate.setMinutes(endDate.getMinutes() + parseInt(event.duration));
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.replace(/-/g, "")}/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=${encodeURIComponent(event.description || "")}`;
    
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <Card className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 ${compact ? "hover:bg-white/15" : "hover:bg-white/10"} ${className}`}>
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className={`text-white font-medium mb-1 ${compact ? "text-sm" : "text-base"}`}>
              {event.title}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <EventBadge type={event.type} />
              {event.relatedLead && (
                <span className="text-white/60 text-xs flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {event.relatedLead}
                </span>
              )}
            </div>
          </div>
          {!compact && (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleGoogleCalendar}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Date and Time */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>{formatTime(event.time)} • {event.duration} min</span>
          </div>
        </div>

        {/* Description Preview */}
        {event.description && (
          <p className="text-white/60 text-sm line-clamp-2 mb-3">
            {event.description}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onView(event)}
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
          >
            <Eye className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onEdit(event)}
            className="text-green-400 hover:text-green-300 hover:bg-green-500/10"
          >
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDelete(event)}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
