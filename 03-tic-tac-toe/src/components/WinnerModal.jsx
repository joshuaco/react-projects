import Square from './Square';

function WinnerModal({ winner, reset }) {
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? 'Empate' : 'Ganó'}</h2>

        {winner && (
          <header className="win">
            <Square>{winner}</Square>
          </header>
        )}

        <footer>
          <button onClick={reset}>Reset Game</button>
        </footer>
      </div>
    </section>
  );
}

export default WinnerModal;
