import React from 'react';
import { Link } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
        {loggedIn ? (
          <>
            <ul className="navigation__links">
              <li>
                <Link to="/movies" className="navigation__link">Фильмы</Link>
              </li>
              <li>
                <Link to="/saved-movies" className="navigation__link">Сохраненные фильмы</Link>
              </li>
            </ul>
            <AccountLink />
          </>
        ) : (
          <>
            <Link to="/signup">Регистрация</Link>
            <Link to="/signin">Войти</Link>
          </>
        )}
    </nav>
  );
};

export default Navigation;


