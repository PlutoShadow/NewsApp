import React from "react";
import ReactDOM from 'react-dom';

import { useState } from 'react';








const Addnewsmodal =({open,onclose,addnews})=>
{
    


    const[title,setTitle]=useState("");
     const[desc,setDesc]=useState("");
     const[category,setCategory]=useState("");
     
     const timestamp = Date.now(); 


     //const[value,setValue]=useState(false);
      if(!open ) return null;
      console.log("modal open");
      
      const submit=(e)=>
      { e.preventDefault();
         if(!title || !desc)
         {
             alert("Title or Description cannot be blank");
         }
         else{
          addnews(title,desc,category,timestamp);//////
          }
        }
      
   


    return ReactDOM.createPortal(
        <>
        <div className="mybackmodal">
        <div className="mymodal" >
        <button className="closebutton" onClick={onclose}>
             
          close
        </button>
         <p>
         <form className="addform" onSubmit={submit}>
                    <div className="newstitlebox addnewsinput">
                   <div> <label htmlFor="title" class="title" style={{color:"violet"}}>NewsTitle<br/></label></div>
                    <input type="text" value={title} 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    class="inputnewsmodal" id="inputnewsmodal" name="title"/>
                   
                  </div>
                   <div className="newsdescbox addnewsinput">
                   <div><label htmlFor="desc" class="desc" style={{color:"violet"}}>News Description</label></div>
                    <textarea type="desc" value={desc} 
                     onChange={(e)=>{setDesc(e.target.value)}}
                    
                    class="newsdesc inputnewsmodal" id="desc" rows="4" cols="40" placeholder="describe here">
                     

                   </textarea>
                  </div>
                  <div className="newscategory addnewsinput">
                <div> <label htmlFor="category" class="category " style={{color:"violet"}}>NewsCategory<br></br></label></div>
                    <input type="text" value={category} 
                    onChange={(e)=>{setCategory(e.target.value)}}
                    class="category inputnewsmodal" name="category"/>
                  </div>
                  <br></br>
                  <button type="submit"  className="newsbuttons addnewsinput newsaddmodalbutton" >ADD</button>
                    </form>



         </p>
        
        </div>
        </div>
         
        </>,
            document.getElementById("root")
      );




}
export default Addnewsmodal;
