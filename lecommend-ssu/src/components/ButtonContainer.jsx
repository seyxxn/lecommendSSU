import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function ButtonContainer() {
  return (
    <>
      <div className="buttonContainer">
        <Link
          to="/recommend"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button serviceName="📖 도서 추천 서비스"></Button>
        </Link>
        <Link
          to="/congestion"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Button serviceName="🏫 혼잡도 서비스"></Button>
        </Link>
      </div>
    </>
  );
}
export default ButtonContainer;
