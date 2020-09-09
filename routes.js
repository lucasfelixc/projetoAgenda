const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController')


const { loginRequired } = require('./src/middleware/middleware')


function middlewareTest (req, res, next) {
    console.log('Passei pela middleware test!');

    next();
}


route
//Rotas da home page
.get('/', middlewareTest, homeController.index)

//Rotas de login
.get('/login/index', loginController.index)
.post('/login/register', loginController.register)
.post('/login/login', loginController.login)
.get('/login/logout', loginController.logout)

//Rotas de contato
.get('/contato', loginRequired, contactController.contact)
.post('/contato/register', loginRequired, contactController.register)
.get('/contato/:id', loginRequired, contactController.editIndex)
.post('/contato/edit/:id', loginRequired, contactController.edit)
.get('/contato/delete/:id', loginRequired, contactController.delete)


module.exports = route;