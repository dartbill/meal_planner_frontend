import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import './style.css'
import { CollapsibleRecipes } from '../../components';
import Collapsible from "react-collapsible";

const MealPlan = () => {
    const apiKey = "a321e3e0f535440fa1fa1c5d16a7b0a0"

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [generateText, setGenerateText] = useState("Generate meal plan")


// if no result, render message to generate plan
// if result, render meal plan
    const stateMealRecipes = useSelector(state => state.meal_plan_recipes)
    console.log("state meal plan recipes at render", stateMealRecipes)

    const stateRecipes = useSelector(state => state.recipes)
    console.log("state recipes at render", stateRecipes)
    
   
    let viewedRecipes = []

    let newRecipes = { breakfast: [], lunch: [], dinner: [], dessert: [], snacks: []}
    
    let newMealPlan = { breakfast: [], lunch: [], dinner: [], dessert: [], snacks: []}
//update to take in user preferences
    let meals = {breakfast: false, lunch: false, dinner: false, dessert: false, snacks: true}

    const getInitialMeal = async (meal) => {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=${apiKey}&number=25&tags=${meal}&includeNutrition=true`)
        console.log("data", data.recipes)
        const retrievedRecipes = data.recipes
        let shortRetrievedRecipes = []
        let formattedRetrievedRecipes = []
        let thisMealsRecipesInMealPlan = []
        for(let i = 0; i < retrievedRecipes.length; i++){
            shortRetrievedRecipes = {cheap: retrievedRecipes[i].cheap, dairyFree: retrievedRecipes[i].dairyFree, extendedIngredients: retrievedRecipes[i].extendedIngredients, glutenFree: retrievedRecipes[i].glutenFree, id: retrievedRecipes[i].id, image: retrievedRecipes[i].image, instructions: retrievedRecipes[i].instructions, pricePerServing: retrievedRecipes[i].pricePerServing, readyInMinutes: retrievedRecipes[i].readyInMinutes, servings: retrievedRecipes[i].servings, sourceUrl: retrievedRecipes[i].sourceUrl, summary: retrievedRecipes[i].summary, title: retrievedRecipes[i].title, vegan: retrievedRecipes[i].vegan, vegetarian: retrievedRecipes[i].vegetarian}
            formattedRetrievedRecipes.push({...shortRetrievedRecipes, lock: true, fave: false})
        }
        for(let i = 0; i < 7; i++){
            thisMealsRecipesInMealPlan.push(formattedRetrievedRecipes[i])
            viewedRecipes.push(formattedRetrievedRecipes[i].id)
            formattedRetrievedRecipes.splice([i], 1)
        }
        if(meal === "breakfast"){
            newRecipes = { ...newRecipes, breakfast: formattedRetrievedRecipes}
            newMealPlan = { ...newMealPlan, breakfast: thisMealsRecipesInMealPlan}
        }
        if(meal === "lunch"){
            newRecipes = { ...newRecipes, lunch: formattedRetrievedRecipes}
            newMealPlan = { ...newMealPlan, lunch: thisMealsRecipesInMealPlan}
        }
        if(meal === "dinner"){
            newRecipes = { ...newRecipes, dinner: formattedRetrievedRecipes}
            newMealPlan = { ...newMealPlan, dinner: thisMealsRecipesInMealPlan}
        }
        if(meal === "dessert"){
            newRecipes = { ...newRecipes, dessert: formattedRetrievedRecipes}
            newMealPlan = { ...newMealPlan, dessert: thisMealsRecipesInMealPlan}
        }
        if(meal === "snacks"){
            newRecipes = { ...newRecipes, snacks: formattedRetrievedRecipes}
            newMealPlan = { ...newMealPlan, snacks: thisMealsRecipesInMealPlan}
        }
        console.log("meal's recipes in meal plan after call", thisMealsRecipesInMealPlan)
    }
    const getAdditionalMeal = async (meal) => {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=${apiKey}&number=25&tags=${meal}&includeNutrition=true`)
        console.log("data", data.recipes)
        const retrievedRecipes = data.recipes
        let shortRetrievedRecipes = []
        let formattedRetrievedRecipes = []
        for(let i = 0; i < retrievedRecipes.length; i++){
            shortRetrievedRecipes = {cheap: retrievedRecipes[i].cheap, dairyFree: retrievedRecipes[i].dairyFree, extendedIngredients: retrievedRecipes[i].extendedIngredients, glutenFree: retrievedRecipes[i].glutenFree, id: retrievedRecipes[i].id, image: retrievedRecipes[i].image, instructions: retrievedRecipes[i].instructions, pricePerServing: retrievedRecipes[i].pricePerServing, readyInMinutes: retrievedRecipes[i].readyInMinutes, servings: retrievedRecipes[i].servings, sourceUrl: retrievedRecipes[i].sourceUrl, summary: retrievedRecipes[i].summary, title: retrievedRecipes[i].title, vegan: retrievedRecipes[i].vegan, vegetarian: retrievedRecipes[i].vegetarian}
            formattedRetrievedRecipes.push({...shortRetrievedRecipes, lock: true, fave: false})
        }
        if(meal === "breakfast"){
            newRecipes = { ...newRecipes, breakfast: formattedRetrievedRecipes}
        }
        if(meal === "lunch"){
            newRecipes = { ...newRecipes, lunch: formattedRetrievedRecipes}
        }
        if(meal === "dinner"){
            newRecipes = { ...newRecipes, dinner: formattedRetrievedRecipes}
        }
        if(meal === "dessert"){
            newRecipes = { ...newRecipes, dessert: formattedRetrievedRecipes}
        }
        if(meal === "snacks"){
            newRecipes = { ...newRecipes, snacks: formattedRetrievedRecipes}
        }
        console.log("new recipes after additional meal call", newRecipes)
    }
    
    let unlockedMeals = [[], [], [], [], []]
    
    
