const AuthService = require('../services/AuthService');

class AuthController {
  static async login(req, res) {
    console.log('REQUEST:');
    try {
      const {nombre, password } = req.body;
      console.log('ESTO ES REQ.BODY',req.body)
      const token = await AuthService.login(nombre, password);
      console.log('ESTO ES TOKEN',token)
      res.status(200).json({ status: 'ok', token });
    } catch (error) {
      console.log('error en el login authcontroller');
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;