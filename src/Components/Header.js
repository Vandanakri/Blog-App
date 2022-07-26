import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return(
 
      <header className="header">
         <div className="container flex">
      
            <NavLink className="conduit"to="/">conduit</NavLink>
        <nav>
        <ul className="flex">
          <li >
            <NavLink className="home" to="/" exact>
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink className="signup" to="/signup">
              Sign up
            </NavLink>
          </li>

          <li >
            <NavLink className="signup" to="/login">
             Sign in
            </NavLink>
          </li>
        </ul>
        </nav>
      
    </div>
    </header>
  );
}
