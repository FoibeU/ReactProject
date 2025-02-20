import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer here
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return false;
    }
    setError(""); // Reset error message if validation passes
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/users/register/", formData);
      console.log("Account Created:", response.data);

      // Show success toast
      toast.success("Account created successfully! Redirecting to login...");

      // Redirect to Login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Wait 2 seconds to show the toast
    } catch (error: any) {
      setLoading(false);

      // Show error toast
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred during registration.");
      } else {
        toast.error("Network error or server is down.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4">Create Account</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="Username"
          name="username"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="First Name"
          name="first_name"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="Last Name"
          name="last_name"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />

        {error && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
        </Button>
      </form>

      {/* This is the correct ToastContainer for rendering toasts */}
      <ToastContainer />
    </Container>
  );
};

export default CreateAccount;
