import { Box, Paper, Typography } from "@mui/material";

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    wordWrap: 'break-word',
    height: "90vh",
    width: "45vh",
    margin: "20px",  
    padding: "10px",
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    wordWrap: 'break-word',
    height: "100%",
    width: "100%",
    padding: "10px",
  },
  section: {
    margin: "10px 0",
    backgroundColor: "#008aa2",
    color: "#fff", 
    padding: "5px",
    borderRadius: "100px"
  },
  dataRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "5px 0"
  }
}

const CardSummaryDays = ({data}) => {
  if (!data) return 'No hay resumen para mostrar';

  return(
    <Box sx={style.container}>
      <Paper elevation={3} style={style.paper}>
        {/* Turno mañana */}
        <Typography variant="h6" style={style.section}>Turno Mañana</Typography>
        <div style={style.dataRow}>
          <Typography>Venta Total:</Typography>
          <Typography>${data.turnoManiana.ventaTotal}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Tarjeta:</Typography>
          <Typography>${data.turnoManiana.ventaTarjeta}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Transferencia:</Typography>
          <Typography>${data.turnoManiana.ventaTransferencia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Efectivo:</Typography>
          <Typography>${data.turnoManiana.ventaEfectivo}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Gastos:</Typography>
          <Typography>${data.turnoManiana.gastos}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Total Efectivo Neto:</Typography>
          <Typography>${data.turnoManiana.totalEfectivoNeto}</Typography>
        </div>
        
        {/* Turno noche */}
        <Typography variant="h6" style={style.section}>Turno Noche</Typography>
        <div style={style.dataRow}>
          <Typography>Venta Total:</Typography>
          <Typography>${data.turnoNoche.ventaTotal}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Tarjeta:</Typography>
          <Typography>${data.turnoNoche.ventaTarjeta}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Transferencia:</Typography>
          <Typography>${data.turnoNoche.ventaTransferencia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Efectivo:</Typography>
          <Typography>${data.turnoNoche.ventaEfectivo}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Gastos:</Typography>
          <Typography>${data.turnoNoche.gastos}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Total Efectivo Neto:</Typography>
          <Typography>${data.turnoNoche.totalEfectivoNeto}</Typography>
        </div>

        {/* Resumen del día */}
        <Typography variant="h6" style={style.section}>Resumen del Día</Typography>
        <div style={style.dataRow}>
          <Typography>Venta Total del Día:</Typography>
          <Typography>${data.resumenDelDia.ventaTotalDia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Tarjeta del Día:</Typography>
          <Typography>${data.resumenDelDia.ventaTarjetaDia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Transferencia del Día:</Typography>
          <Typography>${data.resumenDelDia.ventaTransferenciaDia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Venta Efectivo del Día:</Typography>
          <Typography>${data.resumenDelDia.ventaEfectivoDia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Gastos del Día:</Typography>
          <Typography>${data.resumenDelDia.gastosDia}</Typography>
        </div>
        <div style={style.dataRow}>
          <Typography>Total Neto del Día:</Typography>
          <Typography>${data.resumenDelDia.totalNetoDia}</Typography>
        </div>
      </Paper>
    </Box>
  );
}

export default CardSummaryDays;
