import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login'
import Contact from './modules/Contact'

const login = new Login('.formLogin')
const cadastro = new Login('.formCadastro')
const registerContact = new Contact('.test')

login.init()
cadastro.init()
registerContact.init()
// import './assets/css/style.css';