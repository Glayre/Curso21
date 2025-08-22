import React, { useState, useEffect } from 'react';

const PokemonList = ({ generation }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenerationData = async () => {
      setLoading(true);
      try {
        const genRes = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
        const genData = await genRes.json();
        const speciesList = genData.pokemon_species;

        // Ordenar por número de pokédex
        speciesList.sort((a, b) => {
          const getId = url => parseInt(url.split('/').filter(Boolean).pop());
          return getId(a.url) - getId(b.url);
        });

        const pokemonDetails = await Promise.all(
          speciesList.map(async species => {
            const id = species.url.split('/').filter(Boolean).pop();
            return {
              name: species.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            };
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenerationData();
  }, [generation]);

  return (
    <div>
      <h2>Pokémon de la Generación {generation}</h2>
      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {pokemonData.map(pokemon => (
            <div key={pokemon.name} style={{ margin: '10px', textAlign: 'center' }}>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
