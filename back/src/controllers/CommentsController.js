const CommentsService = require('../services/CommentsService');

class CommentsController {
    static async saveComent(req, res) {
        try {
            const {fecha, comentarios} = req.body;
            const comentSaved = await CommentsService.saveComent(fecha, comentarios);
            res.status(200).json({ status: 'ok', comentSaved });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getComents(req, res) {
        try {
            const coments = await CommentsService.getComents();
            res.status(200).json({ status: 'ok', coments });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CommentsController;
