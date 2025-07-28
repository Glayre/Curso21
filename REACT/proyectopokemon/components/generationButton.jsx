// /components/GenerationButtons/GenerationButtons.jsx
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

const generations = [
  { id: 1, name: 'Gen I' },
  { id: 2, name: 'Gen II' },
  { id: 3, name: 'Gen III' },
  { id: 4, name: 'Gen IV' },
  { id: 5, name: 'Gen V' },
];

const GenerationButtons = () => {
  const { setGeneration } = useContext(PokemonContext);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {generations.map((gen) => (
        <button
          key={gen.id}
          onClick={() => setGeneration(gen.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          {gen.name}
        </button>
      ))}
    </div>
  );
};

export default GenerationButtons;
