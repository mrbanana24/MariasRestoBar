const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tableSchema = new Schema({
    numMesa: {
        type: Number,
        required: [true, 'El número de mesa es obligatorio']
    },
    monto:{
        type: Number,
        required: [true, 'El monto es obligatorio']
    },
    estadoPago: {
        type: String,
        required: [true, 'El estado de pago es obligatorio'],
        enum: ['Efectivo', 'Tarjeta', 'Mercado Pago']
    },
    propina: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Table', tableSchema);