// server.js (Backend)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'lexyitbooking'
});

// user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    
    bcrypt.compare(password, user.passwpord, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).json({ error: 'Internal Server Error '});
      }

      if (!bcryptResult) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.id }, 'ba7411869f288f773cc41f601604cc5278317b83bb510a6fe66fe7206f5ef6b8');
      res.json({ token });
    });
  });
});

// User Registration
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (insertErr) => {
      if (insertErr) {
        console.error('Error executing MySQL query:', insertErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Fetch Schedule Data for Today
app.get('/api/schedule', (req, res) => {
  const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

  pool.query('SELECT * FROM schedule WHERE date = ?', [today], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});