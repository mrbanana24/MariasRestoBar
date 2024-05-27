const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema principal que incluye ambos turnos y el resumen del día
let summaryDaySchema = new Schema({
  fecha: { type: Date, required: true },
  turnoManiana: {
    ventaTotal: { type: Number, default: 0 },
    ventaTarjeta: { type: Number, default: 0 },
    ventaTransferencia: { type: Number, default: 0 },
    ventaEfectivo: { type: Number, default: 0 },
    gastos: { type: Number, default: 0 },
    totalEfectivoNeto: { type: Number, default: 0 }
  },

  turnoNoche: {
    ventaTotal: { type: Number, default: 0 },
    ventaTarjeta: { type: Number, default: 0 },
    ventaTransferencia: { type: Number, default: 0 },
    ventaEfectivo: { type: Number, default: 0 },
    gastos: { type: Number, default: 0 },
    totalEfectivoNeto: { type: Number, default: 0 }
  },

  resumenDelDia: {
    ventaTotalDia: { type: Number, default: 0 },
    ventaTarjetaDia: { type: Number, default: 0 },
    ventaTransferenciaDia: { type: Number, default: 0 },
    ventaEfectivoDia: { type: Number, default: 0 },
    gastosDia: { type: Number, default: 0 },
    totalNetoDia: { type: Number, default: 0 }
  }

});

module.exports = mongoose.model('SummaryDay', summaryDaySchema);
