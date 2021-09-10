import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../style/navbar.css";


const MenuItem = ({ label, path }) => (
  <NavLink
    className='nav-link'
    activeClassName='selected-nav-link'
    to={path}
    exact
  >
    <p>{label}</p>
    <div />
  </NavLink>
);

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='' />

      <div className='navigations'>
        <MenuItem path='/' label='Home' />
        <MenuItem path='/search' label='Home' />
        <MenuItem path='/search' label='Home' />
        <MenuItem path='/search' label='Home' />
      </div>
    </div>
  );
};

export default Navbar;
