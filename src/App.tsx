import { useState } from "react";
import "./App.css";
import ScoreBoard from "./component/ScoreBoard";
import Board from "./component/Board";
type Player = "X" | "O";

function App() {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));

  // useEffect(() => {
  //   console.log(board);
  //   console.log("hai");
  // });
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard scores={{ X: 10, O: 2, draws: 1 }} />
      <Board board={board} disabled={false} onCellClick={() => {}}></Board>
    </div>
  );
}
export default App;
