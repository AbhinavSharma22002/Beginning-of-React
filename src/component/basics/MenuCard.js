import React from 'react';

const MenuCard =({x}) =>{
    return( 
        <>
        {x.map((cur)=>{
            return (
            <>   
        <div className="card-container col-lg-1 col-sm-1" key={cur.id}>
            <div className="card-body">
                <span className="card-number card-circle subtle">{cur.id}</span>
                <div/>
                <span className="card-author subtle">{cur.name}</span>
                <h2 className="card-title subtle">{cur.category}</h2>
                <p className="card-description subtle">{cur.description}</p>
                <div>
                      <img src={cur.image} className="card-media subtle"></img>
                      <br />
                    <span className="card-tag subtle">Order Now</span>
                </div>
                <br/>
            </div>
    </div>
    </>
            );

        })}
        </>
     );
};

export default MenuCard;