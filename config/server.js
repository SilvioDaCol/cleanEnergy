const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 7000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(port, function () {
    console.log('Servidor rodando na porta ', port);
});

module.exports = app;