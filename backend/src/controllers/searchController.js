const pool = require('../db');

exports.search = (req, res) => {
  const { term } = req.query;
  const wildcardTerm = `%${term}%`;

  const sql = 'SELECT * FROM your_table WHERE your_column LIKE ?';
  pool.query(sql, [wildcardTerm], (err, results) => {
    if (err) {
      console.error('Error executing search query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results);
  });
};
