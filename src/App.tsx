import { useState } from "react";
import { Board } from "./Board";

type HistoryEntry = {
  squares: string[];
  location?: number;
};

export default function Game() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { squares: Array(9).fill(""), location: undefined },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares: string[], location: number) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((entry, move) => {
    let description = move > 0 ? `Go to move #${move}` : `Go to game start`;
    const row = entry.location !== undefined ? Math.floor(entry.location / 3) : null;
    const col = entry.location !== undefined ? entry.location % 3 : null;
    
    return (
      <li key={move}>
        {currentMove === move ? (
          <p>You are at move #{currentMove}</p>
        ) : (
          <>
            <p>
              <button onClick={() => jumpTo(move)}>{description}</button>{" "}
              {row !== null && col !== null && (
                <><strong>Location:</strong> ({row}, {col})</>
              )}
            </p>
          </>
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
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          countMoves={currentMove}
        />
      </div>
      <div className="game-info">
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  );
}
