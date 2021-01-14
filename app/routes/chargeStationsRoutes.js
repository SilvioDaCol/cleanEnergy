const { check, validationResult } = require('express-validator');
const controllerPostos = require('../controllers/postosController');

module.exports = {

    /******* CHARGESTATIONS *******/
    rotaCriaPosto: function (app) {
        app.post('/chargeStation', [
            check('nome').notEmpty().withMessage('O nome é obrigatório!').isLength({ max: 50 }).withMessage('Nome não deve ser maior que 50 caracteres.'),
            check('endereco').notEmpty().withMessage('O endereco é obrigatório!').isLength({ max: 100 }).withMessage('Endereço não deve ser maior que 100 caracteres.'),
            check('bairro').notEmpty().withMessage('O campo bairro é obrigatório!').isLength({ max: 50 }).withMessage('Bairro não deve ser maior que 50 caracteres.'),
            check('cidade').notEmpty().withMessage('A cidade é obrigatória.').isLength({ max: 50 }).withMessage('Cidade não deve ser maior que 50 caracteres.'),
            check('CEP').notEmpty().withMessage('O CEP é obrigatório.').isLength({ max: 9, min: 9 }).withMessage('CEP deve ter 9 caracteres.'),
            check('lat').notEmpty().withMessage('As coordenadas são obrigatórias.'),
            check('long').notEmpty().withMessage('As coordenadas são obrigatórias.'),
            check('atendimento24').notEmpty().withMessage('A informação sobre atendimento24 é obrigatória.').isBoolean().withMessage('Campo atendimento24 precisa ser um boolean [true or false]'),
            check('imagem').notEmpty().withMessage('A urlImage é obrigatória.')

        ], function (req, res) {
            const erros = validationResult(req);
            controllerPostos.postoSalvar(app, req, res, erros);
        });
    },
    rotaListaPostos: function (app) {
        app.get('/chargeStation', function (req, res) {
            controllerPostos.postosListar(app, req, res);
        });
    },
    rotaPostosDestaque: function (app) {
        app.get('/chargeStation/highlights', function (req, res) {
            res.send('rotaPostosDestaque');
        });
    },
    rotaPostoDetalhes: function (app) {
        app.get('/chargeStation/:id', function (req, res) {
            controllerPostos.postoDetalhes(app, req, res);
        });
    },
    rotaEditaPosto: function (app) {
        app.put('/chargeStation/:id', [
            check('nome').notEmpty().withMessage('O nome é obrigatório!').isLength({ max: 100 }).withMessage('Nome não deve ser maior que 100 caracteres.'),
            check('endereco').notEmpty().withMessage('O endereco é obrigatório!').isLength({ max: 100 }).withMessage('Email não deve ser maior que 100 caracteres.'),
            check('bairro').notEmpty().withMessage('O campo bairro é obrigatório!').isLength({ min: 8 }).withMessage('Senha precisa ter pelo menos 8 digitos.'),
            check('cidade').notEmpty().withMessage('A cidade é obrigatória.'),
            check('CEP').notEmpty().withMessage('O CEP é obrigatório.'),
            check('coordenadas').notEmpty().withMessage('As coordenadas são obrigatórias.'),
            check('atendimento24').notEmpty().withMessage('A informação sobre atendimento24 é obrigatória.'),
            check('imagem').notEmpty().withMessage('A urlImage é obrigatória.')

        ], function (req, res) {
            const erros = validationResult(req);
            controllerPostos.updatePosto(app, req, res, erros);
        });
    },
    rotaDeletePosto: function (app) {
        app.delete('/chargeStation/:id', function (req, res) {
            controllerPostos.deletePosto(app, req, res);
        });
    },

    /******* CHARGESTATIONS FEEDBACKS*******/
    rotaGetFeedbacks: function (app) {
        app.get('/feedbacks/:chargeStationId', function (req, res) {
            controllerPostos.getFeedback(app, req, res);
        });
    },
    rotaCriaFeedback: function (app) {
        app.post('/feedbacks', [
            check('stars').custom(stars => {
                if (stars > 5 || stars < 1) {
                    throw new Error('O valor deve ser entre 1 e 5');
                }
            }).notEmpty().withMessage('O campo start é obrigatório!')
        ], function (req, res) {
            const erros = validationResult(req);
            controllerPostos.postFeedback(app, req, res, erros)
        });
    }
}