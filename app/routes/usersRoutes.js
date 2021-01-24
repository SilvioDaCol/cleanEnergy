const { check, validationResult } = require('express-validator');
const controllerUsers = require('../controllers/usersController');

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
        app.put('/users/:userId', [
            check('name').notEmpty().withMessage('O nome é obrigatório!').isLength({max: 100}).withMessage('Nome não deve ser maior que 100 caracteres.'),
            check('email').notEmpty().withMessage('O email é obrigatório!').isLength({max: 100}).withMessage('Email não deve ser maior que 100 caracteres.'),
            check('password').notEmpty().withMessage('A senha é obrigatória!').isLength({min: 8}).withMessage('Senha precisa ter pelo menos 8 digitos.'),
            check('urlImage').notEmpty().withMessage('A urlImage é obrigatória.')
        ], function(req, res){
            const erros = validationResult(req);
            controllerUsers.updateUser(app, req, res, erros);
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
        app.post('/users', [
            check('name').notEmpty().withMessage('O nome é obrigatório!').isLength({max: 100}).withMessage('Nome não deve ser maior que 100 caracteres.'),
            check('email').notEmpty().withMessage('O email é obrigatório!').isLength({max: 100}).withMessage('Email não deve ser maior que 100 caracteres.'),
            check('password').notEmpty().withMessage('A senha é obrigatória!').isLength({min: 8}).withMessage('Senha precisa ter pelo menos 8 digitos.'),
            check('urlImage').notEmpty().withMessage('A urlImage é obrigatória.')
        ], function(req, res){
            const erros = validationResult(req);
            controllerUsers.createUser(app, req, res, erros);
        });
    },
    rotaLogin: function (app){
        app.post('/users/login', [
            check('email').notEmpty().withMessage('O email é obrigatório!').isLength({max: 100}).withMessage('Email não deve ser maior que 100 caracteres.'),
            check('password').notEmpty().withMessage('A senha é obrigatória!').isLength({min: 8}).withMessage('Senha precisa ter pelo menos 8 digitos.'),           
        ], function(req, res){
            const erros = validationResult(req);
            controllerUsers.login(app, req, res, erros)
        });
    },
    rotaDeleteUser: function (app){
        app.delete('/users/:userId', function(req, res){
            controllerUsers.delete(app, req, res);
        });
    }
}