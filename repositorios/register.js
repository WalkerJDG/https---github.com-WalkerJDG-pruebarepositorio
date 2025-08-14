document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validación: campos vacíos
        if (!name || !email || !password || !confirmPassword) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación: formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validación: contraseña segura
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Mínimo 6 caracteres, letras y números
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres, incluyendo letras y números.");
            return;
        }

        // Validación: confirmación de contraseña
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Validación: usuario existente
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert("El correo ya está registrado. Intenta con otro.");
            return;
        }

        // Guardar usuario
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Cuenta creada con éxito.");
        window.location.href = 'login.html';
    });
});