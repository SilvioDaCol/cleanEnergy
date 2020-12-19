module.exports = {
    getEstudantes: function(connection, callback){
        let sql = 'select * from estudantes;';
        connection.query(sql, callback);
    },
    setEstudante: function(estudante, connection, callback){
        let sql = 'insert into estudantes set ?';
        connection.query(sql, estudante, callback);
    },
}