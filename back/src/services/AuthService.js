const User = require('../models/user.js');
const { generateAuthToken } = require('../utils/auth.js');
class AuthService {
  static async login(nombre, password) {
    try {
      // Buscar el usuario en la base de datos
      const user = await User.findOne({ nombre });
      console.log('ESTO ES USER',user)
      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      if(password !== user.password){
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