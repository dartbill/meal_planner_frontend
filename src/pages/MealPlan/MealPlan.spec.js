import { default as MealPlan } from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";
import reducer  from "../../reducers/reducer";
import { initialState }  from "../../reducers/reducer";
import { createStore } from "redux";

describe("MealPlan", () => {
  const navigate = jest.fn();
  const mealplan = (
    <Provider store={store}>
      <Router>
        <MealPlan />
      </Router>
    </Provider>
  );

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(mealplan);
  });
  

  test("it renders", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toMatch(/Meal Plan/i);
  });

  
//   test("it filters faves", () => {
//     const faveBtn = screen.getByTestId(/faveBtn/i);
//     expect(faveBtn).toBeTruthy();
//     expect(screen.getByText(`Show Favourites`)).toBeInTheDocument()
//   });
//   test("it navigates you to meal plan", () => {
//     const navigateBtn = screen.queryByTestId(/navigateBtn/i);
//     fireEvent.click(navigateBtn);
//     expect(navigate).toHaveBeenCalledWith("/mealplan");
//   });
})
function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(reducer, reduxState || initialState);
    return render(<Provider store={store}><Router>{ui}</Router></Provider>);
  }
describe("MealPlan redux", () => {
    test("header not logged in", () => {
        const { getByText } = renderWithProviders(<MealPlan />, {
          store: { preferences_set: false }
        });
        getByText("Meal Plan");

      });
    //   test("it calls getMeals", () => {
    //     const getMealsBtn = screen.getByTestId(/getMealsBtn/i);
    //     expect(getMealsBtn).toBeTruthy();
    //     fireEvent.click(getMealsBtn)
    //     expect(screen.getByText(`Show All`)).toBeInTheDocument()
    //   });
    test("header logged in", () => {
        const { getByText } = renderWithProviders(<MealPlan />, {
          reduxState: {
            recipes: { breakfast: [], lunch: [], dinner: [], dessert: [], snacks: [] },
            recipe_id: "12",
            users_recipe_history: [
                {
                    date: "date", recipes: {
                        breakfast: [{ id: "", title: "", fave: "" }],
                        lunch: [{ id: "", title: "", fave: "" }],
                        dinner: [{ id: "", title: "", fave: "" }],
                        dessert: [{ id: "", title: "", fave: "" }],
                        snacks: [{ id: "", title: "fgdfgfd", fave: false }]
                    }
                }
            ],
            meal_plan_recipes: {
                breakfast: [], lunch: [], dinner: [], dessert: [], snacks: []
            },
            viewed_recipes: [],
            shopping_list: [],
            user_budget: { breakfast: 0, lunch: 0, dinner: 0, snack: 0, dessert: 0 },
            user_meals: { breakfast: false, lunch: false, dinner: false, snack: false, dessert: false },
            diet: { vegan: false, vegetarian: false, glutenFree: false, ketogenic: false, pescetarian: false, paleo: false },
            intolerances: [],
            preferences_set: true
          }
        });
        getByText("You don't have a meal plan yet, create one first!");
      });
})
describe("MealPlan redux 2", () => {
    //   test("it calls getMeals", () => {
    //     const getMealsBtn = screen.getByTestId(/getMealsBtn/i);
    //     expect(getMealsBtn).toBeTruthy();
    //     fireEvent.click(getMealsBtn)
    //     expect(screen.getByText(`Show All`)).toBeInTheDocument()
    //   });
    test("header logged in", () => {
        renderWithProviders(<MealPlan />, {
          reduxState: {
            recipes: { breakfast: [], lunch: [], dinner: [], dessert: [], snacks: [] },
            recipe_id: "12",
            users_recipe_history: [
                {
                    date: "date", recipes: {
                        breakfast: [{ id: "", title: "", fave: "" }],
                        lunch: [{ id: "", title: "", fave: "" }],
                        dinner: [{ id: "", title: "", fave: "" }],
                        dessert: [{ id: "", title: "", fave: "" }],
                        snacks: [{ id: "", title: "fgdfgfd", fave: false }]
                    }
                }
            ],
            meal_plan_recipes: {
                breakfast: ["meal"], lunch: ["meal"], dinner: [], dessert: [], snacks: []
            },
            viewed_recipes: [],
            shopping_list: [],
            user_budget: { breakfast: 0, lunch: 0, dinner: 0, snack: 0, dessert: 0 },
            user_meals: { breakfast: false, lunch: false, dinner: false, snack: false, dessert: false },
            diet: { vegan: false, vegetarian: false, glutenFree: false, ketogenic: false, pescetarian: false, paleo: false },
            intolerances: [],
            preferences_set: true
          }
        });
        const heading = screen.getByTestId("getMealsBtn");
        expect(heading.textContent).toMatch(/Generate meal plan/i);
      });
})