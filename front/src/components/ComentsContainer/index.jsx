import { Grid, Paper, TextField, Typography, Button} from "@mui/material";
import {useState } from "react";

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
  title: {
    margin: 'auto',
    color : 'black',
  },
  
  button: {
    margin: 'auto',
    marginTop: '1%',
    marginBottom: '2%',
    backgroundColor: 'green',
    color: 'white',
    width: '50%',
    display: 'block', 
  },

}

const ComentsContainer = () => {

  const [coments, setComents] = useState([]);

  // TODO: Migrarlo a formik
  return (
      <Grid container style={style.container}>
          <Typography variant="h4" style={style.title}>Comentarios</Typography>
        <Paper elevation={3} style={style.cardStyle}>
          <Button variant="contained" type='submit' style={style.button}>Agregar</Button>
            <TextField
              id="outlined-multiline-static"
              label="Comentarios"
              multiline
              defaultValue=""
              variant="outlined"
              fullWidth
            />
        </Paper>
      </Grid>
  )
}

export default ComentsContainer;