import React from "react";
import ModalWrapper from "../modals/ModalWrapper";
import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriorityBadge from "./TicketPriorityBadge";
import { Button } from "../../ui/button";
import { Calendar, MessageCircle, Clock, User } from "lucide-react";

const ViewTicketModal = ({ isOpen, onClose, ticket = null }) => {
  if (!ticket) return null;

  const formatDate = (dateString) => {
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

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={null}
      maxWidth="max-w-2xl"
      showCloseButton={true}
    >
      <div className="space-y-6">
        {/* Ticket Header */}
        <div className="text-center border-b border-white/20 pb-4">
          <h2 className="text-2xl font-bold text-white mb-2">{ticket.id}</h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <TicketStatusBadge status={ticket.status} />
            <TicketPriorityBadge priority={ticket.priority} />
          </div>
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="text-white/60 text-sm">Category</label>
              <p className="text-white font-medium capitalize">{ticket.category}</p>
            </div>
            <div>
              <label className="text-white/60 text-sm">Created Date</label>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(ticket.createdDate)}</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-white/60 text-sm">Priority</label>
              <TicketPriorityBadge priority={ticket.priority} />
            </div>
            <div>
              <label className="text-white/60 text-sm">Status</label>
              <TicketStatusBadge status={ticket.status} />
            </div>
          </div>
        </div>

        {/* Your Message */}
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <h3 className="text-white font-medium">Your Message</h3>
          </div>
          <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
            {ticket.description}
          </p>
        </div>

        {/* Admin Response */}
        {ticket.adminResponse ? (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-purple-400" />
              <h3 className="text-white font-medium">Admin Response</h3>
            </div>
            <p className="text-white/80 leading-relaxed whitespace-pre-wrap mb-3">
              {ticket.adminResponse}
            </p>
            {ticket.adminResponseDate && (
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Clock className="w-3 h-3" />
                <span>Responded on {formatDate(ticket.adminResponseDate)}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              <p className="text-yellow-300 font-medium">Waiting for admin response</p>
            </div>
            <p className="text-yellow-200/80 text-sm mt-2">
              Our team will review your ticket and respond as soon as possible.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-4 border-t border-white/20">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            Close
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ViewTicketModal;
