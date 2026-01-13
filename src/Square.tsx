export const Square = ({
  value,
  onSquareClick,
  isWinning,
}: {
  value: string;
  onSquareClick: () => void;
  isWinning?: boolean;
}) => {
  return (
    <button
      className={`square ${isWinning ? "winning" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
