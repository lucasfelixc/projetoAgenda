const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true}
});

const LoginModel = mongoose.model('login', loginSchema);

class Login {
    constructor (body) {
        this.body = body;
        this.error = [];
        this.users = null;
    }

    async register() {
        this.valida();
        if(this.error.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body);
        } catch (error) {
            console.log(error);
        }
    }

    valida() {
        this.cleanUp();
        // Validação
        // O email precisa ser válido
        if(!validator.isEmail(this.body.email)) {
            this.error.push('Email inválido');
        }

        // A senha precisa ter entre 3 e 20 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 20) {
            this.error.push('A senha precisa ter entre 3 e 20 caracteres.');
        }
    }

    cleanUp() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            } 
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;