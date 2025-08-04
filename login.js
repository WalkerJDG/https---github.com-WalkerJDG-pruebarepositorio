function register() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (!user || !pass) {
    mostrarMensaje('Por favor completa ambos campos.');
    return;
  }

  localStorage.setItem(user, pass);
  mostrarMensaje('Cuenta creada correctamente ✅');
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    localStorage.setItem('usuarioActivo', user);
    window.location.href = 'dashboard.html';
  } else {
    mostrarMensaje('Usuario o contraseña incorrectos ❌');
  }
}

function mostrarMensaje(mensaje) {
  document.getElementById('mensaje').textContent = mensaje;
}
