import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { Layout, Users, Package, Ticket } from "lucide-react";
import { Layers, Repeat2, Mail } from "lucide-react";
import { CheckCircle, Calendar, Clock } from "lucide-react";

export default function DashboardLayout() {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isAdmin = location.pathname.startsWith("/dashboard/admin");
  const isSubSubscriber = location.pathname.startsWith(
    "/dashboard/sub-subscriber",
  );

  const adminMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Layout,
      href: "/dashboard/admin",
    },
    {
      id: "categories",
      label: "Categories",
      icon: Layers,
      href: "/dashboard/admin/categories",
    },
    {
      id: "lead_replacement",
      label: "Lead Replacement",
      icon: Repeat2,
      href: "/dashboard/admin/lead-replacement",
    },
    {
      id: "products",
      label: "Products",
      icon: Package,
      href: "/dashboard/admin/products",
    },
    {
      id: "tickets",
      label: "Tickets",
      icon: Ticket,
      href: "/dashboard/admin/tickets",
    },
    {
      id: "users",
      label: "Users",
      icon: Users,
      href: "/dashboard/admin/users",
    },
    {
      id: "enquiries",
      label: "Enquiries",
      icon: Mail,
      href: "/dashboard/admin/enquiries",
    },
  ];

  const subSubscriberMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Layout,
      href: "/dashboard/sub-subscriber",
    },
    {
      id: "leads",
      label: "Leads",
      icon: Users,
      href: "/dashboard/sub-subscriber/leads",
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: CheckCircle,
      href: "/dashboard/sub-subscriber/tasks",
    },
    {
      id: "tickets",
      label: "Tickets",
      icon: Ticket,
      href: "/dashboard/sub-subscriber/tickets",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: Calendar,
      href: "/dashboard/sub-subscriber/calendar",
    },
  ];

  const subscriberMenuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Layout,
      href: "/dashboard/subscriber",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: Layout,
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
      icon: CheckCircle,
      href: "/dashboard/subscriber/tasks",
    },
    {
      id: "attendance",
      label: "Manage Attendance",
      icon: Clock,
      href: "/dashboard/subscriber/attendance",
    },
  ];

  const getActiveItem = () => {
    if (isAdmin) {
      const p = location.pathname;
      if (p.startsWith("/dashboard/admin/categories")) return "categories";
      if (p.startsWith("/dashboard/admin/lead-replacement"))
        return "lead_replacement";
      if (p.startsWith("/dashboard/admin/products")) return "products";
      if (p.startsWith("/dashboard/admin/tickets")) return "tickets";
      if (p.startsWith("/dashboard/admin/users")) return "users";
      if (p.startsWith("/dashboard/admin/enquiries")) return "enquiries";
      return "dashboard";
    }

    if (isSubSubscriber) {
      const p = location.pathname;
      if (p.startsWith("/dashboard/sub-subscriber/leads")) return "leads";
      if (p.startsWith("/dashboard/sub-subscriber/tasks")) return "tasks";
      if (p.startsWith("/dashboard/sub-subscriber/tickets")) return "tickets";
      if (p.startsWith("/dashboard/sub-subscriber/calendar")) return "calendar";
      return "dashboard";
    }

    const p = location.pathname;
    if (p.includes("/subscriber/analytics")) return "analytics";
    if (p.includes("/subscriber/leads")) return "leads";
    if (p.includes("/subscriber/tickets")) return "tickets";
    if (p.includes("/subscriber/calendar")) return "calendar";
    if (p.includes("/subscriber/tasks")) return "tasks";
    if (p.includes("/subscriber/attendance")) return "attendance";
    return "dashboard";
  };

  // Handle sidebar visibility based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Only set sidebar state on initial load, not on resize
      if (mobile && isSidebarOpen) {
        // If switching to mobile and sidebar is open, close it
        setIsSidebarOpen(false);
      }
    };

    // Set initial state
    checkScreenSize();

    // Add event listener
    const handleResize = () => {
      checkScreenSize();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    if (isMobile) {
      // On mobile, toggle open/close
      setIsSidebarOpen(true);
    } else {
      // On desktop, toggle collapse state
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isSidebarOpen) {
        const sidebar = document.getElementById("mobile-sidebar");
        const toggleButton = document.getElementById("sidebar-toggle");

        if (
          sidebar &&
          !sidebar.contains(event.target) &&
          toggleButton &&
          !toggleButton.contains(event.target)
        ) {
          handleSidebarClose();
        }
      }
    };

    if (isMobile && isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={handleSidebarClose}
        />
      )}

      {/* Sidebar - Fixed Position */}
      <div
        id="mobile-sidebar"
        className={`fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={handleSidebarToggle}
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
          isMobile={isMobile}
          activeItem={getActiveItem()}
          menuItems={
            isAdmin
              ? adminMenuItems
              : isSubSubscriber
                ? subSubscriberMenuItems
                : subscriberMenuItems
          }
        />
      </div>

      {/* Main Content Area - With Sidebar Offset */}
      <div
        className={`flex-1 min-w-0 flex flex-col transition-all duration-500 ease-in-out ${
          isMobile ? "ml-0" : isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Topbar */}
        <Topbar
          onSidebarToggle={handleSidebarToggle}
          isSidebarOpen={isSidebarOpen}
          isMobile={isMobile}
        />

        {/* Page Content */}
        <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
          <div className="relative z-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
