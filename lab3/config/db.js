// config/db.js
const mysql = require('mysql2');

// Create a connection pool
const connection = mysql.createPool({
  host: 'localhost',       // MySQL server
  user: 'taskuser',        // MySQL user created in Step 2
  password: 'taskpass123', // Password for this user
  database: 'taskdb',      // Database created in Step 2
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Wrap the connection with Promise support for async/await
const promiseConnection = connection.promise();

module.exports = promiseConnection;
