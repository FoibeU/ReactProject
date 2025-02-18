// Filters.tsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface FiltersProps {
  selectedGenre: string;
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 3 }}>
      <InputLabel>Genre</InputLabel>
      <Select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        label="Genre"
      >
        <MenuItem value="">All Genres</MenuItem>
        <MenuItem value="Fiction">Fiction</MenuItem>
        <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
        <MenuItem value="Non-Fiction">Drama</MenuItem>
        
      </Select>
    </FormControl>
  );
};

export default Filters;
