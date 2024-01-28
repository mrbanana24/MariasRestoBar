import Table from '../../components/Table';
import Header from '../../components/Header'
import {Grid, Box} from '@mui/material';
import DisplayTables from '../../components/DisplayTables';


const MainPage = () => {

  let tables = [
    {
        name: "Table 1",
        status: "Free"
    },
    {
        name: "Table 2",
        status: "Free"
    }
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Grid container>
        {/* First part of screen*/}
        <Grid item xs={8} sx={{backgroundColor: 'red'}}>
          <Table/>
          <DisplayTables tables={tables}/>
        </Grid>
        {/* Second part of screen*/}
        <Grid item xs={4} sx={{backgroundColor: 'green'}}>
          <h1> second part of screen</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
