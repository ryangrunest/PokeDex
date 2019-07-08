import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
  render() {
    const num = Math.floor(Math.random() * 7)
    const { id, name, type, base_xp } = this.props.pokemon.pokemon[num];

    let color;
    if (type === "fire") {
      color = 'red';
    } else if (type === 'water') {
      color = 'blue';
    } else if (type === 'bug' || type === 'poison') {
      color = 'green';
    } else if (type === 'electric') {
      color = 'yellow';
    } else if (type === 'flying' || type === 'normal') {
      color = 'brown';
    };
    
    return (
      <div className="PokeCard">
        <h2 className="PokeCard-Name">{name}</h2>
        <h4 className="PokeCard-Type">Type: <span style={{color: color}}>{type}</span></h4>
        <p className="PokeCard-points">Experience: {base_xp}</p>
        <img alt="charmander" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="PokeCard-Image" />
      </div>
    )
  }
}

export default PokeCard;