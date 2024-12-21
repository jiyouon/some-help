import React from "react"
import line4 from "./line-4.svg";
import line4 from "./line-5.svg";
import line4 from "./line-6.svg";
import line4 from "./line-7.svg";
import line4 from "./line-8.svg";
import line4 from "./line-9.svg";
import "./style.css"

export const Box = () => {
    return(
        <div className="box">
            <div className="view">
                <div className="overlap">
                    <div className="rectangle">

                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper">사용자닉네임의 약 정보보</div>

                            <div className="group-wrapper">
                                <div className="oevrlap-group-wrapper">
                                    <div className="div">
                                        <div className="group-2">
                                            <img className="line" alt="Line" src={line4}/>

                                            <img className="img" alt="Line" src={line8}/>

                                            <img className="line-2" alt="Line" src={line9}/>

                                            <img className="line-3" alt="Line" src={line7}/>
                                            <img className="line-4" alt="Line" src={line6}/>
                                            <img className="line-5" alt="Line" src={line5}/>


                                        </div>

                                        <div className="text-wrapper-2">+</div>
                                        <div className="text-wrapper-3">-</div>
                                        <div className="text-wrapper-4">-</div>
                                        <div className="text-wrapper-5">-</div>
                                        <div className="text-wrapper-6">-</div>
                                        <div className="text-wrapper-7">-</div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="div-wrapper">
                            <div className="text-wrapper-8">약 정보 수정정</div>
                        </div>
                    </div>
                    <div className="view-2">
                        <div className="oevrlap-2">
                            <div className="text-wrapper-9">완료</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}