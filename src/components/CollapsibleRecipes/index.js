import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './style.css'
import Collapsible from 'react-collapsible';

const CollapsibleRecipes = ({ favourited, fullRecipes, triggerName, meal }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const viewFullRecipe = (e) => {
    const newRecipeId = e.target.parentElement.className
    dispatch({ type: "SET RECIPE ID", payload: newRecipeId })
    navigate("/recipe")
  }
  // console.log("meal recipes", mealRecipes)
  // console.log("recipes in collapsible", fullRecipes)


  const faveFilter = (recipe) => {
    let fave_recipe = document.getElementById('target')
    if (favourited && recipe == false) {
      fave_recipe.firstChild.style.display = "none"
    } else if (!favourited) {
      fave_recipe.firstChild.style.display = "block"
    }
  }




  // TODO:add conditional that if user meals is same as initial state, do a calculateNewValue, if not set meal recipes to state recipes
  // const [mealRecipes, setMealRecipes] = useState(recipes)
  // causing an error, shouldn't when added to useEffect
  // dispatch({ type: "SET MEAL PLAN RECIPES", payload: recipes})

  // console.log(fullRecipes[meal])
  const changeLockRecipe = (e) => {
    const parentClassName = e.target.parentElement.className
    const lockClassName = e.target.className
    const splitString = parentClassName.split(' ')
    const lockRecipeIdStr = splitString[1]
    const lockRecipeIdInt = parseInt(lockRecipeIdStr)

    for (let i = 0; i < fullRecipes[meal].length; i++) {
      if (fullRecipes[meal][i].id === lockRecipeIdInt) {
        if (lockClassName === "locked") {
          fullRecipes[meal][i].lock = false
          e.target.className = "unlocked"
        }
        if (lockClassName === "unlocked") {
          fullRecipes[meal][i].lock = true
          e.target.className = "locked"
        }
      }
    }
    dispatch({ type: "SET MEAL PLAN RECIPES", payload: fullRecipes })
  }

  // move to recipe page
  const changefaveRecipe = (e) => {
    const parentClassName = e.target.parentElement.className
    const faveClassName = e.target.className
    const splitString = parentClassName.split(' ')
    const faveRecipeIdStr = splitString[1]
    const faveRecipeIdInt = parseInt(faveRecipeIdStr)

    for (let i = 0; i < fullRecipes[meal].length; i++) {
      if (fullRecipes[meal][i].id === faveRecipeIdInt) {
        if (faveClassName === "fave") {
          fullRecipes[meal][i].fave = false
          e.target.className = "unfaved"
        }
        if (faveClassName === "unfaved") {
          fullRecipes[meal][i].fave = true
          e.target.className = "faved"
        }
      }
    }
  }


  return (
    <>
      <Collapsible trigger={triggerName}>
        {fullRecipes[meal].map(recipe => {
          return (

            <div key={recipe.id} className="recipe">
              {faveFilter(recipe.fave)}
              <div id="target" className={recipe.id} data-testid="recipe" onClick={viewFullRecipe}>
                <h3 >{recipe.title}</h3>
                {recipe.image && <img className="recipeCardImg" src={recipe.image} alt="" />}
              </div>
              <div className={"recipeIcon " + recipe.id}>
                {recipe.lock === true && <div data-testid="lock" onClick={changeLockRecipe} className="locked" />}
                {recipe.lock === false && <div onClick={changeLockRecipe} data-testid="unlock" className="unlocked" />}
                {recipe.fave === true && <div onClick={changefaveRecipe} data-testid="faved" className="faved" />}
                {recipe.fave === false && <div onClick={changefaveRecipe} data-testid="unfaved" className="unfaved" />}
              </div>
            </div>
          )
        })}
      </Collapsible>
    </>
  );
};

export default CollapsibleRecipes;