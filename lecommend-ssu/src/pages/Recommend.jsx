import React, { useState } from "react";
import {
  majorList,
  gradeList,
  byMajorList,
  byGradeList,
  byMajorAndGradeList,
} from "../asserts/recommendList";

function Recommend() {
  const [selectedMajor, setSelectedMajor] = useState();
  const [selectedGrade, setSelectedGrade] = useState();

  const handleMajorClick = (item) => {
    setSelectedMajor(item);
  };

  const handleGradeClick = (item) => {
    setSelectedGrade(item);
  };

  return (
    <div className="main">
      <div className="intro">도서 추천</div>
      <div className="subIntro">
        학과별 추천 자료와 학번별 추천자료, 학과·학번별 추천 자료를 보여줍니다.
        <br></br>
        🔸학과별 추천 자료 - 도서 Top 10<br></br>
        🔸학번별 추천 자료 - 도서 Top 10<br></br>
        🔸학과·학번별 추천 자료 (리코멘슈 pick! 추천 자료) - 외부 데이터 활용
        <br></br>
      </div>
      <div className="content">
        <div className="content-title">
          🏫 학과를 선택하세요<br></br>
          <select
            value={selectedMajor}
            onChange={(item) => handleMajorClick(item.target.value)}
          >
            <option value="" disabled="" hidden="">
              학과
            </option>
            {majorList.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="content-title">
          ✅ 학번을 선택하세요<br></br>
          <select
            value={selectedGrade}
            onChange={(item) => handleGradeClick(item.target.value)}
          >
            <option value="" disabled="" hidden="">
              학번
            </option>
            {gradeList.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="recommend-top-10-box">
        <div className="recommend-title">📘 학과별 추천 TOP 10</div>
        <div className="recommend-second-title">
          <span>{selectedMajor}</span>의 추천 도서
        </div>
        <div className="recommend-content">
          {byMajorList
            .filter((item) => item.major === selectedMajor)
            .map((item) => (
              <span>
                {item.bookList.map((bookName, index) => (
                  <div>
                    TOP {index + 1} : {bookName}
                  </div>
                ))}
              </span>
            ))}
        </div>
      </div>
      <div className="recommend-top-10-box">
        <div className="recommend-title">📗학번별 추천 TOP 10</div>
        <div className="recommend-second-title">
          <span>{selectedGrade}</span>의 추천 도서
        </div>
        <div className="recommend-content">
          {byGradeList
            .filter((item) => item.grade === selectedGrade)
            .map((item) => (
              <span>
                {item.bookList.map((bookName, index) => (
                  <div>
                    TOP {index + 1} : {bookName}
                  </div>
                ))}
              </span>
            ))}
        </div>
      </div>
      <div className="recommend-top-10-box">
        <div className="recommend-title">
          📙 리코멘슈 pick! 학과·학번별 추천 TOP 10
        </div>

        <div className="recommend-second-title">
          <span>
            {selectedMajor} {selectedGrade}
          </span>
          의 추천 도서
        </div>
        <div className="recommend-content">
          {byMajorAndGradeList
            .filter(
              (item) =>
                item.grade === selectedGrade && item.major === selectedMajor
            )
            .map((item) => (
              <span>
                {item.bookList.map((bookName, index) => (
                  <div className="recommend-book-list">
                    TOP {index + 1} : {bookName}
                  </div>
                ))}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Recommend;
