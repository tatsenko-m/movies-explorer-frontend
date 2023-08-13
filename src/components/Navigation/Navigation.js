import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountLink from '../AccountLink/AccountLink';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
      {loggedIn ? (
        <ul className="navigation__links navigation__links_type_auth">
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
      ) : (
        <ul className="navigation__links navigation__links_type_unauth">
          <li className="navigation__item">
            <Link to="/signup" className="navigation__signup-link">Регистрация</Link>
          </li>
          <li className="navigation__item">
            <Link to="/signin" className="navigation__signin-link">Войти</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;


