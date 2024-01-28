import {Box, Grid, Paper, Typography} from '@mui/material';


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
            {tables.map((table, index) => (               
                <Paper key={index} elevation={3} style={stylePaper}>
                    <Typography variant="h5" component="h2">
                        {table.name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {table.status}
                    </Typography>
                </Paper>
            ))}
        </Grid>
    )
}

export default DisplayTables