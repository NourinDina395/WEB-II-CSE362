const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
