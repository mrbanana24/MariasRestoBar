const AuthService = require('../services/AuthService');

class AuthController {
  static async login(req, res) {
    try {
      const {nombre, password } = req.body;
      const token = await AuthService.login(nombre, password);
      res.status(200).json({ status: 'ok', token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;