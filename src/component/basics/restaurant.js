import React, { useState } from "react";
import "./style.css";
import Menu from "./menu.js";
import MenuCard from "./MenuCard.js";
const Restaurant=() =>{
    const [MenuData,setmenuData] = React.useState(Menu);
    const filterItem=(category)=>{
        const updatedList= Menu.filter((cur)=>{
            return cur.category=== category;
        });
        setmenuData(updatedList);
       };
    return(
        <>
        <nav className="navbar">
            <div className="btn-group" align="center">
                <button className="btn-group__item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick={()=>filterItem("Lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={()=>filterItem("Evening")}>Evening</button>
                <button className="btn-group__item" onClick={()=>filterItem("Dinner")}>Dinner</button>
                <button className="btn-group__item" onClick={()=>setmenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard x={MenuData}/>
        </>
    );
};

export default Restaurant;