export default function Board() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="board-row">
          {Array.from({ length: 3 }).map((_, j) => (
            <Square key={i * 3 + j} value={i * 3 + j + 1} />
          ))}
        </div>
      ))}
    </>
  );
}

function Square({ value }: { value: number }) {
  return <button className="square">{value}</button>;
}
