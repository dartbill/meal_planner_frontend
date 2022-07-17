import React, { useEffect, useState } from "react";
import axios from 'axios';

  function Joke() {
    const [joke, setJoke] = useState([]);
  
    useEffect(() => {
  
      const fetchJoke = async () => {
        try {
          const url = `https://api.spoonacular.com/food/jokes/random/?apiKey=04620651d46d430daf947c06e19ebe95`
  
          const { data } = await axios.get(url)
          console.log(data.text)
          setJoke(data.text)
        } catch (err) {
          console.log(err)
        }
      }
      fetchJoke()
    }, [])


  
    return (
      <div className="joke">
        {/* <header className="App-header"> */}
          <p> {joke} </p>
        {/* </header> */}
      </div>
    );
  }
  
  export default Joke;
