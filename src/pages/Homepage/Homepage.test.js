import { default as Homepage } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Homepage", () => {
  const navigate = jest.fn();
  const Home = (
    <Provider store={store}>
      <Router>
        <Homepage />
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(Home);
  });

  test("it renders the button 'Logout' ", () => {
    const link = screen.getByText(/Set budget/i);
    expect(link).toBeTruthy();
    // fireEvent.click(button);
    // expect(navigate).toHaveBeenCalledWith("/");
  });
  
})
