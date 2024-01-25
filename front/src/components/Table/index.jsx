import { Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Table = () => {
  const date = new Date();
  const today = date.toISOString().split('T')[0];

  const formSchema = Yup.object().shape({
    numeroMesa: Yup.number()
                    .typeError('El número de mesa debe ser un número entero')
                    .required('Campo requerido')
                    .max(100, 'El número de mesa no puede ser mayor a 100'),
    monto: Yup.number().required('Campo requerido'),
    estadoPago: Yup.string().required('Campo requerido'),
    propina: Yup.number()
  });

  const formik = useFormik({
    initialValues: {
      numeroMesa: '',
      monto: '',
      estadoPago: '',
      propina: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log({values});
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
        <Paper style={{ padding: '16px', margin: '16px 0' }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Número de Mesa"
              name='numeroMesa'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numeroMesa}
              error={formik.touched.numeroMesa && Boolean(formik.errors.numeroMesa)}
              helperText={formik.touched.numeroMesa && formik.errors.numeroMesa}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Monto ($)"
              name='monto'
              value={formik.values.monto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.monto && Boolean(formik.errors.monto)}
              helperText={formik.touched.monto && formik.errors.monto}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Estado de Pago</InputLabel>
              <Select
                label="Estado de Pago"
                name='estadoPago'
                value={formik.values.estadoPago}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.estadoPago && Boolean(formik.errors.estadoPago)}
                helperText={formik.touched.estadoPago && formik.errors.estadoPago}
              >
                <MenuItem value="Efectivo">Efectivo</MenuItem>
                <MenuItem value="Tarjeta">Tarjeta</MenuItem>
                <MenuItem value="Mercado Pago">Mercado Pago</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Propina ($)"
              name='propina'
              value={formik.values.propina}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.propina && Boolean(formik.errors.propina)}
              helperText={formik.touched.propina && formik.errors.propina}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" type='submit'>Agregar</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography >{today}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Table;
