import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

function UserPreferenceComponent() {

  const [intoleranceList, setIntoleranceList] = useState([{ intolerance: "" }]);
  const [meals, setMeals] = useState({ breakfast: false, lunch: false, dinner: false, snack: false, dessert: false })

  const [calories, setCalories] = useState({ breakfast: 0, lunch: 0, dinner: 0, snack: 0, dessert: 0 })
  const [budget, setBudget] = useState({ breakfast: 0, lunch: 0, dinner: 0, snack: 0, dessert: 0 })
  const [diet, setDiet] = useState('')
  const [intolerance, setIntolerance] = useState([])

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


  const handleCheckboxChange = (checkbox) => {
    const mealType = checkbox.target.name
    if (checkbox.target.checked == true) {
      setMeals({ ...meals, [mealType]: true });
      // dispatch({ type: "SET USER MEALS", payload: meals });
    } else {
      setMeals({ ...meals, [mealType]: false });
    }
  }

  const handleCalorieChange = (e) => {
    const mealType = e.target.name
    setCalories({ ...calories, [mealType]: parseInt(e.target.value) });
  }
  const handleBudgetChange = (e) => {
    const mealType = e.target.name
    setBudget({ ...budget, [mealType]: parseInt(e.target.value) });
  }

  const handleRadioBtns = () => {
    const radioBtns = document.querySelectorAll('input[type = "radio"]')
    radioBtns.forEach((e) => {
      if (e.checked) {
        setDiet(e.value)
      }
    }
    )
  }
  const onSubmit = (e) => {
    e.preventDefault()
    handleRadioBtns()
    const arr = []
    for (const e of intoleranceList) {
      arr.push(e.service)
      console.log(e.service)
    }
    setIntolerance(arr)
    dispatch({ type: "SET USER INTOLERANCES", payload: intolerance });
    dispatch({ type: "SET USER DIET", payload: diet });
    dispatch({ type: "SET USER MEALS", payload: meals });
    dispatch({ type: "SET USER CALORIES", payload: calories });
    dispatch({ type: "SET USER BUDGETS", payload: budget });
  }




  return (
    <>
      <h1>Set Preferences</h1>
      <div className="preferences-box">
        <form onSubmit={(e) => { onSubmit(e) }}>
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

          <div className="intolorences-section">
            <h3>Intolerances</h3>
            <div>
              <label htmlFor="service">Intolerances</label>
              {intoleranceList.map((singleService, index) => (
                <div key={index} className="services">
                  <div className="first-division">
                    <input
                      spellCheck="true"
                      name="service"
                      type="text"
                      id="service"
                      value={singleService.service}
                      onChange={(e) => handleServiceChange(e, index)}
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
          </div>

          <div className="meals-section">
            <h3>Meals</h3>

            <input type="checkbox" onChange={(e) => { handleCheckboxChange(e) }} value="Breakfast" name="breakfast" id="expand-toggle" /> Breakfast
            {/* <p className="expandable" id="p">Hi</p> */}
            <div className="toggle-section">
              <label>
                Budget:
                <input onChange={(e) => { handleBudgetChange(e) }} type="number" id="breakfast-budget" name="breakfast" />
              </label>
              <label>
                Calories:
                <input onChange={(e) => { handleCalorieChange(e) }} type="number" id="breakfast-calories" name="breakfast" />
              </label>
            </div>
            <input type="checkbox" onChange={(e) => { handleCheckboxChange(e) }} value="Lunch" name="lunch" /> Lunch
            <div className="toggle-section">
              <label>
                Budget:
                <input onChange={(e) => { handleBudgetChange(e) }} type="number" id="lunch-budget" name="lunch" />
              </label>
              <label>
                Calories:
                <input onChange={(e) => { handleCalorieChange(e) }} type="number" id="lunch-calories" name="lunch" />
              </label>
            </div>
            <input type="checkbox" onChange={(e) => { handleCheckboxChange(e) }} value="Dinner" name="dinner" /> Dinner
            <div className="toggle-section">
              <label>
                Budget:
                <input onChange={(e) => { handleBudgetChange(e) }} type="number" id="dinner-budget" name="dinner" />
              </label>
              <label>
                Calories:
                <input onChange={(e) => { handleCalorieChange(e) }} type="number" id="dinner-calories" name="dinner" />
              </label>
            </div>
            <input type="checkbox" onChange={(e) => { handleCheckboxChange(e) }} value="Snacks" name="snacks" /> Snacks
            <div className="toggle-section">
              <label>
                Budget:
                <input onChange={(e) => { handleBudgetChange(e) }} type="number" id="snacks-budget" name="snacks" />
              </label>
              <label>
                Calories:
                <input onChange={(e) => { handleCalorieChange(e) }} type="number" id="snacks-calories" name="snacks" />
              </label>
            </div>
            <input type="checkbox" onChange={(e) => { handleCheckboxChange(e) }} value="Dessert" name="dessert" /> Dessert
            <div className="toggle-section">
              <label>
                Budget:
                <input onChange={(e) => { handleBudgetChange(e) }} type="number" id="dessert-budget" name="dessert" />
              </label>
              <label>
                Calories:
                <input onChange={(e) => { handleCalorieChange(e) }} type="number" id="dessert-calories" name="dessert" />
              </label>
            </div>
            <button type="submit">submit prefs</button>
          </div>
        </form>

      </div>
    </>
  );
}

export default UserPreferenceComponent;
