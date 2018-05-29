import React, {Component} from 'react';

export default class Counter extends Component {

  render() {
    return (
      <div>
        {this.props.store.getState()}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }

  decrement = () => {
    this.props.store.dispatch({type: 'DECREMENT'});
  }

  increment = () => {
    this.props.store.dispatch({type: 'INCREMENT'});
  }
}