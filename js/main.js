import { usuarioLogado } from "./usuarioLogado.js";


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

                const editUser = document.createElement('button');
                editUser.classList.add('btn-floating', 'waves-effect', 'waves-light', 'light-blue');
                const iconEditar = document.createElement('i');
                iconEditar.classList.add('material-icons');
                editUser.appendChild(iconEditar);
                iconEditar.textContent = 'edit';
                editUser.addEventListener('click', function () {
                    window.location.href = `formulario.html?${usuario.id}`
                })

                const excluirUsuario = document.createElement('button');
                excluirUsuario.id = 'btn-excluir';
                excluirUsuario.classList.add('btn-floating', 'waves-effect', 'waves-light');
                const iconExcluir = document.createElement('i');
                iconExcluir.classList.add('material-icons');
                excluirUsuario.appendChild(iconExcluir);
                iconExcluir.textContent = 'delete';
                excluirUsuario.addEventListener('click', function () {
                    const confirmacao = confirm('Tem certeza que deseja excluir o usuário?');
                    if (confirmacao) {
                        deletarUsuario(usuario.id);
                    }
                })
                acoesUsuario.appendChild(editUser);
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

function deletarUsuario(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao excluir usuário');
            }
            console.log('Usuário excluído com sucesso');
            window.location.replace('./main.html');
            // Faça qualquer ação adicional após excluir o usuário, se necessário
        })
        .catch(error => console.error(error));
}