import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './style.css'

function UserPreferenceComponent() {

  const [intoleranceList, setIntoleranceList] = useState([{ intolerance: "" }]);
  const [meals, setMeals] = useState({ breakfast: false, lunch: false, dinner: false, snack: false, dessert: false })

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...intoleranceList];
    list[index][name] = value;
    setIntoleranceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...intoleranceList];
    list.splice(index, 1);
    setIntoleranceList(list);
  };

  const handleServiceAdd = () => {
    setIntoleranceList([...intoleranceList, { intolerance: "" }]);
  };

  const dispatch = useDispatch();


  const handleChange = (checkbox) => {
    const mealType = checkbox.target.name
    if (checkbox.target.checked == true) {
      setMeals({ ...meals, [mealType]: true });
      // dispatch({ type: "SET USER MEALS", payload: meals });
      console.log(meals)
    } else {
      setMeals({ ...meals, [mealType]: false });
      console.log(meals)
    }
  }





  return (
    <>
      <h1>Set Preferences</h1>
      <div className="preferences-box">
        <div className="diets-section">
          <h3>Diets</h3>
          <p>I only want to recieve recipes that are:</p>
          <input type="radio" value="Gluten-free" name="Diet" /> Gluten-free
          <input type="radio" value="Vegetarian" name="Diet" /> Vegetarian
          <input type="radio" value="Pescatarian" name="Diet" /> Pescatarian
          <input type="radio" value="Vegan" name="Diet" /> Vegan
          <input type="radio" value="Paleo" name="Diet" /> Paleo
          <input type="radio" value="Keto" name="Diet" /> Keto
          <input type="radio" value="All" name="Diet" /> Send All
        </div>
        {/*                     Intolarance */}
        <div className="intolorences-section">
          <h3>Intolerances</h3>
          <form className="App" autoComplete="off">
            <div className="form-field">
              <label htmlFor="service">Intolerances</label>
              {intoleranceList.map((singleService, index) => (
                <div key={index} className="services">
                  <div className="first-division">
                    <input
                      name="service"
                      type="text"
                      id="service"
                      value={singleService.service}
                      onChange={(e) => handleServiceChange(e, index)}
                      required
                    />
                    {intoleranceList.length - 1 === index && (
                      <button
                        type="button"
                        onClick={handleServiceAdd}
                        className="add-btn"
                      >
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                  <div className="second-division">
                    {intoleranceList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleServiceRemove(index)}
                        className="remove-btn"
                      >
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </form>

        </div>

        <div className="meals-section">
          <h3>Meals</h3>
          <input type="checkbox" onChange={(e) => { handleChange(e) }} value="Breakfast" name="breakfast" id="expand-toggle" /> Breakfast
          {/* <p className="expandable" id="p">Hi</p> */}
          <div className="toggle-section">
            <label>
              Budget:
              <input type="text" id="breakfast-budget" name="name" />
            </label>
            <label>
              Calories:
              <input type="text" id="breakfast-calories" name="name" />
            </label>
          </div>
          <input type="checkbox" onChange={(e) => { handleChange(e) }} value="Lunch" name="lunch" /> Lunch
          <div className="toggle-section">
            <label>
              Budget:
              <input type="text" id="lunch-budget" name="name" />
            </label>
            <label>
              Calories:
              <input type="text" id="lunch-calories" name="name" />
            </label>
          </div>
          <input type="checkbox" onChange={(e) => { handleChange(e) }} value="Dinner" name="dinner" /> Dinner
          <div className="toggle-section">
            <label>
              Budget:
              <input type="text" id="dinner-budget" name="name" />
            </label>
            <label>
              Calories:
              <input type="text" id="dinner-calories" name="name" />
            </label>
          </div>
          <input type="checkbox" onChange={(e) => { handleChange(e) }} value="Snacks" name="snacks" /> Snacks
          <div className="toggle-section">
            <label>
              Budget:
              <input type="text" id="snacks-budget" name="name" />
            </label>
            <label>
              Calories:
              <input type="text" id="snacks-calories" name="name" />
            </label>
          </div>
          <input type="checkbox" onChange={(e) => { handleChange(e) }} value="Dessert" name="dessert" /> Dessert
          <div className="toggle-section">
            <label>
              Budget:
              <input type="text" id="dessert-budget" name="name" />
            </label>
            <label>
              Calories:
              <input type="text" id="dessert-calories" name="name" />
            </label>
          </div>
        </div>

      </div>
    </>
  );
}

export default UserPreferenceComponent;
