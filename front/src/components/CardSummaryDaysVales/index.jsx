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
  }
}

const CardSummaryDaysVales = ({data}) => {

  return(
    <Box sx={style.container}>
      <Paper elevation={3} style={style.paper}>
        
      </Paper>
    </Box>
  );
}

export default CardSummaryDaysVales;
