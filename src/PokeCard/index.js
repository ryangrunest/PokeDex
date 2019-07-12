import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    console.log(this.props);
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
        <p className="PokeCard-points">Experience: {exp}</p>
        <img className="PokeCard-Image" alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      </div>
    )
  }
}

export default PokeCard;