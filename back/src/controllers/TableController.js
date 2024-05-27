const TableService = require('../services/TableService');

class TableController {

    static async saveIndividualDataTable(req, res) {
        try {
            const {numMesa, monto, estadoPago, propina, fecha} = req.body;
            const tableSaved = await TableService.saveIndividualDataTable(numMesa, monto, estadoPago, propina, fecha);
            res.status(200).json({ status: 'ok', tableSaved });
        } catch (error) {
            console.log('error en el saveIndividualDataTable');
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllTables(req, res) {
        try {
            console.log('estoy buscando las mesas')
            const tables = await TableService.getAllTables();
            res.status(200).json({ status: 'ok', tables });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getTablesByDate(req, res) {
        try {
            const {date} = req.body;
            const tables = await TableService.getTablesByDate(date);
            res.status(200).json({ status: 'ok', tables });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteTable(req, res) {
        try {
            const {tableId} = req.body;
            const tableDeleted = await TableService.deleteTable(tableId);
            res.status(200).json({ status: 'ok', tableDeleted });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async editTable(req, res) {
        try {
            const {tableId, numMesa, monto, estadoPago, propina} = req.body;
            const tableEdited = await TableService.editTable(tableId, numMesa, monto, estadoPago, propina);
            res.status(200).json({ status: 'ok', tableEdited });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async summaryDayByDate(req, res) {
        try {
            const {date} = req.body;
            const summary = await TableService.summaryDayByDate(date);
            res.status(200).json({ status: 'ok', summary });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = TableController;
