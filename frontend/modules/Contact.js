const validator = require('validator')

export default class Contact {
    constructor (formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const nome = el.querySelector('input[name="nome"]')
        const email = el.querySelector('input[name="email"]')
        const telefone = el.querySelector('input[name="telefone"]')
        let error = false

        if(nome.value == '') {
            alert('O nome é essencial no cadastro do contato')
            error = true
        }

        if(email.value !== '' && !validator.isEmail(email.value)) {
            alert('Email inválido')
            error = true
        }

        if(email.value == '' && telefone.value == '') {
            alert('É necessário informar pelo ou menos uma forma de contato')
            error = true
        }
    
        if(!error) el.submit()
    }

}