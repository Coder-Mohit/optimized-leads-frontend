import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
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
  isOpen,
  onToggle,
  onClose,
  isMobile = false,
  activeItem = "dashboard",
  menuItems,
}) {
  const items = menuItems ?? sidebarMenuItems;

  return (
    <div
      className={`
    bg-white/10 backdrop-blur-xl border-r border-white/20
    shadow-2xl h-screen flex flex-col
    transition-transform duration-300 ease-in-out
    ${isCollapsed ? "w-20" : "w-64"}

    ${
      isMobile
        ? `fixed inset-y-0 left-0 z-50
         ${isOpen ? "translate-x-0" : "-translate-x-full"}`
        : "relative translate-x-0"
    }
  `}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-white/20 flex-shrink-0 h-16 flex items-center">
        <div
          className={`w-full flex items-center ${
            isCollapsed ? "justify-between" : "justify-between"
          }`}
        >
          {isCollapsed && <div className="w-10" />}
          {!isCollapsed && (
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300">
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

          <div className="flex items-center gap-1">
            {/* Mobile Close Button */}
            {isMobile && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
              </button>
            )}

            {/* Desktop Toggle Button */}
            {!isMobile && (
              <button
                onClick={onToggle}
                className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                ) : (
                  <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar ${isCollapsed ? "px-2" : ""}`}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={() => isMobile && onClose()}
              className={({ isActive }) =>
                `
    flex items-center rounded-xl transition-all duration-300 group
    ${
      isCollapsed ? "justify-center px-0 py-2" : "gap-3 px-3 py-2 justify-start"
    }
    ${
      isActive
        ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20"
        : "hover:bg-white/10"
    }
  `
              }
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`
    w-10 h-10 flex items-center justify-center
    flex-shrink-0
    rounded-lg transition-all duration-300
    ${
      isActive
        ? "bg-gradient-to-br from-blue-400/20 to-purple-600/20"
        : "bg-white/5 group-hover:bg-white/10"
    }
  `}
              >
                <Icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive
                      ? "text-blue-300"
                      : "text-white/60 group-hover:text-white"
                  }`}
                />
              </div>
              {!isCollapsed && (
                <span
                  className={`font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-white/20 flex-shrink-0">
        <div
          className={`p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group ${
            isCollapsed
              ? "flex flex-col items-center gap-3"
              : "flex items-center gap-3 justify-between"
          }`}
        >
          <div
            className={`${isCollapsed ? "w-12 h-12" : "w-10 h-10"} flex-shrink-0 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg`}
          >
            <User className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-white/60">Premium User</p>
            </div>
          )}
          {!isMobile && (
            <button
              className={`p-2 rounded-lg hover:bg-white/20 transition-all duration-300 group ${
                isCollapsed ? "w-10 h-10 flex items-center justify-center" : ""
              }`}
              aria-label="Logout"
              type="button"
            >
              <LogOut className="w-4 h-4 text-white/60 group-hover:text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
