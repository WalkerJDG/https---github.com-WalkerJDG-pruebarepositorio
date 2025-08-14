document.addEventListener('DOMContentLoaded', () => {
    // Obtener usuario activo desde localStorage
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    // Si no hay usuario logueado, redirigir al login
    if (!usuarioActivo) {
        alert("Debes iniciar sesión para acceder al dashboard.");
        window.location.href = 'login.html';
        return;
    }

    // Mostrar nombre del usuario en el dashboard
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = usuarioActivo.name;
    }

    // Botón de cerrar sesión
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('usuarioActivo');
            alert("Sesión cerrada.");
            window.location.href = 'login.html';
        });
    }
});
