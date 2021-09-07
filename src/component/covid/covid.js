import React, { useEffect, useState } from "react";
import "./style.css";
import Ty from "./tab.js";

const Covid=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        getCovidData();
    },[]);

    const getCovidData=async function(){
        try{
        const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const data1 = await res.json();
        setdata(data1);
        console.log(data1.UP.delta);
    }
    catch(err){
        console.log(err);
    }
}
const responsedata= async function(){
    console.log(data);
}
    return (
        <>
        <h1 className="tag1" align="center">🔴Live</h1>
        <h1 className="tag1" align="center">Covid-19 Variants Tracker</h1>
        {/* <form align="center">
        <input className="input1" align="center" type="text"></input>
        <input type="submit" align="center" onClick={()=>{
        console.log(data)}}></input>
        
        </form> */}
        <Ty/>
        <Ty/>
        <Ty/>
        <Ty/>
        <Ty/>
        <Ty/>
        </>
    );
};
export default Covid;