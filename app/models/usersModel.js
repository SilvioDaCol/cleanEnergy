module.exports = {
    getUserById: async function (userId, connection) {
        const { rows } = await connection.query(
            "SELECT * FROM users WHERE ID = $1",
            [userId]
        );
        return rows;
    },
    getUserByEmail: async function (email, connection) {
        const { rows } = await connection.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        return rows;
    },
    updateUser: async function (userId, updateUser, connection) {
        const { name, email, password, urlImage } = updateUser;

        return await connection.query(
            "UPDATE users set name = $1, email = $2, password = $3, url_image = $4  where id = $5",
            [name, email, password, urlImage, userId]
        );
    },
    updateFavorites: async function (userId, chargeStationId, connection) {

        const { rows } = await connection.query(
            "select * from users where id = $1",
            [userId]
        )
        let favorites;
        if (rows[0].favorites != null) {
            favorites = `${rows[0].favorites},${chargeStationId}`;
        } else {
            favorites = `${chargeStationId}`;
        }

        return await connection.query(
            "UPDATE users set favorites = $1 where id = $2",
            [favorites, userId]
        );
    },
    postUser: async function (user, connection) {
        const { name, email, password, urlImage } = user;
        return await connection.query(
            "INSERT INTO users (name, email, password, url_image) VALUES ($1, $2, $3, $4)",
            [name, email, password, urlImage]
        );
    },
    getFavorite: async function (userId, connection) {
        const {rows} = await connection.query(
            'select id as userId, favorites from users where id = $1;',
            [userId]
        );
        return rows[0];

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