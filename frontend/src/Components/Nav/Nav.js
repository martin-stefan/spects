import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';


const Nav = () => {
  return (
    <div className="nav">
      {/* will have to change root route, 
        returning users do not need landing page */}
      <Link to="/">Home</Link>
      <Link to="/dash">Dashboard</Link>
      <Link to="/market">Marketplace</Link>
      <Link to="/settings">Settings</Link>
  

    </div>
  );
}

export default Nav;