// Url Api
const url = 'https://nodejs-production-74ce.up.railway.app/user';
const formUsuario = document.querySelector('#formulario');
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
function addUsuario(nome, sobrenome, idade, email, senha) {
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
}

    // Obter referências aos elementos do formulário
    const inputNome = document.querySelector('#nome');
    const inputSobrenome = document.querySelector('#sobrenome');
    const inputIdade = document.querySelector('#idade');
    const inputEmail = document.querySelector('#email');
    const inputSenha = document.querySelector('#senha');

    const id = window.location.href.split('?')[1];
    if(id != null){
        preencherFormulario(id);
    }

    async function buscarUsuario(id){
        const url = `https://nodejs-production-74ce.up.railway.app/user/${id}`;
        const response = await fetch(url);
        return await response.json();
    }
    
    function preecherCampos(usuario){
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

    async function preencherFormulario(id){
        const usuario = await buscarUsuario(id);
        preecherCampos(usuario);
    }
   

