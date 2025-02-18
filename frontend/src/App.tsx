import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Container, Typography, Box, AppBar, Toolbar, Button } from "@mui/material";
import BookList from "./components/BookList";
import { BooksProvider } from "./context/BookContext"; // Import BooksProvider

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BooksProvider> {/* Wrap the app with BooksProvider */}
      
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#123456" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Book Hub
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Box
        sx={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?books,library')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h3" component="h1" fontWeight="bold">
          Welcome to Book Hub Platform
        </Typography>
        <Typography variant="h5" component="p" mt={2}>
          Discover any book of your need with ease!
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <BookList />
      </Container>

    </BooksProvider>
  </ThemeProvider>
);

export default App;
