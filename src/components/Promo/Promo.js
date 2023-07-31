import React from 'react';
import { Link } from 'react-router-dom';
import promoLogo from '../../images/promo-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <img
          className="promo__logo"
          src={promoLogo}
          alt="Логотип страницы о проекте"
        />
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <nav>
            <Link to="/" className="promo__nav-link">Узнать больше</Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Promo;