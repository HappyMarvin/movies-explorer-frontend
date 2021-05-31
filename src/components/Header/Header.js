import './Header.css';
import Logo from "../Logo/Logo";
import NavTab from "../NavTab/NavTab";
import AccButton from "../AccButton/AccButton";
import GuestNav from "../GuestNav/GuestNav";
import {useEffect, useState} from "react";

function Header({ isMain, loggedIn }) {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMenuOpen () {
    setMenuIsOpen(true)
  }

  function handleMenuClose () {
    setMenuIsOpen(false)
  }

  return (
    <header className="header">
      <Logo mixes={`header__logo`} />
      {loggedIn &&
      <button
        className={`header__burger ${isMain ? 'header__burger_light' : ''}`}
        onClick={handleMenuOpen}
      />}
      <div className={`header__inner 
      ${loggedIn ? 'header__inner_logged' : ''} 
      ${menuIsOpen ? 'header__inner_open' : ''}
      `}>
        {loggedIn ?
          <>
            <button className={`header__close`} onClick={handleMenuClose} />
            <NavTab isMain={isMain} onLinkClick={handleMenuClose}/>
            <AccButton mixes={`header__acc-button`} isMain={isMain}/>
          </>
          :
          <GuestNav isMain={isMain} />
        }
      </div>
    </header>
  );
}

export default Header