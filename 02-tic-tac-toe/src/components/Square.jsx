function Square({ index, updateBoard, isSelected, children }) {
  const handleClick = () => {
    updateBoard(index);
  };

  const className = `square ${isSelected ? "is-selected" : ""}`;

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

export default Square;
