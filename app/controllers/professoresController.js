const dbConnection = require('../../config/dbConnection');
const professoresModel = require('../models/professoresModel');

module.exports.professoresListar = function(app, req, res){
    let conn = dbConnection();
    professoresModel.getProfessores(conn, function(err, result){
        if (!err){
            res.render('professores', {professores: result});   
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    });
}

module.exports.professoresSalvar = function(app, req, res, errors){
    let professor = req.body;
    if (!errors.isEmpty()){
        let erros = errors.array();
        res.render('admin/insereProfessor', {erros: erros, professor: professor});
        return;
    }
    const connection = dbConnection();
    professoresModel.setProfessor(professor, connection, function(err, results){
        if (!err){
            res.redirect('/professores');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    });
}