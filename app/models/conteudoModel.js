module.exports = {
    getConteudo: function(connection, callback){
        let sql = 'select * from conteudoprogramatico;';
        connection.query(sql, callback);
    },
    setConteudo: function(conteudo, connection, callback){
        let sql = 'insert into conteudoprogramatico set ?;';
        connection.query(sql, conteudo, callback);
    }
}