const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte (256-bit) random string and convert it to hexadecimal format
};

console.log(generateSecretKey());
