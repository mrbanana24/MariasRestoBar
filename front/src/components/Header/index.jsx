import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" sx={{ marginRight: 'auto' }}>Mesas</Button>
          <Button color="inherit" sx={{ marginRight: 'auto' }}>Resumen Dia</Button>
          <Button color="inherit">Resumen Mes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
