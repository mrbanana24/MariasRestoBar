const mongoose = require("mongoose");

let rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol válido'
}

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