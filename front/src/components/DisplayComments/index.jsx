import {Grid, Paper, Typography} from '@mui/material';


const DisplayComments = ({comments}) => {

    console.log('esto es la lista de comments', comments);

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
          {comments?.map((message, index) => (
            <Paper key={index} elevation={3} style={style.stylePaper}>
              <Typography variant="h6">{message}</Typography>
            </Paper>
          ))}
        </Grid>
    )
}

export default DisplayComments