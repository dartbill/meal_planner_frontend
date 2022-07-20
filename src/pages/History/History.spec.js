import { default as History } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("History", () => {
  const navigate = jest.fn();
  const history = (
    <Provider store={store}>
      <Router>
        <History />
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(history);
  });

  test("it renders", () => {
    render(history);
    const heading = screen.getByText(/History/i);
    expect(heading).toBeTruthy();
  });
  
})
