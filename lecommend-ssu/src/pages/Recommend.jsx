import React, { useState } from "react";
import {
  majorList,
  gradeList,
  byMajorList,
  byGradeList,
  byMajorAndGradeList,
} from "../asserts/recommendList";

function Recommend() {
  const [selectedMajor, setSelectedMajor] = useState("컴퓨터학부");
  const [selectedGrade, setSelectedGrade] = useState("20학번");
  const [showLecommend, setShowLecommend] = useState(false);

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
        <br></br>
        🔸학과별 대출 도서 TOP 10 - 해당 학과별 도서 대출 TOP 10 입니다.
        <br></br>
        🔸학번별 대출 도서 TOP 10 - 해당 학번별 도서 대출 TOP 10 입니다.
        <br></br>
        🔸학과·학번별 대출 도서 TOP 10- 해당 학과·학번별 도서 대출 TOP 10
        입니다.
        <br></br>
        <br></br>
        💡리코멘슈 Pick! 추천 자료 - 대출 도서 TOP 10을 바탕으로 관련된 외부
        도서를 추천해줍니다. (출처 : 도서별 상세정보 - 국립중앙도서관 제공)
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
        <div className="recommend-title">📘 학과별 대출 도서 TOP 10</div>
        <div className="recommend-second-title">
          <span>{selectedMajor}</span>의 대출 도서 TOP 10
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
        <div className="recommend-title">📗학번별 대출 도서 TOP 10</div>
        <div className="recommend-second-title">
          <span>{selectedGrade}</span>의 대출 도서 TOP 10
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
        <div className="recommend-title">📙 학과·학번별 대출 도서 TOP 10</div>

        <div className="recommend-second-title">
          <span>
            {selectedMajor} {selectedGrade}
          </span>
          의 대출 도서 TOP 10
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
        <button
          className="lecommendssu-pick-btn"
          onClick={() => setShowLecommend(true)}
        >
          👉 리코멘슈 Pick! 도서 보러가기
        </button>
        {showLecommend && (
          <div>
            <div className="lecommendssu-pick recommend-second-title">
              어떤 책과 관련된 외부 도서를 추천받고 싶은가요?
            </div>
            {/* <select> */}

            {/* </select> */}
            <div className="recommend-content">1. 이런책 </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Recommend;
