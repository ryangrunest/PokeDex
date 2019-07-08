import React from 'react';
import PokeDex from './PokeDex';

function App() {

  const pokemon = [
    {id:4, name: 'Charmander', type: 'fire', base_xp: 62},
    {id:7, name: 'Squirtle', type: 'water', base_xp: 63},
    {id:11, name: 'Metapod', type: 'bug', base_xp: 72},
    {id:12, name: 'Butterfree', type: 'flying', base_xp: 178},
    {id:25, name: 'Pikachu', type: 'electric', base_xp: 112},
    {id:39, name: 'Jigglypuff', type: 'normal', base_xp: 95},
    {id:94, name: 'Gengar', type: 'poison', base_xp: 225},
    {id:133, name: 'Eevee', type: 'normal', base_xp: 65},
  ]
  return (
    <div className="App">
      <PokeDex pokemon={pokemon}/>
    </div>
  );
}

export default App;
