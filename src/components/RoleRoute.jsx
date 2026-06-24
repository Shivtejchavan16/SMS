import { Navigate } from "react-router-dom";

function RoleRoute({ children, allowedRoles }) {
  const userRole = "admin";

  return allowedRoles.includes(userRole)
    ? children
    : <Navigate to="/" />;
}

export default RoleRoute;