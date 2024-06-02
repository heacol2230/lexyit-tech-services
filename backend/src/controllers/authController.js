const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connection = require('../db')

exports.register = (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err)
      return res.status(500).json({ message: 'Internal server error' })
    }

    // Save user details to the database
    const sql =
      'INSERT INTO customers (firstName, lastName, email, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)'
    connection.query(
      sql,
      [firstName, lastName, email, hash, phone, address],
      (err, result) => {
        if (err) {
          console.error('Error registering user:', err)
          return res.status(500).json({ message: 'Internal server error' })
        }
        return res.status(201).json({ message: 'User registered successfully' })
      }
    )
  })
}

exports.login = (req, res) => {
  const { email, password } = req.body

  // Check if user exists in the database
  const sql = 'SELECT * FROM customers WHERE email = ?'
  connection.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error querying user:', err)
      return res.status(500).json({ message: 'Internal server error' })
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Compare passwords
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err)
        return res.status(500).json({ message: 'Internal server error' })
      }
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: results[0].customerID },
        'your_secret_key',
        { expiresIn: '1h' }
      )
      return res.status(200).json({ token })
    })
  })
}
