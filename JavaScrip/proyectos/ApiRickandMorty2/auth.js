/**
 * Redirige al usuario al login si no hay una sesión activa.
 * Se utiliza para proteger rutas privadas.
 */
function protectRoute() {
  if (!sessionStorage.getItem("loggedInUser")) {
    window.location.href = "index.html";
  }
}

/**
 * Cierra la sesión del usuario actual.
 * Elimina el dato de sessionStorage y redirige al login.
 */
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Maneja el envío del formulario de inicio de sesión.
   * @param {Event} e - Evento de envío del formulario.
   */
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value;

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(u => u.username === username);
      const error = document.getElementById("loginError");

      if (!user || user.password !== password) {
        error.textContent = "Usuario o contraseña incorrectos";
        return;
      }

      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "characters.html";
    });
  }

  /**
   * Maneja el envío del formulario de registro.
   * Valida campos mediante regex y guarda nuevos usuarios.
   * @param {Event} e - Evento de envío del formulario.
   */
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("regUsername").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMsg = document.getElementById("registerError");

      // Expresiones regulares para validación
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (!usernameRegex.test(username)) {
        errorMsg.textContent = "Nombre de usuario inválido.";
        return;
      }
      if (!emailRegex.test(email)) {
        errorMsg.textContent = "Correo electrónico inválido.";
        return;
      }
      if (!passwordRegex.test(password)) {
        errorMsg.textContent = "Contraseña insegura.";
        return;
      }
      if (password !== confirmPassword) {
        errorMsg.textContent = "Las contraseñas no coinciden.";
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find(u => u.username === username);
      if (exists) {
        errorMsg.textContent = "Este usuario ya existe.";
        return;
      }

      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "characters.html";
    });
  }
});
