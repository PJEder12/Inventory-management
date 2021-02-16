const express = require('express');
const app = express();

const { config } = require('./config/index');
const { database } = require('./config/dbConfig');

//Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello Wolrd');
});

database.query('SELECT * FROM InventoryManagement.Usuarios', async(err,result) => {
    if (err) throw err;
    user=result[0];
    console.log(user);
});

app.listen(config.port, function() {
    console.log(`Listening http://localhost/${config.port}`);
});