import React from "react";
import { Flag } from "lucide-react";

const TicketPriorityBadge = ({ priority, className = "" }) => {
  const getPriorityConfig = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return {
          bgColor: "bg-red-500/20",
          textColor: "text-red-300",
          borderColor: "border-red-500/30",
          icon: "🔴",
        };
      case "medium":
        return {
          bgColor: "bg-yellow-500/20",
          textColor: "text-yellow-300",
          borderColor: "border-yellow-500/30",
          icon: "🟡",
        };
      case "low":
        return {
          bgColor: "bg-green-500/20",
          textColor: "text-green-300",
          borderColor: "border-green-500/30",
          icon: "🟢",
        };
      default:
        return {
          bgColor: "bg-gray-500/20",
          textColor: "text-gray-300",
          borderColor: "border-gray-500/30",
          icon: "⚪",
        };
    }
  };

  const config = getPriorityConfig(priority);

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit ${config.bgColor} ${config.textColor} ${config.borderColor} ${className}`}
    >
      <Flag className="w-3 h-3" />
      {priority || "Unknown"}
    </span>
  );
};

export default TicketPriorityBadge;
