const express = require("express");
const router = express.Router();
const tasks = require("../data/tasks");

// GET /tasks → return all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET /task/:id → return task by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
