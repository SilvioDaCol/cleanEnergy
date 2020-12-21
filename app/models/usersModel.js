module.exports = {
    getUserById: async function (userId, connection, callback) {
        let sql = "SELECT * FROM users WHERE ID = ?";
        connection.query(sql, userId, callback);
    },
    getUserByEmail: async function (email, connection, callback) {
        sql = "SELECT * FROM users WHERE email = ?"
        connection.query(sql, email, callback);
    },
    updateUser: async function (userId, updateUser, connection) {
        const { name, email, password, urlImage } = updateUser;

        return await connection.query(
            "UPDATE users set name = $1, email = $2, password = $3, url_image = $4  where id = $5",
            [name, email, password, urlImage, userId]
        );
    },
    updateFavorites: async function (userId, chargeStationId, connection, callback) {
        sql1 = "select * from users where id = ?;"
        sql2 = "UPDATE users set favorites = ? where id = ?;";

        connection.query(sql1, userId, function(err, result){
            if (err){
                throw new Error(err);
            }
            let favorites;
            if (result[0].favorites != null) {
                favorites = `${result[0].favorites},${chargeStationId}`;
            } else {
                favorites = `${chargeStationId}`;
            }

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
    login: async function (email, password, connection) {
        const { rows } = await connection.query(
            "SELECT * from users where email = $1 and password = $2;",
            [email, password]
        );
        return rows;
    },
    deleteUser: async function (userId, connection) {
        return await connection.query(
            "DELETE from users where id = $1;",
            [userId]
        );
    }
}