const Coment = require('../models/dailyComment');

class CommentsService {
    static async saveComent(fecha, comentarios) {
        try {
            const coment = new Coment({
                fecha,
                comentarios
            });

            const comentSaved = await coment.save();
            return comentSaved;
        } catch (error) {
            throw error;
        }
    }

    static async getComents() {
        try {
            const coments = await Coment.find();
            return coments;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CommentsService;
