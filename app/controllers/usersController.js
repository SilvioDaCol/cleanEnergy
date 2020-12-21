const { name } = require('ejs');
const { Connection } = require('pg');
const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const usersModel = require('../models/usersModel');

module.exports.getUserById = async (app, req, res) => {
  const { userId } = req.params;
  let connection = dbConnectionMY();
  usersModel.getUserById(userId, connection, function(err, result){
    if (!err){
      res.status(200).send({user: result});
    } else{
        erro = {
            "descricao": "Erro de conexão com o banco de dados.",
            "conteudo": err
        }
        res.send({erro: erro});
    }
  });
};

module.exports.getUserByEmail = async (app, req, res) => {
  const { email } = req.params;
  let connection = dbConnectionMY();
  usersModel.getUserByEmail(email, connection, function(err, result){
    if (!err){
      res.status(200).send({user: result});
    } else{
        erro = {
            "descricao": "Erro de conexão com o banco de dados.",
            "conteudo": err
        }
        res.send({erro: erro});
    }
  });
};

module.exports.getFavorites = async (app, req, res) => {
  const { userId } = req.params;

  let connection = dbConnectionMY();
  usersModel.getFavorite(userId, connection, function(err, result){
    if (!err){
      res.status(200).send(result);
    } else{
      throw new Error(err);
    }
  });
};

module.exports.createUser = async (app, req, res) => {
  const user = req.body;
  let connection = dbConnectionMY();

  usersModel.getUserByEmail(user.email, connection, function(err, result){
    if(err){
      throw new Error(err);
      return;
    }

    if (result.length > 0){
      throw new Error("Usuario ja existe!");
    } else {
      usersModel.postUser(user, connection, function(err, result){
        if(err){
          throw new Error(err);
          return;
        }
        res.status(201).send("User criado com sucesso!");
      });
    }
  });
}

module.exports.updateUser = async (app, req, res) => {
  const userId = req.params.userId;
  const user = req.body;
  try {
    const checkIfUserExists = await usersModel.getUserById(userId, dbConnectionPG);

    if (checkIfUserExists.length == 0) {
      throw new Error("Usuario não existe!");
    }
    await usersModel.updateUser(userId, user, dbConnectionPG);
    res.status(201).send({
      message: "User atualizado com sucesso!",
      user,
    });
  } catch (err) {
    console.log(err)
  }
}

module.exports.updateFavorites = async (app, req, res) => {
  const { userId, chargeStationId } = req.params;

  let connection = dbConnectionMY();
  usersModel.getUserById(userId, connection, function(err, result){

  });

  const checkIfUserExists = await usersModel.getUserById(userId, dbConnectionPG);

  if (checkIfUserExists.length == 0) {
    throw new Error("Usuario não existe!");
  }
  const favorites = await usersModel.updateFavorites(userId, chargeStationId, dbConnectionPG);
  res.status(201).send({
    message: "Favorites atualizado com sucesso!",
    favorites
  });
 
}
module.exports.login = async (app, req, res) => {
  const { email, password } = req.body;

  try {
    const checkIfUserExists = await usersModel.getUserByEmail(email, dbConnectionPG);

    if (checkIfUserExists.length == 0) {
      throw new Error("Usuario não existe!");
    }
    const userLogin = await usersModel.login(email, password, dbConnectionPG);

    console.log(userLogin)

    if (userLogin.length == 0) {
      throw new Error("Email ou senha não conferem! Favor tentar novamente com usuário e senha corretos.");
    }

    return res.status(200).send({
      message: `Usuario ${email} logado com sucesso!"`,
    });
  } catch (err) {
    return { err: err }
  }
}

module.exports.delete = async (app, req, res) => {
  const { userId } = req.params;
  await usersModel.deleteUser(userId, dbConnectionPG);
  res.status(200).send({ "message" : "Usuário deletado com sucesso!"});
};