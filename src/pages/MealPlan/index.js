import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import './style.css'
import { CollapsibleRecipes } from '../../components';

const MealPlan = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [generateText, setGenerateText] = useState("Generate meal plan")
    const stateFillerVar = useSelector(state => state.fillerVar)
    const [fillerVar, setFillerVar] = useState(stateFillerVar)

    const [recipes, setRecipes] = useState([
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
            "servings": 2,
            "readyInMinutes": 45,
            "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
            "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
            "pricePerServing": 163.15,
            "cheap": false,
            "dairyFree": false,
            "diets": [],
            "glutenFree": false,
            "instructions": "",
            "ketogenic": false,
            "vegan": false,
            "vegetarian": false,
            "veryPopular": false,
            "extendedIngredients": [
                {
                    "aisle": "Milk, Eggs, Other Dairy",
                    "amount": 1.0,
                    "consitency": "solid",
                    "id": 1001,
                    "image": "butter-sliced.jpg",
                    "measures": {
                        "metric": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        },
                        "us": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        }
                    },
                    "meta": [],
                    "name": "butter",
                    "original": "1 tbsp butter",
                    "originalName": "butter",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Produce",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 10011135,
                    "image": "cauliflower.jpg",
                    "measures": {
                        "metric": {
                            "amount": 473.176,
                            "unitLong": "milliliters",
                            "unitShort": "ml"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "cups",
                            "unitShort": "cups"
                        }
                    },
                    "meta": [
                        "frozen",
                        "thawed",
                        "cut into bite-sized pieces"
                    ],
                    "name": "cauliflower florets",
                    "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                    "unit": "cups"
                },
                {
                    "aisle": "Cheese",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1041009,
                    "image": "cheddar-cheese.png",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        }
                    },
                    "meta": [
                        "grated",
                        "(I used romano)"
                    ],
                    "name": "cheese",
                    "original": "2 tbsp grated cheese (I used romano)",
                    "originalName": "grated cheese (I used romano)",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "amount": 1.0,
                    "consitency": "liquid",
                    "id": 1034053,
                    "image": "olive-oil.jpg",
                    "measures": {
                        "metric": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        },
                        "us": {
                            "amount": 1.0,
                            "unitLong": "Tbsp",
                            "unitShort": "Tbsp"
                        }
                    },
                    "meta": [],
                    "name": "extra virgin olive oil",
                    "original": "1-2 tbsp extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Produce",
                    "amount": 5.0,
                    "consitency": "solid",
                    "id": 11215,
                    "image": "garlic.jpg",
                    "measures": {
                        "metric": {
                            "amount": 5.0,
                            "unitLong": "cloves",
                            "unitShort": "cloves"
                        },
                        "us": {
                            "amount": 5.0,
                            "unitLong": "cloves",
                            "unitShort": "cloves"
                        }
                    },
                    "meta": [],
                    "name": "garlic",
                    "original": "5-6 cloves garlic",
                    "originalName": "garlic",
                    "unit": "cloves"
                },
                {
                    "aisle": "Pasta and Rice",
                    "amount": 6.0,
                    "consitency": "solid",
                    "id": 20420,
                    "image": "fusilli.jpg",
                    "measures": {
                        "metric": {
                            "amount": 170.097,
                            "unitLong": "grams",
                            "unitShort": "g"
                        },
                        "us": {
                            "amount": 6.0,
                            "unitLong": "ounces",
                            "unitShort": "oz"
                        }
                    },
                    "meta": [
                        "(I used linguine)"
                    ],
                    "name": "pasta",
                    "original": "6-8 ounces pasta (I used linguine)",
                    "originalName": "pasta (I used linguine)",
                    "unit": "ounces"
                },
                {
                    "aisle": "Spices and Seasonings",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1032009,
                    "image": "red-pepper-flakes.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "pinches",
                            "unitShort": "pinches"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "pinches",
                            "unitShort": "pinches"
                        }
                    },
                    "meta": [
                        "red"
                    ],
                    "name": "red pepper flakes",
                    "original": "couple of pinches red pepper flakes, optional",
                    "originalName": "couple of red pepper flakes, optional",
                    "unit": "pinches"
                },
                {
                    "aisle": "Spices and Seasonings",
                    "amount": 2.0,
                    "consitency": "solid",
                    "id": 1102047,
                    "image": "salt-and-pepper.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "servings",
                            "unitShort": "servings"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "servings",
                            "unitShort": "servings"
                        }
                    },
                    "meta": [
                        "to taste"
                    ],
                    "name": "salt and pepper",
                    "original": "salt and pepper, to taste",
                    "originalName": "salt and pepper, to taste",
                    "unit": "servings"
                },
                {
                    "aisle": "Produce",
                    "amount": 3.0,
                    "consitency": "solid",
                    "id": 11291,
                    "image": "spring-onions.jpg",
                    "measures": {
                        "metric": {
                            "amount": 3.0,
                            "unitLong": "",
                            "unitShort": ""
                        },
                        "us": {
                            "amount": 3.0,
                            "unitLong": "",
                            "unitShort": ""
                        }
                    },
                    "meta": [
                        "white",
                        "green",
                        "separated",
                        "chopped"
                    ],
                    "name": "scallions",
                    "original": "3 scallions, chopped, white and green parts separated",
                    "originalName": "scallions, chopped, white and green parts separated",
                    "unit": ""
                },
                {
                    "aisle": "Alcoholic Beverages",
                    "amount": 2.0,
                    "consitency": "liquid",
                    "id": 14106,
                    "image": "white-wine.jpg",
                    "measures": {
                        "metric": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        },
                        "us": {
                            "amount": 2.0,
                            "unitLong": "Tbsps",
                            "unitShort": "Tbsps"
                        }
                    },
                    "meta": [
                        "white"
                    ],
                    "name": "white wine",
                    "original": "2-3 tbsp white wine",
                    "originalName": "white wine",
                    "unit": "tbsp"
                },
                {
                    "aisle": "Pasta and Rice",
                    "amount": 0.25,
                    "consitency": "solid",
                    "id": 99025,
                    "image": "breadcrumbs.jpg",
                    "measures": {
                        "metric": {
                            "amount": 59.147,
                            "unitLong": "milliliters",
                            "unitShort": "ml"
                        },
                        "us": {
                            "amount": 0.25,
                            "unitLong": "cups",
                            "unitShort": "cups"
                        }
                    },
                    "meta": [
                        "whole wheat",
                        "(I used panko)"
                    ],
                    "name": "whole wheat bread crumbs",
                    "original": "1/4 cup whole wheat bread crumbs (I used panko)",
                    "originalName": "whole wheat bread crumbs (I used panko)",
                    "unit": "cup"
                }
            ],
            "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
            "lock": true
        }
    ])
    // const [triggerNames, setTriggerNames] = useState(["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"])

    // add lock and fave to end of each recipe
    
    const addLockAndFaves = () => {

    }
    // console.log("navigate location", navigate(+1))
    // console.log("state filler", stateFillerVar)
    // console.log("recipes before axios", recipes)
