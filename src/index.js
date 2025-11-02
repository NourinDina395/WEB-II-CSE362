const express = require("express");
const app = express();
const tasks = require("./tasks"); // Import tasks array

app.use(express.json());

// GET /task/:id route
app.get("/task/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convert id from string to number
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

// Optional: GET /tasks route to see all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
