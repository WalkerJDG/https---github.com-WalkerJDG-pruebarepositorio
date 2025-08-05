// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // Obtener usuario actual de localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Si no hay usuario logueado, redirigir al login
  if (!currentUser) {
    window.location.href = "login.html";
    return; // Para detener ejecución si no hay usuario
  }

  // Mostrar el nombre del usuario en el span
  const usernameDisplay = document.getElementById("usernameDisplay");
  usernameDisplay.textContent = currentUser.email.split("@")[0]; // Usamos la parte antes de @

  // Botón para cerrar sesión
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    // Borrar el usuario actual
    localStorage.removeItem("currentUser");
    // Redirigir al login
    window.location.href = "login.html";
  });
});
