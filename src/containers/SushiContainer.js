import React, { Component } from 'react';
import CardContainer from './CardContainer';

class SushiContainer extends Component {
  state = {
    rolls: []
  };

  componentDidMount() {
    this.getRolls();
  }

  getRolls = () => {
    fetch('http://localhost:8000/sushi')
      .then(res => res.json())
      .then(json => this.setState({ rolls: json }));
  };

  render() {
    console.log(this.state.rolls);
    return (
      <div className="sushi-container">
        {this.state.rolls.map(roll => <CardContainer key={roll.id} rollData={roll} />)}
      </div>
    );
  }
}

export default SushiContainer;