// TODO:useEffect to call users meal plan
// if no result, render message to generate plan
// if result, render meal plan
const stateMealRecipes = useSelector(state => state.meal_plan_recipes)
console.log("state meal recipes", stateMealRecipes)
   
let breakfast = []
    let lunch = []
    let dinner = []
    let dessert = []
    let snack = []

const getBreakfast = async () => {
    const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0&number=7&tags=breakfast&includeNutrition=true`)
    console.log("data", data.recipes)
    const breakfastRecipes = data.recipes
    
    for(let i = 0; i < breakfastRecipes.length; i++){
        breakfast.push({...breakfastRecipes[i], lock: true, fave: false}) 
    }
}
const getLunch = async () => {
    const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0&number=7&tags=lunch&includeNutrition=true`)
    console.log("data", data.recipes)
    const lunchRecipes = data.recipes
    
    for(let i = 0; i < lunchRecipes.length; i++){
        lunch.push({...lunchRecipes[i], lock: true, fave: false}) 
    }
}
    const getDinner = async () => {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0&number=7&tags=dinner&includeNutrition=true`)
    console.log("data", data.recipes)
    const dinnerRecipes = data.recipes
   
    for(let i = 0; i < dinnerRecipes.length; i++){
        dinner.push({...dinnerRecipes[i], lock: true, fave: false}) 
    }
    }
    
    const getDessert = async () => {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0&number=7&tags=dessert&includeNutrition=true`)
    console.log("data", data.recipes)
    const dessertRecipes = data.recipes
    
    for(let i = 0; i < dessertRecipes.length; i++){
        dessert.push({...dessertRecipes[i], lock: true, fave: false}) 
    }
    }
    const getSnack = async () => {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0&number=7&tags=snacks&includeNutrition=true`)
    console.log("data", data.recipes)
    const snackRecipes = data.recipes
    
    for(let i = 0; i < snackRecipes.length; i++){
        snack.push({...snackRecipes[i], lock: true, fave: false}) 
    }
    }
    


const getMeals = async (e) => {

    // change to for loop that takes in user preferences, including meals and diets
    
    await getBreakfast()
    await getLunch()
    await getDinner()
    await getDessert()
    await getSnack()

    const newMealPlan = { breakfast: breakfast, lunch: lunch, dinner: dinner, dessert: dessert, snack: snack}
    console.log(newMealPlan)
    // addLockAndFaves
    setRecipes(newMealPlan)
    
    dispatch({ type: "SET MEAL PLAN RECIPES", payload: newMealPlan})
    // console.log("newMealPlans", newMealPlan)
} 

// console.log("recipes breakfast", stateMealRecipes.breakfast.length)
// TODO:generate meal plan function
// if all locks are true, warning about overwriting selections
//if recipes in state is = initial state or id arrary = 100, make call
    // reset recipe state
    // reset id state
    // reset meal_planner_recipes state
    // reset shopping_list state
    // take in users preferences
    // make call to random recipe api for each meal in preferences
    // returns 50
    // extract needed data and add in an Array
    // to each recipe add lock = true attribute 
    // add meal arrays to recipes object with meal key
    // take 7 for each meal and add to meal_plan_recipes array and add id to meal_id array
    // feed into the conditional 
//else cycle through recipes array checking to make sure it hasn't been sent already
//replace unlocked with new recipe

// when open a Collapsible, change the meal state to that meal
// feed this into functions for generate meal function

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

    // const stateRecipes = useSelector(state => state.recipes)
    // console.log(stateRecipes.dinner.length)
    
    
    // const changeMeals = (e) => {
    //     e.preventDefault()
    //     setFillerVar(prev => prev + 1)
    //     dispatch({ type: "SET FILLERVAR", payload: fillerVar + 1})
    //     console.log("changing meal")
    // }

    // console.log(fillerVar)
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
            // TODO:will change each of these to stateRecipes.breakfast respectively
            <CollapsibleRecipes meal={"breakfast"} fullRecipes={stateMealRecipes} setRecipes={setRecipes} triggerName="Breakfast"/>
        )}
        {/* <CollapsibleRecipes recipes={recipes} setRecipes={setRecipes} triggerName="Breakfast"/> */}
        {stateMealRecipes.lunch.length > 0 && (
            <CollapsibleRecipes meal={"lunch"} fullRecipes={stateMealRecipes} setRecipes={setRecipes} triggerName="Lunch"/>
        )}
        {stateMealRecipes.dinner.length > 0 && (
            <CollapsibleRecipes meal={"dinner"} fullRecipes={stateMealRecipes} setRecipes={setRecipes} triggerName="Dinner"/>
        )}
        {stateMealRecipes.dessert.length > 0 && (
            <CollapsibleRecipes meal={"dessert"} fullRecipes={stateMealRecipes} setRecipes={setRecipes} triggerName="Dessert"/>
        )}
        {stateMealRecipes.snack.length > 0 && (
            <CollapsibleRecipes meal={"snack"} fullRecipes={stateMealRecipes} setRecipes={setRecipes} triggerName="Snacks"/>
        )}
        </div>
        <div className="submitMealPlan" onClick={submitMealPlan}>Submit meal plan</div>
        </>
    )
};

export default MealPlan;