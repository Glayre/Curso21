// App.js
import React from 'react';
import { PokemonProvider } from './PokemonContext';
import GenerationButtons from './GenerationButtons';
import PokemonList from './PokemonList';

const App = () => (
  <PokemonProvider>
    <h1>Pokedex Generacional</h1>
    <GenerationButtons />
    <PokemonList />
  </PokemonProvider>
);

export default App;