import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        {/* <span className="loading loading-spinner w-12 h-12 "></span> */}
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
