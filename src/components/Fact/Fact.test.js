import { render, waitFor } from "@testing-library/react";
import Fact from ".";


// describe('Fact Component', () => { 
//     it('should render Facts when api responds', async () => {
//         render(<Fact />);
//         await waitFor(() => {
//             screen.getByRole("paragraph".toBeInTheDocument())
//         })
//     })
// })

import { default as Fact } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import reducer from '../../reducers'
import onBtnClick from './index'
import "@testing-library/jest-dom";
import axios from 'axios';


describe("Fact", () => {
  const navigate = jest.fn();
  const Fact = (
    <Provider store={store}>
      <Router>
        <Fact />
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(Fact);
  });

  test("it renders the button 'Logout' ", () => {
    const link = screen.getByRole("paragraph").toBeInTheDocument();
    expect(link).toBeTruthy();

    })

});
