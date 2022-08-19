import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";

function App() {
  let [player1, setPlayer1] = useState(true);
  let [player2, setPlayer2] = useState(false);
  let [value, setValue] = useState("");

  

  return (
    <div className="App">
      <div className="boardContainer">
        <div className="board">
          <Board /> 
        </div>
      </div>
    </div>
  );
}

export default App;
