import { default as Recipe } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { default as reducer } from "../../reducers/index";

describe("Recipe", () => {


// const TestProviders = ({ initState }) => {
//   initState ||= { location: "", result: { sunrise: "", sunset: "" }, loading: false };
//   let testReducer = () => reducer(initState, { type: '@@INIT' })
//   const testStore = createStore(testReducer, applyMiddleware(thunk))
//   return ({ children }) => (
//       <Router>
//           <Provider store={store}>
//               {children}
//           </Provider>
//       </Router>
//   )
// }
// const renderWithReduxProvider = (ui, options = {}) => {
//   let TestWrapper = TestProviders(options)
//   render(ui, { wrapper: TestWrapper, ...options })
// }


  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(Recipe);
  });

  const Recipe = (
    <Provider store={store}>
      <Router>
        <Recipe />
      </Router>
    </Provider>
  );



  test('it renders a p tag', () => {
    const nav = screen.getByRole('ul');
    expect(nav).toBeInTheDocument();
  })


})


// describe("LoginComponent", () => {
//   const navigate = jest.fn();
  
// let recipe
//   const recipePage = (
//     <Provider store={store}>
//       <Router>
//         <Recipe recipe={recipe}/>
//       </Router>
//     </Provider>
//   )
  // beforeEach(() => {
  //   jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    
  // });
//   test("it unfaves the recipe when clicked ", () => {
//     recipe = {
//         "id": 639620,
//         "image": "https://spoonacular.com/recipeImages/639620-556x370.jpg",
//         "title": "Classic New England Crab Cakes",
//         "fave": true
//     }
//     render(<Provider store={store}>
//         <Router>
//           <Recipe recipe={recipe}/>
//         </Router>
//       </Provider>)
//     const fave = screen.getByTestId("faved");
//     fireEvent.click(fave);
//     expect(fave.classList).toContain("unfaved");
//   });
//   test("it faves the recipe when clicked ", async () => {
//     recipe = {
//         "id": 639620,
//         "image": "https://spoonacular.com/recipeImages/639620-556x370.jpg",
//         "title": "Classic New England Crab Cakes",
//         "fave": false
//     }
//     render(<Provider store={store}>
//         <Router>
//           <Recipe recipe={recipe}/>
//         </Router>
//       </Provider>)
//     const unfave = await screen.getByTestId("unfaved");
//     fireEvent.click(unfave);
//     expect(unfave.classList).toContain("faved");
//   });

// })

// import { default as Recipe } from ".";
// import { screen, render, fireEvent } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import * as router from "react-router";
// import { Provider } from "react-redux";
// import store from "../../store";
// import "@testing-library/jest-dom";

// describe("Recipe", () => {
//   const navigate = jest.fn();
//   const Recipe = (
//     <Provider store={store}>
//       <Router>
//         <Recipe />
//       </Router>
//     </Provider>
//   );

//   beforeEach(() => {
//     jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
//     render(Recipe);
//   });

//   test("it renders the button 'Cost per serving' ", () => {
//     const link = screen.getByText(/Cost per serving/i);
//     expect(link).toBeTruthy();
//     // fireEvent.click(button);
//     // expect(navigate).toHaveBeenCalledWith("/");
//   });
  
// })
