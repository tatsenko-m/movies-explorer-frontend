import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
        {loggedIn ? (
          <>
            <ul className="navigation__links">
              <li className="navigation__item">
                <Link to="/" className="navigation__link">Главная</Link>
              </li>
              <li className="navigation__item">
                <Link to="/movies" className="navigation__link">Фильмы</Link>
              </li>
              <li className="navigation__item">
                <Link to="/saved-movies" className="navigation__link">Сохраненные фильмы</Link>
              </li>
            </ul>
            <Link to="/profile" className="navigation__account-btn">
              <p className="navigation__account-btn-text">Аккаунт</p>
              <div className="navigation__account-btn-icon"></div>
            </Link>
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


