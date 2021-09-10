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
        console.log(data2);
    }
    catch(err){
        console.log(err);
    }
}

const changed=()=>{
    var text_upper=district.toUpperCase();
    if(text_upper===""){
    return(<Ty dat={data.UP}/>);
    }
    else{
            if(text_upper==="UTTAR PRADESH") return(<Ty dat={data.UP}/>);
            else if(text_upper==="BIHAR")return(<Ty dat={data.BR}/>);
            else if(text_upper==="DELHI")return(<Ty dat={data.DL}/>);
            else if(text_upper==="ASSAM")return(<Ty dat={data.AS}/>);
            else if(text_upper==="GUJRAT")return(<Ty dat={data.GJ}/>);
            else if(text_upper==="HARYANA")return(<Ty dat={data.HR}/>);
            else if(text_upper==="MAHARASHTRA")return(<Ty dat={data.MH}/>);
            else if(text_upper==="MADHYA PRADESH")return(<Ty dat={data.MP}/>);
            else if(text_upper==="PUNJAB")return(<Ty dat={data.PB}/>);
            else if(text_upper==="RAJASTHAN")return(<Ty dat={data.RJ}/>);
            else if(text_upper==="UTTARAKHAND")return(<Ty dat={data.UT}/>);
            else if(text_upper==="WEST BENGAL")return(<Ty dat={data.WB}/>);
    
    }
}
const handlesubmit=(event)=>{
}
const handlechange=(event)=>{
    setdistrict(event.target.value);
}


    return (
        <>
        <h1 className="tag1" align="center">🔴Live</h1>
        <h1 className="tag1" align="center">Covid-19 Variants Tracker</h1>
        <form>
            <center><input type="text" width="50px" color="grey" className="input1" value={district} onChange={handlechange}></input></center>
        </form>
        {changed()};
        
        </>
    );
};
export default Covid;