import './AccButton.css';
import {Link} from "react-router-dom";

function AccButton({ mixes, isMain }) {
  return (
    <Link to={'./'} className={`acc-button ${mixes || ''} ${isMain ? 'acc-button_light' : ''}`}>
      <p className={`acc-button__text`}>Аккаунт</p>
    </Link>
  );
};

export default AccButton;