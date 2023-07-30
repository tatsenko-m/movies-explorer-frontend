import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/header-logo.svg';

const Header = ({ loggedIn }) => {
  const location = useLocation();

  const isHeaderVisible =
    location.pathname === '/' || ['/movies', '/saved-movies', '/profile'].includes(location.pathname);

  return (
    <>
      {isHeaderVisible && (
        <header className={`header${location.pathname === '/' ? ' header_landing' : ''}`}>
          <div className="header__container">
            <Link to="/" className="header__logo-link">
              <img
                className="header__logo"
                src={headerLogo}
                alt="Логотип учебного проекта"
              />
            </Link>
            <Navigation loggedIn={loggedIn} />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
