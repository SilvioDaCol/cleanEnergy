let mysql = require('mysql');

module.exports = function(){
    return connection = mysql.createConnection({
        host: '172.17.0.2',
        user: 'aluno_IFSP',
        password: '123456',
        database: 'cleanenergy_db'
    });
}