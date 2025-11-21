// seed.js
const db = require('./config/db');

async function seedTasks() {
  try {
    // Check if table already has data
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM tasks');
    if (rows[0].count > 0) {
      console.log('Tasks already seeded. Exiting...');
      process.exit(0);
    }

    // Sample tasks
    const tasks = [
      ['Learn Node.js', 0, 'high'],
      ['Learn Express', 0, 'medium'],
      ['Learn MySQL', 0, 'low'],
      ['Build REST API', 0, 'high'],
      ['Create Postman Collection', 0, 'medium'],
      ['Implement CRUD', 0, 'high'],
      ['Learn JavaScript', 0, 'high'],
      ['Read Technical Docs', 0, 'medium'],
      ['Write Unit Tests', 0, 'medium'],
      ['Optimize Queries', 0, 'high'],
      ['Fix Bugs', 0, 'high'],
      ['Code Review', 0, 'medium'],
      ['Deploy App', 0, 'high'],
      ['Learn Git', 0, 'medium'],
      ['Practice Algorithms', 0, 'high'],
    ];

    // Insert tasks into DB
    for (const [title, completed, priority] of tasks) {
      await db.query(
        'INSERT INTO tasks (title, completed, priority, created_at) VALUES (?, ?, ?, NOW())',
        [title, completed, priority]
      );
    }

    console.log('Tasks seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding tasks:', err);
    process.exit(1);
  }
}

seedTasks();
