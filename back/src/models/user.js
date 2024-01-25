const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  nombre: {
    type: String,
    // Nombre no es obligatorio
    required: false
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
});


module.exports = mongoose.model("User", userSchema);