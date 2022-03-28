import React, { useContext, useState } from "react";
import './App.css';
//import Home from "./Home";

import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Myaccount from "./pages/Myaccount";
import News from "./pages/News";
import Logout from "./pages/Logout";
import Errorpage from "./404";
import { Redirect } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
//import { GlobalInfo } from "./Login";
function App() {
     const[adminaccess,setAdminaccess]=useState();
   // const[access,setaccess]=useState(true);
    const [isLogged,setisLogged]=useState();
   // const {isLogged}=useContext(GlobalInfo);
    const [user,setUser]=useState(
     {
       
       username: "",
       email:"" ,
      
       
      
       
     }
    )
     
       
  return (
    <div className="App" >
     
      
     
      
       <Router>
        
      
       <Routes>
        <Route exact path='/'  element={<Login setisLogged={setisLogged} setAdminaccess={setAdminaccess} setUser={setUser} />} />
        <Route exact path='/Signup'  element={<Signup/>} />

        
        
       
        
        <Route element={<PrivateRoute isLogged={isLogged}/>}>
        <Route exact path='/Home'  element={<Home  username={user.username}    />} /> 
        
        <Route  exact path='/Myaccount' element={<Myaccount  username={user.username} email={user.email} />} /> 
        <Route  exact path='/News' element={<News adminaccess={adminaccess}  />} /> 
        <Route path='/Logout' element={<Logout/>} /> 
        </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
/**<Routes>
      <Route exact path='/'  element={<Login/>} />

      {isAuth ? <Route path="/protected" component={ProtectedPage} /> : null}
       </Routes> */
