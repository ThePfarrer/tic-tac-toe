import { useState } from "react";

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({
  xIsNext,
  squares,
  countMoves,
  onPlay,
}: {
  xIsNext: boolean;
  squares: string[];
  countMoves: number;
  onPlay: (nextSquares: string[]) => void;
}) {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Game Over: ${winner} won`;
  } else if(countMoves === 9) {
    status = `Game Over: DRAW`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  // const status: string = winner
  //   ? `Game Over: ${winner} won`
  //   : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }, (_, i) => (
        <div className="board-row" key={`row-${i}`}>
          {Array.from({ length: 3 }, (_, j) => (
            <Square
              key={`cell-${i}-${j}`}
              value={squares[i * 3 + j]}
              onSquareClick={() => handleClick(i * 3 + j)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

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

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return;
};
