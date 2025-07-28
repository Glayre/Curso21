// /context/PokemonContext.js
import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [generation, setGeneration] = useState(null);

  return (
    <PokemonContext.Provider value={{ generation, setGeneration }}>
      {children}
    </PokemonContext.Provider>
  );
};
