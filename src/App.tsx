export default function Board() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="board-row">
          {Array.from({ length: 3 }).map((_, j) => (
            <button key={i * 3 + j} className="square">
              {i * 3 + j + 1}
            </button>
          ))}
        </div>
      ))}
    </>
  );
}
