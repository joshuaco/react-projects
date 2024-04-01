import { WINNING_COMBINATIONS } from "../constants";

export const checkWinner = (board) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const checkGameOver = (boardToCheck) => {
  // Check if board is full and not winner
  return boardToCheck.every((square) => square !== null);
};
