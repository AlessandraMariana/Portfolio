let nome = window.document.getElementById('nome')
let email = document.querySelector( 'email')
let assunto = document.querySelector('assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validarNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto";
        txtNome.style.color = "red";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "✔";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}