import React from 'react';

const generations = [
  { id: 1, name: 'Generación I' },
  { id: 2, name: 'Generación II' },
  { id: 3, name: 'Generación III' },
  { id: 4, name: 'Generación IV' },
  { id: 5, name: 'Generación V' },
  { id: 6, name: 'Generación VI' },
  { id: 7, name: 'Generación VII' },
  { id: 8, name: 'Generación VIII' },
  { id: 9, name: 'Generación IX' },
];

const GenerationButtons = ({ onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {generations.map(gen => (
        <button
          key={gen.id}
          onClick={() => onSelect(gen.id)}
          style={{ margin: '5px', padding: '10px' }}
        >
          {gen.name}
        </button>
      ))}
    </div>
  );
};

export default GenerationButtons;
