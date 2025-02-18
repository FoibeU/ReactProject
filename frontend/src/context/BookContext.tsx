import React, { createContext, useContext, useState, ReactNode } from "react";

// Define Book type
type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  publicationDate: string;
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
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Great Generations", author: "Foibe", genre: "Fiction", rating: 4.5, publicationDate: "2023-01-01" },
    { id: 2, title: "Good Habit", author: "Foibe", genre: "Non-Fiction", rating: 4.0, publicationDate: "2022-05-20" },
    { id: 3, title: "Learn by doing", author: "Foibe", genre: "Non-Fiction", rating: 5.0, publicationDate: "2002-05-20" },
    { id: 4, title: "Intermediate", author: "Foibe", genre: "Non-Fiction", rating: 5.0, publicationDate: "2020-10-20" },
    { id: 5, title: "Super Flash", author: "Foibe", genre: "Drama", rating: 3.0, publicationDate: "2021-08-20" },
    { id: 5, title: "Super Flash", author: "Foibe", genre: "Drama", rating: 3.0, publicationDate: "2021-08-20" },
    { id: 5, title: "Super Flash", author: "Foibe", genre: "Drama", rating: 3.0, publicationDate: "2021-08-20" },
    { id: 5, title: "Super Flash", author: "Foibe", genre: "Drama", rating: 3.0, publicationDate: "2021-08-20" },
  ]);

  //  Function to add a new book 
  const addBook = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, addBook }}>
      {children}
    </BooksContext.Provider>
  );
};

// Custom Hook for using BooksContext
export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
