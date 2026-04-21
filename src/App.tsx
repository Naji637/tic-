import { useState } from "react";
import "./App.css";
import ScoreBoard from "./component/ScoreBoard";
import Board from "./component/Board";
import ResultModal from "./component/ResultModal";
type Player = "X" | "O";
type PlayerWin = "X" | "O" | "Draw" ;

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
  const [result, setResult] = useState<PlayerWin>("X");

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDisabled(false);
    setCurrentPlayer("X");
  };
  const endGame = () => {
    resetGame();
    setDraw(0);
    setWinnerX(0);
    setWinnerO(0);
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
        setResult("X");
      } else if (currentPlayer === "O") {
        setWinnerO(winnerO + 1);
        setResult("O");
      }
      // resetGame();
    } else if (checkDraw(newBoard)) {
      setDisabled(true);
      setDraw(draw + 1);
      setResult("Draw");
      // resetGame();
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
      {disabled && (
        <ResultModal
          result={result}
          onContinue={resetGame}
          onFinish={endGame}
        />
      )}
    </div>
  );
}
export default App;
