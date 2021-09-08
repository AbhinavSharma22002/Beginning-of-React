import React from "react";
import "./style.css";

const Ty=({dat})=>{
    const dat1= [dat];
    const ent= Object.entries(dat1);
    if(dat === undefined){
        console.log("Error In Processing Data");
        return(<></>);
    }
    else{
        const keys = Object.keys(ent[0][1].total);
        const val = Object.values(ent[0][1].total);
     return( 
        <>
        {ent.map((cur)=>{
            return (
            <>   
        <div className="card-container col-lg-1 col-sm-1 t1">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[0]}</b></h2>
                        <div className="main-data">
                            {val[0]}
                        </div>
                    </div>
                </div>
            </div>

            
        <div className="card-container col-lg-1 col-sm-1 t2">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[1]}</b></h2>
                        <div className="main-data">
                        {val[1]}
                        </div>
                    </div>
                </div>
            </div>

            
        <div className="card-container col-lg-1 col-sm-1 t3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[2]}</b></h2>
                        <div className="main-data">{val[2]}
                        </div>
                    </div>
                </div>
            </div>

            
        <div className="card-container col-lg-1 col-sm-1 t4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[3]}</b></h2>
                        <div className="main-data">{val[3]}
                        </div>
                    </div>
                </div>
            </div>

            
        <div className="card-container col-lg-1 col-sm-1 t5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[4]}</b></h2>
                        <div className="main-data">{val[4]}
                        </div>
                    </div>
                </div>
            </div>

            
        <div className="card-container col-lg-1 col-sm-1 t6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title subtle" align="center"><b>{keys[5]}</b></h2>
                        <div className="main-data">{val[5]}
                        </div>
                    </div>
                </div>
            </div>

            
            </>
            );

        })}
        </>
     );
    }
        
    };


export default Ty;