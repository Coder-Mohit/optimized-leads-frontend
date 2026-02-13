import React from "react";
import { Phone, Users, Calendar, Video } from "lucide-react";

const EventBadge = ({ type, className = "" }) => {
  const getEventConfig = (type) => {
    switch (type?.toLowerCase()) {
      case "call":
        return {
          bgColor: "bg-green-500/20",
          textColor: "text-green-300",
          borderColor: "border-green-500/30",
          icon: Phone,
          label: "Call",
        };
      case "meeting":
        return {
          bgColor: "bg-blue-500/20",
          textColor: "text-blue-300",
          borderColor: "border-blue-500/30",
          icon: Users,
          label: "Meeting",
        };
      case "video":
        return {
          bgColor: "bg-purple-500/20",
          textColor: "text-purple-300",
          borderColor: "border-purple-500/30",
          icon: Video,
          label: "Video Call",
        };
      case "task":
        return {
          bgColor: "bg-orange-500/20",
          textColor: "text-orange-300",
          borderColor: "border-orange-500/30",
          icon: Calendar,
          label: "Task",
        };
      default:
        return {
          bgColor: "bg-gray-500/20",
          textColor: "text-gray-300",
          borderColor: "border-gray-500/30",
          icon: Calendar,
          label: "Event",
        };
    }
  };

  const config = getEventConfig(type);
  const Icon = config.icon;

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit ${config.bgColor} ${config.textColor} ${config.borderColor} ${className}`}
    >
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

export default EventBadge;
