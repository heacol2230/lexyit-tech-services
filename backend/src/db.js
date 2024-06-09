const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'lexyitbooking'
});

module.exports = pool;
