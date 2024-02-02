import {Grid, Paper, Typography} from '@mui/material';


const DisplayTables = ({tables}) => {

    const style ={
      stylePaper: {
        // display row
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '90%',
        padding: '1%',
        margin: 'auto',
        textAlign: 'center',
        marginBottom: '1%',
      },
      
      gridItem: {
        color: 'grey'
      }
      
    }

    return (
        <Grid container>          
            {tables?.map((table, index) => (
                <Paper key={index} elevation={3} style={style.stylePaper}>
                  <Grid item >
                    <Typography variant="h8" style={style.gridItem}>N mesa</Typography>
                    <Typography variant="h6">{table.numMesa}</Typography>
                  </Grid>
                  <Grid item >
                    <Typography variant="h8" style={style.gridItem} >Monto</Typography>
                    <Typography variant="h6">{table.monto}</Typography>
                  </Grid>
                  <Grid item >
                    <Typography variant="h8" style={style.gridItem}>Estado de Pago</Typography>
                    <Typography variant="h6">{table.estadoPago}</Typography>
                  </Grid>
                  <Grid item >
                    <Typography variant="h8" style={style.gridItem}>Propina</Typography>
                    <Typography variant="h6">{table.propina}</Typography>
                  </Grid>
                </Paper>
            ))}
        </Grid>
    )
}

export default DisplayTables