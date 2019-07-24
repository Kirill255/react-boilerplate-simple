import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  // eslint-disable-next-line
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
