import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");
  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="board-row">
          {Array.from({ length: 3 }).map((_, j) => (
            <Square key={i * 3 + j} />
          ))}
        </div>
      ))}
    </>
  );
}
