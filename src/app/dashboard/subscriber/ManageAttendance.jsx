import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Eye, Users, Mail, Clock, Activity } from "lucide-react";

// Mock data
const mockSubscribers = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    status: "Active",
    totalHours: "156h 30m",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    status: "Active",
    totalHours: "142h 15m",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    status: "Inactive",
    totalHours: "98h 45m",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    status: "Active",
    totalHours: "178h 20m",
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    status: "Active",
    totalHours: "134h 10m",
  },
];

export default function ManageAttendance() {
  const navigate = useNavigate();
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchSubscribers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubscribers(mockSubscribers);
      setLoading(false);
    };

    fetchSubscribers();
  }, []);

  const handleViewAttendance = (subscriber) => {
    // Use React Router navigation instead of window.location.href
    navigate(`/dashboard/subscriber/attendance/${subscriber.id}`);
  };

  const getStatusBadge = (status) => {
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === "Active"
            ? "bg-green-500/20 text-green-300 border border-green-500/30"
            : "bg-red-500/20 text-red-300 border border-red-500/30"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Manage Attendance
              </h1>
              <p className="text-white/70">
                Monitor and manage sub-subscriber attendance records
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Users className="w-5 h-5" />
              <span>{subscribers.length} Sub-Subscribers</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscribers List */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardContent className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60">Loading sub-subscribers...</p>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60">No sub-subscribers found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Email
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Total Hours
                        </th>
                        <th className="text-center py-3 px-4 text-white/80 font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((subscriber) => (
                        <tr
                          key={subscriber.id}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                                {subscriber.name.charAt(0)}
                              </div>
                              <span className="text-white font-medium">
                                {subscriber.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2 text-white/70">
                              <Mail className="w-4 h-4" />
                              <span>{subscriber.email}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            {getStatusBadge(subscriber.status)}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2 text-white/70">
                              <Clock className="w-4 h-4" />
                              <span>{subscriber.totalHours}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center">
                              <Button
                                size="sm"
                                onClick={() => handleViewAttendance(subscriber)}
                                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30"
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {subscribers.map((subscriber) => (
                  <Card
                    key={subscriber.id}
                    className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                            {subscriber.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-white font-medium">
                              {subscriber.name}
                            </h3>
                            <p className="text-white/60 text-sm">
                              {subscriber.email}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(subscriber.status)}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">
                            {subscriber.totalHours}
                          </span>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleViewAttendance(subscriber)}
                          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30"
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
    </div>
  );
}
