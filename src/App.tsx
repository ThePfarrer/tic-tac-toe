import { useState } from "react";
import { Board } from "./Board";

export default function Game() {
  const [history, setHistory] = useState<string[][]>([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description = move > 0 ? `Go to move #${move}` : `Go to game start`;
    return (
      <li key={move}>
        {currentMove === move ? (
          <p>You are at move #{currentMove}</p>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : [...moves].reverse();

  function toggleSortOrder() {
    setIsAscending(!isAscending);
  }

  return (
    <div className="game">
      <div>
        <button onClick={toggleSortOrder}>
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} countMoves={currentMove} />
      </div>
      <div className="game-info">
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  );
}
