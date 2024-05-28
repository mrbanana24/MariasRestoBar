const SummaryDaysServices = require('../services/SummaryDaysServices');

class SummaryDaysController {
    
    static async getSummaryDayByDate(req, res) {
        try {
            const {date} = req.body;
            const summaryDay = await SummaryDaysServices.getSummaryDayByDate(date);
            res.status(200).json(summaryDay);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
  
    static async putSummaryDay(req, res) {
        try {
            const summaryDay = await SummaryDaysServices.putSummaryDay();
            res.status(201).json(summaryDay);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async saveCaja(req, res) {
        try {
            const {montoCaja} = req.body;
            const caja = await SummaryDaysServices.saveCaja(montoCaja);
            res.status(201).json(caja);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async getCajaValue(req, res) {
        try {
            const caja = await SummaryDaysServices.getCajaValue();
            res.status(200).json(caja);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = SummaryDaysController;