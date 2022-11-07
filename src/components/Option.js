import React from "react";
import fill from "./images/fill.png";
import "./Option.css";

const Option = (props) => {
  return (
    <div className="wrapper">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={props.picPath} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{props.name}</h3>
          <div>
            <p>{props.deal}</p>
          </div>
          <div>
            <p className="meta">{props.expDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
