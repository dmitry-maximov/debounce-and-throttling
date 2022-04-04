import Container from '@mui/material/Container';
import InfoBlock from './InfoBlock';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

function Content() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <Container sx={{ py: 5 }} maxWidth="md">
      <InfoBlock />
      <Box component="form" sx={{ pt: 8 }} noValidate autoComplete="off">
        <TextField fullWidth label="Lorem ipsum" variant="outlined" />
      </Box>
      <Grid sx={{ pt: 3 }} container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Lorem ipsum
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;
