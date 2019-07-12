import React, { Component } from 'react';
import PokeCard from '../PokeCard';
import './PokeDex.css';

class PokeDex extends Component  {

  render() {
    // console.log(this.props);
    let title;
    if (this.props.isWinner === true) {
      title = <h1 className="PokeDex-winner">Winner!</h1>
    } else {
      title = <h1 className="PokeDex-loser">Loser!</h1>
    }
    return (
      <div className="PokeDex">
        {title}
        <small className="PokeDex-exp">Total Exp: {this.props.exp}</small>
        {this.props.hand.map(p => (
          <PokeCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_xp} />
        ))}
      </div>
    )
  }
}

export default PokeDex;