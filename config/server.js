const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
let port = 7000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())


app.use(cors());
app.options("*", cors())


/* ========== Outra tratativa ao CORS ===============
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS'){
        return res.status(200).send('Ok');
    }else{
        next();
    }
})
*/

app.listen(port, function () {
    console.log('Servidor rodando na porta ', port);
});

module.exports = app;