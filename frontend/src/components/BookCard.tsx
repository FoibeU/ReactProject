import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const BookCard: React.FC<{ title: string; author: string; genre: string }> = ({
  title,
  author,
  genre,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: 3,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 10,
          backgroundImage: "", // Add dynamic background image URL if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <CardContent sx={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0, 0, 0, 0.5)", color: "white" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">Author: {author}</Typography>
        <Typography variant="body2">Genre: {genre}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
