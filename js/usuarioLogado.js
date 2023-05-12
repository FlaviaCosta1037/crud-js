let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || null;

function setUsuarioLogado(usuario) {
  localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
}

function deslogarUsuario() {
  localStorage.removeItem('usuarioLogado')
}

export { usuarioLogado, setUsuarioLogado, deslogarUsuario };
