import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isFooterVisible =
    location.pathname === '/' || ['/movies', '/saved-movies'].includes(location.pathname);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {isFooterVisible && (
        <footer className="footer">
          <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className="footer__content">
            <nav className="footer__menu">
              <ul className="footer__links">
                <li>
                  <Link to="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</Link>
                </li>
                <li>
                  <Link to="https://github.com/tatsenko-m" target="_blank" className="footer__link">Github</Link>
                </li>
              </ul>
            </nav>
            <p className="footer__copyright">&copy; {currentYear}</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;