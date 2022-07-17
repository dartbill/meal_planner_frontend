import React, { useEffect, useState } from "react";
import axios from 'axios';

  function RandomRecipe() {
    const [randomRecipe, setRandomRecipe] = useState([]);
    const [randomRecipeInstructions, setRandomRecipeInstructions] = useState([]);
  
    useEffect(() => {
  
      const fetchRandomRecipe = async () => {
        try {
          const url = `https://api.spoonacular.com/recipes/random/?apiKey=04620651d46d430daf947c06e19ebe95`
  
          const { data } = await axios.get(url)
          console.log(data.recipes[0])
          setRandomRecipe(data.recipes[0].title)
          setRandomRecipeInstructions(data.recipes[0].instructions)
        } catch (err) {
          console.log(err)
        }
      }
      fetchRandomRecipe()
    }, [])


  
    return (
      <div className="randomRecipe">
        {/* <header className="App-header"> */}
          <p> {randomRecipe} </p>
          <p> {randomRecipeInstructions} </p>
        {/* </header> */}
      </div>
    );
  }
  
  export default RandomRecipe;
