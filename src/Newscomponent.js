import React from "react";
import Newscard  from "./Newscard";
const Newscomponent = ({newslist,adminaccess,onDelete})=>
{
  return (
        <>
        <div className="superflex">
          <h3 className="newslisttitle">  NewsList</h3>
          
             <div className="container ">{/*flexbox */}
            
             
             {newslist.length===0?"NO newslist to display (:":
              newslist.map((news)=>
             {


                

                  console.log(news.sno);

             return (
                
                 <div className="carddiv">
                 <Newscard news={news}  key={news.sno} adminaccess={adminaccess} onDelete={onDelete}/>
                 </div>
                 
                
                 
             )
             }
             
             
             )}
             
          </div>

          </div>
        </>



  )



}
export default Newscomponent;
/*
    ((news.sno) % 3===0) ?
    <div className="carddiv">
   <Newscard news={news}  key={news.sno}/>
    </div>
*/
//