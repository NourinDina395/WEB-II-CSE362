const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /tasks with pagination
router.get('/', async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = Math.min(parseInt(req.query.limit) || 10, 50);
    const offset = (page - 1) * limit;

    const [countRows] = await db.query(`SELECT COUNT(*) AS total FROM tasks`);
    const totalTasks = countRows[0].total;

    const [taskRows] = await db.query(
      `SELECT * FROM tasks ORDER BY id DESC LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    res.json({
      totalTasks,
      totalPages: Math.ceil(totalTasks / limit),
      currentPage: page,
      limit,
      data: taskRows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
