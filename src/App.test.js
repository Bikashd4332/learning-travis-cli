import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

describe("Specs for App", () => {
  const rendered = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  test("the additional info rendered", () => {
    expect(rendered.getByText(/travis/i)).toBeInTheDocument();
  });

  test("renders learn react link", () => {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(rendered.getByText(/learn/i)).toBeInTheDocument();
  });
});
