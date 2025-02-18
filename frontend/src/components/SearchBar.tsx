// SearchBar.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      variant="outlined"
      label="Search for books"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ marginBottom: 3 }}
    />
  );
};

export default SearchBar;
