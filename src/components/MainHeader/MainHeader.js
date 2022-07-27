import { useRef, useContext, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";
import "./MainHeader.css";
const MainHeader = () => {
  return (
    <nav className="header-continer">
      <ul>
        <li className="first-li">
          <Link to="">SelectP</Link>
          <PlayArrowIcon />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="last-li">LOGO</div>
    </nav>
  );
};

export default MainHeader;
