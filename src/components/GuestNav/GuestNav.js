import './GuestNav.css';
import {Link} from "react-router-dom";

function GuestNav({ isMain }) {
  return (
    <ul className="guest-nav">
      <li className="guest-nav__item">
        <Link to={'/signup'} className={`guest-nav__reg ${ isMain ? 'guest-nav__reg_light' : ''}`}>Регистрация</Link>
      </li>
      <li className="guest-nav__item">
        <Link to={'/signin'} className={`guest-nav__login`}>Войти</Link>
      </li>
    </ul>
  );
}

export default GuestNav;