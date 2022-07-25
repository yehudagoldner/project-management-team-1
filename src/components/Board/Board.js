import * as React from "react";
import "./Board.css";
import { RenderCard } from "./RenderData";

const Board = (props) => {
  return (
    <div className="main-board">
      <div className="board-card-container">{RenderCard()}</div>
    </div>
  );
};

export default Board;
