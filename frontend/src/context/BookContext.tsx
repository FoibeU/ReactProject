import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define Book type
type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  publicationDate: string;
  coverImage: string;  // Include coverImage field
};

// Define Context Type
type BooksContextType = {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  addBook: (newBook: Book) => void;
};

// Create Context
const BooksContext = createContext<BooksContextType | undefined>(undefined);

// Provider Component
export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch books from API when component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/books/");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to add a new book
  const addBook = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, addBook }}>
      {loading ? <p>Loading books...</p> : error ? <p>Error: {error}</p> : children}
    </BooksContext.Provider>
  );
};

// Custom Hook for using BooksContext
// eslint-disable-next-line react-refresh/only-export-components
export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
