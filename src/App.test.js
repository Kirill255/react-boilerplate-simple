import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("Renders without error", () => {
    render(<App />);
  });
});
