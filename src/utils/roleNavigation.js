export const getRedirectPath = (userRole) => {
  switch (userRole?.toLowerCase()) {
    case "admin":
      return "/admin/dashboard";
    case "manager":
      return "/manager/dashboard";
    case "subscriber":
      return "/dashboard/subscriber"; // Subscriber specific dashboard
    case "agent":
      return "/agent/dashboard";
    case "superadmin":
      return "/superadmin/dashboard";
    default:
      return "/dashboard"; // Default fallback
  }
};

export const getHomePath = (userRole) => {
  switch (userRole?.toLowerCase()) {
    case "admin":
      return "/admin";
    case "manager":
      return "/manager";
    case "subscriber":
      return "/dashboard/subscriber"; // Subscriber home
    case "agent":
      return "/agent";
    case "superadmin":
      return "/superadmin";
    default:
      return "/dashboard";
  }
};
