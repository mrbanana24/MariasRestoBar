const CommentsService = require('../services/CommentsService');

class CommentsController {
    static async saveComent(req, res) {
        try {
            const { fecha, comentarios, gasto } = req.body;
            if (!gasto) {
                return res.status(400).json({ error: 'El gasto es obligatorio' });
            }
            const comentSaved = await CommentsService.saveComent(fecha, comentarios, gasto);
            res.status(200).json({ status: 'ok', comentSaved });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async editComment(req, res) {
        try {
            const { commentId, comentarios, gasto } = req.body;
            const comentEdited = await CommentsService.editComment(commentId, comentarios, gasto);
            res.status(200).json({ status: 'ok', comentEdited });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAllComents(req, res) {
        try {
            const coments = await CommentsService.getAllComents();
            res.status(200).json({ status: 'ok', coments });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getComentsByDate(req, res) {
        try {
            const {date} = req.body;
            const coments = await CommentsService.getComentsByDate(date);
            res.status(200).json({ status: 'ok', coments });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteComentById(req, res) {
        try {
            const {commentId} = req.body;
            const comentDeleted = await CommentsService.deleteComentById(commentId);
            res.status(200).json({ status: 'ok', comentDeleted });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CommentsController;
