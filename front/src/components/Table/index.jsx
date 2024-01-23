import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const MiComponente = () => {
  const [numeroMesa, setNumeroMesa] = useState('');
  const [monto, setMonto] = useState('');
  const [estadoPago, setEstadoPago] = useState('');
  const [propina, setPropina] = useState('');
  const [fechaHora, setFechaHora] = useState('');

  const handleSubmit = () => {
    console.log({ numeroMesa, monto, estadoPago, propina, fechaHora });
  };

  const date = new Date();
  const today = date.toISOString().split('T')[0];

  return (
    <Paper style={{ padding: '16px', margin: '16px 0' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Número de Mesa"
            value={numeroMesa}
            onChange={(e) => setNumeroMesa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Monto ($)"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="estado-pago-label">Estado de Pago</InputLabel>
            <Select
              labelId="estado-pago-label"
              value={estadoPago}
              label="Estado de Pago"
              onChange={(e) => setEstadoPago(e.target.value)}
            >
              <MenuItem value="Efectivo">Efectivo</MenuItem>
              <MenuItem value="Tarjeta">Tarjeta</MenuItem>
              <MenuItem value="Mercado Pago">Mercado Pago</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="Propina ($)"
            value={propina}
            onChange={(e) => setPropina(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography >{today}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MiComponente;
