import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import CreateAccount from "./pages/CreateAccount"; 
import Login from "./pages/Login"; 
import { BooksProvider } from "./context/BookContext";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BooksProvider>
      <Router>
        <AppBar position="sticky" sx={{ backgroundColor: "#123456" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Book Hub</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/add-book">Add Book</Button> 
            <Button color="inherit" component={Link} to="/create-account">Create Account</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<BookForm />} /> 
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        
        {/* Toast Notifications */}
        <ToastContainer />
      </Router>
    </BooksProvider>
  </ThemeProvider>
);

export default App;
