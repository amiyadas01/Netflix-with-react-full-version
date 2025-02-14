import { Outlet, Navigate } from "react-router-dom";

function privateRoutes() {
  const user = false;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default privateRoutes;
