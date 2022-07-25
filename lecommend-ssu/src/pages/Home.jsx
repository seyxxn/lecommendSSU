import React from "react";
import ButtonContainer from "../components/ButtonContainer";

function Home() {
  return (
    <div className="main">
      <div className="intro">
        숭실대 도서 추천, 혼잡도를 통한 방문 추천 서비스 리코멘슈<br></br>
      </div>
      <div className="subIntro">
        리코멘슈는 'Library'의 'L'과 추천하다의 'recommend'를 합친 합성어로{" "}
        <br></br>
        숭실대학생들만을 위한 서비스입니다.
      </div>
      <ButtonContainer />
    </div>
  );
}
export default Home;
