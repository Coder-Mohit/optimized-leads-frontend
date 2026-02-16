import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import {
  login as loginAction,
  logout as logoutAction,
} from "../slices/authSlice";

// Async thunk for login with proper error handling
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      console.log("Raw API response:", response);

      // Handle different response structures
      let userData, accessToken, refreshToken;

      if (response.data) {
        // Response has nested data structure
        console.log("Using nested data structure");
        userData = response.data.user;
        accessToken = response.data.access;
        refreshToken = response.data.refresh;
      } else {
        // Response has flat structure
        console.log("Using flat structure");
        userData = response.user;
        accessToken = response.access;
        refreshToken = response.refresh;
      }

      console.log("Extracted user data:", userData);
      console.log("Extracted role:", userData?.role);

      // Store in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return {
        user: userData,
        token: accessToken,
        refreshToken: refreshToken,
      };
    } catch (error) {
      console.error("Login error:", error);
      // Extract error message properly for the new error structure
      let errorMessage = "Login failed";

      if (error.response?.data?.errors?.non_field_errors) {
        // Handle the new error structure: {success: false, errors: {non_field_errors: ["Invalid email or password"]}}
        errorMessage = error.response.data.errors.non_field_errors[0];
      } else if (error.response?.data?.message) {
        // Handle old error structure
        errorMessage = error.response.data.message;
      } else if (error.message) {
        // Handle direct error message
        errorMessage = error.message;
      } else if (typeof error === "string") {
        // Handle string error
        errorMessage = error;
      }

      console.error("Extracted error message:", errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      // Clear localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      // Dispatch logout action
      dispatch(logoutAction());
    }
  },
);

// Initialize auth state from localStorage
export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { rejectWithValue }) => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      const storedRefreshToken = localStorage.getItem("refreshToken");

      if (storedUser && storedToken) {
        return {
          user: JSON.parse(storedUser),
          token: storedToken,
          refreshToken: storedRefreshToken,
        };
      }

      return null;
    } catch (error) {
      console.error("Error initializing auth:", error);
      // Clear corrupted data
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      return rejectWithValue("Failed to initialize authentication");
    }
  },
);
