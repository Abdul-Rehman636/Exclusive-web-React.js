import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const getToken = localStorage.getItem("Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken) {
      navigate("/");
    } else {
      navigate("/Home");
    }
  }, [getToken, navigate]);

  // Render children only if there is no token
  return !getToken ? children : null;
};

export default PublicRoutes;
