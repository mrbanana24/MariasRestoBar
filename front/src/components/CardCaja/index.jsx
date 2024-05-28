import { useState, useEffect } from 'react';
import RButton from "../Button";
import { Box, TextField, Typography } from "@mui/material";
import { saveCaja, getCajaValue } from "../../api/routes";

const style = {
  container : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "14vh",
    border: "1px solid black",
  },
}

const CardCaja = () => {
  const [montoCaja, setMonto] = useState(0);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const fetchCaja = async () => {
      try {
        const response = await getCajaValue();
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
      <Typography variant="h4" align="center">Caja</Typography>
      <Box sx={style.container}>
        <TextField
          label="Caja"
          type="number"
          value={montoCaja}
          onChange={(e) => setMonto(Number(e.target.value))}
          variant="outlined"
          disabled={!available}
        />
        <RButton
          text={available ? "Guardar" : "Editar"}
          onClick={available ? handleSave : () => setAvailable(true)}
        />
      </Box>
    </>
  );
}

export default CardCaja;
