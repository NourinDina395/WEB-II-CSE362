const express = require('express');
const app = express();
const tasksRouter = require('./src/routes/tasks'); // updated path

// Middleware to parse JSON
app.use(express.json());

// Use tasks router
app.use('/tasks', tasksRouter); // GET /tasks and GET /tasks/:id

// Health check route
app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        uptime: process.uptime()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
