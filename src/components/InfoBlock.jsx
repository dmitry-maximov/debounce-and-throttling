import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        p: 3,
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Lorem ipsum
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
    </Box>
  );
}

export default InfoBlock;
