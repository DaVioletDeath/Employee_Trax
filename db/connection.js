const util = require("util")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    user: process.env.SQL_USER,
    port: 3306,
    password: process.env.SQL_PASSWORD,
    database:"employees"
});

connection.connect()


connection.query = util.promisify(connection.query)


module.exports = connection