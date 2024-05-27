import React, { useEffect, useState } from 'react';
import { Box, CardContent, Typography, Grid, Card } from '@mui/material';
import { summaryDayByDate } from '../../api/routes';

function SalesSummaryTable() {
  const date = new Date();
  const today = date.toISOString().split("T")[0];

  const [summary, setSummary] = useState({ dataManiana: {}, dataNoche: {} });

  // Calcula los totales utilizando los datos de los objetos
  const getTotal = (data, key) => {
    return data[key] || 0;
  };

  const totalVentaDia = getTotal(summary.dataManiana, 'Venta total Maniana') + getTotal(summary.dataNoche, 'Venta total Noche');
  const totalTarjeta = getTotal(summary.dataManiana, 'Venta tarjeta') + getTotal(summary.dataNoche, 'Venta tarjeta');
  const totalTransferencia = getTotal(summary.dataManiana, 'Venta transferencia') + getTotal(summary.dataNoche, 'Venta transferencia');
  const totalEfectivo = getTotal(summary.dataManiana, 'Venta efectivo') + getTotal(summary.dataNoche, 'Venta efectivo');
  const totalGastos = getTotal(summary.dataManiana, 'Gastos') + getTotal(summary.dataNoche, 'Gastos');
  const totalNeto = getTotal(summary.dataManiana, 'Total neto') + getTotal(summary.dataNoche, 'Total neto');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await summaryDayByDate(today);
        console.log('ESTO ES RESPONSE:', response.data)
        if (response.status === 200) {
          setSummary(response.data.summary);
        } else {
          console.error('Error with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };
    fetchSummary();
  }, []);

  return (
    <>
      asd 
    </>
    // <Box sx={{ maxWidth: 600, mx: 'auto', my: 4, p: 3, boxShadow: 1 }}>
    //   <Card raised>
    //     {/* Turno mañana */}
    //     <CardContent>
    //     <Grid container justifyContent="space-between">
    //       <Typography variant="h6" gutterBottom>
    //         Turno mañana
    //       </Typography>
    //       <Typography variant="caption" gutterBottom>
    //         {today}
    //       </Typography>
    //     </Grid>
    //       {Object.entries(summary.dataManiana).map(([label, value]) => (
    //         <Grid container justifyContent="space-between" key={label}>
    //           <Grid item>
    //             <Typography variant="body1">{label}</Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="body1" align="right">{value}</Typography>
    //           </Grid>
    //         </Grid>
    //       ))}
    //     </CardContent>

    //     {/* Turno noche */}
    //     <CardContent>
    //       <Typography variant="h6" gutterBottom>
    //         Turno noche
    //       </Typography>
    //       {Object.entries(summary.dataNoche).map(([label, value]) => (
    //         <Grid container justifyContent="space-between" key={label}>
    //           <Grid item>
    //             <Typography variant="body1">{label}</Typography>
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="body1" align="right">{value}</Typography>
    //           </Grid>
    //         </Grid>
    //       ))}
    //     </CardContent>

    //     {/* Resumen total del día */}
    //     <CardContent>
    //       <Typography variant="h6" gutterBottom>
    //         Resumen del día
    //       </Typography>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Venta total del día:</Typography>
    //         <Typography variant="body1" align="right">{totalVentaDia}</Typography>
    //       </Grid>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Venta tarjeta:</Typography>
    //         <Typography variant="body1" align="right">{totalTarjeta}</Typography>
    //       </Grid>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Venta transferencia:</Typography>
    //         <Typography variant="body1" align="right">{totalTransferencia}</Typography>
    //       </Grid>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Venta efectivo:</Typography>
    //         <Typography variant="body1" align="right">{totalEfectivo}</Typography>
    //       </Grid>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Gastos:</Typography>
    //         <Typography variant="body1" align="right">{totalGastos}</Typography>
    //       </Grid>
    //       <Grid container justifyContent="space-between">
    //         <Typography variant="body1">Total neto:</Typography>
    //         <Typography variant="body1" align="right">{totalNeto}</Typography>
    //       </Grid>
    //     </CardContent>
    //   </Card>
    // </Box>
  );
}

export default SalesSummaryTable;
