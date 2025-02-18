import React, { useState } from "react";
import { useBooks } from "../context/BookContext";  // ✅ Import context

const BookForm = () => {
  const { addBook } = useBooks();  // ✅ Use addBook from context

  // State for form inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !genre || !rating || !publicationDate) {
      alert("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(), // Generate a unique ID
      title,
      author,
      genre,
      rating: parseFloat(rating),
      publicationDate,
    };

    addBook(newBook);  // ✅ Add book using context function

    // Clear form inputs
    setTitle("");
    setAuthor("");
    setGenre("");
    setRating("");
    setPublicationDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <input type="date" placeholder="Publication Date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
