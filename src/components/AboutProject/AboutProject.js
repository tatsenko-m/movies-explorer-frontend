import LandingHeading from '../LandingHeading/LandingHeading';

const AboutProject = () => {
  return (
    <section className="about-project">
      <LandingHeading headingText="О проекте" />
      <div className="about-project__description">
        <h3 className="about-project__subheading">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="about-project__subheading">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__chart">
        <div className="about-project__backend-chart-line">
          <p className="about-project__chart-text">1 неделя</p>
        </div>
        <p className="about-project__chart-caption">Back-end</p>
        <div className="about-project__frontend-chart-line">
          <p className="about-project__chart-text">4 недели</p>
        </div>
        <p className="about-project__chart-caption">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;