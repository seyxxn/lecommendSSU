import React, { useState } from "react";
import {
  majorList,
  gradeList,
  byMajorList,
  byGradeList,
  byMajorAndGradeList,
} from "../asserts/recommendList";

function Recommend() {
  const [selectedMajor, setSelectedMajor] = useState("내 전공");
  const [selectedGrade, setSelectedGrade] = useState("내 학번");

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
          학과를 선택하세요<br></br>
          <select
            value={selectedMajor}
            onChange={(item) => handleMajorClick(item.target.value)}
          >
            {majorList.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="content-title">
          학번을 선택하세요<br></br>
          <select
            value={selectedGrade}
            onChange={(item) => handleGradeClick(item.target.value)}
          >
            {gradeList.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
      </div>
      💡학과별 추천 TOP 10
      <div className="recommend">
        {selectedMajor}의 추천 도서 TOP10 <br></br>
        {byMajorList
          .filter((item) => item.major === selectedMajor)
          .map((item) => (
            <span>
              {item.bookList.map((bookName) => (
                <div>{bookName}</div>
              ))}
            </span>
          ))}
      </div>
      💡학번별 추천 TOP 10
      <div className="recommend">
        {selectedGrade}의 추천 도서 TOP10 <br></br>
        {byGradeList
          .filter((item) => item.grade === selectedGrade)
          .map((item) => (
            <span>
              {item.bookList.map((bookName) => (
                <div>{bookName}</div>
              ))}
            </span>
          ))}
      </div>
      💡리코멘슈 pick! 학과·학번별 추천 자료
      <div className="recommend">
        {selectedMajor} {selectedGrade}의 추천 도서 TOP10 <br></br>
        {byMajorAndGradeList
          .filter(
            (item) =>
              item.grade === selectedGrade && item.major === selectedMajor
          )
          .map((item) => (
            <span>
              {item.bookList.map((bookName) => (
                <div>{bookName}</div>
              ))}
            </span>
          ))}
      </div>
    </div>
  );
}
export default Recommend;
