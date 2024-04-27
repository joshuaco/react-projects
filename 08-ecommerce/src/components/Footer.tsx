import { useFilter } from '../hooks/useFilter';
import './Footer.css';

function Footer() {
  const { state } = useFilter();
  return <footer className="footer">{JSON.stringify(state, null, 2)}</footer>;
}

export default Footer;
