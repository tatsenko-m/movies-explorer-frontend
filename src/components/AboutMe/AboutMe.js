import { Link } from "react-router-dom";
import LandingHeading from "../LandingHeading/LandingHeading";
import studentPhoto from "../../images/student-photo.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <LandingHeading headingText="Студент" />
      <div className="about-me__profile">
        <img className="about-me__photo" src={studentPhoto} alt="Мое фото" />
        <div className="about-me__text">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to="https://github.com/tatsenko-m" target="_blank" className="about-me__social-link">Github</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
