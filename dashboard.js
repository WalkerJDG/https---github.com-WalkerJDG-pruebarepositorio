document.addEventListener('DOMContentLoaded', () => {
  const usuario = localStorage.getItem('usuarioActivo');
  if (!usuario) {
    window.location.href = 'login.html';
  }
});

function cerrarSesion() {
  localStorage.removeItem('usuarioActivo');
  window.location.href = 'login.html';
}
