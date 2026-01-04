import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <TextField
        label="Search files/folders"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
);

export default SearchBar;
