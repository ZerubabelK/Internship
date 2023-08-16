import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";

const mockStore = configureStore([]);

describe("App component", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      reducer: {
        tasks: [],
        filter: "All",
      },
    });
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("Render App component", () => {
    expect(component).toBeTruthy();
  });
});
