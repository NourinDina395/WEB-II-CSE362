const express = require('express');
const router = express.Router();
const db = require('../config/db');
const logger = require('../logger');

// GET /tasks
router.get('/', async (req, res) => {
  try {
    let query = 'SELECT id, title, completed, priority, created_at AS createdAt FROM tasks WHERE deleted_at IS NULL';
    const params = [];

    if (req.query.q) {
      query += ' AND LOWER(title) LIKE ?';
      params.push(`%${req.query.q.toLowerCase()}%`);
    }

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query(
      'UPDATE tasks SET deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found or already deleted' });
    }

    res.json({ message: 'Task soft-deleted successfully' });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /tasks/:id/restore
router.put('/:id/restore', async (req, res) => {
  try {
    const [result] = await db.query(
      'UPDATE tasks SET deleted_at = NULL WHERE id = ? AND deleted_at IS NOT NULL',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found or not deleted' });
    }

    res.json({ message: 'Task restored successfully' });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
