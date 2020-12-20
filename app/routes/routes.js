// const {check, validationResult} = require('express-validator');
const controllerUsers = require('../controllers/usersController');
const controllerPostos = require('../controllers/postosController');


module.exports = {

    /******* USERS *******/
    rotaListaUser: function (app){
        app.get('/users/:id', function(req, res){
            res.send('rotaListaUser');
        });
    },
    rotaEditaUser: function (app){
        app.put('/users/:id', function(req, res){
            res.send('rotaEditaUser');
        });
    },
    rotaFavoritoUser: function (app){
        app.put('/users/:chargeStationId:', function(req, res){
            res.send('rotaFavoritoUser');
        });
    },
    rotaListaFavoritosUser: function (app){
        app.get('/users/:id', function(req, res){
            res.send('rotaListaFavoritosUser');
        });
    },
    rotaCriaUser: function (app){
        app.post('/users', function(req, res){
            const body = req.body;
            res.send({'message' : body});
        });
    },
    rotaLogin: function (app){
        app.get('/users/login', function(req, res){
            res.send('rotaLogin');
        });
    },
    rotaDeleteUser: function (app){
        app.delete('/users/:id', function(req, res){
            res.send('rotaDeleteUser');
        });
    },

    /******* CHARGESTATIONS *******/
    rotaCriaPosto: function (app){
        app.post('/chargeStation', function(req, res){
            const body = req.body;
            controllerPostos.postoSalvar(app, req, res);
            // res.send({'message' : body});
        });
    },
    rotaListaPostos: function (app){
        app.get('/chargeStation', function(req, res){
            controllerPostos.postosListar(app, req, res);
            // res.send('rotaListaPostos');
        });
    },
    rotaPostosDestaque: function (app){
        app.get('/chargeStation/highlights', function(req, res){
            res.send('rotaPostosDestaque');
        });
    },
    rotaPostoDetalhes: function (app){
        app.get('/chargeStation/:id', function(req, res){
            res.send('rotaPostoDetalhes');
        });
    },
    rotaEditaPosto: function (app){
        app.put('/chargeStation/:id', function(req, res){
            res.send('rotaEditaPosto');
        });
    },
    rotaDeletePosto: function (app){
        app.delete('/chargeStation/:id', function(req, res){
            res.send('rotaDeletePosto');
        });
    },

    /******* CHARGESTATIONS *******/
    rotaListaFeedbacks: function (app){
        app.get('/feedbacks/:chargeStationId', function(req, res){
            res.send('rotaListaFeedbacks');
        });
    },
    rotaCriaFeedback: function (app){
        app.post('/feedbacks', function(req, res){
            const body = req.body;
            res.send({'message' : body});
        });
    }

    // /******* ESTUDANTES *******/
    // rotaEstudantes: function(app){
    //     app.get('/estudantes', function(req, res){
    //         controllerEstudantes.estudantesListar(app, req, res);
    //     });
    // },
    // rotaInsereEstudante: function(app){
    //     app.get('/insereestudante', function(req, res){
    //         res.render('admin/insereEstudante', {erros: {}, estudante: {}});
    //     });
    // },
    // rotaEstudanteSalvar: function(app){
    //     app.post('/estudante/salvar', [
    //         check('nome').isLength({min: 5}).withMessage('Nome deve ter no mínimo 5 caracteres'),
    //         check('cidade').isLength({min: 2}).withMessage('Cidade deve ter no mínimo 3 caracteres'),
    //         check('data_nasc').isLength({min: 1}).withMessage('Data é obrigatório'),
    //         check('nota').isLength({min: 1}).withMessage('Nota é obrigatória').isNumeric().withMessage('Nota deve ser numérico')
    //     ], function(req, res){
    //         const errors = validationResult(req);
    //         controllerEstudantes.estudantesSalvar(app, req, res, errors);
    //     });
    // },

    // /******* PROFESSORES *******/
    // rotaProfessores: function(app){
    //     app.get('/professores', function(req, res){
    //         controllerProfessores.professoresListar(app, req, res);
    //     });
    // },
    // rotaInsereProfessor: function(app){
    //     app.get('/insereprofessor', function(req, res){
    //         res.render('admin/insereProfessor', {erros: {}, professor: {}});
    //     });
    // },
    // rotaProfessorSalvar: function(app){
    //     app.post('/professor/salvar', [
    //         check('nome').isLength({min: 5}).withMessage('Nome deve ter no mínimo 5 caracteres'),
    //         check('titulacao').isLength({min: 2}).withMessage('Titulacão deve ter no mínimo 3 caracteres'),
    //     ], function(req, res){
    //         const errors = validationResult(req);
    //         controllerProfessores.professoresSalvar(app, req, res, errors);
    //     });
    // },

    // /******* CONTEÚDO PROGRAMÁTICO *******/
    // rotaInsereConteudo: function(app){
    //     app.get('/insereconteudo', function(req, res){
    //         res.render('admin/insereConteudo', {erros: {}, conteudo: {}});
    //     });
    // },
    // rotaConteudoSalvar: function(app){
    //     app.post('/conteudo/salvar', [
    //         check('conteudo').isLength({min: 5}).withMessage('O Conteúdo deve ter no mínimo 10 caracteres'),
    //         check('data_').isLength({min: 1}).withMessage('Data é obrigatório'),
    //     ], function(req, res){
    //         const errors = validationResult(req);
    //         controllerConteudo.conteudoSalvar(req, res, errors);
    //     });
    // },
    // rotaConteudo: function(app){
    //     app.get('/conteudo', function(req, res){
    //         controllerConteudo.conteudoListar(req, res);
    //     });
    // },
}