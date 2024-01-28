import {Grid, Paper, Typography} from '@mui/material';


const DisplayTables = ({tables}) => {

    const stylePaper = {
        width: '90%',
        height: '90%',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '1%',
    }

    return (
        <Grid container>          
            {tables?.map((table, index) => (
                <Paper key={index} elevation={3} style={stylePaper}>
                    <Typography variant="h6">{table.numMesa}</Typography>
                    <Typography variant="h6">{table.monto}</Typography>
                    <Typography variant="h6">{table.propina}</Typography>
                    <Typography variant="h6">{table.estadoPago}</Typography>
                </Paper>
            ))}
        </Grid>
    )
}

export default DisplayTables