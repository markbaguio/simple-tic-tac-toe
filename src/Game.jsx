import { useState } from "react";
import Board from "./board";

function Game() {
  const [history, setHistory] = useState(Array(9).fill(null));
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">{/**TODO */}</div>
    </div>
  );
}

export default Game;
