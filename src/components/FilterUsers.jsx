import { TextField } from '@mui/material';
import { Box } from '@mui/system';

function FilterUsers({ filter, setFilter }) {
  return (
    <Box component="form" sx={{ pt: 8 }} noValidate autoComplete="off">
      <TextField
        fullWidth
        label="search by name"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
        autoComplete="off"
      />
    </Box>
  );
}

export default FilterUsers;
