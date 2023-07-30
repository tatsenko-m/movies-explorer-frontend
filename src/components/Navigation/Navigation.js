import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
        {loggedIn ? (
          <>
            <ul className="navigation__links">
              <li className="navigation__item">
                <NavLink to="/movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="/saved-movies" className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Сохраненные фильмы</NavLink>
              </li>
              <li className="navigation__item">
                <AccountLink />
              </li>
            </ul>
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


