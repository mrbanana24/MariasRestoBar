import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { saveComment } from "../../api/routes";
import CustomizedSnackbars  from "../../components/Snackbar";
import {useState} from "react";

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

const ComentsContainer = ({onAddComment}) => {
  const date = new Date();
  const today = date.toISOString().split("T")[0];
  let [open, setOpen] = useState(false);


  const formik = useFormik({
    initialValues: {
      coments: "",
      today: today,
    },
    onSubmit: async (values) => {
      console.log("estoy enviando esto en los comments", values, today);
      try {
        const response = await saveComment(today, values.coments);
        if (response.status === 200) {
          setOpen(true);
          onAddComment(response.data.comentSaved.comentarios[0]); // Llama a onAddTable con la nueva mesa
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomizedSnackbars open={open} message="Comentario guardado" handleClose={() => setOpen(false)} />
      <Grid container style={style.container}> 
        <Typography variant="h4" style={style.title}>
          Comentarios
        </Typography>
        <Paper elevation={3} style={style.cardStyle}>
          <Button variant="contained" type="submit" style={style.button}>
            Agregar
          </Button>
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
          />
        </Paper>
      </Grid>
    </form>
  );
};

export default ComentsContainer;
