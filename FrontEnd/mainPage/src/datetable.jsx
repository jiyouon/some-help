import React from "react";
import line11 from "./line-11.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="view">
        <div className="overlap">
          <div className="rectangle" />

          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="group">
                    <div className="group-wrapper">
                      <div className="div-wrapper">
                        <div className="div">
                          <div className="rectangle-2" />

                          <div className="text-wrapper">12월 December</div>

                          <p className="element">
                            <span className="span">
                              일&nbsp;&nbsp; 월&nbsp;&nbsp; 화&nbsp;&nbsp;
                              수&nbsp;&nbsp; 목&nbsp;&nbsp; 금&nbsp;&nbsp; 토
                              <br /> <br />
                              1&nbsp;&nbsp;&nbsp;&nbsp;
                              2&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;7
                              <br />
                              8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;11&nbsp;&nbsp;
                              12&nbsp;&nbsp;13&nbsp;&nbsp; 14
                              <br />
                              15&nbsp;&nbsp;16&nbsp;&nbsp;
                              17&nbsp;&nbsp;18&nbsp;&nbsp;
                              19&nbsp;&nbsp;20&nbsp;&nbsp;21
                              <br />
                              22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;27&nbsp;&nbsp;28
                              <br />
                              29&nbsp;&nbsp;30&nbsp;&nbsp;31{" "}
                            </span>

                            <span className="text-wrapper-2">&nbsp;</span>

                            <span className="text-wrapper-3">&nbsp;</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img className="line" alt="Line" src={line11} />
                </div>
              </div>

              <div className="view-2" />

              <div className="element-wrapper">
                <div className="element-2">
                  12월 7일
                  <br />
                  <br />
                  -약
                  <br />
                  -약
                </div>
              </div>
            </div>
          </div>

          <div className="view-3">
            <div className="overlap-2">
              <div className="text-wrapper-4">약 스케줄러</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};