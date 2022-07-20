import { default as UserPreferences } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import reducer from '../../reducers'
import onBtnClick from './index'
import "@testing-library/jest-dom";
import axios from 'axios';


describe("UserPreferences", () => {
  const navigate = jest.fn();
  const UserPreferences = (
    <Provider store={store}>
      <Router>
        <UserPreferences />
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(UserPreferences);
  });

  test("it renders the button 'Logout' ", () => {
    const link = screen.getByText(/Remove/i);
    expect(link).toBeTruthy();
    // fireEvent.click(button);
    // expect(navigate).toHaveBeenCalledWith("/");
  });

  test("it renders the button 'Logout' ", () => {
    const link = screen.getByRole("button");
    expect(link).toBeTruthy();
 
  });

})
