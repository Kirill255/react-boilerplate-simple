import { hot } from "react-hot-loader/root"; // Make sure react-hot-loader is required before react and react-dom
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!!!</h1>
      </div>
    );
  }
}

export default hot(App);
