const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const usersModel = require('../models/usersModel');

module.exports.usersListar = async (app, req, res) => {
  const { userId } = req.params;
  const response = await usersModel.getUser(userId, dbConnectionPG);
  res.status(200).send(response);
};

module.exports.createUser = (app, req, res) => {
  const user = req.body;
  try {
    const criarUser = usersModel.postUser(user, dbConnectionPG);
    res.status(201).send({
      message: "User criado com sucesso!",
      criarUser
    });
  } catch (err) {
    console.log(err)
  }
}

module.exports.updateUser = (app, req, res) => {
  const id = req.params;
  const user = req.body;

  try {
    const updateUser = usersModel.updateUser(id, user, dbConnectionPG);
    res.status(201).send({
      message: "User atualizado com sucesso!",
      updateUser
    });
  } catch (err) {
    console.log(err)
  }
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