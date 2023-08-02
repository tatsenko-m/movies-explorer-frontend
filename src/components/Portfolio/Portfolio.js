import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <nav>
        <ul>
          <li className="portfolio__item">
            <Link to="https://github.com/tatsenko-m/how-to-learn" target="_blank" className="portfolio__link">
              <p className="portfolio__link-text">Статичный сайт</p>
              <div className="portfolio__link-icon"></div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link to="https://github.com/tatsenko-m/russian-travel" target="_blank" className="portfolio__link">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <div className="portfolio__link-icon"></div>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link to="https://github.com/tatsenko-m/react-mesto-api-full-gha" target="_blank" className="portfolio__link">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <div className="portfolio__link-icon"></div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;