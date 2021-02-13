const fs = require('fs');
const mysql = require('mysql');

var outputRead = fs.readFileSync('./config/Credenciales.txt', 'utf-8');
var credenciales = outputRead;
var hostValue = credenciales.split(';')[0];
var userValue = credenciales.split(';')[1];
var passwordValue = credenciales.split(';')[2];
var databaseValue = credenciales.split(';')[3];

const database = mysql.createConnection({
    host: hostValue,
    user: userValue,
    password: passwordValue,
    database: databaseValue
});

database.connect((err) => {
    if(err) {
        console.log('Error a conectar a la database');
    } else {
        console.log('DB is connected');
    }
});

module.exports = { database };