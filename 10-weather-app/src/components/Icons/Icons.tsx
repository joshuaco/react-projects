import tempDegIcon from '../../assets/temp_deg.svg';
import tempMaxIcon from '../../assets/temp_max.svg';
import tempMinIcon from '../../assets/temp_min.svg';

export function TempIcon() {
  return <img src={tempDegIcon} alt="temp icon" width="32" />;
}

export function TempMaxIcon() {
  return <img src={tempMaxIcon} alt="temp icon" width="32" />;
}

export function TempMinIcon() {
  return <img src={tempMinIcon} alt="temp icon" width="32" />;
}
