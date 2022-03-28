import React from "react";
import profileimage from "../images/profileimage.png";
import piyushimage from "../images/piyushimage.jpg";
import Navbar from "../Navbar";

const Myaccount=({username,email})=>
{    
    return(
         <>
         <Navbar/>
           <div className="profile">
            {(username=="admin")?(<img src={piyushimage} alt="profile_image" className="profile_image"/>)
            : (<img src={profileimage} alt="profile_image" className="profile_image"/>)
            }
            
             <div className="profile_name">{username}</div>
             <br></br>
             <div className="profile_email">{email}</div>
             <br></br>
            
             <div className="">
             <button type="button" class="btn btn-primary">Settings</button>  
             </div>
             <br></br>
             <div className="">
             <button type="button" class="btn btn-primary">Invite friends</button>  
             </div>
             <br></br>
             <div className="">
             <button type="button" class="btn btn-primary">Subscription</button>  
             </div>
             <br></br>
             


         </div>
         </>




)
}
export default Myaccount;
/* <div className="profile_mobileno">{props.mobileno}</div>
             <br></br> */