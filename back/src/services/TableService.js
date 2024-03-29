const Table = require('../models/table');

class TableService {
    static async saveIndividualDataTable(numMesa, monto, estadoPago, propina) {
        try {
        const table = new Table({
            numMesa,
            monto,
            estadoPago,
            propina
        });

        const tableSaved = await table.save();
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

}

module.exports = TableService;