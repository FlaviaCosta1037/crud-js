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

