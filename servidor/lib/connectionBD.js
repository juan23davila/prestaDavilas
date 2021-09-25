var mysql = require('mysql');

let connection;

const getMySQLConnection = function(){

    if(!connection) {
       connection = mysql.createConnection({
            host: 'localhost',
            port: '8889',
            user: 'root',
            password: 'root',
            database: 'prestamos_db'
        });
    }
    return connection;
    
}
module.exports = getMySQLConnection;