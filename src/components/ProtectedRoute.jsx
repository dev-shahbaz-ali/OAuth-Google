import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Reverted to check for the token as per your original logic
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
