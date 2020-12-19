const dbConnection = require('../../config/dbConnection');
const estudantesModel = require('../models/estudantesModel');

module.exports.estudantesListar = function(app, req, res){
    let conn = dbConnection();
    estudantesModel.getEstudantes(conn, function(err, result){
        if (!err){
            res.render('estudantes', {estudantes: result});
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    });
}

module.exports.estudantesSalvar = function(app, req, res, errors){
    let estudante = req.body;
    if (!errors.isEmpty()){
        let erros = errors.array();
        res.render('admin/insereEstudante', {erros: erros, estudante: estudante});
        return;
    }
    const connection = dbConnection();
    estudantesModel.setEstudante(estudante, connection, function(err, results){
        if (!err){
            res.redirect('/estudantes');
        } else{
            erro = {
                "descricao": "Erro de conexão com o banco de dados.",
                "conteudo": err
            }
            res.render('erro', {erro: erro})
        }
    });
}
