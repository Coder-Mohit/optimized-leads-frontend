import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  logoutUser,
  initializeAuth,
} from "../store/thunks/authThunks";
import { getRedirectPath } from "../utils/roleNavigation";
import { clearError } from "../store/slices/authSlice";

// Main authentication hook
export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  // Initialize auth on app mount
  useEffect(() => {
    if (!auth.isInitialized) {
      dispatch(initializeAuth());
    }
  }, [dispatch, auth.isInitialized]);

  const login = useCallback(
    async (credentials) => {
      try {
        console.log("=== useAuth login() called with:", credentials.email);
        const result = await dispatch(loginUser(credentials)).unwrap();

        console.log("Login successful, result:", result);

        // Check if result and user exist before accessing role
        if (!result || !result.user) {
          throw new Error("Login response is invalid");
        }

        // Redirect based on role after successful login
        const redirectPath = getRedirectPath(result.user.role);
        console.log(
          "Redirecting to:",
          redirectPath,
          "based on role:",
          result.user.role,
        );
        navigate(redirectPath);

        return result;
      } catch (error) {
        console.error("Login error in useAuth:", error);
        throw error;
      }
    },
    [dispatch, navigate],
  );

  const logout = useCallback(() => {
    dispatch(logoutUser());
    navigate("/login");
  }, [dispatch, navigate]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    // State
    user: auth.user,
    token: auth.token,
    refreshToken: auth.refreshToken,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    isInitialized: auth.isInitialized,
    error: auth.error,
    userRole: auth.user?.role,

    // Actions
    login,
    logout,
    clearError: clearAuthError,
  };
};

export default useAuth;
