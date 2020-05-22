
var rgxEmailOuTelefone = /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/;
var rgxNome = /^[a-zA-Z ]{2,30}$/;
var rgxSenha = /^([a-zA-Z0-9_-]){8,30}$/;
var rgxData = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/;
var validacao;
var emailOuTelefone = document.getElementById("first-email-or-phone");
var senha = document.getElementById("first-password");
var nomeRegistrado = document.getElementById("register-name");
var sobrenomeRegistrado = document.getElementById("register-last-name");
var emailOuTelefoneRegistrado = document.getElementById("register-email-or-phone");
var senhaRegistrada = document.getElementById("register-password");
var dataDeNascimento = document.getElementById("calendar");
var containerOpcionaisGenero = document.getElementsByClassName("container-pronome-personalized")[0];
var sectionBody = document.getElementsByClassName("section-body")[0];

//funcão da biblioteca Pikaday
var picker = new Pikaday({
    field: document.getElementById('calendar'),
    format: 'D/M/YYYY',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

function validarDadosDeEntrada() {
    let respostaValidacaoEmailOuTelefone = validandoEmailOuTelefone(emailOuTelefone);
    let respostaValidacaoSenha = validandoSenha(senha);
    if (respostaValidacaoEmailOuTelefone == true && respostaValidacaoSenha == true) {
        alert("Login realizado com sucesso!");
        emailOuTelefone.value = "";
        senha.value = "";
    } else {
        alert("Email ou senha inválidos!");
    }
}

function validarDadosCadastro() {
    let respostaValidacaoNome = validandoNome(nomeRegistrado);
    let respostaValidacaoSobrenome = validandoNome(sobrenomeRegistrado);
    let respostaValidacaoEmailOuTelefoneRegistrado = validandoEmailOuTelefone(emailOuTelefoneRegistrado);
    let respostaValidacaoSenhaRegistrada = validandoSenha(senhaRegistrada);
    let respostaValidacaoDataDeNascimento = validandoData(dataDeNascimento);
    let respostaValidacaoGenero = validandoGenero();
    let respostasInvalidas = [];
    let contador = 0;

    if (respostaValidacaoNome == false) {
        respostasInvalidas.push(" Nome");
        contador++;
    }
    if (respostaValidacaoSobrenome == false) {
        respostasInvalidas.push(" Sobrenome");
        contador++;
    }
    if (respostaValidacaoEmailOuTelefoneRegistrado == false) {
        respostasInvalidas.push(" Email ou telefone");
        contador++;
    }
    if (respostaValidacaoSenhaRegistrada == false) {
        respostasInvalidas.push(" Senha");
        contador++;
    }
    if (respostaValidacaoDataDeNascimento == false) {
        respostasInvalidas.push(" Data de nascimento");
        contador++;
    }
    if (respostaValidacaoGenero == undefined) {
        respostasInvalidas.push(" Gênero")
        contador++;
    }
    if (contador > 0) {
        alert("Dados inválidos nos campos: " + respostasInvalidas + ".");
    } else {
        alert("Dados cadastrados: " + "Nome: " + nomeRegistrado.value + "; Sobrenome: " + sobrenomeRegistrado.value + "; Email ou telefone: " + emailOuTelefoneRegistrado.value + "; Senha: " + senhaRegistrada.value + "; Data de nascimento: " + dataDeNascimento.value + "; Gênero: " + respostaValidacaoGenero + ".");
        limpandoCampos();
    }
}

function validandoNome(nomeRegistrado) {
    validacao = rgxNome.test(nomeRegistrado.value);
    return validacao;
}

function validandoEmailOuTelefone(emailOuTelefone) {
    validacao = rgxEmailOuTelefone.test(emailOuTelefone.value);
    return validacao;
}

function validandoSenha(senha) {
    validacao = rgxSenha.test(senha.value);
    return validacao;
}

function validandoData(dataDeNascimento) {
    validacao = rgxData.test(dataDeNascimento.value);
    return validacao;
}

function validandoGenero() {
    let opcoesDeGenero = document.getElementsByClassName("radio");
    let numeroDeOpcoesDeGenero = opcoesDeGenero.length;
    let genero = [];
    for (let index = 0; index < numeroDeOpcoesDeGenero; index++) {
        genero = document.getElementsByClassName("radio")[index];
        if (genero.checked) {
            validacao = genero;
        }
    }
    if (validacao.value == "Personalizado") {
        validacao = document.getElementById("personalized-gender");
    }
    return validacao.value;
}

function limpandoCampos() {
    nomeRegistrado.value = "";
    sobrenomeRegistrado.value = "";
    emailOuTelefoneRegistrado.value = "";
    senhaRegistrada.value = "";
    dataDeNascimento.value = "";
    esconderOpcoesPersonalizadasIniciais();
}

function mostrandoEEscondendoOpcoesPersonalizadasDeGenero() {
    let opcaoFeminino = document.getElementsByClassName("radio")[0];
    let opcaoMasculino = document.getElementsByClassName("radio")[1];
    let opcaoPersonalizado = document.getElementsByClassName("radio")[2];
    opcaoPersonalizado.addEventListener("click", function () {
        containerOpcionaisGenero.style.display = "initial";
        sectionBody.style.height = "744px";
    })
    opcaoMasculino.addEventListener("click", function () {
        if (containerOpcionaisGenero.style.display == "initial") {
            containerOpcionaisGenero.style.display = "none";
            sectionBody.style.height = "630px";
        }
    })
    opcaoFeminino.addEventListener("click", function () {
        if (containerOpcionaisGenero.style.display == "initial") {
            containerOpcionaisGenero.style.display = "none";
            sectionBody.style.height = "630px";
        }
    })
}

mostrandoEEscondendoOpcoesPersonalizadasDeGenero();

function esconderOpcoesPersonalizadasIniciais() {
    containerOpcionaisGenero.style.display = "none";
}

esconderOpcoesPersonalizadasIniciais();

