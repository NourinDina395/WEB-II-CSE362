const express = require('express');
const router = express.Router();

// In-memory tasks array
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

// GET /task/:id - return task by ID
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

module.exports = router;
