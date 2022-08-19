import { useState } from "react";

export function Board(){
    

let [turn, setTurn] = useState("X");
let [squares, setSquares] = useState(Array(9).fill(""));
let [winner, setWinner] = useState("");



type Props = {
  num: number;
};
 function Square({ num }: Props) {
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(num);
      }}
    >
      {squares[num]}
    </button>
  );
}
function checkWinner(squares: string[]) {
  let combinations = 
  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let combo of combinations){
    if(squares[combo[0]] === squares[combo[1]] && squares[combo[1]] === squares[combo[2]]){
      setWinner( squares[combo[0]]);
    }
  }
}

function handleClick(num: number) {
  let newSquares = [...squares];
    if (newSquares[num] !== "") {
       alert("This square is already taken (;");
         return;
    }
  if (turn === "X") {
    newSquares[num] = "X";
    setTurn("O");
  } else {
    newSquares[num] = "O";
    setTurn("X");
  }
  // console.log(newSquares[num]);

  setSquares(newSquares);
  console.log(squares);
  checkWinner(newSquares);
}
    function resetGame(){
      setSquares(Array(9).fill(""));
      setWinner("");
    }

    return (
      <>
        <h1>Tic Tac Toe</h1>
        <h1 className="turn">{turn} turn.</h1>
        <div className="board">
          <div className="rows">
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
          </div>
          <div className="rows">
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
          </div>
          <div className="rows">
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </div>
        </div>
        <h1 className="winner">
          {winner === `` ? "" : `${winner} is the winner`}
        </h1>
        <button
            className="resetButton"
        onClick={() => {
            resetGame();
        }}>Reset Game</button>
      </>
    );
}