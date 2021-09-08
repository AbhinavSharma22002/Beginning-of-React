import React, { useEffect, useState } from "react";
import "./style.css";
import Ty from "./tab.js";

const Covid=()=>{
    useEffect(()=>{
        getCovidData();
    },[]);
    const [data,setdata]=useState([]);
    const [district,setdistrict]=useState("");

    const getCovidData=async function(){
        try{
        const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const data2 = await res.json();
        setdata(data2);
    }
    catch(err){
        console.log(err);
    }
}

const handlesubmit=(event)=>{
    textcheck(district);
}
const handlechange=(event)=>{
    setdistrict(event.target.value);
}

const textcheck=(a)=>{
    if(a==="Uttar Pradesh"){ setdata(data.UP); return;}
    else if(a==="Bihar"){setdata(data.BR); return;}
    else if(a==="Delhi"){setdata(data.DL); return;}
    else if(a==="Assam"){setdata(data.AS); return;}
    else if(a==="Gujrat"){setdata(data.GJ); return;}
    else if(a==="Haryana"){setdata(data.HR); return;}
    else if(a==="Maharashtra"){setdata(data.MH); return;}
    else if(a==="Madhya Pradesh"){setdata(data.MP); return;}
    else if(a==="Punjab"){setdata(data.PB); return;}
    else if(a==="Rajhasthan"){setdata(data.RJ); return;}
    else if(a==="Uttarakhand"){setdata(data.UT); return;}
    else if(a==="West Bengal"){setdata(data.WB); return;}
    else {return;}
}

const texthy=()=>{
    if(data===undefined){
        setdata(data.UP);
        console.log(data);
    }
    else{
    textcheck(district);
    }
}
    return (
        <>
        <h1 className="tag1" align="center">🔴Live</h1>
        <h1 className="tag1" align="center">Covid-19 Variants Tracker</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" width="50px" align="center" color="grey" className="input1" value={district} onChange={handlechange}></input>
            <input type="submit" value="Submit"></input>
        </form>
        {texthy()}
        <Ty dat={data}/>
        </>
    );
};
export default Covid;