const AuthService = require('../services/AuthService');

class AuthController {
  static async login(req, res) {
    console.log(req.body);
    try {
      const { password } = req.body;
      const token = await AuthService.login(password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;