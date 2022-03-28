import React, { useState } from "react";
import Navbar from "../Navbar";
//import { BrowserRouter as Router, Switch, Route ,Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom'

const Home=({username})=>
{
     //const [name,setName]=useState(loginusername);
      let loginaccess=true;  

    //    if (!loginaccess)
    //    {
    //        return <Navigate to="/"  />;
    //    }



      return(
         <>

            
          <Navbar/>
          <div><p> <h5 className="homehead"> Welcome <b>{username}</b> </h5> </p></div>
          <div className="backmodal">
          <div className="modal" >
        
           <button className="closebutton" >
             
          close
           </button>
           
         
        
        </div>
        </div>
         
             



         </>




)
}
export default Home;