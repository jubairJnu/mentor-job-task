/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { CurrentToken } from "../redux/features/auth/authSlice";
import Swal from "sweetalert2";

const ProtectedRoutes = ({ children }) => {
  const token = useSelector(CurrentToken);
  const location = useLocation();

  if (!token) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Please login first",
      showConfirmButton: false,
      timer: 1500,
    });

    // Redirect to login page or homepage
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
