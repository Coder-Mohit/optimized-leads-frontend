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
  Meeting: { color: "bg-blue-100 text-blue-700", icon: Users },
  Presentation: { color: "bg-purple-100 text-purple-700", icon: CalendarIcon },
  Training: { color: "bg-green-100 text-green-700", icon: Clock },
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
        <div key={`empty-${i}`} className="h-24 border border-gray-100"></div>,
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
          className={`h-24 border border-gray-100 p-2 cursor-pointer transition-colors ${
            isSelected ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"
          } ${isToday ? "bg-yellow-50" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div
            className={`text-sm font-medium mb-1 ${
              isToday ? "text-blue-600" : "text-gray-900"
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
              <div className="text-xs text-gray-500">
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
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-full">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-xl">
              <CalendarIcon className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
              <p className="text-gray-600">
                Manage your schedule and appointments
              </p>
            </div>
          </div>
          <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            New Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("prev")}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth("next")}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Day headers */}
              <div className="grid grid-cols-7 border-b border-gray-200">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="p-3 text-center text-sm font-medium text-gray-700"
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
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
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
                        className="border-l-4 border-blue-500 pl-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <EventIcon className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-900">
                            {event.title}
                          </span>
                          <Badge className={eventTypeConfig[event.type].color}>
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
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
                    <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <div className="text-gray-400 text-sm">
                      No events scheduled
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
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
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div
                          className={`p-2 rounded-lg ${eventTypeConfig[event.type].color}`}
                        >
                          <EventIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {event.title}
                          </div>
                          <div className="text-xs text-gray-500">
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
  );
}
