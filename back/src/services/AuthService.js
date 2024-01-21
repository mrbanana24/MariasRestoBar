const User = require('../models/user.js');
const { generateAuthToken } = require('../utils/auth.js');

class AuthService {
  static async login(clave) {
    try {
      // Buscar el usuario en la base de datos
      const user = await User.findOne({ clave });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      // Verificar la contraseña
      const isPasswordValid = await user.comparePassword(clave);
      if (!isPasswordValid) {
        throw new Error('Contraseña incorrecta');
      }

      // Si todo es correcto, puedes retornar un token de autenticación
      const token = generateAuthToken(user);

      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;