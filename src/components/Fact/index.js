import React, { useEffect, useState } from "react";
import axios from 'axios';

  function Fact() {
    const [fact, setFact] = useState([]);
  
    useEffect(() => {
  
      const fetchFact = async () => {
        try {
          const url = `https://api.spoonacular.com/food/trivia/random/?apiKey=04620651d46d430daf947c06e19ebe95`
  
          const { data } = await axios.get(url)
          console.log(data.text)
          setFact(data.text)
        } catch (err) {
          console.log(err)
        }
      }
      fetchFact()
    }, [])


  
    return (
      <div className="fact">
        {/* <header className="App-header"> */}
          <p> {fact} </p>
        {/* </header> */}
      </div>
    );
  }
  
  export default Fact;
