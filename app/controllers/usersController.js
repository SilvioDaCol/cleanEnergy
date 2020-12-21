const { name } = require('ejs');
const { Connection } = require('pg');
const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const usersModel = require('../models/usersModel');

module.exports.getUserById = async (app, req, res) => {
  try {
    const { userId } = req.params;
    const response = await usersModel.getUserById(userId, dbConnectionPG);
    res.status(200).send(response);
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }
};

module.exports.getUserByEmail = async (app, req, res) => {
  try {
    const { email } = req.params;
    const response = await usersModel.getUserByEmail(email, dbConnectionPG);
    res.status(200).send(response);
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }
};

module.exports.getFavorites = async (app, req, res) => {
  const { userId } = req.params;
  try {
    const response = await usersModel.getFavorite(userId, dbConnectionPG);
    res.status(200).send(response);
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }
};

module.exports.createUser = async (app, req, res, errors) => {
  if (!errors.isEmpty()) {
    return res.status(500).json({ errors: err.array() });
  }

  const user = req.body;

  try {
    const checkIfUserExists = await usersModel.getUserByEmail(user.email, dbConnectionPG)

    if (checkIfUserExists.length > 0) {
      throw new Error("Usuario ja existe!");
    }

    const criarUser = usersModel.postUser(user, dbConnectionPG);
    res.status(201).send({
      message: "User criado com sucesso!",
      criarUser
    });
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }
}

module.exports.updateUser = async (app, req, res, errors) => {

  if (!errors.isEmpty()) {
    return res.status(500).json({ errors: err.array() });
  }


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
    return res.status(500).json({ errors: err.array() });
  }
}

module.exports.updateFavorites = async (app, req, res) => {
  const { userId, chargeStationId } = req.params;
  try {
    const checkIfUserExists = await usersModel.getUserById(userId, dbConnectionPG);

    if (checkIfUserExists.length == 0) {
      throw new Error("Usuario não existe!");
    }
    const favorites = await usersModel.updateFavorites(userId, chargeStationId, dbConnectionPG);
    res.status(201).send({
      message: "Favorites atualizado com sucesso!",
      favorites
    });
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }
}
module.exports.login = async (app, req, res, errors) => {

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  };

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
    return res.status(500).json({ errors: err.array() });
  }
}

module.exports.delete = async (app, req, res) => {
  try {
    const { userId } = req.params;
    await usersModel.deleteUser(userId, dbConnectionPG);
    res.status(200).send({ "message": "Usuário deletado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ errors: err.array() });
  }

};