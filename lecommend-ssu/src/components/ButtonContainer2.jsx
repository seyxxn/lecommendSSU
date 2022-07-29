import React from "react";
import { Link } from "react-router-dom";
import Button2 from "../components/Button2";

function ButtonContainer2() {
  return (
    <>
      <div className="buttonContainer">
        <Link
          to="/realtimecongetsion"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button2 className="" serviceName="실시간 혼잡도 확인하기"></Button2>
        </Link>
        <Link
          to="/dayandmonthcongestion"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button2 serviceName="요일·시간별 혼잡도 확인하기"></Button2>
        </Link>
        <Link
          to="/predictCongestion"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button2 className="" serviceName="혼잡도 예측하기"></Button2>
        </Link>
      </div>
    </>
  );
}
export default ButtonContainer2;
