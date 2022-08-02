import React, { useState } from "react";

function DayAndMonthCongestion() {
  const [selectedMonth, setSelectedMonth] = useState("1월");
  const [selectedDay, setSelectedDay] = useState("월요일");

  const handleMonthClick = (item) => {
    setSelectedMonth(item);
  };

  const handleDayClick = (item) => {
    setSelectedDay(item);
  };

  const monthCongestionDayList = [
    { value: "1월", congestionDay: "수요일" },
    { value: "2월", congestionDay: "월요일" },
    { value: "3월", congestionDay: "화요일" },
    { value: "4월", congestionDay: "월요일" },
    { value: "5월", congestionDay: "수요일" },
    { value: "6월", congestionDay: "월요일" },
    { value: "7월", congestionDay: "월요일" },
    { value: "8월", congestionDay: "목요일" },
    { value: "9월", congestionDay: "월요일" },
    { value: "10월", congestionDay: "화요일" },
    { value: "11월", congestionDay: "월요일" },
    { value: "12월", congestionDay: "월요일" },
  ];

  const monthList = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  /* 시간 수정 필요 */
  const dayCongestionTimeList = [
    { value: "월요일", congestionTime: "12시-13시" },
    { value: "화요일", congestionTime: "12시-13시" },
    { value: "수요일", congestionTime: "12시-13시" },
    { value: "목요일", congestionTime: "12시-13시" },
    { value: "금요일", congestionTime: "12시-13시" },
    { value: "토요일", congestionTime: "13시-14시" },
    { value: "일요일", congestionTime: "13시-14시" },
  ];

  const dayList = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  return (
    <>
      <div className="main ">
        <div className="intro">요일·시간별 혼잡도</div>
        <div className="subIntro">
          {/* 이전의 데이터를 바탕으로 <br></br> 원하는 요일에 따른 시간별 혼잡도와
          <br></br>
          월에 따른 요일별 혼잡도를 알려줍니다.<br></br> */}
          도서관 출입 데이터에서 방문일시를 활용하여 <br></br>
          입·출입의 횟수가 가장 잦은 요일과 시간을 가장 혼잡하다고 나타냈다.
        </div>
        <div className="content">
          <div className="content-title">
            <select
              value={selectedMonth}
              onChange={(item) => handleMonthClick(item.target.value)}
            >
              {monthList.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            의 요일별 혼잡도
            <div className="day-month-congestion">
              {selectedMonth}의 가장 혼잡한 요일은
              {monthCongestionDayList
                .filter((item) => item.value === selectedMonth)
                .map((item) => (
                  <span> {item.congestionDay}</span>
                ))}{" "}
              입니다.
            </div>
            <select
              value={selectedDay}
              onChange={(item) => handleDayClick(item.target.value)}
            >
              {dayList.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            의 시간별 혼잡도
            <div className="day-month-congestion">
              {selectedDay}의 가장 혼잡한 시간은
              {dayCongestionTimeList
                .filter((item) => item.value === selectedDay)
                .map((item) => (
                  <span> {item.congestionTime}</span>
                ))}{" "}
              입니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DayAndMonthCongestion;
