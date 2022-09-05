import React from "react";
import Form from "../components/form";
import { Typography, Paper } from "@mui/material";

const login = () => {
  return (
    <div className="container">
      <Paper elevation={2}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Direct Sales Portal
        </Typography>

        <Form />
      </Paper>
    </div>
  );
};

export default login;
