import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, TextField, Container } from "@mui/material";
export default function BasicTextFields() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%", height: "100%" },
      }}
      autoComplete="off"
      onSubmit={async (event) => {
        navigate(`/dashboard`);
      }}
    >
      <Container>
        <div className="form-container">
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            maxlength="20"
            placeholder="Enter your email address"
            className="field"
          />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            value={password}
            maxlength="20"
            minlength="5"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            variant="outlined"
            className="field"
          />
          <Button type="submit">Sig In</Button>
        </div>
      </Container>
    </Box>
  );
}
