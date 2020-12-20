const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const postosModel = require('../models/postosModel');

module.exports.postosListar = function(app, req, res){
    let conn = dbConnectionMY();
    postosModel.getPostos(conn, function(err, result){
        if (!err){
            res.send({posto: result});
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({erro: erro});
        }
    });
}

module.exports.postoSalvar = function(app, req, res){
    let posto = req.body;
    const connection = dbConnectionMY();
    postosModel.postPosto(posto, connection, function(err, results){
        if (!err){
            res.send('Posto cadastrado');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({erro: erro});
        }
    });
}