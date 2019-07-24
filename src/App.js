import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello world!!!</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState((prevState) => ({ count: prevState.count - 1 }))}>
          -
        </button>
        <button onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))}>
          +
        </button>
      </div>
    );
  }
}
