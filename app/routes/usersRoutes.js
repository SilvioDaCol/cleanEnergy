const controllerUsers = require('../controllers/usersController')

module.exports = {

    /******* USERS *******/
    rotaGetUserById: function (app){
        app.get('/users/id/:userId', function(req, res){
            controllerUsers.getUserById(app, req, res);
        });
    },
    rotaGetUserByEmail: function (app){
        app.get('/users/email/:email', function(req, res){
            controllerUsers.getUserByEmail(app, req, res);
        });
    },
    rotaEditaUser: function (app){
        app.put('/users/:userId', function(req, res){
            controllerUsers.updateUser(app, req, res);
        });
    },
    rotaFavoritoUser: function (app){
        app.put('/users/favorites/:userId/:chargeStationId', function(req, res){
            controllerUsers.updateFavorites(app, req, res);
        });
    },
    rotaListaFavoritosUser: function (app){
        app.get('/users/favorites/:userId', function(req, res){
            controllerUsers.getFavorites(app, req, res);
        });
    },
    rotaCriaUser: function (app){
        app.post('/users', function(req, res){
            controllerUsers.createUser(app, req, res);
        });
    },
    rotaLogin: function (app){
        app.post('/users/login', function(req, res){
            controllerUsers.login(app, req, res)
        });
    },
    rotaDeleteUser: function (app){
        app.delete('/users/:userId', function(req, res){
            controllerUsers.delete(app, req, res);
        });
    }
}