import Table from '../../components/Table';
import Header from '../../components/Header'
import {Grid, Box} from '@mui/material';


const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Grid container>
        {/* First part of screen*/}
        <Grid item xs={6} sx={{backgroundColor: 'red'}}>
          <Table/>
        </Grid>
        {/* Second part of screen*/}
        <Grid item xs={6} sx={{backgroundColor: 'green'}}>
          <h1> second part of screen</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
