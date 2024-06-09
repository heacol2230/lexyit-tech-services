const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const validatePasswordComplexity = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

exports.register = (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body;

  if (!validatePasswordComplexity(password)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const sql = 'INSERT INTO customers (firstName, lastName, email, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)';
    pool.query(sql, [firstName, lastName, email, hashedPassword, phone, address], (insertErr) => {
      if (insertErr) {
        console.error('Error executing MySQL query:', insertErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM customers WHERE email = ?';
  pool.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (!bcryptResult) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.customerID }, 'your_secret_key', { expiresIn: '1h' });
      res.json({ token, customerID: user.customerID });
    });
  });
};

exports.changePassword = (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  if (!validatePasswordComplexity(newPassword)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.' });
  }

  const sql = 'SELECT * FROM customers WHERE email = ?';
  pool.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email' });
    }

    const user = results[0];

    bcrypt.compare(oldPassword, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (!bcryptResult) {
        return res.status(401).json({ error: 'Invalid old password' });
      }

      bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
        if (hashErr) {
          console.error('Error hashing password:', hashErr);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        const updateSql = 'UPDATE customers SET password = ? WHERE email = ?';
        pool.query(updateSql, [hashedPassword, email], (updateErr) => {
          if (updateErr) {
            console.error('Error updating password:', updateErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }

          res.status(200).json({ message: 'Password updated successfully' });
        });
      });
    });
  });
};
