import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import closedLock from '../../images/closedLock.png'
import openLock from '../../images/openLock.png'
import filledHeart from '../../images/filledHeart.png'
import emptyHeart from '../../images/emptyHeart.png'
import './style.css'
import Collapsible from 'react-collapsible';


const CollapsibleRecipes = ({recipes, triggerName}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const viewFullRecipe = (e) => {
    const newRecipeId = e.target.parentElement.id
    dispatch({ type: "SET RECIPE ID", payload: newRecipeId})
    navigate("/recipe")
  }

  return (
    <>
          <Collapsible trigger={triggerName}>
            {recipes.map(recipe => {
              return (
                <div className="recipe" id={recipe.id} key={recipe.id} onClick={viewFullRecipe}>
                  <h3>{recipe.title}</h3>
                  {recipe.image && <img src={recipe.image} alt="" />}
                  {recipe.lock === true && <img src={closedLock} alt="" />}
                  {recipe.lock === false && <img src={openLock} alt="" />}
                  {recipe.fave === true && <img src={filledHeart} alt="" />}
                  {recipe.fave === false && <img src={emptyHeart} alt="" />}
                </div>
              )
            })}
          </Collapsible>
    </>
  );
};

export default CollapsibleRecipes;