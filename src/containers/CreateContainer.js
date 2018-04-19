import React, { Component } from 'react';

class CreateContainer extends Component {
  state = {
    name: '',
    ingredientOne: '',
    ingredientTwo: '',
    ingredientThree: '',
    ingredientFour: ''
  };

  combineIngredients = () => {
    return `${this.state.ingredientOne}, ${this.state.ingredientTwo}, ${
      this.state.ingredientThree
    }, ${this.state.ingredientFour}`;
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:8000/sushi', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name, ingredients: this.combineIngredients() })
    })
      .then(res => res.json())
      .then(json => {
        this.setState(
          {
            name: '',
            ingredientOne: '',
            ingredientTwo: '',
            ingredientThree: '',
            ingredientFour: ''
          },
          () => this.props.updateRolls(json)
        );
      });
  };

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="card">
        <div className="roll-title submit-span">
          <input
            className="roll-title input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="card back">
          <ul>
            <li>
              <input
                className="input"
                type="text"
                name="ingredientOne"
                value={this.state.ingredientOne}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                className="input"
                type="text"
                name="ingredientTwo"
                value={this.state.ingredientTwo}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                className="input"
                type="text"
                name="ingredientThree"
                value={this.state.ingredientThree}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                className="input"
                type="text"
                name="ingredientFour"
                value={this.state.ingredientFour}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <button className="submit" type="submit" onClick={this.handleSubmit}>
                +
              </button>
            </li>
          </ul>
          <div className="line" />
        </div>
      </div>
    );
  }
}

export default CreateContainer;
