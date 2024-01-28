import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate('/')} color="inherit" sx={{ marginRight: 'auto' }}>Mesas</Button>
          <Button onClick={() => navigate('/resumenDia')} color="inherit" sx={{ marginRight: 'auto' }}>Resumen Dia</Button>
          <Button onClick={() => navigate('/resumenMes')} color="inherit">Resumen Mes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
