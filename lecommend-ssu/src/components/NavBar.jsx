import React from "react";
import { Link } from "react-router-dom";
import { ImLibrary } from "react-icons/im";
function navBar() {
  return (
    <div className="topBar">
      <div className="logoAndMenu">
        <div className="logo">
          <ImLibrary className="icon" size="30px" color="#02A6CB" />
          <h1 className="title">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#373536",
                cursor: "pointer",
              }}
            >
              Lecommend;SSU
            </Link>
          </h1>
        </div>
        <ul className="menuContainer">
          <li className="menuList">
            <Link
              to="/recommend"
              style={{
                textDecoration: "none",
                color: "#373536",
                cursor: "pointer",
              }}
            >
              도서 추천
            </Link>
          </li>
          <li className="menuList">
            <Link
              to="/congestion"
              style={{
                textDecoration: "none",
                color: "#373536",
                cursor: "pointer",
              }}
            >
              도서관 혼잡도
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default navBar;
