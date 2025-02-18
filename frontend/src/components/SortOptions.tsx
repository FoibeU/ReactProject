// SortOptions.tsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface SortOptionsProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortOptions: React.FC<SortOptionsProps> = ({ sortBy, setSortBy }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: 3 }}>
      <InputLabel>Sort By</InputLabel>
      <Select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        label="Sort By"
      >
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="date">Date</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortOptions;
