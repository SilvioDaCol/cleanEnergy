const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require('jsonwebtoken');
const secret = require('./secret');


module.exports = (req, res, next) => {
    const tokenHeader = req.headers.authotization;

    if (!tokenHeader)
        return res.status(401).send({error: 'Token não encontrado'});

    const parts = tokenHeader.split(' ');

    if (!parts.lenght === 2)
        return res.status(401).send({error: 'Token inválido'});

    const [ bearer, token] = parts;

    jwt.verify(token, secret, (err, decoded) => {
        if (err)
            return res.status(401).send({err: 'Token inválido'});

        req.userID = decoded.id;

        return next();
    }) 

}