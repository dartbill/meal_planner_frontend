import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

  function RandomRecipe() {
    const [randomRecipe, setRandomRecipe] = useState([]);
    const [randomRecipeReadyInMinutes, setRandomRecipeReadyInMinutes] = useState([]);
    const [randomRecipeImage, setRandomRecipeImage] = useState([]);
    const [randomRecipeId, setRandomRecipeId] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const viewRecipe = (e) => {
      const parentId = e.target.parentElement.id


      dispatch({ type: "SET RECIPE ID", payload: parentId })
      navigate("/recipe")
    }
  

  
    useEffect(() => {
  
      const fetchRandomRecipe = async () => {
        try {
          const url = `https://api.spoonacular.com/recipes/random/?apiKey=a321e3e0f535440fa1fa1c5d16a7b0a0`
  
          const { data } = await axios.get(url)

          const retrievedRecipes = data.recipes
          console.log(data.recipes)
          let shortRetrievedRecipes = []
          let formattedRetrievedRecipes = []

          shortRetrievedRecipes = {cheap: retrievedRecipes[0].cheap, dairyFree: retrievedRecipes[0].dairyFree, extendedIngredients: retrievedRecipes[0].extendedIngredients, glutenFree: retrievedRecipes[0].glutenFree, id: retrievedRecipes[0].id, image: retrievedRecipes[0].image, instructions: retrievedRecipes[0].instructions, pricePerServing: retrievedRecipes[0].pricePerServing, readyInMinutes: retrievedRecipes[0].readyInMinutes, servings: retrievedRecipes[0].servings, sourceUrl: retrievedRecipes[0].sourceUrl, summary: retrievedRecipes[0].summary, title: retrievedRecipes[0].title, vegan: retrievedRecipes[0].vegan, vegetarian: retrievedRecipes[0].vegetarian}
          formattedRetrievedRecipes.push({...shortRetrievedRecipes, fave: false})

          console.log(data.recipes[0])
          setRandomRecipe(formattedRetrievedRecipes[0].title)
          setRandomRecipeReadyInMinutes(formattedRetrievedRecipes[0].readyInMinutes)
          setRandomRecipeImage(formattedRetrievedRecipes[0].image)
          setRandomRecipeId(formattedRetrievedRecipes[0].id)
          dispatch({ type: "SET RANDOM RECIPE", payload: shortRetrievedRecipes})
        } catch (err) {
          console.log(err)
        }
      }
      fetchRandomRecipe()
    }, [])


  
    return (
      <div className="randomRecipe" onClick={viewRecipe} id={randomRecipeId}>
        {/* <header className="App-header"> */}
          <h1> {randomRecipe} </h1>
          <p> This cool recipe will only take {randomRecipeReadyInMinutes} minutes to be ready! </p>
          <img src={randomRecipeImage} alt="" />
        {/* </header> */}
      </div>
    );
  }
  
  export default RandomRecipe;
