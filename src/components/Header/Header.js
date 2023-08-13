import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, onOpenMenu }) => {
  const location = useLocation();

  const isHeaderVisible =
    location.pathname === '/' || ['/movies', '/saved-movies', '/profile'].includes(location.pathname);

  return (
    <>
      {isHeaderVisible && (
        <header className={`header${location.pathname === '/' ? ' header_landing' : ''}`}>
          <div className="header__container">
            <Logo />
            <Navigation loggedIn={loggedIn} />
            {loggedIn && (
              <button className="header__hamburger-menu-btn" type="button" onClick={onOpenMenu}></button>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
