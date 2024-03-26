export const saveGameToStorage = (boardToSave, turn, winner) => {
  localStorage.setItem("board", JSON.stringify(boardToSave));
  localStorage.setItem("turn", turn);
  if (winner) {
    localStorage.setItem("winner", winner);
  }
};

export const resetGameStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
  localStorage.removeItem("winner");
};
