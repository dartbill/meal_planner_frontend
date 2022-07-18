import React from "react";
// import ReactDOM from 'react-dom/client';
import { Joke } from '../../components';
import { Fact } from '../../components';
import { RandomRecipe } from '../../components';






const Homepage = () => {

  return (
    <section id='homepage'>
      <h5>Name</h5>
      <h2>logo</h2>

      <a href="Register" className='btn btn-primary'> Register</a>

      <div className="container about__container">
        <div className="recipe_of_the_day">
          < RandomRecipe />
        </div>

        <div className="hompage__content">
          <div className="homepage__cards">

            <article className="about__card">
              <h5>Joke of the Day</h5>
              < Joke />
              <h5>Fact of the Day</h5>
              < Fact />
            </article>
          </div>
        </div>

      </div>
    </section>
  )

};



export default Homepage;
