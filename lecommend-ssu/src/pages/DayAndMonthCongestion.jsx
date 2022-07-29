import React from "react";

function DayAndMonthCongestion() {
  return (
    <>
      <div className="main ">
        <div className="intro">요일·시간별 혼잡도</div>
        <div className="subIntro">
          이전의 데이터를 바탕으로 원하는 요일에 따른 시간별 혼잡도와 월에 따른
          요일별 혼잡도를 알려줍니다.<br></br>
        </div>
        <select className="month" value={"jan"}>
          <option value="jan">1월</option>
          <option value="feb">2월</option>
          <option value="mar">3월</option>
          <option value="apr">4월</option>
          <option value="may">5월</option>
          <option value="jun">6월</option>
          <option value="jul">7월</option>
          <option value="aug">8월</option>
          <option value="sept">9월</option>
          <option value="oct">10월</option>
          <option value="nov">11월</option>
          <option value="dec">12월</option>
        </select>
        <select className="day" value={"월요일"}>
          <option value="mon">월요일</option>
          <option value="tue">화요일</option>
          <option value="wed">수요일</option>
          <option value="thu">목요일</option>
          <option value="fri">금요일</option>
          <option value="sat">토요일</option>
          <option value="sun">일요일</option>
        </select>
      </div>
    </>
  );
}
export default DayAndMonthCongestion;
