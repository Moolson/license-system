const mysql = require('mysql');
const config = require('../config.json');
const connection = mysql.createConnection({
    user: config.user,
    password: config.password,
    host: config.host,
    database: config.database
})
module.exports = connection;