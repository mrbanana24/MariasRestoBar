import Table from '../../components/Table';
import Header from '../../components/Header'
import {Grid, Box} from '@mui/material';
import DisplayTables from '../../components/DisplayTables';
import {useEffect, useState} from 'react';
import {getAllTables} from '../../api/routes';

const MainPage = () => {
  const [allTables, setTables] = useState([]);
  
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await getAllTables();
        if(response.status == 200){
          setTables(response.data.tables);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchTables();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Grid container>
        {/* First part of screen*/}
        <Grid item xs={8} sx={{backgroundColor: 'red'}}>
          <Table/>
          <DisplayTables tables={allTables}/>
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
