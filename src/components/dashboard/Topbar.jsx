import { useState } from "react";
import { Menu, X, User, Settings, LogOut, Bell, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Topbar({
  onSidebarToggle,
  isSidebarOpen,
  isMobile,
  userName = "John Doe",
}) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-xl border-b border-white/20 px-4 sm:px-6 py-4 sticky top-0 z-40 shadow-lg h-16 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Sidebar Toggle and Search */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          {/* Hamburger Menu Button - Always visible on mobile, toggle on desktop */}
          <Button
            id="sidebar-toggle"
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            {isMobile ? (
              <Menu className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Menu className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
            )}
          </Button>

          {/* Search Bar - Hidden on small mobile */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-48 sm:w-64 md:w-80 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Section - Notifications and Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <Search className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative group"
          >
            <Bell className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </Button>

          {/* Profile Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-2 p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                {userName}
              </span>
            </Button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 py-2 z-50 animate-fade-in">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-white/50 transition-colors duration-200"
                >
                  <User className="w-4 h-4" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-white/50 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </a>
                <hr className="my-2 border-white/20" />
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
