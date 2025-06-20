/**
 * Script para mostrar personajes favoritos del usuario autenticado.
 * Accede a los datos guardados en localStorage, realiza peticiones a la API
 * de Rick and Morty, y permite eliminar personajes de la lista de favoritos.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Impide el acceso si el usuario no ha iniciado sesión
  protectRoute();

  const container = document.getElementById("favoritesContainer");
  const user = sessionStorage.getItem("loggedInUser");
  const favoritesKey = `favorites_${user}`;
  const favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];

  // Si no hay favoritos, muestra mensaje de estado
  if (favorites.length === 0) {
    container.innerHTML = "<p>No tienes personajes favoritos aún.</p>";
    return;
  }

  /**
   * Obtiene los datos de los personajes favoritos desde la API.
   * @returns {Promise<void>} Inserta tarjetas HTML en el contenedor.
   */
  Promise.all(
    favorites.map(
      /**
       * Realiza una petición a la API para obtener información de un personaje.
       * @param {number} id - ID del personaje favorito.
       * @returns {Promise<Object>} Personaje completo.
       */
      id => fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.json())
    )
  ).then(personajes => {
    container.innerHTML = "";

    personajes.forEach(
      /**
       * Genera y muestra una tarjeta para cada personaje favorito.
       * @param {Object} p - Datos del personaje.
       * @param {number} p.id - ID del personaje.
       * @param {string} p.name - Nombre del personaje.
       * @param {string} p.image - URL de la imagen del personaje.
       */
      p => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}" />
          <h2>${p.name}</h2>
          <button>Eliminar</button>
        `;

        /**
         * Elimina al personaje del arreglo de favoritos del usuario.
         * @event click
         */
        card.querySelector("button").addEventListener("click", () => {
          const updatedFavorites = favorites.filter(id => id !== p.id);
          localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
          location.reload();
        });

        container.appendChild(card);
      }
    );
  });
});
