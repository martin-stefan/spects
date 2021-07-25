import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return(

    <div className="landing">

      <h1 className="welcome">Welcome to spects.io</h1>

      <div className="demo">
        <p className="demo__placeholder">
          here is where there will be a video once the site is ready
        </p>
      </div>

      <p className="landing__desc">
        here is some filler text regarding what the site is about and 
        here is some more information that you can look at to 
        see if you would be interested in using it. 
      </p>
      
      <Link className="btn signup" to="/signup">
        Sign Up
      </Link>
      
    </div>
    
  );
}

export default Landing;