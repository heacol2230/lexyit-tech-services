const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'lexyitbooking'
});

// Export the pool instead of a single connection
module.exports = pool;
