const SummaryDaysServices = require('../services/SummaryDaysServices');

class SummaryDaysController {
    
  static async getSummaryDayByDate(req, res) {
      try {
          const summaryDay = await SummaryDaysServices.getSummaryDayByDate();
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
}

module.exports = SummaryDaysController;