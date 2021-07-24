import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';


const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/dash">Dashboard</Link>
      <Link to="/about">About Us</Link>
      <Link to="/settings">Settings</Link>

    </div>
  );
}

export default Nav;