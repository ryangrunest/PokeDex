import React, { Component } from 'react';
import PokeCard from '../PokeCard';
import './PokeDex.css';

class PokeDex extends Component  {
  static defaultProps = {
    pokemon : [
      { id:4, name: 'Charmander', type: 'fire', base_xp: 62 },
      { id:7, name: 'Squirtle', type: 'water', base_xp: 63 },
      { id:11, name: 'Metapod', type: 'bug', base_xp: 72 },
      { id:12, name: 'Butterfree', type: 'flying', base_xp: 178 },
      { id:25, name: 'Pikachu', type: 'electric', base_xp: 112 },
      { id:39, name: 'Jigglypuff', type: 'normal', base_xp: 95 },
      { id:94, name: 'Gengar', type: 'poison', base_xp: 225 },
      { id:133, name: 'Eevee', type: 'normal', base_xp: 65 },
    ],
  };

  render() {
    return (
      <div className="PokeDex">
        {this.props.pokemon.map(p => (
          <PokeCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_xp} />
        ))}
      </div>
    )
  }
}

export default PokeDex;