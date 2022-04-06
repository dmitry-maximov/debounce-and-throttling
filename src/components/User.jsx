import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function User({ id, name, city, street, email }) {
  return (
    <Grid item key={id} xs={12}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid #ddd',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            <strong>{name}</strong>
          </Typography>
          <Typography>
            Address : {city}, {street}
          </Typography>
          <Typography>Email : {email}</Typography>
        </CardContent>
      </Box>
    </Grid>
  );
}

export default User;
