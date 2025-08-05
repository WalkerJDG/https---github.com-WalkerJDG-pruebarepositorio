// register.js

// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir envío automático del formulario

    // Obtener valores ingresados
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validar campos
    if (!name || !email || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Obtener cuentas existentes del localStorage
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Verificar si ya existe una cuenta con ese correo
    const exists = accounts.some(account => account.email === email);

    if (exists) {
      alert("Ya existe una cuenta con este correo.");
      return;
    }

    // Crear objeto de cuenta nueva
    const newAccount = { name, email, password };

    // Guardar en localStorage
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Cuenta creada exitosamente 🎉");

    // Redirigir al login
    window.location.href = "login.html";
  });
});
