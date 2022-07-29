import React from "react";
import libraryImg from "../asserts/library.jpg";

function RealTimeCongestion() {
  const congestionDegree = 80;
  return (
    <>
      <div className="main">
        <div className="intro">실시간 혼잡도</div>
        <div className="subIntro">
          현재 도서관의 혼잡도 정도를 알려줍니다.<br></br>
        </div>
        <div className="content">
          <div className="content-title">
            현재 혼잡도는 <span>{congestionDegree}%</span> 입니다.
          </div>
          <progress
            className="progress"
            value={congestionDegree}
            max="100"
          ></progress>
          <img
            className="libImg"
            alt="숭실대 도서관 사진"
            src={libraryImg}
          ></img>
          <div className="content-small">
            사진 출처 : 숭실대학교 캠퍼스
            사진공모전(겨울)_전자정보공학부IT융합_이창범
          </div>
        </div>
      </div>
    </>
  );
}
export default RealTimeCongestion;
