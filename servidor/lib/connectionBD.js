var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'prestamos_db'
});

module.exports = connection;