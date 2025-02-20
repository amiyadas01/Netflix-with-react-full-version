import { Outlet, Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoutes() {
  const {user} = useAuth();
  const location = useLocation();

  return user ? <Outlet /> : location.pathname === "/login" ? "" :<Navigate to="/login" />;
  
}

export default PrivateRoutes
