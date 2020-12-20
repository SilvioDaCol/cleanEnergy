module.exports = {
    getPostos: function(connection, callback){
        let sql = 'select * from chargeStation;';
        connection.query(sql, callback);
    },
    postPosto: function(posto, connection, callback){
        let sql = 'insert into chargeStation set ?;';
        connection.query(sql, posto, callback);
    },
    getPosto: function(idposto, connection, callback){
        let sql = 'select * from chargeStation where idposto = ?;';
        connection.query(sql, idposto, callback);
    },
    updatePosto: function(posto, idposto, connection, callback){
        let sql = 'update chargeStation set ? where idposto = ?;';
        connection.query(sql, [posto, idposto], callback);
    },
    deletePosto: function(idposto, connection, callback){
        let sql = 'delete from chargeStation where idposto = ?;';
        connection.query(sql, idposto, callback);
    },
}