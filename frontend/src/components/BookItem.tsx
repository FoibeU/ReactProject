import React from "react";
import { Card, CardContent, Typography, CardMedia, Button, CardActions } from "@mui/material";

interface BookItemProps {
  book: { 
    id: number; 
    title: string; 
    author: string; 
    genre: string; 
    rating: number; 
    publicationDate: string; 
    cover_image_url: string; 
  };
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 3, position: "relative" }}>
      {/* CardMedia with cover_image_url */}
      <CardMedia
        component="img"
        height="250"
        image={book.cover_image_url || "default-cover.jpg"} 
        alt={book.title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {book.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {book.rating}
        </Typography>
      </CardContent>

     
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
