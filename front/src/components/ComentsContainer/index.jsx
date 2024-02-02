import { Grid, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
  container: {
    display: 'flex',
    height: '100%',
    border: '1px solid black',
  },
  cardStyle: {
    margin: 'auto',
    marginTop: '0',
    height: '80%',
    width: '70%',
  },
  boxComentAndButton: {
    display: 'flex',
    width: '100%',
  },
  title: {
    margin: 'auto',
    color : 'black',
  },
  addButton: {
    margin: 'auto',
    border: "4px solid 'purple'",
  }
}


const ComentsContainer = () => {
  return (
      <Grid container style={style.container}>
        <Grid item style={style.boxComentAndButton}>
          <Typography variant="h4" style={style.title}>Comentarios</Typography>
          <AddCircleOutlineIcon onClick={()=> console.log('callFunction')} style={style.addButton}/>
        </Grid>
        <Paper elevation={3} style={style.cardStyle}>
          
        </Paper>
      </Grid>
  )
}

export default ComentsContainer;