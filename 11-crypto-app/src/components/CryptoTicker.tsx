import { useCryptoStore } from '../store';
import './CryptoTicker.css';

function CryptoTicker() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);

  return (
    <div className='stock-ticker'>
      <ul>
        {cryptoCurrencies.map(
          (crypto) =>
            crypto.RAW && (
              <li
                key={crypto.CoinInfo.Name}
                className={`change ${
                  crypto.RAW.USD.CHANGEPCTHOUR > 0 ? 'positive' : 'negative'
                }`}
              >
                <span className='crypto'>{crypto.CoinInfo.FullName}</span>
                <span className='price'>
                  $ {crypto.RAW?.USD.PRICE.toFixed(2)}
                </span>
                <span>({crypto.RAW.USD.CHANGEPCTHOUR.toFixed(2)} %)</span>
              </li>
            )
        )}
      </ul>

      <ul aria-hidden='true'>
        {cryptoCurrencies.map(
          (crypto) =>
            crypto.RAW && (
              <li
                key={crypto.CoinInfo.Name}
                className={`change ${
                  crypto.RAW.USD.CHANGEPCTHOUR > 0 ? 'positive' : 'negative'
                }`}
              >
                <span className='crypto'>{crypto.CoinInfo.FullName}</span>
                <span className='price'>
                  $ {crypto.RAW?.USD.PRICE.toFixed(2)}
                </span>
                <span>({crypto.RAW.USD.CHANGEPCTHOUR.toFixed(2)} %)</span>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default CryptoTicker;
