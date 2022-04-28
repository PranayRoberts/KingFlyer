import { Button } from "@mui/material";
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const LoginRegisterController = () => {
  let navigate = useNavigate();
  return (
    <div className="Main">
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="outlined"
      >
        Login
      </Button>

      <Button
        onClick={() => {
          navigate("/register");
        }}
        variant="outlined"
      >
        Register
      </Button>
    </div>
  );
};

export default LoginRegisterController;
