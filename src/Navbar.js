import React from "react";

import {  Link } from "react-router-dom";
import logoimg from './images/logoimg.jpg';
//import Home from "./pages/Home";
const Navbar=()=>
{
    return(
         <>
  <nav>
   <div className="navbar" >
   
    <li className="list">
     <img className="nav-brandlogo" src={logoimg} alt="logoicon"/>
    
    </li>
    <li>
      <Link to="/Home">Home</Link>
    </li>
    <li>
      <Link to="/Myaccount">Myaccount</Link>
    </li>
    <li>
      <Link to="/News">News</Link>
    </li>
    <li>
      <Link to="/Logout">Logout</Link>
    </li>
    </div>
  </nav>
               

           </>




)
}
export default Navbar;