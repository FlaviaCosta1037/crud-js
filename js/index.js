import login from "./login.js";
import { setUsuarioLogado } from './usuarioLogado.js'

const acessar = document.querySelector('#botao-acessar');

acessar.addEventListener('click', logar);

function logar() {

  const inputUsuario = document.querySelector('#usuario');
  const inputSenha = document.querySelector('#senha');

  const usuario = login(inputUsuario.value, inputSenha.value);

  if (usuario !== null) {
    setUsuarioLogado(usuario);

    window.location.href = 'main.html';
  }
}


