/**
 * Script para visualizar y actualizar el perfil del usuario autenticado.
 * Obtiene datos desde localStorage y permite modificar el email asociado al usuario.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Verifica que el usuario haya iniciado sesión antes de continuar
  protectRoute();

  const form = document.getElementById("profileForm");
  const usernameField = document.getElementById("profileUsername");
  const emailField = document.getElementById("profileEmail");
  const successMsg = document.getElementById("profileSuccess");

  // Obtiene el nombre de usuario almacenado en sessionStorage
  const user = sessionStorage.getItem("loggedInUser");

  // Recupera la lista completa de usuarios desde localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Busca al usuario actualmente autenticado
  const currentUser = users.find(u => u.username === user);

  // Si existe, completa el formulario con los datos del usuario
  if (currentUser) {
    usernameField.value = currentUser.username;
    emailField.value = currentUser.email;
  }

  /**
   * Maneja el evento de envío del formulario de perfil.
   * Valida el formato del correo y actualiza los datos del usuario en localStorage.
   * 
   * @param {SubmitEvent} e - Evento de envío del formulario.
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newEmail = emailField.value.trim();

    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newEmail)) {
      successMsg.textContent = "Correo inválido.";
      successMsg.style.color = "#ff6b6b";
      return;
    }

    // Actualiza el email del usuario y guarda los cambios
    currentUser.email = newEmail;
    localStorage.setItem("users", JSON.stringify(users));

    // Muestra mensaje de éxito
    successMsg.textContent = "Perfil actualizado correctamente.";
    successMsg.style.color = "#00ff9d";
  });
});
