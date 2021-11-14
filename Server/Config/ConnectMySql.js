const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'tienminh0801',
    database: 'db_dacnpm'
})

connection.connect((err) => {
    if (err) console.log("Cannot connect MySql because ", err)
    else console.log("Connected to MySql !!!!")
})

module.exports = connection