const express = require('express');
const router = express.Router();

// Tasks array with 5 sample tasks
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Build REST API", completed: true, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Read Express Docs", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Write Tests", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Deploy App", completed: true, priority: "high", createdAt: new Date() },
];

// GET /tasks - return all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

module.exports = router;
