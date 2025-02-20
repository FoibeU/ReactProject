import React, { useState } from "react";
import { 
  TextField, Button, Container, Typography, Box, CircularProgress, 
  IconButton, InputAdornment 
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const { username, password } = formData;
    if (!username || !password) {
      setError("Both fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/users/login/", formData, {
        headers: { "Content-Type": "application/json" }
      });

      const { access_token, refresh_token, is_superuser } = response.data;

      // Store refresh token in the browser's local storage
      console.log(response.data)
      // ✅ Store authentication data
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("isSuperUser", JSON.stringify(is_superuser));

      // ✅ Notify `App.js` of change
      window.dispatchEvent(new Event("storage"));

      toast.success("Login successful! Redirecting...");

      setTimeout(() => {
        navigate(is_superuser ? "/admin-dashboard" : "/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = (axios.isAxiosError(error) && error.response?.data.detail) || "Invalid credentials.";
        toast.error(errorMessage);
      } else {
        toast.error("Network error or server is down.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4">Login</Typography>
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
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>

      <ToastContainer />
    </Container>
  );
};

export default Login;
