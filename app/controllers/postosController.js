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

module.exports.postoDetalhes = function(app, req, res){
    const {id} = req.params;
    const connection = dbConnectionMY();
    postosModel.getPosto(id, connection, function(err, results){
        if (!err){
            res.send({posto: results});
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({erro: erro});
        }
    });
}

module.exports.deletePosto = function(app, req, res){
    const {id} = req.params; 
    const connection = dbConnectionMY();
    postosModel.deletePosto(id, connection, function(err, results){
        if (!err){
            res.send('Posto Deletado');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({erro: erro});
        }
    });
}

module.exports.updatePosto = function(app, req, res){
    const {id} = req.params;
    const posto = req.body;
    const connection = dbConnectionMY();
    postosModel.updatePosto(posto, id, connection, function(err, results){
        if (!err){
            res.send('Posto atualizado');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.send({erro: erro});
        }
    });
}