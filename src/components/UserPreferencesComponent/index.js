import React, { useEffect, useState } from "react";


  function UserPreferenceComponent() {
    // const [checked, setChecked] = useState({ Vegetarian: true, orange: false });


    // const changeRadio = (e) => {
    //   setChecked(() => {
    //     return {
    //       Vegetarian: false,
    //       orange: false,
    //       [e.target.value]: true
    //     };
    //   });
    // };
  
   
    return (
     <>
     <h1>Set Preferences</h1>
     <div className="preferences-box">
      <div className="diets-section">
        <h3>Diets</h3>
        <p>I only want to recieve recipes that are:</p>
        <input type="radio" value="Gluten-free" name="Gluten-free" /> Gluten-free
        <input type="radio" value="Vegetarian" name="Vegetarian" /> Vegetarian
        <input type="radio" value="Pescatarian" name="Pescatarian" /> Pescatarian 
        <input type="radio" value="Vegan" name="Vegan" /> Vegan 
        <input type="radio" value="Paleo" name="Paleo" /> Paleo 
        <input type="radio" value="Keto" name="Keto" /> Keto 
        <input type="radio" value="All" name="All"  /> Send All 
      </div>

      <div className="intolorences-section">
        <h3>Intolerances</h3>
      </div>

      <div className="meals-section">
        <h3>Meals</h3>
        <input type="radio" value="Breakfast" name="Breakfast" /> Breakfast
        <input type="radio" value="Lunch" name="Lunch" /> Lunch
        <input type="radio" value="Dinner" name="Dinner" /> Dinner 
        <input type="radio" value="Snacks" name="Snacks" /> Snacks 
        <input type="radio" value="Dessert" name="Dessert" /> Dessert 
      </div>

    </div>
     </>
    );
  }
  
  export default UserPreferenceComponent;
