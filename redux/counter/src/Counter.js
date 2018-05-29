import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  }
}