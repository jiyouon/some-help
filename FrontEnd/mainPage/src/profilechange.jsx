import React from "react";
import line10 from "./line-10.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="view">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">프로필 변경</div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="div">프로필 및 닉네임 변경</div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-2">사용자닉네임</div>

            <img className="line" alt="Line" src={line10} />
          </div>
        </div>
      </div>
    </div>
  );
};
