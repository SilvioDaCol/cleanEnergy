const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const postosModel = require('../models/postosModel');

module.exports.postosListar = function (app, req, res) {
    let conn = dbConnectionMY();
    postosModel.getPostos(conn, function (err, result){
        if (!err) {
            res.send(result);
        }else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.postoSalvar = function (app, req, res, errors) {

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let posto = req.body;
    console.log(posto);
    const connection = dbConnectionMY();
    postosModel.postPosto(posto, connection, function (err, results) {
        if (!err) {
            idposto = results.insertId
            postosModel.createFeedback(idposto, connection, function (err, results) {
                if (!err) {
                    res.send('Posto cadastrado');
                }
            });
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.postosDestaque = function (app, req, res) {
    const connection = dbConnectionMY();
    postosModel.getPostos(connection, function (err, result){
        if (!err) {
            result.sort( (chSt1, chSt2) => {
                if ( chSt1.meanstars > chSt2.meanstars ) return -1;  
                if ( chSt1.meanstars < chSt2.meanstars ) return 1;
                return 0;
            });
            res.send(result.slice(0, 3));

        }else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.postoDetalhes = function (app, req, res) {
    const { id } = req.params;
    const connection = dbConnectionMY();
    postosModel.getPosto(id, connection, function (err, results) {
        if (!err) {
            res.send({ posto: results });
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.deletePosto = function (app, req, res) {
    const { id } = req.params;
    const connection = dbConnectionMY();
    postosModel.deletePosto(id, connection, function (err, results) {
        if (!err) {
            res.send('Posto Deletado');
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.updatePosto = function (app, req, res, errors) {

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const posto = req.body;
    const connection = dbConnectionMY();
    postosModel.updatePosto(posto, id, connection, function (err, results) {
        if (!err) {
            res.send('Posto atualizado');
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.getFeedback = function (app, req, res) {
    const { chargeStationId } = req.params;
    const connection = dbConnectionMY();
    postosModel.getFeedback(chargeStationId, connection, function (err, results) {
        if (!err) {
            res.send({ feedback: results });
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}

module.exports.postFeedback = function (app, req, res, errors) {
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const { chargeStationId, stars } = req.body;
    const connection = dbConnectionMY();
    postosModel.getFeedback(chargeStationId, connection, function (err, results) {
        if (!err) {
            feedback = JSON.parse(JSON.stringify(results[0]))
            starName = "star" + stars;
            feedback[starName] += 1;

            postosModel.postFeedback(feedback, connection, function (err, result) {
                if (!err) {
                    postosModel.calcFeedback(feedback, connection);
                    res.send('Feedback enviado');
                } else {
                    res.send(err);
                }
            });
        } else {
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({ erro: erro });
        }
    });
}