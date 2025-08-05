// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Obtener cuentas guardadas
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Buscar coincidencia
    const user = accounts.find(acc => acc.email === email && acc.password === password);

    if (user) {
      // Guardar nombre del usuario en sesión
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Inicio de sesión exitoso ✅");

      // Redirigir al dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Correo o contraseña incorrectos ❌");
    }
  });
});
