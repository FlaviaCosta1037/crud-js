import { usuarioLogado } from "./usuarioLogado.js";
// import editar from "./editarUsuario.js";

if (usuarioLogado !== null) {
    console.log(usuarioLogado.nome);
    console.log(usuarioLogado.email);
    console.log(usuarioLogado.idade);
}

// Url Api
const url = 'https://nodejs-production-74ce.up.railway.app/user';

function listarUsuarios() {
    fetch(url, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const usuarios = data;

            for (const usuario of usuarios) {
                const tabelaUsuario = document.createElement('tr');
                const idUsuario = document.createElement('td');
                idUsuario.textContent = usuario.id;
                tabelaUsuario.appendChild(idUsuario);
                const nomeUsuario = document.createElement('td');
                nomeUsuario.textContent = usuario.nome;
                tabelaUsuario.appendChild(nomeUsuario);
                const sobrenomeUsuario = document.createElement('td');
                sobrenomeUsuario.textContent = usuario.sobrenome;
                tabelaUsuario.appendChild(sobrenomeUsuario);
                const idadeUsuario = document.createElement('td');
                idadeUsuario.textContent = usuario.idade;
                tabelaUsuario.appendChild(idadeUsuario);
                const emailUsuario = document.createElement('td');
                emailUsuario.textContent = usuario.email;
                tabelaUsuario.appendChild(emailUsuario);
                const senhaUsuario = document.createElement('td');
                senhaUsuario.textContent = usuario.senha;
                tabelaUsuario.appendChild(senhaUsuario);
                const acoesUsuario = document.createElement('td');
                tabelaUsuario.appendChild(acoesUsuario);
                const editarUsuario = document.createElement('button');
                editarUsuario.textContent = 'Editar';
                editarUsuario.classList.add('btn-floating', 'waves-effect', 'waves-light', 'blue');
                editarUsuario.href = '#';
                // editarUsuario.addEventListener('click', editar(id, nome, email))
                const excluirUsuario = document.createElement('button');
                excluirUsuario.href = '#';
                excluirUsuario.textContent = 'Excluir';
                excluirUsuario.classList.add('btn-floating', 'waves-effect', 'waves-light', 'red');
                acoesUsuario.appendChild(editarUsuario);
                acoesUsuario.appendChild(excluirUsuario);
                document.querySelector('tbody').appendChild(tabelaUsuario);
            }
        })
        .catch(error => console.error(error));
}
listarUsuarios();

var botaoVoltar = document.querySelector('#btn-voltar');
console.log(botaoVoltar);

botaoVoltar.addEventListener('click', function () {
    window.location.replace('./index.html');
})

// Função para redirecionar a página main.html para formulário"
const btnAdicionar = document.querySelector('#btn-adicionar');
btnAdicionar.addEventListener('click', function () {
    window.location.replace('./formulario.html');
})

