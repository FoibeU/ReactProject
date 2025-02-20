import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Container, Typography, Paper } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !genre || !rating || !publicationDate) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("rating", rating);
    formData.append("publication_date", publicationDate);
    if (coverImage) formData.append("cover_image", coverImage);

    try {
      await axios.post("http://localhost:8000/api/books/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Book added successfully! 📚");

      // Reset form
      setTitle("");
      setAuthor("");
      setGenre("");
      setRating("");
      setPublicationDate("");
      setCoverImage(null);
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Failed to add book. Try again!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          📖 Add a New Book
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
          <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required fullWidth />
          <TextField label="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required fullWidth />
          <TextField label="Rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} required fullWidth />
          <TextField label="Publication Date" type="date" InputLabelProps={{ shrink: true }} value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required fullWidth />
          <input type="file" accept="image/*" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} />
          <Button variant="contained" color="primary" type="submit" sx={{ textTransform: "none", fontWeight: "bold" }}>
            ➕ Add Book
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default BookForm;
