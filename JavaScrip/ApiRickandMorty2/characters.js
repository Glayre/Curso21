/**
 * Script para cargar y mostrar personajes de la API de Rick and Morty.
 * Permite marcar y desmarcar favoritos, almacenándolos en localStorage por usuario.
 * Incluye protección de acceso, animaciones con GSAP y manejo de estado de carga.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Asegura que solo usuarios autenticados puedan acceder
  protectRoute();

  const loader = document.getElementById("loader");
  const container = document.getElementById("charactersContainer");
  const user = sessionStorage.getItem("loggedInUser");

  // Clave única para almacenar los favoritos de cada usuario
  const favoritesKey = `favorites_${user}`;
  const favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];

  // Mostrar loader mientras se carga la información
  loader.style.display = "block";
  container.style.display = "none";

  /**
   * Obtiene los personajes desde la API pública de Rick and Morty
   * y los renderiza en tarjetas con opción de marcar como favorito.
   */
  fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
      // Oculta loader y muestra contenedor
      loader.style.display = "none";
      container.style.display = "flex";
      container.innerHTML = "";

      /**
       * Recorre el arreglo de personajes y genera tarjetas visuales.
       * @param {Object} personaje - Objeto con datos del personaje.
       * @param {number} i - Índice actual del personaje (usado para retrasar animación).
       */
      data.results.forEach((personaje, i) => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
          <img src="${personaje.image}" alt="${personaje.name}" />
          <h2>${personaje.name}</h2>
          <button>${favorites.includes(personaje.id) ? "★ Favorito" : "☆ Marcar"}</button>
        `;

        /**
         * Maneja el marcado o desmarcado de favoritos.
         * @event click
         */
        card.querySelector("button").addEventListener("click", () => {
          const index = favorites.indexOf(personaje.id);
          if (index > -1) {
            favorites.splice(index, 1);
          } else {
            favorites.push(personaje.id);
          }

          localStorage.setItem(favoritesKey, JSON.stringify(favorites));
          location.reload(); // refresca para reflejar el cambio
        });

        container.appendChild(card);

        // Animación de entrada suave con GSAP
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });
    });
});
