import { Button } from "@mui/material";
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const LoginRegisterController = () => {
  let navigate = useNavigate();
  return (
    <div className="Main">
      <table style={{marginLeft:"auto", marginRight:"auto"}}>
        <tr>
          <td>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="outlined"
            >
              Login
            </Button>
          </td>
          <td>
            <Button
              onClick={() => {
                navigate("/register");
              }}
              variant="outlined"
            >
              Register
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LoginRegisterController;
