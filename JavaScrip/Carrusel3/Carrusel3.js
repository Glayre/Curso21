/**
 * @file script.js
 * @description Script para el funcionamiento del carrusel de imágenes
 */

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  /**
   * @type {NodeList} items - Lista de elementos del carrusel
   */
  const items = document.querySelectorAll(".carousel-item");
    
  /**
   * @type {number} currentIndex - Índice de la imagen actual
   */
  let currentIndex = 0;

  /**
   * Muestra la imagen correspondiente en el carrusel.
   * @param {number} index - Índice de la imagen que se debe mostrar
   */
  function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
  }

  /**
   * Evento para ir a la imagen anterior.
   * Actualiza `currentIndex` y llama a `showItem`.
   */
  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
  });

  /**
   * Evento para ir a la imagen siguiente.
   * Actualiza `currentIndex` y llama a `showItem`.
   */
  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
  });

  // Inicializa el carrusel mostrando la primera imagen
  showItem(currentIndex);

  /**
   * Validación de imágenes mediante expresión regular.
   * @type {RegExp} regex - Patrón para validar formatos de imagen
   */
  const regex = /\.(jpg|jpeg|png|gif)$/i;

  // Recorre cada imagen del carrusel y verifica su formato con Regex
  items.forEach(item => {
    const img = item.querySelector("img");
    if (!regex.test(img.src)) {
      console.error("Formato de imagen no válido:", img.src);
    }
});
});
