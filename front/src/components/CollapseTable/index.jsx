import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({data}) {
  return (
    <TableContainer component={Paper} sx={{
      margin: '20px',  
      borderRadius: '15px', 
      boxShadow: '0px 6px 18px rgba(0,0,0,0.4)', 
      height: '90vh',
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
          {data && data.map((summaryDay) => (
            <TableRow
              key={summaryDay.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {summaryDay.day}
              </TableCell>
              <TableCell align="right">{summaryDay.sales}</TableCell>
              <TableCell align="right">{summaryDay.salesAccumulated}</TableCell>
              <TableCell align="right">{summaryDay.cashSales}</TableCell>
              <TableCell align="right">{summaryDay.cashAccumulated}</TableCell>
              <TableCell align="right">{summaryDay.cardSales}</TableCell>
              <TableCell align="right">{summaryDay.cardAccumulated}</TableCell>
              <TableCell align="right">{summaryDay.cashSaved}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
