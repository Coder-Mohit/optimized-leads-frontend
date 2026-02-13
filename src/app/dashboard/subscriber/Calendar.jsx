import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Users,
  MapPin,
} from "lucide-react";

// Mock data for calendar events
const mockEvents = [
  {
    id: 1,
    title: "Lead Follow-up: Rahul Sharma",
    description: "Discuss study abroad options",
    date: "2024-02-07",
    time: "10:00 AM",
    type: "Meeting",
    priority: "High",
    attendees: ["John Doe", "Rahul Sharma"],
    location: "Office",
  },
  {
    id: 2,
    title: "Team Standup",
    description: "Daily team sync meeting",
    date: "2024-02-07",
    time: "11:00 AM",
    type: "Meeting",
    priority: "Medium",
    attendees: ["Team"],
    location: "Conference Room A",
  },
  {
    id: 3,
    title: "Client Presentation",
    description: "Q1 performance review",
    date: "2024-02-08",
    time: "2:00 PM",
    type: "Presentation",
    priority: "High",
    attendees: ["Management", "Client"],
    location: "Main Hall",
  },
  {
    id: 4,
    title: "Training Session",
    description: "New CRM features training",
    date: "2024-02-09",
    time: "3:00 PM",
    type: "Training",
    priority: "Low",
    attendees: ["Sales Team"],
    location: "Training Room",
  },
];

const eventTypeConfig = {
  Meeting: {
    color: "bg-blue-500/20 text-blue-300 border border-blue-400/30",
    icon: Users,
  },
  Presentation: {
    color: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
    icon: CalendarIcon,
  },
  Training: {
    color: "bg-green-500/20 text-green-300 border border-green-400/30",
    icon: Clock,
  },
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const getEventsForDate = (date) => {
    const dateStr = formatDate(date);
    return mockEvents.filter((event) => event.date === dateStr);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-16 sm:h-20 md:h-24 border border-white/10"
        ></div>,
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      const events = getEventsForDate(date);
      const isSelected = formatDate(date) === formatDate(selectedDate);
      const isToday = formatDate(date) === formatDate(new Date());

      days.push(
        <div
          key={day}
          className={`h-16 sm:h-20 md:h-24 border border-white/10 p-1 sm:p-2 cursor-pointer transition-colors ${
            isSelected
              ? "bg-blue-500/20 border-blue-400/30"
              : "hover:bg-white/5"
          } ${isToday ? "bg-yellow-500/20" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div
            className={`text-sm font-medium mb-1 ${
              isToday ? "text-blue-300" : "text-white"
            }`}
          >
            {day}
          </div>
          <div className="space-y-1">
            {events.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className={`text-xs p-1 rounded truncate ${eventTypeConfig[event.type].color}`}
              >
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-white/60">
                +{events.length - 2} more
              </div>
            )}
          </div>
        </div>,
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <div className="p-4 sm:p-6 min-h-full relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 mb-4 lg:mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CalendarIcon className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  Calendar
                </h1>
                <p className="text-white/70 text-sm sm:text-base">
                  Manage your schedule and appointments
                </p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group w-full lg:w-auto">
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              <span className="hidden sm:inline">New Event</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-white">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      className="border-white/20 text-white hover:bg-white/20"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="border-white/20 text-white hover:bg-white/20"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Day headers */}
                <div className="grid grid-cols-7 border-b border-white/20">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="p-3 text-center text-sm font-medium text-white/80"
                      >
                        {day}
                      </div>
                    ),
                  )}
                </div>
                {/* Calendar days */}
                <div className="grid grid-cols-7">{renderCalendar()}</div>
              </CardContent>
            </Card>
          </div>

          {/* Events Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Info */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-white">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map((event) => {
                      const EventIcon = eventTypeConfig[event.type].icon;
                      return (
                        <div
                          key={event.id}
                          className="border-l-4 border-blue-400/70 pl-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <EventIcon className="w-4 h-4 text-blue-300" />
                            <span className="font-medium text-white">
                              {event.title}
                            </span>
                            <Badge
                              className={eventTypeConfig[event.type].color}
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70 mb-2">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-white/60">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8">
                      <CalendarIcon className="w-12 h-12 text-white/40 mx-auto mb-4" />
                      <div className="text-white/60 text-sm">
                        No events scheduled
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-white">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockEvents
                    .filter((event) => new Date(event.date) >= new Date())
                    .slice(0, 3)
                    .map((event) => {
                      const EventIcon = eventTypeConfig[event.type].icon;
                      return (
                        <div
                          key={event.id}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <div
                            className={`p-2 rounded-lg ${eventTypeConfig[event.type].color}`}
                          >
                            <EventIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white text-sm">
                              {event.title}
                            </div>
                            <div className="text-xs text-white/60">
                              {event.date} at {event.time}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
