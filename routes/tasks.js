const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /tasks with optional search query
router.get('/', async (req, res) => {
  try {
    // Use correct column name from MySQL and alias it to createdAt
    let query = 'SELECT id, title, completed, priority, created_at AS createdAt FROM tasks';
    const params = [];

    if (req.query.q) {
      query += ' WHERE LOWER(title) LIKE ?';
      params.push(`%${req.query.q.toLowerCase()}%`);
    }

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
