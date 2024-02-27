const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dailyCommentSchema = new Schema({
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    comentarios: [{
        type: String
    }]
});

module.exports = mongoose.model('DailyComment', dailyCommentSchema);
