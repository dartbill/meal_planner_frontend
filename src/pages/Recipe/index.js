import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";



function Recipe() {
    // const [recipe, setRecipe] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState([]);
    const [recipeReadyInMinutes, setRecipeReadyInMinutes] = useState([]);
    const [recipeImage, setRecipeImage] = useState([]);
    const navigate = useNavigate();
    const stateRecipeId = useSelector(state => state.recipe_id);
    const stateMealPlanRecipes = useSelector(state => state.meal_plan_recipes);
    const stateRandomRecipe = useSelector(state => state.random_recipe);
    console.log(stateRandomRecipe)
    console.log(stateRecipeId)

    let recipe
    if(stateRandomRecipe.id === parseInt(stateRecipeId)) {
        console.log(stateRandomRecipe.summary)
        let oldSummary = stateRandomRecipe.summary
        let newSummary = oldSummary.replace( /(<([^>]+)>)/ig, '')
        stateRandomRecipe.summary = newSummary
        console.log(stateRandomRecipe.summary)
        recipe = stateRandomRecipe   
    }

    for(let i = 0 ; i < Object.keys(stateMealPlanRecipes).length; i++) {
        for(let j = 0; j < Object.values(stateMealPlanRecipes)[i].length; j++) {
            if(Object.values(stateMealPlanRecipes)[i][j].id === parseInt(stateRecipeId)) {
                console.log(Object.values(stateMealPlanRecipes)[i][j])
                let oldSummary = Object.values(stateMealPlanRecipes)[i][j].summary
                let newSummary = oldSummary.replace( /(<([^>]+)>)/ig, '')
                Object.values(stateMealPlanRecipes)[i][j].summary = newSummary
                console.log(Object.values(stateMealPlanRecipes)[i][j].summary)
                recipe = Object.values(stateMealPlanRecipes)[i][j]
            }
        }
    }
    const formatRecipe = (oldSummary) => {
        console.log(oldSummary)
        const newSummary = oldSummary.replace( /(<([^>]+)>)/ig, '')
        console.log(newSummary)
    }

    const summary = "The recipe Basil Marinated Grilled Chicken can be made <b>in roughly roughly 45 minutes</b>. One portion of this dish contains around <b>48g of protein</b>, <b>9g of fat</b>, and a total of <b>285 calories</b>. This recipe serves 8 and costs $2.59 per serving. <b>The Fourth Of July</b> will be even more special with this recipe. Head to the store and pick up salt, lightly basil leaves, cup extra virgin olive oil, and a few other things to make it today. 10 people have made this recipe and would make it again. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. With a spoonacular <b>score of 80%</b>, this dish is solid. Similar recipes are <a href='https://spoonacular.com/recipes/all-purpose-lemon-basil-marinated-chicken-667189'>All Purpose Lemon Basil Marinated Chicken</a>, <a href='https://spoonacular.com/recipes/balsamic-garlic-and-basil-marinated-chicken-breasts-497124'>Balsamic, Garlic, and Basil Marinated Chicken Breasts</a>, and <a href='https://spoonacular.com/recipes/yogurt-marinated-grilled-chicken-kebabs-with-grilled-zucchini-salad-1017843'>Yogurt-Marinated Grilled Chicken Kebabs with Grilled Zucchini Salad</a>."

    formatRecipe(summary)
// console.log(stateMealPlanRecipes)
// console.log(recipe)


    // useEffect(() => {
    //     fetch(
    //         `https://api.spoonacular.com/recipes/analyzeInstructions/${stateRecipe.id}/information?apiKey=04620651d46d430daf947c06e19ebe95`
    //     )
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setRecipeInstructions(data.analyzedInstructions)
    //     })
    //     .catch(() => {
    //         console.log("error");
    //     })
    // }, [stateRecipe.id])
  

    return (
        <>
        <div onClick={()=> navigate(-1)}>Back</div>
        <h1> {recipe.title} </h1>
        <h1>Ingredient List</h1>
        <ul>
            {recipe.extendedIngredients.map(ingredient => {
                return (
                    <li>
                        {ingredient.original}
                    </li>
                )
            })}
        </ul>

        <img src={recipe.image} alt="" />
             <div>
             <h1>Nutrition</h1>
             </div>

        <div className="recipe__summary">
            <h1>Recipe Summary</h1>
            {recipe.summary}
        </div>


        <h1>Instructions</h1>
       
        
        {/* <button onClick={}>Take me to the Recipe Link!</button> */}
        </>
    );

  }





export default Recipe;
