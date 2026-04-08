import { useState } from "react";
import "./App.css";
import ScoreBoard from "./component/ScoreBoard";
import Board from "./component/Board";
type Player = "X" | "O";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function calculateWinner(board: (Player | null)[]): boolean | null {
  for (const line of winningLines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    console.log(newBoard);
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const player = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(player);
    const calculateWinner_ = calculateWinner(board);
    if (calculateWinner_) {
      setDisabled(true);
    }
  };
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard scores={{ X: 10, O: 2, draws: 1 }} />
      <Board
        board={board}
        disabled={disabled}
        onCellClick={handleCellClick}
      ></Board>
    </div>
  );
}
export default App;
