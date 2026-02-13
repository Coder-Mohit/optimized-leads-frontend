import React from "react";

const TicketStatusBadge = ({ status, className = "" }) => {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case "open":
        return {
          bgColor: "bg-green-500/20",
          textColor: "text-green-300",
          borderColor: "border-green-500/30",
        };
      case "in progress":
        return {
          bgColor: "bg-yellow-500/20",
          textColor: "text-yellow-300",
          borderColor: "border-yellow-500/30",
        };
      case "closed":
        return {
          bgColor: "bg-gray-500/20",
          textColor: "text-gray-300",
          borderColor: "border-gray-500/30",
        };
      default:
        return {
          bgColor: "bg-blue-500/20",
          textColor: "text-blue-300",
          borderColor: "border-blue-500/30",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border ${config.bgColor} ${config.textColor} ${config.borderColor} ${className}`}
    >
      {status || "Unknown"}
    </span>
  );
};

export default TicketStatusBadge;
