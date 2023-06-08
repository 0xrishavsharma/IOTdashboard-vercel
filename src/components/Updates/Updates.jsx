import "./Updates.scss";
import React from 'react';
import { updatesData } from "../../data/data";

const Updates = () => {
  return (
    <div className="updates">
        <div className="inner">
            {
                updatesData.map((data)=>{
                    return(
                        <div className="update">
                            <img src={data.image} alt="" />
                            <div className="updateInner">
                                <div>
                                    <span><b>{data.name} </b></span>
                                    <span>{data.notification}</span>
                                </div> 
                                <span> {data.time} </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Updates