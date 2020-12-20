const { name } = require('ejs');
const dbConnectionMY = require('../../config/dbConnectionMY');
const dbConnectionPG = require('../../config/dbConnectionPG');
const usersModel = require('../models/usersModel');

module.exports.getUserById = async (app, req, res) => {
  const { userId } = req.params;
  const response = await usersModel.getUserById(userId, dbConnectionPG);
  res.status(200).send(response);
};

module.exports.getUserByEmail = async (app, req, res) => {
  try {
    const { email } = req.params;
    const response = await usersModel.getUserByEmail(email, dbConnectionPG);
    res.status(200).send(response);
  } catch (err) {
    console.log(err)
  }
};

module.exports.createUser = (app, req, res) => {
  const user = req.body;
  try {
    const checkIfUserExists = usersModel.getUserByEmail(user.email)

    if(checkIfUserExists) throw new Error("usuario ja existe");
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
  const userId = req.params;
  const user = req.body;
  try {
    const updateUser = usersModel.updateUser(userId, user, dbConnectionPG);
    res.status(201).send({
      message: "User atualizado com sucesso!",
      updateUser
    });
  } catch (err) {
    console.log(err)
  }
}
