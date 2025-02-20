import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import BookItem from "./BookItem";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";
import { useBooks } from "../context/BookContext"; 
const BookList = () => {
  const { books } = useBooks(); 
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((book) => (selectedGenre ? book.genre === selectedGenre : true))
    .sort((a, b) =>
      sortBy === "rating"
        ? b.rating - a.rating
        : new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
    );

  return (
    <Box sx={{ paddingTop: 4 }}>
      {/* Filters, Search Bar, and Sort Options */}
      <Box sx={{ marginBottom: 4 }}>
        <Filters selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </Box>
      
      {/* Show message if no books found */}
      {filteredBooks.length === 0 ? (
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <Typography variant="h6">No books found</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BookItem book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BookList;
