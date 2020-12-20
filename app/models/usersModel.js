module.exports = {
    getUserById: async function (userId, connection) {
        const {rows} = await connection.query(
            "SELECT * FROM users WHERE ID = $1",
            [userId]
        );
        return rows;
    },
    getUserByEmail: async function (email, connection) {
        const {rows} = await connection.query(
            "SELECT * FROM users WHERE email like %$1%",
            [email]
        );
        return rows;
    },
    updateUser: async function (userId, updateUser, connection) {
        const {name, email, password, urlImage} = updateUser;

        return await connection.query(
            "UPDATE users set name = $1, email = $2, password = $3, url_image = $4  where id = $5",
            [name, email, password, urlImage, userId]
        );
    },
    updateFavorites: function (userId, chargeStationId, connection, callback) {
        let sql = 'update table users set favorites = ? where id = ?;';
        connection.query(sql, chargeStationId, userId, callback);
    },
    postUser: async function (user, connection) {
        const { name, email, password, urlImage } = user;
        return await connection.query(
            "INSERT INTO users (name, email, password, url_image) VALUES ($1, $2, $3, $4)",
            [name, email, password, urlImage]
        );
    },
    getFavorite: function (user, connection, callback) {
        const userId = user.id;
        let sql = 'select favorites from users where userId = ?;';
        connection.query(sql, userId, callback);
    },
    login: function (email, password, connection, callback) {
        let sql = 'select 1 from users where email = ? and password = ?;';
        connection.query(sql, email, password, callback);
    },
    deleteUser: function (user, connection, callback) {
        const userId = user.id;
        let sql = 'delete from users where id = ?;';
        connection.query(sql, userId, callback);
    }
}