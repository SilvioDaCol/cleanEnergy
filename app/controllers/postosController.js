const dbConnection = require('../../config/dbConnection');
const postosModel = require('../models/postosModel');

module.exports.postosListar = function(app, req, res){
    let conn = dbConnection();
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
    const connection = dbConnection();
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


// module.exports.estudantesSalvar = function(app, req, res, errors){
//     let estudante = req.body;
//     if (!errors.isEmpty()){
//         let erros = errors.array();
//         res.render('admin/insereEstudante', {erros: erros, estudante: estudante});
//         return;
//     }
//     const connection = dbConnection();
//     estudantesModel.setEstudante(estudante, connection, function(err, results){
//         if (!err){
//             res.redirect('/estudantes');
//         } else{
//             erro = {
//                 "descricao": "Erro de conexão com o banco de dados.",
//                 "conteudo": err
//             }
//             res.render('erro', {erro: erro})
//         }
//     });
// }
