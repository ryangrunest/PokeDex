import React, { Component } from 'react';
import PokeCard from '../PokeCard';
import './PokeDex.css';

class PokeDex extends Component  {

  render() {
    console.log(this.props);
    return (
      <div className="PokeDex">
        {this.props.hand.map(p => (
          <PokeCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_xp} />
        ))}
      </div>
    )
  }
}

export default PokeDex;