const getMeals = async (e) => {
    e.preventDefault()

    // checks to see if a recipe is locked, if not it is added to unlocked array
    let numberOfUnlocked = 0
    for(let i = 0; i < Object.keys(meals).length; i++){
        for(let j = 0; j < Object.values(stateMealRecipes)[i].length; j++){
            if(Object.values(stateMealRecipes)[i][j].lock === false){
                unlockedMeals[i].push(Object.values(stateMealRecipes)[i][j].id)
                numberOfUnlocked += 1
                
            }
        }
    }
    console.log(numberOfUnlocked)
    console.log("unlocked meals", unlockedMeals)


    for(let i = 0; i < Object.keys(meals).length; i++){
        if(numberOfUnlocked === 0 && Object.values(meals)[i] === true) {
            if(Object.keys(meals)[i] === "snacks"){
                await getInitialMeal("snacks")
            }
        } else if (unlockedMeals[i].length > 0 && Object.values(meals)[i] === true && unlockedMeals[i].length <= Object.values(stateRecipes)[i].length) {
            for(let j = 0; j < Object.values(stateMealRecipes)[i].length; j++){
                if(Object.values(stateMealRecipes)[i][j].lock === false){
                    Object.values(stateMealRecipes)[i][j] = Object.values(stateRecipes)[i][0]
                    Object.values(stateRecipes)[i].splice(0, 1)
                    console.log("state recipes after unlocked replaced", stateRecipes)
                    if(Object.keys(meals)[i] === "snacks"){
                        newMealPlan = { ...newMealPlan, snacks: Object.values(stateMealRecipes)[i]}
                        newRecipes = {...newRecipes, snacks: Object.values(stateRecipes)[i]}
                    }
                }
            }
        } else if (unlockedMeals[i].length > 0 && Object.values(meals)[i] === true && unlockedMeals[i].length > Object.values(stateRecipes)[i].length){
            if(Object.keys(meals)[i] === "snacks"){
                await getAdditionalMeal("snacks")
            }
            for(let j = 0; j < Object.values(stateMealRecipes)[i].length; j++){
                if(Object.values(stateMealRecipes)[i][j].lock === false){
                    console.log(Object.values(newRecipes)[4])
                    Object.values(stateMealRecipes)[i][j] = Object.values(newRecipes)[4][0]
                    Object.values(newRecipes)[i].splice(0, 1)
                    console.log(Object.values(newRecipes)[i])
                    console.log("state recipes after unlocked replaced", stateRecipes)
                    if(Object.keys(meals)[i] === "snacks"){
                        newMealPlan = { ...newMealPlan, snacks: Object.values(stateMealRecipes)[i]}
                    }
                }
            }
        }

    }
    
    console.log("new recipes after getMeals", newRecipes)
    console.log("new meal plan after getMeals", newMealPlan)
    
    dispatch({ type: "SET RECIPES", payload: newRecipes})
    dispatch({ type: "SET VIEWED RECIPES", payload: viewedRecipes})
    dispatch({ type: "SET MEAL PLAN RECIPES", payload: newMealPlan})
} 






//TODO:generate shopping list


    // const generateShoppingList = (e) => {
    //     e.preventDefault()
        // take in all items from recipes
        // send to api with structure of 
        // {
        //     "items": [
        //         "4 lbs tomatoes",
        //         "10 tomatoes",
        //         "20 Tablespoons Olive Oil",
        //         "6 tbsp Olive Oil"
        //     ]
        // }
    //     for (let i = 0; i < Object.keys(stateRecipes).length; i++){
    //         console.log(Object.values(stateRecipes)[i])
    //     }
        
    // }

//TODO:submit meal plan
// take in all id's, titles, and faves
// add to array
// send to db
const submitMealPlan = (e) => {
    e.preventDefault()
    for(let i = 0; i < stateMealRecipes.length; i++){
        stateMealRecipes[i].lock = true
    }
    dispatch({ type: "SET MEAL PLAN RECIPES", payload: stateMealRecipes})
    // generateShoppingList()
    // do post to db meal history route
    setGenerateText("Generate new meal plan")
}

    

    return (
        <>
        <h1>Meal Plan</h1>
        <div className="generateMeal">
           <button onClick={getMeals}>{generateText}</button> 
        </div>
        {/* <div className="shoppingListBtn">
        <button onClick={generateShoppingList}>Shopping list</button> 
        </div> */}
        <div className="recipesMealPlan">

        {stateMealRecipes.breakfast.length > 0 && (
            <CollapsibleRecipes meal={"breakfast"} fullRecipes={stateMealRecipes} triggerName="Breakfast"/>
        )}
        {stateMealRecipes.lunch.length > 0 && (
            <CollapsibleRecipes meal={"lunch"} fullRecipes={stateMealRecipes} triggerName="Lunch"/>
        )}
        {stateMealRecipes.dinner.length > 0 && (
            <CollapsibleRecipes meal={"dinner"} fullRecipes={stateMealRecipes} triggerName="Dinner"/>
        )}
        {stateMealRecipes.dessert.length > 0 && (
            <CollapsibleRecipes meal={"dessert"} fullRecipes={stateMealRecipes} triggerName="Dessert"/>
        )}
        {stateMealRecipes.snacks.length > 0 && (
            <CollapsibleRecipes meal={"snacks"} fullRecipes={stateMealRecipes} triggerName="Snacks"/>
        )}
        </div>
        <div className="submitMealPlan" onClick={submitMealPlan}>Submit meal plan</div>
        </>
    )
};

export default MealPlan;