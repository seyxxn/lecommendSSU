import React from "react";

function predictCongestion() {
  return (
    <div className="main ">
      <div className="intro">혼잡도 예측</div>
      <div className="subIntro">
        🔹혼잡도 예측 - 예측 모델을 통해 내일의 가장 혼잡한 시간을 알려줍니다.{" "}
        <br></br>
        도서관이 주로 혼잡한 시간인 13시 ~ 16시 중에서 가장 혼잡한 시간을
        예측합니다.
      </div>
    </div>
  );
}
export default predictCongestion;
