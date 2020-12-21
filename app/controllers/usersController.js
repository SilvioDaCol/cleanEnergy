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

  let connection = dbConnectionMY();
  usersModel.getUserById(userId, connection, function(err, result){
    if (result.length == 0) {
      throw new Error("Usuario não existe!");
    }

    usersModel.updateUser(userId, user, connection, function(err, result){
      if(err){
        throw new Error(err);
        return;
      }
      res.status(201).send({message: "User atualizado com sucesso!"});
    });
  });
}

module.exports.updateFavorites = async (app, req, res) => {
  const { userId, chargeStationId } = req.params;

  let connection = dbConnectionMY();
  usersModel.getUserById(userId, connection, function(err, result){
    if (result.length <= 0) {
      throw new Error("Usuario não existe!");
    }

    usersModel.updateFavorites(userId, chargeStationId, connection, function(err, result){
      res.status(201).send({
        message: "Favorites atualizado com sucesso!",
        result
      });
    });
  });
}
module.exports.login = async (app, req, res) => {

  let connection = dbConnectionMY();
  const { email, password } = req.body;

  await usersModel.getUserByEmail(email, connection, function (err, result) {

    if (err) {
      throw new Error(err);
      return;
    }

    if (!result.length > 0) {
      throw new Error("Usuario não existe!");
    } else {
      usersModel.login(email, password, connection, function (err, result) {
        if (err) {
          throw new Error(err);
          return;
        }
        res.status(201).send("User logado com sucesso!");
      });
    }
  });
}

module.exports.delete = async (app, req, res) => {
  let connection = dbConnectionMY();
  const { userId } = req.params;
  await usersModel.deleteUser(userId, connection, function (err, result) {
    if (err) {
      throw new Error(err);
      return;
    }
    res.status(201).send("User excluido com sucesso!");
  });
};