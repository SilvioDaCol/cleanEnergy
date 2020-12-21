module.exports = {
    getUserById: async function (userId, connection, callback) {
        let sql = "SELECT * FROM users WHERE ID = ?";
        connection.query(sql, userId, callback);
    },
    getUserByEmail: async function (email, connection, callback) {
        sql = "SELECT * FROM users WHERE email = ?"
        connection.query(sql, email, callback);
    },
    updateUser: async function (userId, updateUser, connection, callback) {
        const { name, email, password, urlImage } = updateUser;
        sql = "UPDATE users set name = ?, email = ?, password = ?, url_image = ?  where id = ?;";

        connection.query(sql, [name, email, password, urlImage, userId], callback);
    },

    updateFavorites: async function (userId, chargeStationId, connection, callback) {
        sql1 = "select * from users where id = ?;"

        connection.query(sql1, userId, function (err, result) {
            if (err) {
                throw new Error(err);
            }
            let favorites;
            if (result[0].favorites != null) {
                favorites = `${result[0].favorites},${chargeStationId}`;
            } else {
                favorites = `${chargeStationId}`;
            }

            sql2 = "UPDATE users set favorites = ? where id = ?;";
            connection.query(sql2, [favorites, userId], callback);
        });
    },
    postUser: async function (user, connection, callback) {
        const { name, email, password, urlImage } = user;

        let sql = "INSERT INTO users (name, email, password, url_image) VALUES (?, ?, ?, ?)";
        connection.query(sql, [name, email, password, urlImage], callback);
    },
    getFavorite: async function (userId, connection, callback) {
        sql = 'select id as userId, favorites from users where id = ?;'
        connection.query(sql, userId, callback);
    },
    login: async function (email, password, connection, callback) {
        let sql = "SELECT * from users where email = ? and password = ?;"
        connection.query(sql, [email, password], callback);
    },
    deleteUser: async function (userId, connection, callback) {
        let sql = "DELETE from users where id = ?;"
        connection.query(sql, userId, callback);
    }
}