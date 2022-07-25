import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function ButtonContainer() {
  return (
    <>
      <div className="buttonContainer">
        {/* <Button
          className="button"
          serviceName="도서 추천 서비스 바로가기"
        ></Button> */}
        <Link
          to="/recommend"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button
            className="button"
            serviceName="📖 도서 추천 서비스 바로가기"
          ></Button>
        </Link>
        {/* <Button
          className="button"
          serviceName="혼잡도 서비스 바로가기"
        ></Button> */}
        <Link
          to="/congestion"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button
            className="buttonItem"
            serviceName="🏫 혼잡도 서비스 바로가기"
          ></Button>
        </Link>
      </div>
    </>
  );
}
export default ButtonContainer;
