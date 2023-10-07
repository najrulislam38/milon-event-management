import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
