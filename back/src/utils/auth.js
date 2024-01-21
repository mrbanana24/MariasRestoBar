const jwt = require('jsonwebtoken');

const generateAuthToken = (userId) => {
  const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '24h' });
  return token;
};

module.exports = generateAuthToken;
