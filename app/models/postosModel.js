module.exports = {
    getPostos: function(connection, callback){
        let sql = 'select * from chargeStation;';
        connection.query(sql, callback);
    },
    postPosto: function(posto, connection, callback){
        let sql = 'insert into chargeStation set ?;';
        connection.query(sql, posto, callback);
    },
}