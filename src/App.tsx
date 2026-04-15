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

function checkDraw(board: (Player | null)[]): boolean {
  console.log(board);
  for (let i = 0; i < board.length; i++) {
    // for (let j = 0; j < board[i]!.length; j++) {
    if (board[i] === null) {
      return false;
    }
    // }
  }
  return true;
}

function App() {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [winnerX, setWinnerX] = useState<number>(0);
  const [winnerO, setWinnerO] = useState<number>(0);
  const [draw, setDraw] = useState<number>(0);
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDisabled(false);
    setCurrentPlayer("X");
  };
  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    console.log(newBoard);
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const calculateWinner_ = calculateWinner(newBoard);
    console.log(calculateWinner_);
    if (calculateWinner_) {
      setDisabled(true);
      console.log(currentPlayer);
      if (currentPlayer === "X") {
        setWinnerX(winnerX + 1);
      } else if (currentPlayer === "O") {
        setWinnerO(winnerO + 1);
      }
      resetGame();
    } else if (checkDraw(newBoard)) {
      setDraw(draw + 1);
      resetGame();
    }
    const player = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(player);
  };
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard scores={{ X: winnerX, O: winnerO, draws: draw }} />
      <Board
        board={board}
        disabled={disabled}
        onCellClick={handleCellClick}
      ></Board>
    </div>
  );
}
export default App;
