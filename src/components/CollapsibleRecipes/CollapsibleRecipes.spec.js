import { default as CollapsibleRecipe } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("CollapsibleRecipe", () => {
  const navigate = jest.fn();
  const fullRecipes = {lunch: [{
        "id": 639620,
        "image": "https://spoonacular.com/recipeImages/639620-556x370.jpg",
        "title": "Classic New England Crab Cakes",
        "lock": true,
        "fave": false
}]}
  const componentToTest = (
    <Provider store={store}>
      <Router>
        <CollapsibleRecipe trigger="lunch" fullRecipes={fullRecipes} meal="lunch"/>
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(componentToTest)
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("it takes you to recipe page and sets recipe state id ", () => {
    const recipe = screen.getByTestId("recipe");
    fireEvent.click(recipe);
    expect(navigate).toHaveBeenCalledWith("/recipe");
  });

  test("it unlocks the recipe when clicked ", () => {
    const lock = screen.getByTestId("lock");
    fireEvent.click(lock);
    expect(lock.classList).toContain("unlocked");
  });
  test("it locks the recipe when clicked ", () => {
    const unlock = screen.getByTestId("unlock");
    fireEvent.click(unlock);
    expect(unlock.classList).toContain("locked");
  });
  
  
//   const changeLockRecipe = (e) => {
//     const parentClassName = e.target.parentElement.className
//     const lockClassName = e.target.className
//     const splitString = parentClassName.split(' ')
//     const lockRecipeIdStr = splitString[1]
//     const lockRecipeIdInt = parseInt(lockRecipeIdStr)

//     for (let i = 0; i < fullRecipes[meal].length; i ++){
//       if (fullRecipes[meal][i].id === lockRecipeIdInt){
//         if(lockClassName === "locked"){
//           fullRecipes[meal][i].lock = false
//           e.target.className = "unlocked"
//         }
//         if(lockClassName ===  "unlocked"){
//           fullRecipes[meal][i].lock = true
//           e.target.className = "locked"
//         }
//     }
//     }
//     dispatch({ type: "SET MEAL PLAN RECIPES", payload: fullRecipes})
//   }
})