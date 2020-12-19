const dbConnection = require('../../config/dbConnection');
const {check, validationResult} = require('express-validator');
const controllerEstudantes = require('../controllers/estudantesController');
const controllerProfessores = require('../controllers/professoresController');
const controllerConteudo = require('../controllers/conteudoController');


module.exports = {
    /******* HOME *******/
    rotaHome: function (app){
        app.get('/', function(req, res){
            res.render('home');
        });
    },

    /******* ESTUDANTES *******/
    rotaEstudantes: function(app){
        app.get('/estudantes', function(req, res){
            controllerEstudantes.estudantesListar(app, req, res);
        });
    },
    rotaInsereEstudante: function(app){
        app.get('/insereestudante', function(req, res){
            res.render('admin/insereEstudante', {erros: {}, estudante: {}});
        });
    },
    rotaEstudanteSalvar: function(app){
        app.post('/estudante/salvar', [
            check('nome').isLength({min: 5}).withMessage('Nome deve ter no mínimo 5 caracteres'),
            check('cidade').isLength({min: 2}).withMessage('Cidade deve ter no mínimo 3 caracteres'),
            check('data_nasc').isLength({min: 1}).withMessage('Data é obrigatório'),
            check('nota').isLength({min: 1}).withMessage('Nota é obrigatória').isNumeric().withMessage('Nota deve ser numérico')
        ], function(req, res){
            const errors = validationResult(req);
            controllerEstudantes.estudantesSalvar(app, req, res, errors);
        });
    },

    /******* PROFESSORES *******/
    rotaProfessores: function(app){
        app.get('/professores', function(req, res){
            controllerProfessores.professoresListar(app, req, res);
        });
    },
    rotaInsereProfessor: function(app){
        app.get('/insereprofessor', function(req, res){
            res.render('admin/insereProfessor', {erros: {}, professor: {}});
        });
    },
    rotaProfessorSalvar: function(app){
        app.post('/professor/salvar', [
            check('nome').isLength({min: 5}).withMessage('Nome deve ter no mínimo 5 caracteres'),
            check('titulacao').isLength({min: 2}).withMessage('Titulacão deve ter no mínimo 3 caracteres'),
        ], function(req, res){
            const errors = validationResult(req);
            controllerProfessores.professoresSalvar(app, req, res, errors);
        });
    },

    /******* CONTEÚDO PROGRAMÁTICO *******/
    rotaInsereConteudo: function(app){
        app.get('/insereconteudo', function(req, res){
            res.render('admin/insereConteudo', {erros: {}, conteudo: {}});
        });
    },
    rotaConteudoSalvar: function(app){
        app.post('/conteudo/salvar', [
            check('conteudo').isLength({min: 5}).withMessage('O Conteúdo deve ter no mínimo 10 caracteres'),
            check('data_').isLength({min: 1}).withMessage('Data é obrigatório'),
        ], function(req, res){
            const errors = validationResult(req);
            controllerConteudo.conteudoSalvar(req, res, errors);
        });
    },
    rotaConteudo: function(app){
        app.get('/conteudo', function(req, res){
            controllerConteudo.conteudoListar(req, res);
        });
    },
}