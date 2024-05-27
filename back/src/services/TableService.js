const Table = require('../models/table');
const SummaryDaysServices = require('./SummaryDaysServices');


class TableService {
    static async saveIndividualDataTable(numMesa, monto, estadoPago, propina, fecha) {
        try {
        const table = new Table({
            numMesa,
            monto,
            estadoPago,
            propina,
            fecha
        });

        const tableSaved = await table.save();
        await SummaryDaysServices.putSummaryDay(table.fecha);
    
        return tableSaved;
        } catch (error) {
            throw error;
        }
    }

    static async getAllTables() {
        try {
            const tables = await Table.find();
            return tables;
        } catch (error) {
            throw error;
        }
    }

    static async getTablesByDate(date) {
        try {
            // Desde que empieza turno maniana hasta que termina turno noche
            // Fecha de inicio al comienzo del turno mañana a las 08:00
            const startDate = new Date(date);
            startDate.setHours(8, 0, 0, 0);

            // Fecha de fin al final del turno noche del día siguiente a las 07:00
            const endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1); // Añadir un día
            endDate.setHours(7, 0, 0, 0);

            const tables = await Table.find({
                fecha: {
                    $gte: startDate,
                    $lte: endDate
                }
            });
            return tables;
            
        } catch (error) {
            throw error;
        }
    }

    static async deleteTable(tableId) {
        try {
            const tableDeleted = await Table.findByIdAndDelete(tableId);
            return tableDeleted;
        } catch (error) {
            throw error;
        }
    }

    static async editTable(tableId, numMesa, monto, estadoPago, propina) {
        try {
            const tableEdited = await Table.findByIdAndUpdate(tableId, {
                numMesa, monto, estadoPago, propina
            }, {new: true});

            await SummaryDaysServices.putSummaryDay(table.fecha);
            return tableEdited;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TableService;