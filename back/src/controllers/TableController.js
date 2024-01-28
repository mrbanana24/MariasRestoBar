const TableService = require('../services/TableService');

class TableController {
    static async saveIndividualDataTable(req, res) {
        try {
            const {numMesa, monto, estadoPago, propina} = req.body;
            console.log('numMesa: ', numMesa);
            console.log('monto: ', monto);
            console.log('estadoPago: ', estadoPago);
            console.log('propina: ', propina);
            const tableSaved = await TableService.saveIndividualDataTable(numMesa, monto, estadoPago, propina);
            res.status(200).json({ status: 'ok', tableSaved });
        } catch (error) {
            console.log('error en el saveIndividualDataTable');
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = TableController;
