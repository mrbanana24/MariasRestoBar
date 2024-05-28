import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { saveComment } from "../../api/routes";
import {useState} from "react";
import CustomizedSnackbars  from "../../components/Snackbar";
import CardCaja from "../CardCaja";

const style = {
  container: {
    display: "flex",
    height: "30%",
    flexDirection: "column",
  },
  cardStyle: {
    margin: "auto",
    marginTop: "0",
    height: "80%",
    width: "70%",
  },
  title: {
    margin: "auto",
    color: "black",
  },

  button: {
    margin: "auto",
    marginTop: "1%",
    marginBottom: "2%",
    backgroundColor: "green",
    color: "white",
    width: "50%",
    display: "block",
  },
};

const ComentsContainer = ({onAddComment, today}) => {
  let [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      coments: "",
      gasto: 0,
      today: today,
    },
    onSubmit: async (values) => {
      try {
        const response = await saveComment(today, values.coments, values.gasto);
        if (response.status === 200) {
          // Limpio el input
          formik.resetForm();
          // Muestro el snackbar
          setOpen(true);
          // Llamo a onAddComment con el nuevo comentario
          onAddComment(response.data.comentSaved); 
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CardCaja />
      <CustomizedSnackbars open={open} message="Comentario guardado" handleClose={() => setOpen(false)} />
      <Grid container style={style.container}> 
        <Typography variant="h4" style={style.title}>
          Comentarios
        </Typography>
        <Paper elevation={3} style={style.cardStyle}>
          <Button variant="contained" type="submit" style={style.button}>
            Agregar
          </Button>
          <Grid item>
            {/* Input para texto */}
            <TextField
              name="coments"
              id="outlined-multiline-static"
              label="Comentarios"
              multiline
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.coments}
              // maximo de alto es 7 lineas
              maxRows={7}
              // Maximo de caracteres
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
          <Grid item>
            {/* Input para el gasto */}
            <TextField
              name="gasto"
              id="outlined-number"
              label="Gasto"
              type="number"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.gasto}
              defaultValue={0}
            />
          </Grid>
        </Paper>
      </Grid>
    </form>
  );
};

export default ComentsContainer;
