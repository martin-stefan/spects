import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as HomeSVG } from '../../svg/home.svg';
import {ReactComponent as MarketSVG } from '../../svg/market.svg';
import {ReactComponent as SettingsSVG } from '../../svg/settings.svg';



import './Nav.scss';


const navLogged = () => {
  return (
    <div className="nav">

      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="nav__item">
          <HomeSVG className="nav__item--svg"/>
          <div className="nav__item--block">
            <p className="nav__item--title">Dashboard</p>
          </div>
        </div>
      </Link>

      <Link to="/market" style={{ textDecoration: 'none' }}>
        <div className="nav__item">
          <MarketSVG className="nav__item--svg"/>
          <div className="nav__item--block">
            <p className="nav__item--title">Marketplace</p>
          </div>
        </div>
      </Link>

      <Link to="/settings" style={{ textDecoration: 'none' }}>
        <div className="nav__item">
          <SettingsSVG className="nav__item--svg"/>
          <div className="nav__item--block">
            <p className="nav__item--title">Settings</p>
          </div>
        </div>
      </Link>

        {/* <div className="spacer">

        </div>
   */}

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
  if (props.logged) {
    return navLogged();
  } else {
    return navOut();
  }
}

export default Nav;