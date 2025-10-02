import React from 'react';
import { TextField } from '@mui/material';

const Search = ({ onSearch }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <TextField
            label="Search Users"
            variant="outlined"
            fullWidth
            onChange={handleChange}
        />
    );
};

export default Search;
