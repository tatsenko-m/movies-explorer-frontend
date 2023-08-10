import React from "react";
import { NavLink } from "react-router-dom";
import AccountLink from "../AccountLink/AccountLink";

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu${isOpen ? ' hamburger-menu_opened' : ''}`}>
      <div className="hamburger-menu__container">
        <div className="hamburger-menu__menu">
          <button
            className="hamburger-menu__close-button"
            type="button"
            onClick={onClose}
          ></button>
          <nav>
            <ul className="hamburger-menu__links">
              <li className="hamburger-menu__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hamburger-menu__link ${
                      isActive ? "hamburger-menu__link_active" : ""
                    }`
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li className="hamburger-menu__item">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    `hamburger-menu__link ${
                      isActive ? "hamburger-menu__link_active" : ""
                    }`
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="hamburger-menu__item">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    `hamburger-menu__link ${
                      isActive ? "hamburger-menu__link_active" : ""
                    }`
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
              <li className="hamburger-menu__item">
                <AccountLink />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
