async function fetchCosmetics() {
    try {
        const response = await fetch('https://fortnite-api.com/v2/cosmetics/new');
        const data = await response.json();

        console.log('Datos recibidos:', data); // Ver los datos en la consola

        const container = document.getElementById('cosmetics-container');
        container.innerHTML = '';

        data.data.forEach(item => {
            if (item.gameModes?.includes('battle-royale')) {
                const imageUrl = item.images?.icon || 'https://via.placeholder.com/150';
                const description = item.description || 'Sin descripción disponible';

                const cosmeticElement = document.createElement('div');
                cosmeticElement.classList.add('item');
                cosmeticElement.innerHTML = `
                    <img src="${imageUrl}" alt="${item.name}">
                    <h2>${item.name}</h2>
                    <p>${description}</p>
                `;
                container.appendChild(cosmeticElement);
            }
        });
    } catch (error) {
        console.error('Error al obtener los cosméticos:', error);
    }
}

document.addEventListener("DOMContentLoaded", fetchCosmetics);
