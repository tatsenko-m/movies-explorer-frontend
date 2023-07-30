import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
        {loggedIn ? (
          <>
            <ul className="navigation__links">
              <li>
              <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink>
              </li>
              <li>
              <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Сохраненные фильмы</NavLink>
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


