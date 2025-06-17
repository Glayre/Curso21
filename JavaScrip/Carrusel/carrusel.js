const imageData = [
  { url: "imagen1.png", name: "Router Balanceador inalámbrico Wi-Fi 6 Doble Banda Hasta 180 Usuarios" },
  { url: "imagen2.png", name: "EdgeRouter X de 5 puertos Gigabit con funciones avanzadas de ruteo ER-X" },
  { url: "imagen3.jpg", name: "Router inalámbrico Wi-Fi5 Doble Banda All-in-One Hasta 1,267 Mbps" },
  { url: "imagen4.png", name: "EdgeRouter X de 5 puertos Gigabit" }
];

const regexPattern = /\.(jpg|jpeg|png|gif)$/i;
const container = document.getElementById("carouselContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

// Función para cargar imágenes y nombres dinámicamente
function loadImages() {
  imageData.forEach(data => {
    if (regexPattern.test(data.url)) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("image-wrapper");

      const img = document.createElement("img");
      img.src = data.url;
      img.classList.add("carousel-item");

      const caption = document.createElement("p");
      caption.textContent = data.name;
      caption.classList.add("image-caption");

      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      container.appendChild(wrapper);
      } else {
        console.warn(`Formato de imagen no válido: ${data.url}`);
      }
    });
}

// Cargar imágenes en el DOM antes de acceder a ellas
loadImages();
const items = document.querySelectorAll(".carousel-item");

// Función para actualizar el carrusel sin saltos
function updateCarousel() {
  container.style.transform = `translateX(${-index * 600}px)`;
}

// Manejadores de eventos para los botones
nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

updateCarousel();
