const Coment = require('../models/dailyComment');

class CommentsService {
    static async saveComent(fecha, comentarios, gasto) {
        try {
            const coment = new Coment({
                fecha,
                comentarios,
                gasto
            });

            const comentSaved = await coment.save();
            return comentSaved;
        } catch (error) {
            throw error;
        }
    }

    static async getAllComents() {
        try {
            const coments = await Coment.find();
            return coments;
        } catch (error) {
            throw error;
        }
    }

    static async getComentsByDate(date) {
        try {
            // Desde que empieza turno maniana hasta que termina turno noche
            // Fecha de inicio al comienzo del turno mañana a las 08:00
            const startDate = new Date(date);
            startDate.setHours(8, 0, 0, 0);

            // Fecha de fin al final del turno noche del día siguiente a las 07:00
            const endDate = new Date(date);
            endDate.setDate(endDate.getDate() + 1); // Añadir un día
            endDate.setHours(7, 0, 0, 0);
    
            const coments = await Coment.find({
                fecha: {
                    $gte: startDate,
                    $lte: endDate
                }
            });
            return coments;
        } catch (error) {
            throw error;
        }
    }
    
    static async deleteComentById(commentId) {
        try {
            const comentDeleted = await Coment.findByIdAndDelete(commentId);
            return comentDeleted;
        } catch (error) {
            throw error;
        }
    }

    static async editComment(commentId, comentarios, gasto) {
        try {
            const update = {
                comentarios
            };

            // Solo añadir gasto al update si se proporciona, para permitir la edición parcial
            if (gasto !== undefined) {
                update.gasto = gasto;
            }

            const comentEdited = await Coment.findByIdAndUpdate(commentId, update, { new: true });
            return comentEdited;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CommentsService;
