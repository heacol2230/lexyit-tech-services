const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const connection = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// Start the server only if the database connection is successful
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });