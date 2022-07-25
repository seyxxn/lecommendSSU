import React from "react";
import ButtonContainer2 from "../components/ButtonContainer2";

function Congestion() {
  return (
    <div className="main ">
      <div className="intro">도서관 혼잡도</div>
      <div className="subIntro">
        🔹실시간 혼잡도 - 현재 도서관의 혼잡도 정도를 알려줍니다.<br></br>
        🔹요일·시간별 혼잡도 - 이전의 데이터를 바탕으로 원하는 요일에 따른
        시간별 혼잡도와 월에 따른 요일별 혼잡도를 알려줍니다.
      </div>
      <ButtonContainer2 />
    </div>
  );
}
export default Congestion;
