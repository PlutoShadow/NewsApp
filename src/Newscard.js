import React, { useState } from "react";
import profileimage from "./images/profileimage.png";

const Newscard=({news,adminaccess,onDelete})=>
{   
     const [count,setCount]=useState();
  
    return(
         <>   
             <div className="card" >
                <img className="card-img-top" src={profileimage} alt="Card image cap"/>
                  <div className="cardbody">
                  <div className="cardtitle"><b>{news.title}</b></div>
                  <div className="cardcategory"><b style={{color:"pink"}}>{news.category}
                  </b></div>

                   <div className="cardtext">{news.desc}</div>
                   
                   
                   
                   { adminaccess?(<>
                   <button className="deletebutton"  onClick={()=>{onDelete(news)}}>Delete</button>
                   </>)
                   :("")
                   }
                 
                 </div>
                </div>



           
         </>




)
}
export default Newscard;