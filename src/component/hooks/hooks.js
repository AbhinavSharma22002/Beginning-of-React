import React, { useEffect, useState } from "react";
import "./style.css";

const UseState=()=>{
    const [num,setNum]= useState(0);
    useEffect(()=>{
             document.title="chats"+"("+num+")";
    },[num]);
    return(
        <>
        <div className="back" align="center">
            <span className="span1">{num}</span>
        </div>
        <div className="span3" align="center">
        <span className="span2" onClick={()=>setNum(num+1)}>INCR</span>
        <span className="span6"></span>
        <span className="span4" onClick={()=> num>0?setNum(num-1):num}>DCRE</span>
        </div>
        </>
    );
};

export default UseState;