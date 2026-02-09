import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Layout,
  BarChart3,
  Users,
  Ticket,
  Calendar,
  CheckSquare,
  User,
  LogOut,
} from "lucide-react";

// Sidebar menu configuration
const sidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Layout,
    href: "/dashboard/subscriber",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/subscriber/analytics",
  },
  {
    id: "leads",
    label: "Leads",
    icon: Users,
    href: "/dashboard/subscriber/leads",
  },
  {
    id: "tickets",
    label: "Tickets",
    icon: Ticket,
    href: "/dashboard/subscriber/tickets",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
    href: "/dashboard/subscriber/calendar",
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: CheckSquare,
    href: "/dashboard/subscriber/tasks",
  },
];

export default function Sidebar({
  isCollapsed,
  onToggle,
  activeItem = "dashboard",
}) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl border-r border-white/20 transition-all duration-500 ease-in-out shadow-2xl h-screen flex flex-col ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-white/20 flex-shrink-0">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Optimized Leads"
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="transform transition-all duration-300">
                <span className="font-bold text-white text-lg bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Optimized Leads
                </span>
              </div>
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarMenuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="transform transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg border border-white/20"
                        : "text-white/70 hover:bg-white/10 hover:text-white hover:shadow-md"
                    }`
                  }
                >
                  {/* Active indicator */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <Icon
                    className={`w-5 h-5 flex-shrink-0 relative z-10 transition-all duration-300 ${
                      item.id === activeItem
                        ? "text-white scale-110"
                        : "group-hover:scale-110"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="font-medium relative z-10 transition-all duration-300">
                      {item.label}
                    </span>
                  )}

                  {/* Subtle glow effect */}
                  {item.id === activeItem && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md"></div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section - Fixed at Bottom */}
      <div className="p-4 border-t border-white/20 flex-shrink-0">
        {!isCollapsed ? (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">John Doe</div>
                <div className="text-xs text-white/60">john@example.com</div>
              </div>
            </div>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-red-400/30 group">
              <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg transform hover:scale-110 transition-all duration-300">
              <User className="w-5 h-5 text-white" />
            </div>
            <button className="w-full flex items-center justify-center p-3 text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-red-400/30">
              <LogOut className="w-4 h-4 hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
