const dbConnection = require("../../config/dbConnection");
const conteudoModel = require('../models/conteudoModel');

module.exports.conteudoListar = function(req, res){
    let conn = dbConnection();
    conteudoModel.getConteudo(conn, function(err, result){
        if (!err){
            res.render('conteudo', {conteudo: result});
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    }); 
}

module.exports.conteudoSalvar = function(req, res, errors){
    let conteudo = req.body;
    if (!errors.isEmpty()){
        let erros = errors.array();
        res.render('admin/insereConteudo', {erros: erros, conteudo: conteudo});
        return;
    }
    const connection = dbConnection();
    conteudoModel.setConteudo(conteudo, connection, function(err, results){
        if (!err){
            res.redirect('/conteudo');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    });
}