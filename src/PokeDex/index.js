import React, { Component } from 'react';
import PokeCard from '../PokeCard';
import './PokeDex.css';

class PokeDex extends Component  {
  render() {
    return (
      <div className="PokeDex">
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
        <PokeCard pokemon={this.props}/>
      </div>
    )
  }
}

export default PokeDex;