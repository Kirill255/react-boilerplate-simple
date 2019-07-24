import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

import "./index.css";

if (process.env.NODE_ENV !== "production") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
