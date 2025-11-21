const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'taskuser',       // your MySQL username
  password: 'taskpass123',// your MySQL password
  database: 'taskdb',     // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
