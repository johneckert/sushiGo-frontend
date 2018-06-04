import React, { Component } from 'react';
import CardContainer from './CardContainer';
import CreateContainer from './CreateContainer';

class SushiContainer extends Component {
  state = {
    rolls: []
  };

  componentDidMount() {
    this.getRolls();
  }

  getRolls = () => {
    fetch('https://sushigo-backend.herokuapp.com/sushi')
      .then(res => res.json())
      .then(json => this.setState({ rolls: json }));
  };

  updateRolls = json => {
    const newRolls = this.state.rolls;
    newRolls.push(json);
    this.setState({ rolls: newRolls });
  };

  render() {
    const cRolls = this.state.rolls;
    return (
      <div className="sushi-container">
        {cRolls.map(roll => <CardContainer key={roll.id} rollData={roll} />)}
        <CreateContainer updateRolls={this.updateRolls} />
      </div>
    );
  }
}

export default SushiContainer;
