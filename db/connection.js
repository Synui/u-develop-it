const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // My MySQL username,
        user: 'root',
        // My MySQL password
        password: 'SynnybunSaia12!!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;