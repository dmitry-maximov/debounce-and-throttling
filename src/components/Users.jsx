import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import User from './User';

function Users({ users }) {
  if (!users || !users.length) {
    return (
      <Typography mt={5} variant="h5" align="center">
        Пользователи не найдены!
      </Typography>
    );
  }

  return (
    <Grid sx={{ pt: 3 }} container spacing={4}>
      {users.map((user) => (
        <User
          id={user.id}
          name={user.name}
          city={user.address.city}
          street={user.address.street}
          email={user.email}
        />
      ))}
    </Grid>
  );
}

export default Users;
