import { useSelector } from "react-redux";

// Simple hook to get auth state (can be used in protected routes)
export const useAuthState = () => {
  const auth = useSelector((state) => state.auth);
  return {
    user: auth.user,
    token: auth.token,
    refreshToken: auth.refreshToken,
    isAuthenticated: auth.isAuthenticated,
    userRole: auth.user?.role,
    isLoading: auth.isLoading,
    isInitialized: auth.isInitialized,
    error: auth.error,
  };
};

export default useAuthState;
