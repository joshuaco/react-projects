import { useEffect } from 'react';
import { useCryptoStore } from './store';
import CryptoTicker from './components/CryptoTicker';
import SearchForm from './components/SearchForm';
import CryptoDisplay from './components/CryptoDisplay';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);
  const data = useCryptoStore((state) => state.cryptoData);
  const loading = useCryptoStore((state) => state.loading);

  useEffect(() => {
    fetchCryptos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <h1 className="title">
          Crypto <span className="title-span">Market</span>
        </h1>
        <CryptoTicker />
      </header>

      <main className="main">
        <div className="main_content">
          <SearchForm />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          data.PRICE && (
            <div className="main_content">
              <CryptoDisplay />
            </div>
          )
        )}
      </main>
    </>
  );
}

export default App;
