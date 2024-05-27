const SummaryDay = require('../models/SummaryDay');
const Table = require('../models/table');

class SummaryDaysServices {
  
  static async getSummaryDayByDate(date) {
      try {
          const startDate = new Date(date);
          startDate.setHours(8, 0, 0, 0); // Inicio del día laboral
          const endDate = new Date(date);
          endDate.setDate(endDate.getDate() + 1);
          endDate.setHours(7, 0, 0, 0); // Fin del día laboral, incluyendo turno noche

          const summary = await SummaryDay.findOne({
              fecha: {
                  $gte: startDate,
                  $lte: endDate
              }
          });

          return summary;
      } catch (error) {
          throw error;
      }
  }
  
  
  static async putSummaryDay(date) {
    try {
        // Calcula los rangos de fecha para los turnos
        const startDate = new Date(date);
        startDate.setHours(8, 0, 0, 0);

        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1); // Añadir un día
        endDate.setHours(7, 0, 0, 0);

        // Obtener todas las mesas en el rango de fechas
        const tables = await Table.find({
            fecha: {
                $gte: startDate,
                $lte: endDate
            }
        });

        // Estructura inicial para el resumen
        let summary = {
            turnoManiana: {
                ventaTotal: 0,
                ventaTarjeta: 0,
                ventaTransferencia: 0,
                ventaEfectivo: 0,
                gastos: 0,
                totalEfectivoNeto: 0
            },
            turnoNoche: {
                ventaTotal: 0,
                ventaTarjeta: 0,
                ventaTransferencia: 0,
                ventaEfectivo: 0,
                gastos: 0,
                totalEfectivoNeto: 0
            },
            resumenDelDia: {
                ventaTotalDia: 0,
                ventaTarjetaDia: 0,
                ventaTransferenciaDia: 0,
                ventaEfectivoDia: 0,
                gastosDia: 0,
                totalNetoDia: 0
            }
        };

        // Procesar cada mesa y clasificarla por turno
        tables.forEach(table => {
            let turno = table.fecha.getHours() >= 8 && table.fecha.getHours() < 17 ? 'turnoManiana' : 'turnoNoche';
            summary[turno].ventaTotal += table.monto;
            if (table.estadoPago === 'Tarjeta') summary[turno].ventaTarjeta += table.monto;
            if (table.estadoPago === 'Mercado Pago') summary[turno].ventaTransferencia += table.monto;
            if (table.estadoPago === 'Efectivo') summary[turno].ventaEfectivo += table.monto;
            summary[turno].totalEfectivoNeto = summary[turno].ventaTotal - summary[turno].gastos; // Asumiendo gastos aún no implementados
        });

        // Consolidar resumen del día
        summary.resumenDelDia.ventaTotalDia = summary.turnoManiana.ventaTotal + summary.turnoNoche.ventaTotal;
        summary.resumenDelDia.ventaTarjetaDia = summary.turnoManiana.ventaTarjeta + summary.turnoNoche.ventaTarjeta;
        summary.resumenDelDia.ventaTransferenciaDia = summary.turnoManiana.ventaTransferencia + summary.turnoNoche.ventaTransferencia;
        summary.resumenDelDia.ventaEfectivoDia = summary.turnoManiana.ventaEfectivo + summary.turnoNoche.ventaEfectivo;
        summary.resumenDelDia.gastosDia = summary.turnoManiana.gastos + summary.turnoNoche.gastos; // Asumiendo gastos aún no implementados
        summary.resumenDelDia.totalNetoDia = summary.resumenDelDia.ventaTotalDia - summary.resumenDelDia.gastosDia;

        // Actualizar o crear un nuevo documento SummaryDay
        const updatedSummary = await SummaryDay.findOneAndUpdate(
            { fecha: startDate },
            { $set: summary },
            { new: true, upsert: true } // Crear si no existe, devolver el documento actualizado
        );

        return updatedSummary;
    } catch (error) {
        throw error;
    }
}
}


module.exports = SummaryDaysServices;