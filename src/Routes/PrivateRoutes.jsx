import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const getToken = localStorage.getItem("Token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken) {
      navigate("/");
    }
  }, [getToken, navigate]);

  return getToken ? children : null;
};

export default PrivateRoutes;
