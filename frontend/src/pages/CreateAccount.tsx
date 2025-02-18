import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account Created:", formData);
    navigate("/login"); // Redirect to Login page after signup
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4">Create Account</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
      <TextField fullWidth sx={{ marginBottom: 2 }} label="Name" name="name" onChange={handleChange} required />
<TextField fullWidth sx={{ marginBottom: 2 }} label="Email" name="email" type="email" onChange={handleChange} required />
<TextField fullWidth sx={{ marginBottom: 2 }} label="Password" name="password" type="password" onChange={handleChange} required />

        <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default CreateAccount;
