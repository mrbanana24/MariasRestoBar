import { useState, useEffect } from 'react';
import RButton from "../Button";
import { Box, TextField, Typography, Paper, Grid } from "@mui/material";
import { saveCaja, getCajaValue } from "../../api/routes";

const style = {
  container : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
    width: "100%",
    marginBottom: "1rem",
    marginTop: "0.7rem",
    boxShadow: "-0.7px 1px 0px 0px #ccc",
    backgroundColor: "#FFFFFF",
    paddingBottom: "2rem",
    borderRadius: "0.5rem",
  },
  button: {
    backgroundColor: "green",
    marginBottom: "0.5rem",
  },
}

const CardCaja = () => {
  const [montoCaja, setMonto] = useState(0);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const fetchCaja = async () => {
      try {
        const response = await getCajaValue();
        console.log('Error en el fetchCaja', response.status);
        if (response.status === 200) {
          setMonto(response.data);
        }
      } catch (error) {
        console.log('Error en el fetchCaja', error);
      }
    };
    fetchCaja();
  }, []);

  const handleSave = async () => {
    try {
      const response = await saveCaja(Number(montoCaja));
      if (response.status === 200) {
        setAvailable(false);
      }
    } catch (error) {
      console.log('Error en el handleSave', error);
    }
  }

  return (
    <>
      <Box sx={style.container}>
        <Typography variant="h4" align="center">Caja</Typography>
        <RButton
          text={available ? "Guardar" : "Editar"}
          onClick={available ? handleSave : () => setAvailable(true)}
          extraStyle={style.button}
        />
        <TextField
          label="Caja"
          type="number"
          value={montoCaja}
          onChange={(e) => setMonto(Number(e.target.value))}
          variant="outlined"
          disabled={!available}
        />
      </Box>
    </>
  );
}

export default CardCaja;
