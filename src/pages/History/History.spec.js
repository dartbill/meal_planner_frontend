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
    const heading = screen.getByTestId(/historyH1/i);
    expect(heading).toBeTruthy();
  });
  test("it filters faves", () => {
    const faveBtn = screen.getByTestId(/faveBtn/i);
    expect(faveBtn).toBeTruthy();
    fireEvent.click(faveBtn)
    expect(screen.getByText(`Show All`)).toBeInTheDocument()
  });
  test("it filters faves", () => {
    const faveBtn = screen.getByTestId(/faveBtn/i);
    expect(faveBtn).toBeTruthy();
    expect(screen.getByText(`Show Favourites`)).toBeInTheDocument()
  });
  test("it navigates you to meal plan", () => {
    const navigateBtn = screen.queryByTestId(/navigateBtn/i);
    fireEvent.click(navigateBtn);
    expect(navigate).toHaveBeenCalledWith("/mealplan");
  });
})
