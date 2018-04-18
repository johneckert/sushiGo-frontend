import React, { Component } from 'react';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';

class CardContainer extends Component {
  state = { clicked: false };

  handleClick = e => {
    e.preventDefault();
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="card" onClick={event => this.handleClick(event)}>
        <div className="roll-title">{this.props.rollData.name}</div>
        {this.state.clicked ? (
          <CardBack rollData={this.props.rollData} />
        ) : (
          <CardFront rollData={this.props.rollData} />
        )}
      </div>
    );
  }
}

export default CardContainer;
