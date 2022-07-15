import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import closedLock from '../../images/closedLock.png'
import openLock from '../../images/openLock.png'
import filledHeart from '../../images/filledHeart.png'
import emptyHeart from '../../images/emptyHeart.png'
import './style.css'
import Collapsible from 'react-collapsible';


const CollapsibleRecipes = ({recipes, triggerName, setRecipes}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const viewFullRecipe = (e) => {
    const newRecipeId = e.target.parentElement.className
    console.log(newRecipeId)
    dispatch({ type: "SET RECIPE ID", payload: newRecipeId})
    navigate("/recipe")
  }
console.log(recipes[0].id)

  const [mealRecipes, setMealRecipes] = useState(recipes)
  // console.log(mealRecipes[0].lock)
  const unlockRecipe = (e) => {
    const parentClassName = e.target.parentElement.className
    const splitString = parentClassName.split(' ')
    const lockRecipeIdStr = splitString[1]
    const lockRecipeIdInt = parseInt(lockRecipeIdStr)
    // const result = words.filter(word => word.length > 6);
    for (let i = 0; i < recipes.length; i ++){
      if (mealRecipes[i].id === lockRecipeIdInt){
      console.log("found yah")
      console.log(mealRecipes[i].lock)
      mealRecipes[i].lock = false
      console.log(mealRecipes[i].lock)
      setMealRecipes(mealRecipes)
    }
    }
  }
  const changeLockRecipe = (e) => {
    const parentClassName = e.target.parentElement.className
    const lockClassName = e.target.className
    console.log("lock class name", lockClassName)
    const splitString = parentClassName.split(' ')
    const lockRecipeIdStr = splitString[1]
    const lockRecipeIdInt = parseInt(lockRecipeIdStr)
    // const result = words.filter(word => word.length > 6);

    for (let i = 0; i < mealRecipes.length; i ++){
      if (mealRecipes[i].id === lockRecipeIdInt){
        if(lockClassName === "locked"){
          console.log("unlock me please")
          console.log(mealRecipes[i].lock)
          mealRecipes[i].lock = false
          console.log(mealRecipes[i].lock)
          e.target.className = "unlocked"
        }
        if(lockClassName ===  "unlocked"){
          console.log("lock me please")
          console.log(mealRecipes[i].lock)
          mealRecipes[i].lock = true
          console.log(mealRecipes[i].lock)
          e.target.className = "locked"
        }
    }
    }
    
  }
  const changefaveRecipe = (e) => {
    const parentClassName = e.target.parentElement.className
    const faveClassName = e.target.className
    console.log("fave class name", faveClassName)
    const splitString = parentClassName.split(' ')
    const faveRecipeIdStr = splitString[1]
    const faveRecipeIdInt = parseInt(faveRecipeIdStr)
    // const result = words.filter(word => word.length > 6);

    for (let i = 0; i < mealRecipes.length; i ++){
      if (mealRecipes[i].id === faveRecipeIdInt){
        if(faveClassName === "locked"){
          console.log("unfave me please")
          console.log(mealRecipes[i].fave)
          mealRecipes[i].fave = false
          console.log(mealRecipes[i].fave)
          e.target.className = "unfaved"
        }
        if(faveClassName ===  "unfaved"){
          console.log("fave me please")
          console.log(mealRecipes[i].fave)
          mealRecipes[i].fave = true
          console.log(mealRecipes[i].fave)
          e.target.className = "faved"
        }
    }
    }
  }
 

  return (
    <>
          <Collapsible trigger={triggerName}>
            {mealRecipes.map(recipe => {
              return (
                <div key={recipe.id} className="recipe">
                  <div className={recipe.id} onClick={viewFullRecipe}>
                    <h3>{recipe.title}</h3>
                    {recipe.image && <img src={recipe.image} alt="" />}
                  </div>
                  <div className={"recipeIcon " + recipe.id}>
                    {recipe.lock && <div onClick={changeLockRecipe} className="locked"/>}
                    {recipe.fave && <div onClick={changefaveRecipe} className="unfaved"/>}
                  </div>
                </div>
              )
            })}
          </Collapsible>
    </>
  );
};

export default CollapsibleRecipes;