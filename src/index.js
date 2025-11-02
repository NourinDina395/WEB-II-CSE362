const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");

app.use(express.json());

// Use tasks routes
app.use("/tasks", tasksRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
