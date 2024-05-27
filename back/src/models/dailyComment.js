const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dailyCommentSchema = new Schema({
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    comentarios: {
        type: String
    },
    gasto: {
        type: Number,
        required: [true, 'El gasto es obligatorio']
    }
});

module.exports = mongoose.model('DailyComment', dailyCommentSchema);
