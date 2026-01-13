import { Square } from "./Square";

export const Board = ({
  xIsNext,
  squares,
  countMoves,
  onPlay,
}: {
  xIsNext: boolean;
  squares: string[];
  countMoves: number;
  onPlay: (nextSquares: string[], location: number) => void;
}) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares, i);
  };

  const winner = calculateWinner(squares);
  let status: string;

  if (winner) {
    status = `Game Over: ${winner} won`;
  } else if (countMoves === 9) {
    status = `Game Over: DRAW`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

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
};

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
