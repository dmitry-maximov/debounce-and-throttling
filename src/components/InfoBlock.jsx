import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function InfoBlock() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: 5,
      }}
    >
      <Typography variant="h1" align="center" color="text.primary" gutterBottom>
        Search
        <FiberManualRecordIcon style={{ color: '#1976d2' }} />
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Searching user information using <strong>Debouncing</strong>
      </Typography>
    </Box>
  );
}

export default InfoBlock;
