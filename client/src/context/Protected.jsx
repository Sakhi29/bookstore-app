import React from "react";
import { UserAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (!user) {
    return navigate("/");
  }
  return children;
};

export default Protected;
