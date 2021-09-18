import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';


const navLogged = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/dash">Dashboard</Link>
      <Link to="/market">Marketplace</Link>
      <Link to="/settings">Settings</Link>
  

    </div>
  )
}

const navOut = () => {
  return (
    <div className="nav">
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}
const Nav = (props) => {
  if (props.loggedIn) {
    return navLogged();
  } else {
    return navOut();
  }
}

export default Nav;