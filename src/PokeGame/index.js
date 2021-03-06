import React, { Component } from 'react';
import PokeDex from '../PokeDex';

class PokeGame extends Component {
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
    // create two hands
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon ];

    // splice and push half the pokemon into hand1
    while (hand1.length < hand2.length) {
      let randIndx = Math.floor((Math.random() * hand2.length));
      let randPokemon = hand2.splice(randIndx, 1)[0];
      hand1.push(randPokemon);
    }

    // check if winner
    let exp1 = hand1.reduce((exp,pokemon) => exp + pokemon.base_xp, 0);
    let exp2 = hand2.reduce((exp,pokemon) => exp + pokemon.base_xp, 0);

    return (
      // send two pokedex components different hands as props
      <div className="PokeGame">
        <PokeDex hand={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <PokeDex hand={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}

export default PokeGame;