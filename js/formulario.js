// Url Api
const url = 'https://nodejs-production-74ce.up.railway.app/user';

// Adicionar Usuário
const formUsuario = document.querySelector('#formulario');
const id = window.location.href.split('?')[1];

if (id != null) {
    preencherFormulario(id);
    formUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.querySelector('#nome').value;
        const sobrenome = document.querySelector('#sobrenome').value;
        const idade = document.querySelector('#idade').value;
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;
        console.log(nome, sobrenome, idade, email, senha); // Verificar se os dados do formulário foram capturados
        editarUsuario(id, nome, sobrenome, idade, email, senha);
    });
} else {
    formUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.querySelector('#nome').value;
        const sobrenome = document.querySelector('#sobrenome').value;
        const idade = document.querySelector('#idade').value;
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;
        console.log(nome, sobrenome, idade, email, senha); // check if form data is captured
        addUsuario(nome, sobrenome, idade, email, senha);
    })
}


function addUsuario(nome, sobrenome, idade, email, senha) {
    if (validarDados()) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nome,
                sobrenome,
                idade,
                email,
                senha
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao adicionar usuário');
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuário adicionado com sucesso:', data);
                window.location.replace('./main.html');
            })
            .catch(error => console.error(error));
    } else {
        return;
    }
}


//Criado botão cancelar caso o usuário deseje voltar para a página principal
const btnCancelar = document.querySelector('#btn-cancelar');
btnCancelar.addEventListener('click', function () {
    window.location.href = 'main.html';
})

// Obter referências aos elementos do formulário
const inputNome = document.querySelector('#nome');
const inputSobrenome = document.querySelector('#sobrenome');
const inputIdade = document.querySelector('#idade');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');


async function buscarUsuario(id) {
    const url = `https://nodejs-production-74ce.up.railway.app/user/${id}`;
    const response = await fetch(url);
    return await response.json();
}

function preecherCampos(usuario) {
    inputNome.value = usuario.nome;
    inputNome.classList.add('valid');
    document.querySelector('#labelNome').classList.add('active');
    inputSobrenome.value = usuario.sobrenome;
    inputNome.classList.add('valid');
    document.querySelector('#labelSobrenome').classList.add('active');
    inputIdade.value = usuario.idade;
    inputNome.classList.add('valid');
    document.querySelector('#labelIdade').classList.add('active');
    inputEmail.value = usuario.email;
    inputNome.classList.add('valid');
    document.querySelector('#labelEmail').classList.add('active');
    inputSenha.value = usuario.senha;
    inputNome.classList.add('valid');
    document.querySelector('#labelSenha').classList.add('active');

}

async function preencherFormulario(id) {
    const usuario = await buscarUsuario(id);
    preecherCampos(usuario);
}

//Função editar o usuário
function editarUsuario(id, nome, sobrenome, idade, email, senha) {
    if (validarDados()) {

        fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome,
                sobrenome,
                idade,
                email,
                senha,
            }

            )
        })
            .then(response => {
                if (response.ok) {
                    alert('Dados Atualizados com sucesso!')
                    window.location.replace('./main.html');
                } else {
                    alert('Ocorreu um erro, tente novamente!')
                }
            })
            .then(error => {
                console.error('Erro de requisição:', error);
            })

    } else {
        return false;
    }
}

function validarDados() {
    const nome = document.querySelector('#nome').value.trim();
    const sobrenome = document.querySelector('#sobrenome').value;
    const idade = parseInt(document.querySelector('#idade').value);
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const regexNome = /^[A-Za-zÀ-ÿ\s']+$/;

    if (!regexNome.test(nome) || nome === '') {
        alert('Por favor, informe o nome válido');
        return false;
    }

    if (!regexNome.test(sobrenome) || sobrenome === '') {
        alert('Por favor, informe o sobrenome válido.');
        return false;
    }

    if (isNaN(idade) || idade <= 0) {
        alert('Por favor, informe uma idade válida.');
        return false;
    }

    if (!emailValido(email)) {
        alert('Por favor, informe um email válido.');
        return false;
    }

    if (senha.length < 6) {
        alert('A senha deve conter pelo menos 6 caracteres.');
        return false;
    }

    return true;
}

function emailValido(email) {
    // Expressão regular para verificar o formato do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

