import './NavTab.css';
import {NavLink} from "react-router-dom";

function NavTab({ isMain, onLinkClick }) {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink
          exact
          to={'/'} className={`nav__link`}
          activeClassName={`nav__link_active`}
          onClick={onLinkClick}>
          Главная
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          exact
          to={'/movies'}
          className={`nav__link ${isMain ? 'nav__link_light' : ''}`}
          activeClassName={`nav__link_active`}
          onClick={onLinkClick}>
          Фильмы
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          exact
          to={'/saved-movies'}
          className={`nav__link ${isMain ? 'nav__link_light' : ''}`}
          activeClassName={`nav__link_active`}
          onClick={onLinkClick}>
          Сохранённые фильмы
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTab;