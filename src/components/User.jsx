import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function User({ id, name, city, street, email }) {
  return (
    <Grid item key={id} xs={12}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            Address : {city}, {street}
          </Typography>
          <Typography>Email : {email}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default User;
