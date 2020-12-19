module.exports = {
    getUser: function(connection, callback){
        let sql = 'select * from users where id = ?;';
        connection.query(sql, callback);
    },
    updateUser: function(userUpdate, userId, connection, callback){
        let sql = 'update users set ? where id = ?;';
        connection.query(sql, userUpdate, userId,  callback);
    },
    updateFavorites: function(userId, chargeStationId, connection, callback){
        let sql = 'update table users set favorites = ? where id = ?;';
        connection.query(sql, chargeStationId, userId,  callback);
    },
    postUser: function(user, connection, callback){
        let sql = 'insert into users set ?;';
        connection.query(sql, user, callback);
    },
    getFavorite: function(user, connection, callback){
        const userId = user.id;
        let sql = 'select favorites from users where userId = ?;';
        connection.query(sql, userId, callback);
    },
    login: function(email, password, connection, callback){
        let sql = 'select 1 from users where email = ? and password = ?;';
        connection.query(sql, email, password, callback);
    },
    deleteUser: function(user, connection, callback){
        const userId = user.id;
        let sql = 'delete from users where id = ?;';
        connection.query(sql, userId, callback);
    }
}