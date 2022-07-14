import React from 'react';
import Collapsible from 'react-collapsible';

const CollapsibleRecipes = ({recipes, triggerNames}) => {
  const viewFullRecipe = (e) => {
    console.log(e.target.parentElement.id)
    // update recipe_id in state to this id
    // reroute to recipes page
  }
  return (
    <>
    {triggerNames.map(triggerName => {
       return (
        <Collapsible trigger={triggerName}>
          {recipes.map(recipe => {
            return (
              <div className="recipe" id={recipe.id} onClick={viewFullRecipe}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt="" />
              </div>
            )
          })}
        </Collapsible>)
    })}
    
    </>
  );
};

export default CollapsibleRecipes;