const express = require('express');
const app = express();

// Sample tasks array
const tasks = [
    {
        id: 1,
        title: "Complete assignment",
        completed: false,
        priority: "high",
        createdAt: new Date("2025-11-01T10:00:00")
    },
    {
        id: 2,
        title: "Read Node.js docs",
        completed: true,
        priority: "medium",
        createdAt: new Date("2025-11-01T12:00:00")
    },
    {
        id: 3,
        title: "Write blog post",
        completed: false,
        priority: "low",
        createdAt: new Date("2025-11-02T09:00:00")
    },
    {
        id: 4,
        title: "Push code to GitHub",
        completed: true,
        priority: "high",
        createdAt: new Date("2025-11-02T14:00:00")
    },
    {
        id: 5,
        title: "Prepare for meeting",
        completed: false,
        priority: "medium",
        createdAt: new Date("2025-11-02T16:00:00")
    }
];

// GET /tasks route
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
