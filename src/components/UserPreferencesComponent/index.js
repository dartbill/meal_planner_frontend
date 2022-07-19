import React, { useEffect, useState } from "react";
import './style.css'

  function UserPreferenceComponent() {

    const [intoleranceList, setIntoleranceList] = useState([{ intolerance: "" }]);

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
        <input type="radio" value="All" name="Diet"  /> Send All 
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
        <input type="checkbox" value="Breakfast" name="Breakfast" id="expand-toggle"/> Breakfast
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
        <input type="checkbox" value="Lunch" name="Lunch" /> Lunch
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
        <input type="checkbox" value="Dinner" name="Dinner" /> Dinner 
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
        <input type="checkbox" value="Snacks" name="Snacks" /> Snacks 
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
        <input type="checkbox" value="Dessert" name="Dessert" /> Dessert 
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
