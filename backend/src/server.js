const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', searchRoutes);

app.get('/api/schedule', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);

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
