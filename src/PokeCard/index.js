import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
  render() {
    const num = Math.floor(Math.random() * 7)
    const { id, name, type, base_xp } = this.props.pokemon.pokemon[num];
    
    return (
      <div className="PokeCard">
        <h2 className="PokeCard-Name">{name}</h2>
        <h4 className="PokeCard-Type">Type: {type}</h4>
        <p className="PokeCard-points">Experience: {base_xp}</p>
        <img alt="charmander" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="PokeCard-Image" />
      </div>
    )
  }
}

export default PokeCard;