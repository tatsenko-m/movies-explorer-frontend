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
          <h3 className="about-me__name">Михаил</h3>
          <p className="about-me__caption">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__bio">
            Я живу в Москве, закончил факультет менеджмента НИУ ВШЭ. Я люблю
            слушать музыку, а ещё увлекаюсь сноубордом. С 2018 года работал в
            сфере государственных закупок: менеджером по тендерам в компании
            «Европлан», а также сооснователем собственного дела по поставкам
            товаров государству. Недавно начал кодить и решил пройти курс по
            веб-разработке, чтобы реализовать себя в более технологичной сфере,
            которая меня давно привлекала.
          </p>
          <Link
            to="https://github.com/tatsenko-m"
            target="_blank"
            className="about-me__social-link"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
