import './App.css';
import React, { Children, useState } from "react";
import logoimg from './images/logoimg.jpg';
import  email from './images/email.jpg';
import  pass from './images/pass.png';
import {  Link  } from "react-router-dom";
//import Home from './pages/Home';
//import { Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import App from './App';
//import { createContext } from 'react';


//export const GlobalInfo=createContext();
const Login=({setisLogged,setAdminaccess,setUser})=>
{
  //const [isLogged,setisLogged]=useState(false);    
  const navigate = useNavigate();
   const[loginusername,setLoginusername]=useState("");
  const[loginpassword,setLoginpassword]=useState("");

  
  const[flag,setFlag]=useState(false);
 // const[home,setHome]=useState(true);
  //const[usertype,setUsertype]=useState("");
 // const[adminaccess,setAdminaccess]=useState(false);
  const[loginaccess,setLoginaccess]=useState(false);


  {
  localStorage.setItem("userEmail",JSON.stringify("piyush@gmail.com"));
  localStorage.setItem("userMobileno",JSON.stringify(8999));
  localStorage.setItem("userUsername",JSON.stringify("piyush"));
  localStorage.setItem("userPassword",JSON.stringify("piyush99"));



  localStorage.setItem("adminEmail",JSON.stringify("admin@gmail.com"));
  localStorage.setItem("adminMobileno",JSON.stringify(7999));
  localStorage.setItem("adminUsername",JSON.stringify("admin"));
  localStorage.setItem("adminPassword",JSON.stringify("admin99"));

  }
           







    function handleLogin(e)
    {

      e.preventDefault();
      let userusername =localStorage.getItem("userUsername").replace(/"/g,"");
      let userpassword =localStorage.getItem("userPassword").replace(/"/g,"");
      let useremail =localStorage.getItem("userEmail").replace(/"/g,"");

      let adminusername =localStorage.getItem("adminUsername").replace(/"/g,"");
      let adminpassword =localStorage.getItem("adminPassword").replace(/"/g,"");
      let adminemail =localStorage.getItem("adminEmail").replace(/"/g,"");



       if( loginusername == userusername && loginpassword == userpassword )
         {
          //setHome(!home);
         
          setFlag(false);
          setAdminaccess(false);
         // console.log(adminaccess);
          setisLogged(true);
          setUser({username:userusername, email:useremail})
                                   //return
           navigate ('/home');

           
         }
         else if(loginusername == adminusername && loginpassword == adminpassword )
         {
         // setHome(!home);
        
          setFlag(false);
          setAdminaccess(true);
          setisLogged(true);
          setUser({username:adminusername, email:adminemail})
         // console.log(adminaccess);
          navigate('/home' );
                 

         }
         else
         {
          setFlag(true);
          setLoginaccess(false);
          setisLogged(false);
          setAdminaccess(false);
         }

        }






      /*if (!loginusername || !loginpassword )<GlobalInfo.Provider/><GlobalInfo.Provider value={{isLogged:isLogged}} 
      {
             setFlag(true);
             console.log("empty");


      }
      else if(loginusername !== username  ||  loginpassword !==password)
      {
              setFlag(true);
      }
      else{

        setHome(!home);
        setFlag(false);
      }

    }*/





   /*const [users,setUsers]=useState([
     user[{
        id:1,
        username1: "Piyushsharma",
        email:"piyush@gmail.com" ,
        mobileno:34343343,
        admin:false,
        password:"piyush99"
        
    }],
    admin[{
       id:2,
       username2: "admin",
       email:"admin@gmail.com" ,
       mobileno:88888,
       admin:true,
       password:"admin99"

     
     }]
 
 ])

   /*const checkauthstatus=()=>
   {

     console.log("checkauthstatus called");

   }
   */





















    return(
         <>
         
          <div className="Main" >
             <div className="Sub-main">
          <div className="header" >
                <div className="logo" >
                  <img className="logoimg" src={logoimg} alt="logo"/>
                </div>
          </div>

           <div>
           <form onSubmit={handleLogin}>
           <h1 className="heading">Login Page</h1>
           <div className="first-input">
             <img src={email} alt="email" className="imginput"/>
             <label htmlFor="username"> </label>
             <input type="text" placeholder="user name" className="input"
               name="username" value={loginusername}
               onChange={(e)=>{setLoginusername(e.target.value)}}
             ></input>
           </div>
           <br></br>
           <div className="second-input">
             <img src={pass} alt="pass" className="imginput"/>
             <input type="password" placeholder="password" className="input" 
             name="password"  value={loginpassword}
             onChange={(e)=>{setLoginpassword(e.target.value)}}
             />
           </div>
           <br></br>
           <div >
           <button type="submit" className="loginbutton" >Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">  <Link to="/Signup"><span className="signuplink">Sign Up</span></Link></a>
            </p>

            {flag &&(
                alert("Please fill correct Info")
              
               )}
               


           
            </form>
           </div>
       
            </div>

            </div> 
            
            
         </>




        )










}

export default Login;
/*):(<Home loginusername={loginusername}  adminaccess={adminaccess} />)} */