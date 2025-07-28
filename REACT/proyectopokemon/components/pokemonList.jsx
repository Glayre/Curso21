// /components/PokemonList/PokemonList.jsx
import { useContext, useEffect, useRef, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

const PokemonList = () => {
  const { generation } = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    if (generation) {
      fetch(`https://pokeapi.co/api/v2/generation/${generation}/`)
        .then((res) => res.json())
        .then((data) => {
          const sorted = data.pokemon_species.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setPokemonData(sorted);
          listRef.current?.scrollIntoView({ behavior: 'smooth' });
        });
    }
  }, [generation]);

  return (
    <div ref={listRef} className="mt-6 px-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Pokémon de la generación {generation}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-white p-4 rounded shadow flex flex-col items-center"
          >
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              alt={pokemon.name}
              className="h-16 mb-2"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="capitalize font-medium text-gray-700">
              {pokemon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
