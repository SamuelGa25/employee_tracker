const mysql  = require('mysql');
// const config = require('config');
// const user = config.get('server.user');
// const pw = config.get('server.pw')

//connection to the database
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    //username
    user: "root",
    //password
    password: '123456789',
    database: "employee"

});

module.exports = db;