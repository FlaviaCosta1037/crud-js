function login(username, password) {
    // faça a verificação das credenciais do usuário
    if (username === 'admin' && password === 'admin') {
      // se as credenciais estiverem corretas, retorne um objeto com as informações do usuário
      const usuarioLogado = {
        nome: 'Meu Nome',
        email: 'meuemail@gmail.com',
        idade: 30,
        // adicione outras informações do usuário que você queira exportar
      };
      return usuarioLogado;
    }
  
    return null;
  
  }
  
  export default login;
  