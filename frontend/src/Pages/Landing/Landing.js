import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Landing = () => {
  return(
    <div className="landing">

 
      <div className="landing__header">
        <h1 className="welcome">
          <Typical
            steps={[' Welcome to spects.io']}
            loop={1}
            wrapper="h1"
          />
        </h1>


        <a href="#landing__content" className="welcome__btn">Learn More</a>
      </div>

      <div className="landing__content" id="landing__content">
        <div className="demo">
            <p className="demo__placeholder">
              here is where there will be a video once the site is ready
            </p>
          </div>

  
        <div className="landing__item">
          <h1 className="landing__desc--title">What is spects?</h1>
          <p className="landing__desc">
            Spects is a tool that allows you to track your progress through many different
            activities.
          </p>
        </div>

        <div className="landing__item">
          <h1 className="landing__desc--title">Why use it?</h1>
          <p className="landing__desc">
            Maybe you, like me, have found that it is difficult to remember due dates, figure 
            out a time to do things, or know how much you have left to do this week. 
          </p>
        </div>

        <div className="landing__item">
          <h1 className="landing__desc--title">How do I use it?</h1>
          <p className="landing__desc">
            The first step is to create an account, after that, there will be a tutorial to guide
            you through the steps of organizing your tasks. 
          </p>
        </div>

        
        
        
        <div className="landing__item">
          <h1 className="landing__desc--title">Ready to start?</h1>
          <p className="landing__desc">
            Click the button below to create your account. 
          </p>
        </div>

        <Link className="btn signup" to="/signup">
          Sign Up
        </Link>
      
      </div>
    </div>
  );
}

export default Landing;