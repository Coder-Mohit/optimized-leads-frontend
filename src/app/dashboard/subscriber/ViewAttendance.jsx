import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, Calendar, Clock, Mail, User, Download } from "lucide-react";

// Mock data
const mockAttendanceData = {
  1: {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    attendance: [
      {
        date: "2026-02-01",
        punchIn: "09:00 AM",
        punchOut: "06:00 PM",
        totalHours: "9h",
      },
      {
        date: "2026-02-02",
        punchIn: "08:45 AM",
        punchOut: "06:15 PM",
        totalHours: "9.5h",
      },
      {
        date: "2026-02-03",
        punchIn: "09:15 AM",
        punchOut: "05:45 PM",
        totalHours: "8.5h",
      },
      {
        date: "2026-02-04",
        punchIn: "09:00 AM",
        punchOut: "06:30 PM",
        totalHours: "9.5h",
      },
      {
        date: "2026-02-05",
        punchIn: "08:30 AM",
        punchOut: "05:30 PM",
        totalHours: "9h",
      },
    ],
  },
  2: {
    id: "2",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    attendance: [
      {
        date: "2026-02-01",
        punchIn: "09:30 AM",
        punchOut: "06:30 PM",
        totalHours: "9h",
      },
      {
        date: "2026-02-02",
        punchIn: "09:00 AM",
        punchOut: "06:00 PM",
        totalHours: "9h",
      },
      {
        date: "2026-02-03",
        punchIn: "09:15 AM",
        punchOut: "06:15 PM",
        totalHours: "9h",
      },
    ],
  },
};

export default function ViewAttendance() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subscriber, setSubscriber] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("2026-02");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchSubscriberAttendance = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const data = mockAttendanceData[id];
      if (data) {
        setSubscriber(data);
      } else {
        // Handle not found
        navigate("/dashboard/subscriber/attendance");
      }
      setLoading(false);
    };

    fetchSubscriberAttendance();
  }, [id, navigate]);

  const handleExportCSV = () => {
    // Future implementation for CSV export
    console.log("Export CSV functionality");
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

  const calculateTotalHours = () => {
    if (!subscriber?.attendance) return "0h";

    const totalMinutes = subscriber.attendance.reduce((total, record) => {
      const hours = parseFloat(record.totalHours.replace("h", ""));
      return total + hours;
    }, 0);

    return `${totalMinutes}h`;
  };

  const getMonthOptions = () => {
    const months = [];
    const currentYear = new Date().getFullYear();

    for (let year = currentYear; year >= currentYear - 1; year--) {
      for (let month = 12; month >= 1; month--) {
        const monthStr = month.toString().padStart(2, "0");
        const monthName = new Date(year, month - 1).toLocaleDateString(
          "en-US",
          { month: "long", year: "numeric" },
        );
        months.push({
          value: `${year}-${monthStr}`,
          label: monthName,
        });
      }
    }

    return months;
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 min-h-full">
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading attendance data...</p>
        </div>
      </div>
    );
  }

  if (!subscriber) {
    return (
      <div className="p-4 sm:p-6 min-h-full">
        <div className="text-center py-12">
          <User className="w-12 h-12 text-white/30 mx-auto mb-4" />
          <p className="text-white/60">Subscriber not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 min-h-full">
      {/* Header */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/dashboard/subscriber/attendance")}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {subscriber.name}
                </h1>
                <p className="text-white/70 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {subscriber.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-5 h-5" />
              <span>Total Hours: {calculateTotalHours()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex-1 sm:max-w-xs">
                <label className="text-white/60 text-sm mb-1 block">
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                >
                  {getMonthOptions().map((month) => (
                    <option
                      key={month.value}
                      value={month.value}
                      className="bg-gray-800"
                    >
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 sm:max-w-xs">
                <label className="text-white/60 text-sm mb-1 block">
                  Date Filter
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                />
              </div>
            </div>
            <Button
              onClick={handleExportCSV}
              className="bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Attendance Records
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {subscriber.attendance.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <p className="text-white/60">No attendance records found</p>
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
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Punch In
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Punch Out
                        </th>
                        <th className="text-left py-3 px-4 text-white/80 font-medium">
                          Total Hours
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriber.attendance.map((record, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2 text-white">
                              <Calendar className="w-4 h-4" />
                              {formatDate(record.date)}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-white/70">
                            {record.punchIn}
                          </td>
                          <td className="py-4 px-4 text-white/70">
                            {record.punchOut}
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-green-400 font-medium">
                              {record.totalHours}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {subscriber.attendance.map((record, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-white">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">
                            {formatDate(record.date)}
                          </span>
                        </div>
                        <span className="text-green-400 font-medium">
                          {record.totalHours}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-white/60 text-sm mb-1">Punch In</p>
                          <p className="text-white">{record.punchIn}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">
                            Punch Out
                          </p>
                          <p className="text-white">{record.punchOut}</p>
                        </div>
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
