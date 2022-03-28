import './App.css';
import React, { useState } from "react";
import logoimg from './images/logoimg.jpg';
import  emailimg from './images/email.jpg';
import  pass from './images/pass.png';
import {  Link } from "react-router-dom";
import Login from './Login';

//import {Alert} from "react-bootstrap";

const Signup=()=>
{

    const[username,setUsername]=useState("");
    const[mobileno,setMobileno]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const[flag,setFlag]=useState(false);
    const[login,setLogin]=useState(true);
     

     function handleSumbit(e)
     {
        e.preventDefault();
        if (!username || !mobileno || !email || !password)
         {
                setFlag(true);


         }
         else
         {
          setFlag(false);
          localStorage.setItem("Email",JSON.stringify("sdsdsd@g.com"));
          localStorage.setItem("Mobileno",JSON.stringify(8999));
          localStorage.setItem("Username",JSON.stringify(username));
          localStorage.setItem("Password",JSON.stringify(password));

          console.log("saved in local storage");
          setLogin(!login);
         }

     }






    return(
         <>
           {login ? (
          <div className="Main" >
             <div className="Sub-main" style={{height:600}}>
          <div className="header" >
                <div className="logo" >
                  <img className="logoimg" src={logoimg} alt="logo" style={{height:80,width:80}}/>
                </div>
          </div>
      
           <div>
           <form onSubmit={handleSumbit}>
           <h1 className="heading">Signup Page</h1>
           <div className="first-input">
             
             <label htmlFor="username"> </label>
             <input type="text" placeholder="user name" className="input"
               name="username" value={username}
               onChange={(e)=>{setUsername(e.target.value)}}
             ></input>
           </div>
           <br></br>
           <div className="second-input">
              <input type="number" placeholder="mobileno" className="input"
               name="mobileno" value={mobileno}
               onChange={(e)=>{setMobileno(e.target.value)}}
             ></input>
           </div>
           <br></br>
           <div className="thrid-input">
             <img src={emailimg} alt="email" className="imginput"/>
             <label htmlFor="username"> </label>
             <input type="email" placeholder="email" className="input"
               name="email" value={email}
               onChange={(e)=>{setEmail(e.target.value)}}
             ></input>
           </div>
           <br></br>
           



           <div className="forth-input">
             <img src={pass} alt="pass" className="imginput"/>
             <input type="password" placeholder="password" className="input" 
             name="password"  value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
             />
           </div>
           <br></br>
           
           <div className="signup-button">
           <button type="submit" className="newsbuttons">Signup</button>
          </div>
          <br></br>
            <p className="link">
              Have a account already? <a href="#">  <Link to="/"><span className="signinlink">Sign In</span></Link></a>
            </p>


               {flag &&(
                alert("please fill every field")
               )}


           
            </form>
           </div>
       
            </div>

            </div>
            ):(  <Login/>      )}

         </>




        )










}
export default Signup;
/*<div className="five-input">
             <img src={pass} alt="pass" className="imginput"/>
             <input type="password" placeholder="confirm password" className="input" 
             name=" confirm password"  value=""
             />
           </div>
           <br></br> 

            <Alert color="primary" variant ="danger">
                 please fill every field
                 </Alert>
*/