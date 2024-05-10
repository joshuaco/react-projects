import { useCryptoStore } from '../store';
import './CryptoDisplay.css';

function CryptoDisplay() {
  const cryptoData = useCryptoStore((state) => state.cryptoData);

  return (
    <div className="wrapper">
      <img
        src={`https://cryptocompare.com${cryptoData.IMAGEURL}`}
        alt="cryto image"
      />
      <div>
        <h3>El precio es de {cryptoData.PRICE}</h3>
        <div>
          <p>Precio Máximo del día: {cryptoData.HIGHDAY}</p>
          <p>Precio Mínimo del día: {cryptoData.LOWDAY}</p>
        </div>
      </div>
    </div>
  );
}

export default CryptoDisplay;
