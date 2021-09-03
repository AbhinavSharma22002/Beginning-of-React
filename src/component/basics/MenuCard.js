import React from 'react';

const MenuCard =({x}) =>{
    return( 
        <>
        {x.map((cur)=>{
            return (
            <>   
        <div className="card-container col-lg-1 col-sm-1" key={cur.id}>
           <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{cur.id}</span>
                <div/>
                <span className="card-author subtle">{cur.name}</span>
                <h2 className="card-title subtle">{cur.category}</h2>
                {/* <p className="card-description subtle">I love Maggi really oo yues Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in. 
                </p>*/}
                <p className="card-description subtle">{cur.description}</p>
                <div>
                    {/* { <img src={cur.image} alt="images" className="card-media"></img>} */}
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </div>
    </div>
    </>
            );

        })}
        </>
     );
};

export default MenuCard;