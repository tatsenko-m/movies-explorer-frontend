import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        {['/movies', '/saved-movies', '/profile'].includes(window.location.pathname) ? (
          <>
            <li className="navigation__item">
              <Link to="/" className="navigation__link">Главная</Link>
            </li>
            <li className="navigation__item">
              <Link to="/movies" className="navigation__link">Фильмы</Link>
            </li>
            <li className="navigation__item">
              <Link to="/saved-movies" className="navigation__link">Сохраненные фильмы</Link>
            </li>
            <li className="navigation__item">
              <Link to="/profile" className="navigation__link">Аккаунт</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Регистрация</Link>
            </li>
            <li>
              <Link to="/signin">Войти</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

