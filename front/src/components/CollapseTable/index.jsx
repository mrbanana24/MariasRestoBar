import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Función para crear datos de ejemplo
function createData(day, sales, salesAccumulated, cashSales, cashAccumulated, cardSales, cardAccumulated, cashSaved) {
  return { day, sales, salesAccumulated, cashSales, cashAccumulated, cardSales, cardAccumulated, cashSaved };
}

// Generar filas para los 31 días
const rows = Array.from({ length: 31 }, (_, index) => createData(
  `Day ${index + 1}`, 
  Math.floor(Math.random() * 300 + 100), 
  Math.floor(Math.random() * 1000 + 500), 
  Math.floor(Math.random() * 300 + 100), 
  Math.floor(Math.random() * 1000 + 500),
  Math.floor(Math.random() * 300 + 100), 
  Math.floor(Math.random() * 1000 + 500),
  Math.floor(Math.random() * 300 + 100)
));

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{
      margin: '20px',  
      borderRadius: '15px', 
      boxShadow: '0px 6px 18px rgba(0,0,0,0.4)', 
      maxHeight: '90vh', 
      overflow: 'auto'  
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dia</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Accumulated Sales</TableCell>
            <TableCell align="right">Cash Sales</TableCell>
            <TableCell align="right">Accumulated Cash</TableCell>
            <TableCell align="right">Card Sales</TableCell>
            <TableCell align="right">Accumulated Card</TableCell>
            <TableCell align="right">Cash Saved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.salesAccumulated}</TableCell>
              <TableCell align="right">{row.cashSales}</TableCell>
              <TableCell align="right">{row.cashAccumulated}</TableCell>
              <TableCell align="right">{row.cardSales}</TableCell>
              <TableCell align="right">{row.cardAccumulated}</TableCell>
              <TableCell align="right">{row.cashSaved}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
