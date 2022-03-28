import React,{useState} from "react";
import Navbar from "../Navbar";
import Newscard from "../Newscard";
import Addnewsmodal from "../Addnewsmodal";
import Newscomponent from "../Newscomponent";
const News=(props)=>
{
    const [isopen,setvalue]=useState(false);
    //const[sno,setSno]=useState();




    const onDelete=(news)=>
    {
       console.log("delete me called");
  
       setNews(newslist.filter((e)=>{
          return e!==news;
  
       }));
          //localStorage.getItem("todos");
    }









    const addnews=(title,desc,category,timestamp)=>
    {     
         
          let  sno;
           
      if(newslist.length==0)
           {  sno=1;   
            //setSno(1); 
          }
           else{
             sno=[newslist.length].sno +1;
           //  setSno([newslist.length].sno +1);
            //setSno(4);
           }
           const myNews =
           {
               sno: sno,
               title: title,
               desc: desc,
               category:category,
               publishdate: timestamp
            
           }
           setNews([...newslist,myNews]);
  
    }
  
  const [newslist,setNews]=useState([
       {
           sno:1,
           title:"war in russia",
           desc:"It is just under a month since Russia declared a unilaterally-waged war on Ukraine on land and by air.  ",
           category:"International",
           publishdate: "1648024710338"
           
      },
      {
        sno:2,
        title:"ipl2022",
        desc:"IPL 2022 Auction Date and Time, Retained & Released Players List · Also Check:.",
        category:"Sports",
        publishdate: "1648024710338"
       },
    {
      sno:3,
      title:"react js 2022",
      desc:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
      category:"Technology",
      publishdate: "1648024710338"
      
     }
    ])









 

















    return(
         <>
            <Navbar/>
           <div className="">
              <Newscomponent  newslist={newslist}   adminaccess={props.adminaccess} onDelete={onDelete}    />
          
            </div>
            { props.adminaccess?(<>
            <div><button className="addnewsbutton newsbuttons" onClick={()=>setvalue(true)}>AddNews</button></div>
           
           <div>
            <Addnewsmodal  addnews={addnews}      open={isopen} onclose={()=>setvalue(false)}/>
        
          
           </div></>)
           :("")
           }

           
         </>




)
}
export default News;