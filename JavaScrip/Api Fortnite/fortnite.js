document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cosmetics-container');
    const apiUrl = 'https://fortnite-api.com/v2/cosmetics/new';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! Estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Respuesta completa de la API:", data); // Verificar estructura en la consola
            console.log("Propiedades dentro de data:", Object.keys(data)); // Mostrar claves principales de data
            console.log("Contenido de data.data:", data.data); // Mostrar contenido de data.data

            // Inspeccionar más profundamente data.data
            if (data.data) {
                console.log("Propiedades dentro de data.data:", Object.keys(data.data));
            } else {
                console.warn("No se encontraron datos dentro de data.data.");
            }

            container.innerHTML = ''; 

            // Intentando obtener los nuevos cosméticos con la estructura correcta
            const brCosmetics = data?.data?.lastAdditions || data?.data?.cosmetics || data?.cosmetics;

            console.log("Contenido de posibles ubicaciones de cosméticos:", brCosmetics); // Imprimir contenido

            if (Array.isArray(brCosmetics) && brCosmetics.length > 0) {
                console.log("Cosméticos procesados:", brCosmetics);

                brCosmetics.forEach(cosmetic => {
                    if (cosmetic.images?.icon && cosmetic.name) {
                        const card = document.createElement('div');
                        card.classList.add('cosmetic-card');

                        const name = document.createElement('h3');
                        name.textContent = cosmetic.name;

                        const image = document.createElement('img');
                        image.src = cosmetic.images.icon;
                        image.alt = cosmetic.name;

                        const description = document.createElement('p');
                        description.textContent = cosmetic.description || 'Sin descripción disponible.';

                        card.appendChild(image);
                        card.appendChild(name);
                        card.appendChild(description);

                        container.appendChild(card);
                    } else {
                        console.warn("Cosmético sin datos completos:", cosmetic);
                    }
                });
            } else {
                console.warn("No se encontraron cosméticos en las propiedades revisadas.");
                container.innerHTML = '<p>No se encontraron nuevos cosméticos de Battle Royale.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener los cosméticos:', error);
            container.innerHTML = `<p class="error">Error al cargar los datos: ${error.message}. Por favor, inténtalo de nuevo más tarde.</p>`;
        });
});
