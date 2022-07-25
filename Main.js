import React from "react";
import "./style.css";

const Main = ({ input }) => {
  return (
    <>
       <div className="conatiner">
        {input.map((curElm, index) => {
          return (
            
            <div className="img" key ={index}>
              <img
                src={curElm.image}
                alt=""
                className="product1"
              />
              <div className="info">
                <h4>{curElm.name}</h4>
                <h6>{curElm.description}</h6>
                <h4>{curElm.price}</h4>
              </div>
            </div>
        
          );
        })}
        </div>
      
    </>
  );
};

export default Main;
