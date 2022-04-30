
import { TextField } from "@mui/material";
import React from "react";
import "../App.css";
function Register({ userDetails, setUserDetails }) {
  return (
    <div className="Main">
      <h1>Register</h1>
      <TextField
        required
        id="filled"
        label="email"
        variant="filled"
        value={userDetails.contact.email}
        margin="dense"
        onChange={(event) => {
          setUserDetails({
            ...userDetails,
            contact: { email: event.target.value },
          });
        }}
      />
      <h1>huh</h1>
    </div>
  );
}

export default Register;
