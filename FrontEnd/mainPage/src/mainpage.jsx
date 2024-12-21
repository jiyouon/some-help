import React from "react";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="view">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="div">
                <div className="view-2" />

                <div className="text-wrapper">사용자닉네임</div>

                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-2">12월 Decemeber</div>

                    <div className="rectangle-2" />

                    <p className="p">
                      일&nbsp;&nbsp;&nbsp;&nbsp; 월&nbsp;&nbsp;&nbsp;&nbsp;
                      화&nbsp;&nbsp;&nbsp;&nbsp; 수&nbsp;&nbsp;&nbsp;&nbsp;
                      목&nbsp;&nbsp;&nbsp;&nbsp; 금&nbsp;&nbsp;&nbsp;&nbsp;토
                    </p>

                    <p className="element">
                      1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;
                      7<br />
                      8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;&nbsp;
                      12&nbsp;&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp; 14
                      <br />
                      15&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;
                      17&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;
                      21
                      <br />
                      22&nbsp;&nbsp; 23&nbsp;&nbsp;&nbsp;&nbsp; 24&nbsp;&nbsp;
                      25&nbsp;&nbsp;&nbsp;&nbsp;26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
                      <br />
                      29&nbsp;&nbsp; 30&nbsp;&nbsp;&nbsp;&nbsp; 31
                    </p>
                  </div>
                </div>

                <div className="text-wrapper-3">사용자닉네임 의 약 정보</div>

                <div className="view-3">
                  <img className="line" alt="Line" src={line1} />

                  <img className="img" alt="Line" src={line2} />

                  <img className="line-2" alt="Line" src={line3} />
                </div>

                <div className="overlap-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-4">수정하기</div>
                  </div>
                </div>

                <div className="view-4">
                  <div className="overlap-2">
                    <div className="text-wrapper-5">약 검색</div>
                  </div>
                </div>

                <div className="view-5">
                  <div className="overlap-2">
                    <div className="text-wrapper-6">약 추천</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-2">
            <div className="overlap-3">
              <div className="text-wrapper-7">약간의도움</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
