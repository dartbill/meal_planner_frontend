import React from "react";
// import ReactDOM from 'react-dom/client';
import { Joke } from '../../components';
import { Fact } from '../../components';
import { RandomRecipe } from '../../components';


const Homepage = () => {
  <h1>gfg</h1>

    return (
        <section id='about'>
          <h5>Name</h5>
          <h2>logo</h2>

          <a href="Login" className='btn btn-primary'>Login </a>
              or
            <a href="#contact" className='btn btn-primary'> Register</a>
    
          <div className="container about__container">
            <div className="recipe_of_the_day">
              <div className="recipe_of_the_day-image">
                {/* <img src={recipe} alt="recipe_of_the_day Image" /> */}
                < RandomRecipe />
              </div>
            </div>
    
            <div className="about__content">
              <div className="about__cards">
              <article className="about__card">
                  <h5>Sign Up or Login</h5>
              </article>
                
                <article className="about__card">
                  {/* <GiOilPump className='about__icon'/> */}
                  <h5>Joke of the Day API</h5>
                  {/* < Joke /> */}
                  <h5>Fact of the Day</h5>
                  {/* < Fact /> */}
                </article>
                
              </div>
       
    
      
            </div>
          </div>
        </section>
      )

};



export default Homepage;
