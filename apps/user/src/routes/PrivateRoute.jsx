import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingPage from "../custom/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);
  if (loading) {
    return <LoadingPage text="Redirecting" />;
  }
  return user ? children : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
