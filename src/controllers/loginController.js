const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado')
    res.render('login');
}

exports.register = async (req, res) => {
    try {

        const login = new Login(req.body);
        await login.register();
    
        if(login.error.length > 0) {
            req.flash('errors', login.error)
            req.session.save(function() {
                return res.redirect('back');
            })
            
            return;
        }
    
        req.flash('success', 'Seu usuário foi criado com sucesso')
        req.session.save(function() {
            return res.redirect('back');
        })

    } catch (e) {

        console.log(e)
        return res.render('404')

    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();
    
        if(login.error.length > 0) {
            req.flash('errors', login.error)
            req.session.save(function() {
                return res.redirect('back');
            })
            
            return;
        }
    
        req.flash('success', 'Você efetuou login com sucesso')
        req.session.user = login.user
        req.session.save(function() {
            return res.redirect('back');
        })

    } catch (e) {
        console.log(e)
        return res.render('404')

    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}