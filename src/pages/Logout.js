import React from "react";
import Login from "../Login";
import Navbar from "../Navbar";
import {  Link } from "react-router-dom";

const Logout=()=>
{    
    


    return(
         <>
         <Navbar/>
         <div className="logoutbox">
         <div><p >Want to Logout?</p></div>
         <br></br>
         <button className="newsbuttons"> <Link to="/"><span className="logoutbuttonlink">Yes</span></Link></button>
         </div>
         </>




)
}
export default Logout;