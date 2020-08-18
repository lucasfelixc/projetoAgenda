const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

function middlewareTest (req, res, next) {
    console.log('Passei pela middleware test!');

    next();
}

//Rotas da home page
route.get('/', middlewareTest, homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);


module.exports = route;