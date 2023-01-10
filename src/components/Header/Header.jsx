import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://i3.stat01.com/2/6979/169786245/075a3e/32-png.png" alt=''></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}> Login</NavLink>}

      </div>
    </header>
  );
};
export default Header;
