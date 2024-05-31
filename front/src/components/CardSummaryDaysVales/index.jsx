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
    justifyContent: 'flex-start',
    textAlign: 'center',
    wordWrap: 'break-word',
    height: "100%",
    width: "100%",
    padding: "10px",
  },
  section: {
    margin: "10px 0",
    backgroundColor: "green",
    color: "#fff", 
    padding: "5px",
    borderRadius: "100px",
    textTransform: "uppercase",
  },
  dataRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "5px 0"
  }
}

const CardSummaryDaysVales = ({data}) => {

  if(!data) return 'No hay resumen para mostrar';

  return(
    <Box sx={style.container}>
      <Paper elevation={3} style={style.paper}>
        <Typography variant="h6" style={style.section}>Vales o gastos</Typography>
        {data.map((item, index) => (
          <div key={index} style={style.dataRow}>
            <Typography>{item.comentarios}</Typography>
            <Typography>${item.gasto}</Typography>
          </div>
        ))}
      </Paper>
    </Box>
  );
}

export default CardSummaryDaysVales;
