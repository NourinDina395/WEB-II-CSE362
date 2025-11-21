const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'taskuser',        // your MySQL username
  password: 'taskpass123', // your MySQL password
  database: 'taskdb',      // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = connection.promise();

module.exports = db;
