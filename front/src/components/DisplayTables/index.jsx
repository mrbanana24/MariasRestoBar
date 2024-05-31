import { useState } from 'react';
import { Grid, Paper, Typography, TextField, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import CustomizedSnackbars from "../Snackbar";
import { deleteTable, editTable } from '../../api/routes';

const DisplayTables = ({ tables, setTables }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [editTableId, setEditTableId] = useState(null);
  const [editFormData, setEditFormData] = useState({ numMesa: '', monto: '', estadoPago: '', propina: '' });

  const handleDeleteTable = async (tableId) => {
    try {
      const response = await deleteTable(tableId);
      if (response.status === 200) {
        setTables(currentTables => currentTables.filter(table => table._id !== tableId));
        setMessage('Mesa eliminada');
        setOpen(true);
      }
    } catch (error) {
      console.log('Error en el handleDeleteTable', error);
    }
  };

  const handleEditClick = (table) => {
    setEditTableId(table._id);
    setEditFormData({ numMesa: table.numMesa, monto: table.monto, estadoPago: table.estadoPago, propina: table.propina });
  };

  const handleSaveClick = async () => {
    const updatedTables = tables.map(table => {
      if (table._id === editTableId) {
        return { ...table, ...editFormData };
      }
      return table;
    });
    setTables(updatedTables);
    setEditTableId(null);
    
    try {
      const response = await editTable(editTableId, editFormData.numMesa, editFormData.monto, editFormData.estadoPago, editFormData.propina);
      if (response.status === 200) {
        setMessage('Mesa editada');
        setOpen(true);
      }
    } catch (error) {
      console.log('Error en el handleSaveClick', error);
    }
  };

  const handleInputChange = (prop, value) => {
    setEditFormData({ ...editFormData, [prop]: value });
  };

  const style = {
    stylePaper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      padding: '1%',
      margin: 'auto',
      textAlign: 'center',
      marginBottom: '1%',
      borderRadius: "0.5rem",
    },
    gridItem: {
      color: 'grey'
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row', 
    }
  };

  return (
    <Grid container>
      <CustomizedSnackbars
        open={open}
        message= {message} 
        handleClose={() => setOpen(false)}
      />
      {tables.map((table) => (
        <Paper key={table._id} elevation={3} style={style.stylePaper}>
          {editTableId === table._id ? (
            <>
              <TextField value={editFormData.numMesa} onChange={(e) => handleInputChange('numMesa', e.target.value)} />
              <TextField value={editFormData.monto} onChange={(e) => handleInputChange('monto', e.target.value)} />
              <FormControl fullWidth>
                <InputLabel>Estado de Pago</InputLabel>
                <Select
                  onChange={(e) => handleInputChange('estadoPago', e.target.value)}
                  label="Estado de Pago"
                  name="estadoPago"
                >
                  <MenuItem value="Efectivo">Efectivo</MenuItem>
                  <MenuItem value="Tarjeta">Tarjeta</MenuItem>
                  <MenuItem value="Mercado Pago">Mercado Pago</MenuItem>
                </Select>
              </FormControl>
              <TextField value={editFormData.propina} onChange={(e) => handleInputChange('propina', e.target.value)} />
            </>
          ) : (
            <>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="h6">{table.numMesa}</Typography>
                  <Typography variant="caption">N de mesa</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">{table.monto}</Typography>
                  <Typography variant="caption">Monto</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">{table.estadoPago}</Typography>
                  <Typography variant="caption">Estado de pago</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">{table.propina}</Typography>
                  <Typography variant="caption">Propina</Typography>
                </Grid>
              </Grid>
            </>

          )}
          <Grid item style={style.buttons}>
            {editTableId === table._id ? (
              <IconButton onClick={handleSaveClick}>
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleEditClick(table)}>
                <ModeEditIcon />
              </IconButton>
            )}
            <IconButton onClick={() => handleDeleteTable(table._id)}>
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Paper>
      ))}
    </Grid>
  );
};

export default DisplayTables;
