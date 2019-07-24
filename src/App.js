import { hot } from "react-hot-loader/root"; // Make sure react-hot-loader is required before react and react-dom
import React, { Component } from "react";

const Warning = React.lazy(() => import("./Warning"));

class App extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState((prevState) => ({ count: prevState.count + 1 }));
  decrement = () => this.setState((prevState) => ({ count: prevState.count - 1 }));

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Hello world!!!</h1>
        <h2 className={count > 10 ? "warning" : null}>Count: {count}</h2>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>

        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(App);
