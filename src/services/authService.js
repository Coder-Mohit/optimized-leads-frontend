import axiosInstance from "./axiosInstance";

export const authService = {
  login: async (credentials) => {
    console.log("Sending login request with credentials:", {
      email: credentials.email,
      password: "***", // Hide password in logs
    });

    try {
      const response = await axiosInstance.post("api/login/", credentials);
      console.log("Login API response:", response.status, response.data);

      // Check for error response structure
      if (response.data?.success === false && response.data?.errors) {
        console.error("Login API returned error:", response.data.errors);
        const error = new Error(
          response.data.errors.non_field_errors?.[0] || "Login failed",
        );
        error.response = { data: response.data };
        throw error;
      }

      return response.data;
    } catch (error) {
      console.error("Login service error:", error);
      console.error("Error details:", error.response?.data || error.message);

      // Re-throw with consistent error structure
      if (error.response?.data?.errors?.non_field_errors) {
        const apiError = new Error(
          error.response.data.errors.non_field_errors[0],
        );
        apiError.response = error.response;
        throw apiError;
      }

      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post("api/logout/");
      return response.data;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const response = await axiosInstance.post("api/refresh/");
      return response.data;
    } catch (error) {
      console.error("Refresh token error:", error);
      throw error;
    }
  },

  getUser: async () => {
    try {
      const response = await axiosInstance.get("api/user/");
      return response.data;
    } catch (error) {
      console.error("Get user error:", error);
      throw error;
    }
  },
};

export default authService;
