import { useState } from "react";
import { TURNS } from "./constants";
import { checkGameOver, checkWinner } from "./logic/board";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";
import confetti from "canvas-confetti";

import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    return JSON.parse(localStorage.getItem("board")) || Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    return localStorage.getItem("turn") || TURNS.X;
  });
  const [winner, setWinner] = useState(() => {
    return localStorage.getItem("winner") || null;
  });

  const updateBoard = (index) => {
    // Check if the board position is taked or there is a winner
    if (board[index] || winner) return;

    // Create a copy of the board state
    const newBoard = [...board];
    // Create a variable to store the NEXT turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    // Fill the position with the current turn symbol
    newBoard[index] = turn;

    // Set the board state with the new board
    setBoard(newBoard);
    // Same with the turn state
    setTurn(newTurn);

    // Check if there is a winner
    const newWinner = checkWinner(newBoard);

    // Save the game
    saveGameToStorage(newBoard, newTurn, newWinner);

    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkGameOver(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && <WinnerModal winner={winner} reset={resetGame} />}
    </main>
  );
}

export default App;
